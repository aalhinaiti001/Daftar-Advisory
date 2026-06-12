/* @ds-bundle: {"format":3,"namespace":"DaftarAdvisoryDesignSystem_ca8470","components":[],"sourceHashes":{"ui_kits/website/app.jsx":"49de468df33e","ui_kits/website/chrome.jsx":"ddd81e938dab","ui_kits/website/home.jsx":"ca26ce0089ef","ui_kits/website/research.jsx":"eea55a03d5b6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DaftarAdvisoryDesignSystem_ca8470 = window.DaftarAdvisoryDesignSystem_ca8470 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/app.jsx
try { (() => {
// ============================================================
// Daftar Advisory UI Kit — App shell (view routing)
// ============================================================
const {
  useState: useS,
  useEffect: useE,
  useRef: useR
} = React;
function App() {
  const [view, setView] = useS('home'); // 'home' | 'research' | 'reader'
  const [briefId, setBriefId] = useS('001');
  const servicesRef = useR(null);
  const contactRef = useR(null);
  const pendingScroll = useR(null);
  function go(nextView, anchor) {
    pendingScroll.current = anchor || null;
    if (nextView === view && anchor) {
      scrollTo(anchor);
      pendingScroll.current = null;
    } else {
      setView(nextView);
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  }
  function scrollTo(anchor) {
    const ref = anchor === 'contact' ? contactRef : anchor === 'services' ? servicesRef : null;
    if (ref && ref.current) ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  function openBrief(id) {
    setBriefId(id);
    setView('reader');
    window.scrollTo({
      top: 0
    });
  }
  useE(() => {
    if (pendingScroll.current) {
      const a = pendingScroll.current;
      pendingScroll.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(a)));
    }
  }, [view]);
  useReveal(view + briefId);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Topbar, {
    view: view,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    id: "main"
  }, view === 'home' && /*#__PURE__*/React.createElement(HomePage, {
    go: go,
    servicesRef: servicesRef,
    contactRef: contactRef
  }), view === 'research' && /*#__PURE__*/React.createElement(BriefList, {
    open: openBrief
  }), view === 'reader' && /*#__PURE__*/React.createElement(BriefReader, {
    id: briefId,
    back: () => {
      setView('research');
      window.scrollTo({
        top: 0
      });
    }
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
// ============================================================
// Daftar Advisory UI Kit — Chrome (topbar + footer)
// ============================================================
const {
  useState,
  useEffect,
  useRef
} = React;

// Wordmark — Daftar (ink, upright) + Advisory. (rust, italic). Always the period.
function Wordmark({
  onClick,
  as = 'button'
}) {
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, "Daftar ", /*#__PURE__*/React.createElement("em", null, "Advisory."));
  if (as === 'span') return /*#__PURE__*/React.createElement("span", {
    className: "wordmark"
  }, inner);
  return /*#__PURE__*/React.createElement("button", {
    className: "wordmark",
    onClick: onClick,
    "aria-label": "Daftar Advisory \u2014 home"
  }, inner);
}
function Topbar({
  view,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: () => go('home')
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("button", {
    className: "navlink",
    onClick: () => go('home')
  }, "Services"), /*#__PURE__*/React.createElement("button", {
    className: "navlink",
    onClick: () => go('home')
  }, "Case Studies"), /*#__PURE__*/React.createElement("button", {
    className: "navlink",
    onClick: () => go('home')
  }, "How It Works"), /*#__PURE__*/React.createElement("button", {
    className: 'navlink' + (view !== 'home' ? ' is-here' : ''),
    onClick: () => go('research')
  }, "Research"), /*#__PURE__*/React.createElement("a", {
    className: "ar-link",
    href: "#",
    onClick: e => e.preventDefault(),
    lang: "ar"
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629")), /*#__PURE__*/React.createElement("button", {
    className: "cta-btn",
    onClick: () => go('home', 'contact')
  }, "Book a free call"));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    as: "span"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "footer-links",
    "aria-label": "Footer"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home')
  }, "Capability statement"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('research')
  }, "Research"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home', 'contact')
  }, "Start a scoping call"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy")), /*#__PURE__*/React.createElement("div", {
    className: "footer-copy"
  }, "\xA9 2026 \xB7 Amman, Jordan"));
}

