import { readFileSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";

const root = resolve(process.argv[2] ?? "out");
const origin = "https://daftaradvisory.com";
const siteHosts = new Set(["daftaradvisory.com", "www.daftaradvisory.com"]);
const signatures = new Map([
  [".pdf", Buffer.from("%PDF-")],
  [".xlsx", Buffer.from([0x50, 0x4b, 0x03, 0x04])],
]);
const errors = [];

function exportedFile(pathname) {
  const path = resolve(root, "." + decodeURIComponent(pathname));
  const candidates = pathname.endsWith("/")
    ? [join(path, "index.html")]
    : [path, path + ".html", join(path, "index.html")];

  return candidates.find((file) =>
    file.startsWith(root + sep) && statSync(file, { throwIfNoEntry: false })?.isFile(),
  );
}

function tags(html, name) {
  const markup = html.replace(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "");
  const tag = new RegExp("<" + name + "\\b((?:\"[^\"]*\"|'[^']*'|[^'\">])*)>", "gi");
  return Array.from(markup.matchAll(tag), ([, attributes]) => {
    const entries = attributes.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g);
    return new Map(Array.from(entries, ([, key, double, single, bare]) => [
      key.toLowerCase(),
      (double ?? single ?? bare ?? "").replace(/&(?:amp|#38|#x26);/gi, "&"),
    ]));
  });
}

// The published _redirects file currently uses exact paths. Follow its local
// destinations for links to aliases, while requiring sitemap pages to exist directly.
const redirects = new Map();
for (const line of readFileSync(join(root, "_redirects"), "utf8").split(/\r?\n/)) {
  const [from, to, status] = line.trim().split(/\s+/);
  if (from.startsWith("/") && to && /^(?:200|301|302|303|307|308)!?$/.test(status)) {
    if (!redirects.has(from)) redirects.set(from, { to, force: status.endsWith("!") });
  }
}

function linkFile(target) {
  const seen = new Set();
  while (siteHosts.has(target.hostname) && !seen.has(target.pathname)) {
    const path = target.pathname;
    seen.add(path);
    const redirect = redirects.get(path);
    const file = exportedFile(path);
    if (!redirect || (file && !redirect.force)) return file;
    target = new URL(redirect.to, target);
  }
}

const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
const urls = Array.from(sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g), ([, url]) => url);
if (!urls.length) errors.push("Sitemap has no page URLs.");

const links = new Map();
const pages = new Set();
for (const url of urls) {
  const page = URL.canParse(url) ? new URL(url) : null;
  if (!page || page.origin !== origin || page.href !== url || page.search || page.hash) {
    errors.push("Invalid sitemap page URL: " + url);
    continue;
  }
  if (pages.has(url)) {
    errors.push("Duplicate sitemap page URL: " + url);
    continue;
  }
  pages.add(url);

  const file = exportedFile(page.pathname);
  if (!file?.endsWith(".html") || redirects.get(page.pathname)?.force) {
    errors.push("Sitemap page has no directly served HTML export: " + page.pathname);
    continue;
  }

  const html = readFileSync(file, "utf8");
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const canonicals = tags(head, "link").filter((tag) =>
    tag.get("rel")?.toLowerCase().split(/\s+/).includes("canonical"),
  );
  const canonical = canonicals[0]?.get("href");
  if (canonicals.length !== 1 || !URL.canParse(canonical) || new URL(canonical).href !== url) {
    errors.push("Expected one canonical for " + page.pathname + " pointing to " + url);
  }

  for (const tag of tags(html, "a")) {
    const href = tag.get("href")?.trim();
    if (!href || href.startsWith("#")) continue;
    if (!URL.canParse(href, page)) {
      errors.push("Invalid hyperlink on " + page.pathname + ": " + href);
      continue;
    }
    const target = new URL(href, page);
    if (!["https:", "http:"].includes(target.protocol) || !siteHosts.has(target.hostname)) continue;
    if (!links.has(target.pathname)) links.set(target.pathname, { target, source: page.pathname });
  }
}

let downloads = 0;
for (const [path, { target, source }] of links) {
  const file = linkFile(target);
  if (!file) {
    errors.push("Missing internal destination " + path + " (linked from " + source + ")");
    continue;
  }
  const signature = signatures.get(extname(path).toLowerCase());
  if (signature) {
    downloads++;
    if (!readFileSync(file).subarray(0, signature.length).equals(signature)) {
      errors.push("Download " + path + " has the wrong file signature (linked from " + source + ")");
    }
  }
}

if (errors.length) {
  for (const error of errors) console.error(error);
  process.exitCode = 1;
} else {
  console.log("Site health passed: " + pages.size + " sitemap pages, " +
    links.size + " internal destinations, " + downloads + " downloads.");
}
