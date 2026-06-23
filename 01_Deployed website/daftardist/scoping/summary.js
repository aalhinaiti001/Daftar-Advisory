/* ============================================================
   SUMMARY — live scope sidebar + confirmation screen
   ============================================================ */

const {
  useMemo: _useMemo
} = React;
function ScopeSummary({
  state,
  step
}) {
  const market = MARKETS.find(m => m.id === state.market);
  const area = AREAS.find(a => a.id === state.area);
  const outcome = state.outcome ? {
    id: state.outcome,
    ...OUTCOMES[state.outcome]
  } : null;
  const sector = state.sector;
  const revenue = REVENUE_BANDS.find(b => b.id === state.revenue);
  const urgency = URGENCY.find(u => u.id === state.urgency);
  const filledCount = [market, area, outcome, sector, revenue, urgency, state.note].filter(Boolean).length;
  return /*#__PURE__*/React.createElement("aside", {
    className: "summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono rust"
  }, "Scope summary"), /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, filledCount, " / 7 filled")), /*#__PURE__*/React.createElement("div", {
    className: "summary-body"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Market",
    value: market?.name
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Area",
    value: area ? area.title : null
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Outcome",
    value: outcome ? outcome.code : null,
    sub: outcome?.title
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sector",
    value: sector
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Revenue",
    value: revenue?.label
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Urgency",
    value: urgency?.label
  }), state.note && /*#__PURE__*/React.createElement(Row, {
    label: "Note",
    value: /*#__PURE__*/React.createElement("span", {
      className: "summary-note"
    }, "\"", state.note, "\"")
  })), outcome && /*#__PURE__*/React.createElement("div", {
    className: "summary-fee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "Fee anchor"), /*#__PURE__*/React.createElement("div", {
    className: "summary-fee-val"
  }, outcome.retainer ? /*#__PURE__*/React.createElement(React.Fragment, null, "USD ", /*#__PURE__*/React.createElement("em", null, outcome.feeUsd.toLocaleString(), "\u2013", outcome.feeUsdHigh.toLocaleString()), " / mo") : outcome.dayRate ? /*#__PURE__*/React.createElement(React.Fragment, null, "USD ", /*#__PURE__*/React.createElement("em", null, outcome.feeUsd.toLocaleString(), "+"), " / day") : /*#__PURE__*/React.createElement(React.Fragment, null, "From USD ", /*#__PURE__*/React.createElement("em", null, outcome.feeUsd.toLocaleString()))), !outcome.retainer && !outcome.dayRate && /*#__PURE__*/React.createElement("div", {
    className: "summary-fee-note mono"
  }, "\u2248 SAR ", outcome.feeSar.toLocaleString(), " \xB7 AED ", outcome.feeAed.toLocaleString(), /*#__PURE__*/React.createElement("br", null), outcome.weeksLow === outcome.weeksHigh ? `${outcome.weeksLow}` : `${outcome.weeksLow}–${outcome.weeksHigh}`, " weeks \xB7 fixed scope")), outcome && outcome.deliverables && /*#__PURE__*/React.createElement("div", {
    className: "summary-deliv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "What you'll receive"), /*#__PURE__*/React.createElement("ul", null, outcome.deliverables.map(d => /*#__PURE__*/React.createElement("li", {
    key: d
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash"
  }, "\u2014"), d)))), /*#__PURE__*/React.createElement("div", {
    className: "summary-foot mono"
  }, /*#__PURE__*/React.createElement("div", null, "Quote turnaround \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "rust"
  }, "48 hrs")), /*#__PURE__*/React.createElement("div", null, "Practitioner \xB7 ", /*#__PURE__*/React.createElement("span", null, "Ahmad Alhinaiti"))));
}
function Row({
  label,
  value,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sum-row" + (value ? " is-filled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "sum-label mono"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "sum-value"
  }, value || /*#__PURE__*/React.createElement("span", {
    className: "sum-empty"
  }, "\u2014"), sub && /*#__PURE__*/React.createElement("div", {
    className: "sum-sub"
  }, sub)));
}

