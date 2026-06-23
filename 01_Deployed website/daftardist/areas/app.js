/* ============================================================
   AREA PAGE — single template, switches between A / B / C
   ============================================================ */

const {
  useState: uS,
  useEffect: uE,
  useMemo: uM
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "currency": "USD",
  "density": "default",
  "darkMode": false,
  "showFAQ": true
} /*EDITMODE-END*/;
function fmtFee(o, ccy) {
  if (ccy === "SAR") return `SAR ${o.feeSar.toLocaleString()}`;
  if (ccy === "AED") return `AED ${o.feeAed.toLocaleString()}`;
  return `USD ${o.feeUsd.toLocaleString()}`;
}
function AreaPage() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [areaId, setAreaId] = uS("A");
  const data = AREA_DATA[areaId];
  uE(() => {
    const r = document.documentElement;
    r.dataset.density = tweaks.density;
    r.dataset.dark = tweaks.darkMode ? "1" : "0";
  }, [tweaks]);
  uE(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [areaId]);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "wordmark"
  }, "Daftar ", /*#__PURE__*/React.createElement("em", null, "Advisory.")), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Practice"), /*#__PURE__*/React.createElement("a", {
    className: "is-here",
    href: "areas.html"
  }, "Areas"), /*#__PURE__*/React.createElement("a", {
    href: "capability-statement.html"
  }, "Capability"), /*#__PURE__*/React.createElement("a", {
    href: "start.html"
  }, "Start")), /*#__PURE__*/React.createElement("a", {
    className: "cta-btn",
    href: "scoping.html"
  }, "Start a scope \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "area-switch",
    role: "tablist",
    "aria-label": "Practice areas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "area-switch-inner"
  }, ALL_AREAS.map(id => /*#__PURE__*/React.createElement("button", {
    key: id,
    type: "button",
    role: "tab",
    "aria-selected": areaId === id,
    className: "area-tab" + (areaId === id ? " is-active" : ""),
    onClick: () => setAreaId(id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "area-tab-num mono"
  }, AREA_DATA[id].label), /*#__PURE__*/React.createElement("span", {
    className: "area-tab-name"
  }, AREA_DATA[id].kicker))))), /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-strip mono"
  }, /*#__PURE__*/React.createElement("span", null, data.label), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "rust"
  }, data.kicker), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, data.markets.join(" · "))), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, data.title.lead, " ", /*#__PURE__*/React.createElement("em", null, data.title.em)), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, data.lede), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat-kicker mono rust"
  }, "\u2014 What this changes"), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat-num"
  }, data.bigStat.num), /*#__PURE__*/React.createElement("div", {
    className: "hero-stat-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-stat-label"
  }, data.bigStat.label))))), /*#__PURE__*/React.createElement("section", {
    className: "block"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "01",
    kicker: "Outcomes",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Three fixed-fee ", /*#__PURE__*/React.createElement("em", null, "outcomes.")),
    lede: "Each is a defined deliverable on a fixed fee. You know what you're getting, when, and what it costs \u2014 before the work begins."
  }), /*#__PURE__*/React.createElement("div", {
    className: "oc-grid"
  }, data.outcomes.map((o, i) => /*#__PURE__*/React.createElement(OutcomeCard, {
    key: o.code,
    o: o,
    ccy: tweaks.currency
  })))), /*#__PURE__*/React.createElement("section", {
    className: "block"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "02",
    kicker: "Decision tree",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, data.decisionTree.title.replace(/[^.]+$/, m => ""), /*#__PURE__*/React.createElement("em", null, data.decisionTree.title.match(/[A-Za-z]+\.$/)?.[0] || "")),
    lede: data.decisionTree.lede
  }), /*#__PURE__*/React.createElement("div", {
    className: "tree"
  }, data.decisionTree.branches.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "tree-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tree-num mono"
  }, "Q / 0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "tree-q"
  }, b.q), /*#__PURE__*/React.createElement("div", {
    className: "tree-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tree-yes"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono rust"
  }, "If yes"), /*#__PURE__*/React.createElement("span", {
    className: "tree-yes-val"
  }, b.yes)), /*#__PURE__*/React.createElement("div", {
    className: "tree-no"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "If no"), /*#__PURE__*/React.createElement("span", {
    className: "tree-no-val"
  }, b.no))))))), /*#__PURE__*/React.createElement("section", {
    className: "block"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "03",
    kicker: "Methodology",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How the work ", /*#__PURE__*/React.createElement("em", null, "moves.")),
    lede: "Four steps. Same on every engagement. The discipline is the deliverable."
  }), /*#__PURE__*/React.createElement("div", {
    className: "meth"
  }, data.methodology.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.num,
    className: "meth-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meth-num mono"
  }, m.num), /*#__PURE__*/React.createElement("h4", {
    className: "meth-title"
  }, m.title), /*#__PURE__*/React.createElement("p", {
    className: "meth-body"
  }, m.body))))), /*#__PURE__*/React.createElement("section", {
    className: "block sample-block"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "04",
    kicker: "Sample deliverable",
    title: data.sampleDeliverable.title,
    lede: data.sampleDeliverable.sub
  }), /*#__PURE__*/React.createElement("div", {
    className: "sample"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sample-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sample-head mono"
  }, /*#__PURE__*/React.createElement("span", null, "DAFTAR \xB7 ADVISORY"), /*#__PURE__*/React.createElement("span", {
    className: "sample-stamp"
  }, "illustrative \xB7 anonymised")), /*#__PURE__*/React.createElement("div", {
    className: "sample-body"
  }, data.sampleDeliverable.lines.map((l, i) => {
    if (l.type === "head") return /*#__PURE__*/React.createElement("h5", {
      key: i,
      className: "s-h"
    }, l.text);
    if (l.type === "kv") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "s-kv"
    }, /*#__PURE__*/React.createElement("span", {
      className: "s-k mono"
    }, l.k), /*#__PURE__*/React.createElement("span", {
      className: "s-v"
    }, l.v));
    if (l.type === "rule") return /*#__PURE__*/React.createElement("hr", {
      key: i,
      className: "s-rule"
    });
    if (l.type === "section") return /*#__PURE__*/React.createElement("h6", {
      key: i,
      className: "s-sec"
    }, l.text);
    if (l.type === "p") return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "s-p"
    }, l.text);
    if (l.type === "list") return /*#__PURE__*/React.createElement("ul", {
      key: i,
      className: "s-list"
    }, l.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
      key: j
    }, /*#__PURE__*/React.createElement("span", {
      className: "dash"
    }, "\u2014"), it)));
    if (l.type === "foot") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "s-foot mono"
    }, l.text);
    return null;
  }))))), tweaks.showFAQ && /*#__PURE__*/React.createElement("section", {
    className: "block"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    num: "05",
    kicker: "Questions",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Things people ", /*#__PURE__*/React.createElement("em", null, "ask.")),
    lede: "Four answers. Honest. Sharp. The kind that survive a sceptical CFO."
  }), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, data.faq.map((f, i) => /*#__PURE__*/React.createElement(FAQItem, {
    key: i,
    q: f.q,
    a: f.a,
    idx: i
  })))), /*#__PURE__*/React.createElement("section", {
    className: "block cta-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-kicker mono rust"
  }, "Next step"), /*#__PURE__*/React.createElement("h2", {
    className: "cta-title"
  }, "Start a ", /*#__PURE__*/React.createElement("em", null, "scope.")), /*#__PURE__*/React.createElement("p", {
    className: "cta-body"
  }, "30-minute scoping call. Free. No obligation. If there's a fit, you'll have a fixed quote within 48 hours, signed by the practitioner. If there isn't, you'll hear that on the call \u2014 and a recommendation for someone better positioned."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "scoping.html"
  }, "Open scoping intake ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "start.html"
  }, "Other ways to start ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "cta-meta mono"
  }, /*#__PURE__*/React.createElement("span", null, "Quote turnaround \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "rust"
  }, "48 hrs")), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Fixed scope. Fixed fee."), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Working file delivered.")))), /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sf-col sf-brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "wordmark sm"
  }, "Daftar ", /*#__PURE__*/React.createElement("em", null, "Advisory.")), /*#__PURE__*/React.createElement("p", {
    className: "sf-tag"
  }, "Rigorous finance, without the ", /*#__PURE__*/React.createElement("em", {
    className: "acc"
  }, "overhead."))), /*#__PURE__*/React.createElement("div", {
    className: "sf-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-h mono"
  }, "\u2014 Practice"), /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, "Overview"), /*#__PURE__*/React.createElement("a", {
    href: "areas.html"
  }, "Areas A \xB7 B \xB7 C"), /*#__PURE__*/React.createElement("a", {
    href: "capability-statement.html"
  }, "Capability statement")), /*#__PURE__*/React.createElement("div", {
    className: "sf-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-h mono"
  }, "\u2014 Engage"), /*#__PURE__*/React.createElement("a", {
    href: "scoping.html"
  }, "Scoping intake"), /*#__PURE__*/React.createElement("a", {
    href: "start.html"
  }, "Five ways to start"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:ahmad@daftaradvisory.com"
  }, "ahmad@daftaradvisory.com")), /*#__PURE__*/React.createElement("div", {
    className: "sf-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sf-h mono"
  }, "\u2014 Markets"), /*#__PURE__*/React.createElement("span", null, "Amman \xB7 Riyadh \xB7 Dubai"), /*#__PURE__*/React.createElement("span", null, "IFRS \xB7 SOCPA \xB7 GAAP"), /*#__PURE__*/React.createElement("span", null, "Fixed scope. Fixed fee."))), /*#__PURE__*/React.createElement("div", {
    className: "sf-strip mono"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Daftar Advisory \xB7 Est. 2026"), /*#__PURE__*/React.createElement("span", null, data.label, " \xB7 ", data.kicker))), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Switch area"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Active area",
    value: areaId,
    onChange: v => setAreaId(v),
    options: [{
      value: "A",
      label: "A · Technical"
    }, {
      value: "B",
      label: "B · Compliance"
    }, {
      value: "C",
      label: "C · Investment"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Display"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Currency",
    value: tweaks.currency,
    onChange: v => setTweak("currency", v),
    options: [{
      value: "USD",
      label: "USD"
    }, {
      value: "SAR",
      label: "SAR"
    }, {
      value: "AED",
      label: "AED"
    }]
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Density",
    value: tweaks.density,
    onChange: v => setTweak("density", v),
    options: [{
      value: "compact",
      label: "Compact"
    }, {
      value: "default",
      label: "Default"
    }, {
      value: "generous",
      label: "Generous"
    }]
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Dark mode",
    value: tweaks.darkMode,
    onChange: v => setTweak("darkMode", v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Show FAQ",
    value: tweaks.showFAQ,
    onChange: v => setTweak("showFAQ", v)
  }))));
}
function OutcomeCard({
  o,
  ccy
}) {
  const [showDeliv, setShowDeliv] = uS(false);
  return /*#__PURE__*/React.createElement("article", {
    className: "oc-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-code mono rust"
  }, o.code), /*#__PURE__*/React.createElement("span", {
    className: "oc-weeks mono"
  }, o.weeks)), /*#__PURE__*/React.createElement("h3", {
    className: "oc-title"
  }, o.title.lead, " ", /*#__PURE__*/React.createElement("em", null, o.title.em)), /*#__PURE__*/React.createElement("p", {
    className: "oc-body"
  }, o.body), /*#__PURE__*/React.createElement("div", {
    className: "oc-fee-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "oc-fee-label mono"
  }, "From"), /*#__PURE__*/React.createElement("div", {
    className: "oc-fee-big"
  }, fmtFee(o, ccy)), /*#__PURE__*/React.createElement("div", {
    className: "oc-fee-sub mono"
  }, "Fixed scope \xB7 Fixed fee \xB7 ", o.weeks)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "oc-deliv-toggle mono",
    onClick: () => setShowDeliv(!showDeliv),
    "aria-expanded": showDeliv
  }, /*#__PURE__*/React.createElement("span", null, showDeliv ? "Hide" : "What's included"), /*#__PURE__*/React.createElement("span", {
    className: "oc-deliv-count"
  }, o.deliverables.length, " items"), /*#__PURE__*/React.createElement("span", {
    className: "oc-deliv-caret"
  }, showDeliv ? "−" : "+")), showDeliv && /*#__PURE__*/React.createElement("ul", {
    className: "oc-deliv"
  }, o.deliverables.map(d => /*#__PURE__*/React.createElement("li", {
    key: d
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash"
  }, "\u2014"), d))), /*#__PURE__*/React.createElement("div", {
    className: "oc-tags"
  }, o.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "chip"
  }, t))));
}
function SectionHead({
  num,
  kicker,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-num mono"
  }, num, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "sec-lede"
  }, lede));
}
function FAQItem({
  q,
  a,
  idx
}) {
  const [open, setOpen] = uS(idx === 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq-item" + (open ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    type: "button",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    className: "faq-num mono"
  }, "0", idx + 1), /*#__PURE__*/React.createElement("span", {
    className: "faq-q-text"
  }, q), /*#__PURE__*/React.createElement("span", {
    className: "faq-toggle mono"
  }, open ? "−" : "+")), open && /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, a));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AreaPage, null));