// Scroll-reveal hook — fade up, respects reduced-motion
function useReveal(dep) {
  useEffect(() => {
    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (rm) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}
Object.assign(window, {
  Wordmark,
  Topbar,
  SiteFooter,
  useReveal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
// ============================================================
// Daftar Advisory UI Kit — Homepage sections
// ============================================================

function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, "Independent Financial Advisory \xB7 KSA \xB7 UAE \xB7 Jordan"), /*#__PURE__*/React.createElement("h1", null, "Senior finance judgement,", /*#__PURE__*/React.createElement("br", null), "without the ", /*#__PURE__*/React.createElement("em", null, "overhead.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Daftar Advisory helps founders and CFOs prepare reliable financial statements, audit files, and transaction-ready numbers across KSA, UAE, and Jordan. ", /*#__PURE__*/React.createElement("strong", null, "One senior practitioner does the work and stands behind the number.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => go('home', 'contact')
  }, "Book a free 30-minute call ", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    onClick: () => go('home', 'services')
  }, "See what we do")));
}
function PlainStrip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "plain-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plain-strip-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plain-label"
  }, "In plain English"), /*#__PURE__*/React.createElement("p", {
    className: "plain-text"
  }, "We help founders and CFOs get their numbers ready for audits, investors, banks, boards, and transactions \u2014 without hiring a large advisory firm.")));
}
const TRUST = [{
  num: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("em", null, "8"), " yrs"),
  lbl: /*#__PURE__*/React.createElement(React.Fragment, null, "Big Four trained", /*#__PURE__*/React.createElement("br", null), "PwC \xB7 EY")
}, {
  num: /*#__PURE__*/React.createElement(React.Fragment, null, "SAR ", /*#__PURE__*/React.createElement("em", null, "3B+")),
  lbl: /*#__PURE__*/React.createElement(React.Fragment, null, "Revenue audited", /*#__PURE__*/React.createElement("br", null), "at EY")
}, {
  num: /*#__PURE__*/React.createElement("em", null, "4"),
  lbl: /*#__PURE__*/React.createElement(React.Fragment, null, "Countries active", /*#__PURE__*/React.createElement("br", null), "KSA \xB7 UAE \xB7 JOR \xB7 USA")
}, {
  num: /*#__PURE__*/React.createElement("em", null, "4"),
  lbl: /*#__PURE__*/React.createElement(React.Fragment, null, "Standards we work with", /*#__PURE__*/React.createElement("br", null), "IFRS \xB7 SOCPA \xB7 GAAP \xB7 Yellow Book")
}];
function TrustStrip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "trust-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-strip-inner"
  }, TRUST.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "trust-item reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-num"
  }, t.num), /*#__PURE__*/React.createElement("div", {
    className: "trust-lbl"
  }, t.lbl)))));
}
const WHEN = [['Your first audit is coming up', 'Prepare financial statements and organise audit files'], ['Your auditor is challenging a number', 'Review the accounting treatment and prepare a clear response'], ['You are raising money or selling the business', 'Independently review earnings and working capital'], ['Your board or investor needs confidence in the numbers', 'Prepare a clear, independent technical memo']];
const SERVICES = [{
  tag: 'Technical Finance',
  name: /*#__PURE__*/React.createElement(React.Fragment, null, "Independent Technical ", /*#__PURE__*/React.createElement("em", null, "Review")),
  plain: 'A second opinion before someone important relies on the numbers',
  desc: 'An independent review of your financial statements, accounting choices, or supporting files before they go to your auditor, board, or counterparty.',
  del: 'Technical memo · Marked-up working file · 1 revision pass'
}, {
  tag: 'Technical Finance',
  name: /*#__PURE__*/React.createElement(React.Fragment, null, "IFRS Financial ", /*#__PURE__*/React.createElement("em", null, "Statements")),
  flag: 'Most asked',
  plain: 'Full financial statements built from your trial balance',
  desc: 'Full preparation of IFRS-compliant statements — balance sheet, income statement, cash flow, equity, and notes. Formula-driven so every number is traceable.',
  del: 'Draft statements · Working Excel model · Policy memo'
}, {
  tag: 'Audit Preparation',
  name: /*#__PURE__*/React.createElement(React.Fragment, null, "Audit Readiness ", /*#__PURE__*/React.createElement("em", null, "& Remediation")),
  plain: 'Fix the files before the auditor arrives',
  desc: 'For businesses heading into a first audit or returning after a difficult one. Identify the gaps, fix what can be fixed, organise everything the auditor will need.',
  del: 'Readiness report · Remediation plan · Auditor pack'
}, {
  tag: 'Transaction Support',
  name: /*#__PURE__*/React.createElement(React.Fragment, null, "Quality of ", /*#__PURE__*/React.createElement("em", null, "Earnings")),
  plain: 'Find out what profit is real, recurring, and investor-ready',
  desc: 'An independent analysis of reported earnings for buyers, sellers, or investors. Separates recurring earnings from one-offs and flags anything that changes the number.',
  del: 'QoE memo · Earnings bridge · Working model'
}];
function ServicesSection({
  anchorRef
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "services-wrap",
    ref: anchorRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "services-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Four services. Every one starts with a ", /*#__PURE__*/React.createElement("em", null, "free 30-minute call.")), /*#__PURE__*/React.createElement("p", {
    className: "section-lede"
  }, "These are the four engagements that produce the clearest outcomes \u2014 a written memo, a working file, and a position you can defend."), /*#__PURE__*/React.createElement("div", {
    className: "when-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "when-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "when-col-hd"
  }, "When this happens"), /*#__PURE__*/React.createElement("div", {
    className: "when-col-hd"
  }, "We help with")), WHEN.map((w, i) => /*#__PURE__*/React.createElement("div", {
    className: "when-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "when-situation"
  }, w[0]), /*#__PURE__*/React.createElement("div", {
    className: "when-service"
  }, w[1])))), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "service-card reveal",
    key: i
  }, s.flag && /*#__PURE__*/React.createElement("div", {
    className: "service-hero-flag"
  }, s.flag), /*#__PURE__*/React.createElement("div", {
    className: "service-tag"
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    className: "service-name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "service-plain"
  }, s.plain), /*#__PURE__*/React.createElement("p", {
    className: "service-desc"
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "service-deliverable"
  }, /*#__PURE__*/React.createElement("strong", null, "You receive:"), " ", s.del))))));
}
const WHY = [['01', /*#__PURE__*/React.createElement(React.Fragment, null, "You speak to the person doing the ", /*#__PURE__*/React.createElement("em", null, "work.")), 'The practitioner who takes the scoping call is the same person who builds the statements, writes the memo, and delivers the file. No handoff to a junior team.'], ['02', /*#__PURE__*/React.createElement(React.Fragment, null, "Fixed scope. Fixed fee. No ", /*#__PURE__*/React.createElement("em", null, "surprises.")), 'Every engagement is priced and scoped before work begins — what it covers, what it does not, and what it costs, all in the engagement letter before you commit.'], ['03', /*#__PURE__*/React.createElement(React.Fragment, null, "The working file is ", /*#__PURE__*/React.createElement("em", null, "yours.")), 'Every deliverable ships with the editable working file — formulas intact, assumptions documented, sources cited. No proprietary models. No lock-in.']];
function WhySection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Why Daftar"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Three things that make this practice ", /*#__PURE__*/React.createElement("em", null, "different.")), /*#__PURE__*/React.createElement("p", {
    className: "section-lede"
  }, "No marketing claims. These are the specific ways the work is structured \u2014 and why clients come back for the next engagement."), /*#__PURE__*/React.createElement("div", {
    className: "why-grid"
  }, WHY.map((w, i) => /*#__PURE__*/React.createElement("div", {
    className: "why-card reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-num"
  }, w[0]), /*#__PURE__*/React.createElement("h3", {
    className: "why-title"
  }, w[1]), /*#__PURE__*/React.createElement("p", {
    className: "why-body"
  }, w[2])))));
}
const CASES = [{
  meta: ['KSA Construction Joint Venture', 'SAR 800M revenue'],
  title: 'IFRS 16 lease recomputation across 47 contracts.',
  body: "The client's lease model had understated their right-of-use asset by ~11%, caused by inconsistent discount rates across equipment leases. The full schedule was rebuilt from the original contracts and reconciled to the prior-year audited position.",
  rows: [['Delivered', 'Recomputed lease schedule · Technical memo · Audit response file'], ['Timeline', '3 weeks · fixed fee'], ['Outcome', 'Auditor cleared the position without further adjustment']]
}, {
  meta: ['MENA Healthcare Group', 'SAR 1.2B revenue'],
  title: 'Full financial statements and audit readiness package.',
  body: 'The client was preparing for their first external audit under IFRS after three years of internal-only reporting. Statements were built end-to-end, every policy position documented, and all the documents the auditor would need organised before they arrived.',
  rows: [['Delivered', 'Draft statements · Notes · Policy memo · Auditor document pack'], ['Timeline', '5 weeks · fixed fee'], ['Outcome', 'Audit completed approximately 40% faster than the original estimate']]
}];
function CasesSection() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cases-wrap",
    style: {
      background: 'var(--paper-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Case studies"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "What the work actually ", /*#__PURE__*/React.createElement("em", null, "looks like.")), /*#__PURE__*/React.createElement("p", {
    className: "section-lede"
  }, "Two recent engagements, anonymised. The deliverable and outcome are exactly as they were."), /*#__PURE__*/React.createElement("div", {
    className: "cases-grid"
  }, CASES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "case-card reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-meta"
  }, /*#__PURE__*/React.createElement("span", null, c.meta[0]), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\u25C6"), /*#__PURE__*/React.createElement("span", null, c.meta[1])), /*#__PURE__*/React.createElement("h3", {
    className: "case-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "case-body"
  }, c.body), /*#__PURE__*/React.createElement("div", {
    className: "case-rows"
  }, c.rows.map((r, j) => /*#__PURE__*/React.createElement("div", {
    className: "case-row",
    key: j
  }, /*#__PURE__*/React.createElement("span", {
    className: "case-row-lbl"
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    className: "case-row-val"
  }, r[1])))))))));
}
const STEPS = [['Step 01', 'Scoping call', "A 30-minute call to understand what you need. If the work is a fit, I'll say so. If it isn't, I'll tell you directly and point you somewhere better.", 'Free · same week'], ['Step 02', 'Written proposal', 'A one-page engagement letter stating exactly what the work covers, what it does not cover, the timeline, and the fee. You know everything before you commit.', 'Within 48 hours'], ['Step 03', 'The work', 'Work runs directly, without being handed off. Weekly check-ins with drafts shared as the work progresses — not held until a final reveal.', '1–6 weeks · typical'], ['Step 04', 'Delivery', 'The final deliverable plus the working file — formulas, assumptions, sources all intact. One revision pass is included. Everything is yours to keep.', 'Includes 1 revision']];
function ProcessSection() {
  return /*#__PURE__*/React.createElement("div", {
    className: "process-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Four steps. No hidden costs. No ", /*#__PURE__*/React.createElement("em", null, "surprises.")), /*#__PURE__*/React.createElement("p", {
    className: "section-lede"
  }, "Every engagement follows the same process. You know what happens at each stage before it begins."), /*#__PURE__*/React.createElement("div", {
    className: "steps-grid"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "step reveal",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, s[0]), /*#__PURE__*/React.createElement("div", {
    className: "step-title"
  }, s[1]), /*#__PURE__*/React.createElement("p", {
    className: "step-body"
  }, s[2]), /*#__PURE__*/React.createElement("div", {
    className: "step-timing"
  }, s[3]))))));
}
const METHODS = [['Email', 'ahmad@daftaradvisory.com'], ['Phone', '+962 798 008 835'], ['LinkedIn', 'ahmad-alhinaiti'], ['WhatsApp', '+962 798 008 835']];
function ContactSection({
  anchorRef
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "contact-section",
    ref: anchorRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: '32px'
    }
  }, "Currently accepting engagements"), /*#__PURE__*/React.createElement("h2", {
    className: "contact-title"
  }, "Start with a", /*#__PURE__*/React.createElement("br", null), "30-minute ", /*#__PURE__*/React.createElement("em", null, "call.")), /*#__PURE__*/React.createElement("p", {
    className: "contact-note"
  }, "The scoping call is free and takes 30 minutes. You will get a clear answer about whether the work is a fit \u2014 and if it is, a written quote within 48 hours. If it isn't, I will tell you on the call.")), /*#__PURE__*/React.createElement("div", {
    className: "contact-methods"
  }, METHODS.map((m, i) => /*#__PURE__*/React.createElement("a", {
    className: "contact-method",
    href: "#",
    onClick: e => e.preventDefault(),
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-label"
  }, m[0]), /*#__PURE__*/React.createElement("div", {
    className: "m-value"
  }, m[1]), /*#__PURE__*/React.createElement("div", {
    className: "m-arrow"
  }, "\u2192"))))));
}
function HomePage({
  go,
  servicesRef,
  contactRef
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(PlainStrip, null), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(ServicesSection, {
    anchorRef: servicesRef
  }), /*#__PURE__*/React.createElement(WhySection, null), /*#__PURE__*/React.createElement(CasesSection, null), /*#__PURE__*/React.createElement(ProcessSection, null), /*#__PURE__*/React.createElement(ContactSection, {
    anchorRef: contactRef
  }));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/research.jsx
try { (() => {
// ============================================================
// Daftar Advisory UI Kit — The Daftar (research briefs)
// ============================================================

const BRIEFS = [{
  id: '001',
  topic: 'ZATCA · KSA',
  status: 'Forthcoming · Q2 2026',
  read: '14 min read',
  forthcoming: false,
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "The SAR 375,000 threshold \u2014 what ZATCA Phase 2 Wave 24 asks of Saudi SMEs, and why most are being quietly ", /*#__PURE__*/React.createElement("em", null, "over-sold.")),
  deck: 'Wave 24 goes live on 30 June 2026. The technical requirement is well-defined. The implementation market around it is not. This brief is for the founder asking why the quote on their desk reads SAR 150,000 for what should cost a quarter of that.'
}, {
  id: '002',
  topic: 'UAE CT',
  status: 'In drafting · Q2 2026',
  read: '16 min read',
  forthcoming: true,
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "UAE Corporate Tax \u2014 the first audit ", /*#__PURE__*/React.createElement("em", null, "season,"), " and what went wrong in the September 2025 filings."),
  deck: 'The first FY24 returns are filed. The first auditor reviews are coming back. The pattern that emerged is consistent enough to be useful — and uncomfortable enough to be worth writing down before FY25 closes.'
}, {
  id: '003',
  topic: 'IFRS 16 · KSA',
  status: 'Scheduled · Q3 2026',
  read: '18 min read',
  forthcoming: true,
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "IFRS 16 in Saudi construction JVs \u2014 the five most common recomputation ", /*#__PURE__*/React.createElement("em", null, "errors.")),
  deck: 'Site offices, plant-and-equipment leases, accommodation contracts, and the long-tail of fleet rentals — the IFRS 16 working paper rarely ties. This brief is the field guide to the five errors that produce the variance.'
}, {
  id: '004',
  topic: 'Nomu · CMA',
  status: 'Scheduled · Q3 2026',
  read: '17 min read',
  forthcoming: true,
  title: /*#__PURE__*/React.createElement(React.Fragment, null, "Nomu without Big Four \u2014 a pre-IPO readiness ", /*#__PURE__*/React.createElement("em", null, "playbook"), " for SAR 30\u201380M SMEs."),
  deck: 'Most Saudi SMEs in the Nomu band do not need a Big Four reporting accountant on day one. They need an honest diagnostic six to twelve months earlier — and the readiness work the financial adviser will not do.'
}];
function BriefList({
  open
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "research-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: '28px'
    }
  }, "The Daftar \xB7 Research Briefs"), /*#__PURE__*/React.createElement("h1", null, "Notes from a single", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "practitioner.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A short, irregular series of research briefs. Written for operators and audit committees \u2014 not for tax-alert distribution lists. One take per brief, with the workings underneath.")), /*#__PURE__*/React.createElement("section", {
    className: "briefs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "briefs-label"
  }, /*#__PURE__*/React.createElement("span", null, "Issues"), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, "04 \xB7 in print and forthcoming")), BRIEFS.map(b => /*#__PURE__*/React.createElement("button", {
    className: 'brief reveal' + (b.forthcoming ? ' forthcoming' : ''),
    key: b.id,
    onClick: () => open(b.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "brief-num"
  }, "\u2116 ", b.id), /*#__PURE__*/React.createElement("span", {
    className: "brief-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brief-title"
  }, b.title), /*#__PURE__*/React.createElement("span", {
    className: "brief-deck"
  }, b.deck)), /*#__PURE__*/React.createElement("span", {
    className: "brief-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brief-status"
  }, b.status), /*#__PURE__*/React.createElement("span", {
    className: "brief-topic"
  }, b.topic), /*#__PURE__*/React.createElement("span", null, b.read)), /*#__PURE__*/React.createElement("span", {
    className: "brief-arrow"
  }, "\u2192")))));
}