/* -------------------- CONFIRMATION -------------------- */
function Confirmation({
  state,
  ref$,
  onReset
}) {
  const outcome = state.outcome ? {
    id: state.outcome,
    ...OUTCOMES[state.outcome]
  } : null;
  const market = MARKETS.find(m => m.id === state.market);
  return /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm-mark"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: "64",
    height: "64",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "30",
    fill: "none",
    stroke: "var(--rust)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 33 L29 42 L45 22",
    fill: "none",
    stroke: "var(--rust)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "confirm-kicker mono rust"
  }, "Received \xB7 Ref ", ref$), /*#__PURE__*/React.createElement("h2", {
    className: "confirm-title"
  }, "Thank you, ", state.name?.split(" ")[0] || "—", ".", /*#__PURE__*/React.createElement("br", null), "I'll write back within ", /*#__PURE__*/React.createElement("em", null, "48 hours.")), /*#__PURE__*/React.createElement("p", {
    className: "confirm-lede"
  }, "Your scope landed in my inbox. I'll review it tonight (Amman time) and reply with a fixed quote, a proposed call window, and \u2014 if useful \u2014 a one-page memo on how I'd approach", outcome ? ` ${outcome.code}` : " the work", "."), /*#__PURE__*/React.createElement("div", {
    className: "confirm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm-card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "What happens next")), /*#__PURE__*/React.createElement("ol", {
    className: "confirm-steps"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cs-num mono"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("strong", null, "Within 48 hours"), " \u2014 fixed quote and proposed call window, by email."), /*#__PURE__*/React.createElement("span", {
    className: "cs-time mono"
  }, "\u2264 48 h")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cs-num mono"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("strong", null, "30-min scoping call"), " \u2014 confirm scope, deliverables, and dates. Free, no obligation."), /*#__PURE__*/React.createElement("span", {
    className: "cs-time mono"
  }, "Wk 1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cs-num mono"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("strong", null, "One-page engagement note"), " \u2014 fixed fee, fixed scope, fixed dates. Counter-signed by you."), /*#__PURE__*/React.createElement("span", {
    className: "cs-time mono"
  }, "Wk 1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "cs-num mono"
  }, "04"), /*#__PURE__*/React.createElement("span", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("strong", null, "Kick-off"), " \u2014 work begins, working file shared, weekly checkpoint set."), /*#__PURE__*/React.createElement("span", {
    className: "cs-time mono"
  }, "Wk 2")))), /*#__PURE__*/React.createElement("div", {
    className: "confirm-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "Your reference"), /*#__PURE__*/React.createElement("div", {
    className: "cm-val"
  }, ref$)), /*#__PURE__*/React.createElement("div", {
    className: "cm-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "Reaches"), /*#__PURE__*/React.createElement("div", {
    className: "cm-val"
  }, "ahmad@daftaradvisory.com")), /*#__PURE__*/React.createElement("div", {
    className: "cm-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "Time zone"), /*#__PURE__*/React.createElement("div", {
    className: "cm-val"
  }, "UTC+3 \xB7 Amman")), market && /*#__PURE__*/React.createElement("div", {
    className: "cm-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono"
  }, "Routed for"), /*#__PURE__*/React.createElement("div", {
    className: "cm-val"
  }, market.name))), /*#__PURE__*/React.createElement("div", {
    className: "confirm-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link-back",
    onClick: e => {
      e.preventDefault();
      onReset();
    }
  }, "\u2190 Submit another scope"), /*#__PURE__*/React.createElement("a", {
    href: "https://daftaradvisory.com",
    className: "link-out mono"
  }, "daftaradvisory.com \u2192")));
}
Object.assign(window, {
  ScopeSummary,
  Confirmation
});