// Full reader for brief 001 — demonstrates masthead, drop-cap, callout, data table.
function BriefReader({
  id,
  back
}) {
  const b = BRIEFS.find(x => x.id === id) || BRIEFS[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "reader-back"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: back
  }, "\u2190 All briefs")), /*#__PURE__*/React.createElement("div", {
    className: "masthead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pub-num"
  }, "The Daftar \xB7 \u2116 ", b.id), /*#__PURE__*/React.createElement("h1", {
    className: "headline"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "deck"
  }, b.deck), /*#__PURE__*/React.createElement("div", {
    className: "byline"
  }, /*#__PURE__*/React.createElement("div", null, "Author", /*#__PURE__*/React.createElement("strong", null, "Ahmad Al Hinaiti")), /*#__PURE__*/React.createElement("div", null, "Topic", /*#__PURE__*/React.createElement("strong", null, b.topic)), /*#__PURE__*/React.createElement("div", null, "Status", /*#__PURE__*/React.createElement("strong", null, b.status)), /*#__PURE__*/React.createElement("div", null, "Length", /*#__PURE__*/React.createElement("strong", null, b.read)))), /*#__PURE__*/React.createElement("article", {
    className: "brief-article"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "sec-num"
  }, "\xA7 01 \xB7 The threshold"), "What Wave 24 actually requires"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Wave 24 goes live on 30 June 2026. The technical requirement is well-defined; the implementation market around it is not. This brief is for the founder asking why the quote on their desk reads four times what the work should cost."), /*#__PURE__*/React.createElement("p", null, "The obligation itself is narrow. Any taxpayer whose annual revenue crossed ", /*#__PURE__*/React.createElement("strong", null, "SAR 375,000"), " in 2022 or 2023 must integrate their e-invoicing solution with ZATCA's Fatoora platform. The integration is a defined API contract \u2014 not a transformation programme."), /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "callout-label"
  }, "The position"), /*#__PURE__*/React.createElement("p", null, "A clean integration is a defined piece of engineering, not a consulting engagement. The price should reflect that.")), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "sec-num"
  }, "\xA7 02 \xB7 The over-sell"), "Where the quotes come from"), /*#__PURE__*/React.createElement("p", null, "The pattern is consistent across the quotes I've reviewed: a fixed integration requirement is repackaged as an open-ended advisory programme, then priced against the fear of a ZATCA penalty rather than the cost of the work."), /*#__PURE__*/React.createElement("div", {
    className: "data-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Threshold"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "SAR ", /*#__PURE__*/React.createElement("em", null, "375,000"), " annual revenue")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Go-live"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "30 June 2026 \xB7 Wave 24")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Typical quote seen"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "SAR 150,000 \u2014 ", /*#__PURE__*/React.createElement("em", null, "\u22484\xD7 over"))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Defensible range"), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, "SAR 30,000\u201345,000 fixed"))), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "sec-num"
  }, "\xA7 03 \xB7 What to ask for"), "A scope you can defend"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A fixed-fee integration scoped against the API contract, not a retainer."), /*#__PURE__*/React.createElement("li", null, "The middleware configuration documented and handed over \u2014 no lock-in to a vendor portal."), /*#__PURE__*/React.createElement("li", null, "A test-mode clearance walkthrough before go-live, with the working file left in your hands.")), /*#__PURE__*/React.createElement("p", null, "If the quote on your desk doesn't read like this, the gap between it and the defensible range is the over-sell \u2014 and it is worth a 30-minute call before you sign.")));
}
Object.assign(window, {
  BriefList,
  BriefReader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/research.jsx", error: String((e && e.message) || e) }); }

})();
