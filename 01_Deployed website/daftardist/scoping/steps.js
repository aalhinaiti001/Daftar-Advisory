/* ============================================================
   STEPS — five intake steps for the scoping flow.
   Each is a controlled component receiving { state, set }.
   ============================================================ */

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* -------------------- STEP 01 — MARKET -------------------- */
function StepMarket({
  state,
  set
}) {
  return /*#__PURE__*/React.createElement(StepShell, {
    num: "01 / 05",
    kicker: "Where the work sits",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Which ", /*#__PURE__*/React.createElement("em", null, "market"), " is the work in?"),
    lede: "Each jurisdiction comes with its own filing calendar, language conventions, and on-site cadence. Pick the primary one \u2014 we can layer additional jurisdictions later in the call."
  }, /*#__PURE__*/React.createElement("div", {
    className: "opt-grid opt-grid-2"
  }, MARKETS.map(m => {
    const active = state.market === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      className: "opt-card" + (active ? " is-active" : ""),
      onClick: () => set({
        market: m.id
      }),
      type: "button"
    }, /*#__PURE__*/React.createElement("div", {
      className: "opt-card-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "opt-flag"
    }, m.flag), /*#__PURE__*/React.createElement("span", {
      className: "opt-check",
      "aria-hidden": true
    }, active ? "●" : "○")), /*#__PURE__*/React.createElement("h4", {
      className: "opt-title"
    }, m.name), /*#__PURE__*/React.createElement("p", {
      className: "opt-body"
    }, m.note), /*#__PURE__*/React.createElement("div", {
      className: "opt-foot mono"
    }, m.eta));
  })));
}

/* -------------------- STEP 02 — AREA -------------------- */
function StepArea({
  state,
  set
}) {
  return /*#__PURE__*/React.createElement(StepShell, {
    num: "02 / 05",
    kicker: "What kind of work",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Which ", /*#__PURE__*/React.createElement("em", null, "practice area"), " are you in?"),
    lede: "Three project areas plus one ongoing lane. We'll narrow to a specific outcome on the next step \u2014 this is just the bucket."
  }, /*#__PURE__*/React.createElement("div", {
    className: "opt-list"
  }, AREAS.map(a => {
    const active = state.area === a.id;
    return /*#__PURE__*/React.createElement("button", {
      key: a.id,
      className: "opt-row" + (active ? " is-active" : ""),
      onClick: () => set({
        area: a.id,
        outcome: null
      }),
      type: "button"
    }, /*#__PURE__*/React.createElement("span", {
      className: "opt-row-num mono"
    }, a.label), /*#__PURE__*/React.createElement("span", {
      className: "opt-row-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "opt-row-title"
    }, a.title), /*#__PURE__*/React.createElement("span", {
      className: "opt-row-sub"
    }, a.blurb)), /*#__PURE__*/React.createElement("span", {
      className: "opt-row-arrow mono"
    }, active ? "●" : "→"));
  })));
}

/* -------------------- STEP 03 — OUTCOME -------------------- */
function StepOutcome({
  state,
  set
}) {
  const area = state.area;
  const list = useMemo(() => {
    if (!area) return [];
    const ids = AREAS.find(a => a.id === area)?.outcomes || [];
    return ids.map(id => ({
      id,
      ...OUTCOMES[id]
    }));
  }, [area]);

  // Filter by market — soft signal, not a hard exclusion
  const visible = list.filter(o => !state.market || o.markets.includes(state.market) || state.market === "other");
  const hidden = list.filter(o => state.market && !o.markets.includes(state.market) && state.market !== "other");
  return /*#__PURE__*/React.createElement(StepShell, {
    num: "03 / 05",
    kicker: "Which outcome",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Pick the ", /*#__PURE__*/React.createElement("em", null, "defined"), " deliverable."),
    lede: "Every Daftar engagement is a fixed-fee outcome. If yours sits between two of these, pick the closer one \u2014 we'll combine on the call."
  }, /*#__PURE__*/React.createElement("div", {
    className: "opt-stack"
  }, visible.map(o => {
    const active = state.outcome === o.id;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      className: "oc-pick" + (active ? " is-active" : ""),
      onClick: () => set({
        outcome: o.id
      }),
      type: "button"
    }, /*#__PURE__*/React.createElement("div", {
      className: "oc-pick-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "oc-pick-code mono"
    }, o.code), /*#__PURE__*/React.createElement("span", {
      className: "oc-pick-fee mono"
    }, o.retainer ? `USD ${o.feeUsd.toLocaleString()}–${o.feeUsdHigh.toLocaleString()} / mo` : o.dayRate ? `Day rate · USD ${o.feeUsd.toLocaleString()}+` : `From USD ${o.feeUsd.toLocaleString()} · ${o.weeksLow === o.weeksHigh ? `${o.weeksLow}` : `${o.weeksLow}–${o.weeksHigh}`} wks`)), /*#__PURE__*/React.createElement("div", {
      className: "oc-pick-title"
    }, o.title), /*#__PURE__*/React.createElement("p", {
      className: "oc-pick-body"
    }, o.body), /*#__PURE__*/React.createElement("div", {
      className: "oc-pick-tags"
    }, o.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "chip"
    }, t))));
  }), hidden.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "oc-hidden mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "oc-hidden-rule"
  }), hidden.length, " outcome", hidden.length > 1 ? "s" : "", " not available in ", MARKETS.find(m => m.id === state.market)?.name)));
}

/* -------------------- STEP 04 — CONTEXT -------------------- */
function StepContext({
  state,
  set
}) {
  return /*#__PURE__*/React.createElement(StepShell, {
    num: "04 / 05",
    kicker: "A little context",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Help me ", /*#__PURE__*/React.createElement("em", null, "scope"), " the call."),
    lede: "Three quick questions. None of this is required, but every field shortens the call by about five minutes."
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctx-block"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ctx-label mono"
  }, "Sector"), /*#__PURE__*/React.createElement("div", {
    className: "chip-grid"
  }, SECTORS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    className: "chip-btn" + (state.sector === s ? " is-active" : ""),
    onClick: () => set({
      sector: state.sector === s ? null : s
    })
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "ctx-block"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ctx-label mono"
  }, "Annual revenue"), /*#__PURE__*/React.createElement("div", {
    className: "band-grid"
  }, REVENUE_BANDS.map(b => /*#__PURE__*/React.createElement("button", {
    key: b.id,
    type: "button",
    className: "band-btn" + (state.revenue === b.id ? " is-active" : ""),
    onClick: () => set({
      revenue: b.id
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "band-label"
  }, b.label), /*#__PURE__*/React.createElement("span", {
    className: "band-note"
  }, b.note))))), /*#__PURE__*/React.createElement("div", {
    className: "ctx-block"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ctx-label mono"
  }, "When does this need to land?"), /*#__PURE__*/React.createElement("div", {
    className: "band-grid band-grid-4"
  }, URGENCY.map(u => /*#__PURE__*/React.createElement("button", {
    key: u.id,
    type: "button",
    className: "band-btn" + (state.urgency === u.id ? " is-active" : ""),
    onClick: () => set({
      urgency: u.id
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "band-label"
  }, u.label), /*#__PURE__*/React.createElement("span", {
    className: "band-note"
  }, u.note))))), /*#__PURE__*/React.createElement("div", {
    className: "ctx-block"
  }, /*#__PURE__*/React.createElement("label", {
    className: "ctx-label mono",
    htmlFor: "ctx-note"
  }, "In a sentence \u2014 what's the actual problem?"), /*#__PURE__*/React.createElement("textarea", {
    id: "ctx-note",
    className: "ctx-textarea",
    rows: 3,
    maxLength: 400,
    value: state.note || "",
    onChange: e => set({
      note: e.target.value
    }),
    placeholder: "e.g. Auditor flagged our IFRS 16 lease schedule. Need a defensible recomputation before year-end review."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ctx-count mono"
  }, (state.note || "").length, " / 400")));
}

/* -------------------- STEP 05 — CONTACT -------------------- */
function StepContact({
  state,
  set,
  errors
}) {
  return /*#__PURE__*/React.createElement(StepShell, {
    num: "05 / 05",
    kicker: "How to reach you",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "One ", /*#__PURE__*/React.createElement("em", null, "practitioner."), " Direct reply."),
    lede: "No CRM auto-sequence, no SDR follow-up. You'll get a fixed quote within 48 hours, signed by Ahmad."
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    required: true,
    error: errors.name
  }, /*#__PURE__*/React.createElement("input", {
    className: "text-input",
    type: "text",
    value: state.name || "",
    onChange: e => set({
      name: e.target.value
    }),
    placeholder: "Layla Khoury"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Role",
    required: false
  }, /*#__PURE__*/React.createElement("input", {
    className: "text-input",
    type: "text",
    value: state.role || "",
    onChange: e => set({
      role: e.target.value
    }),
    placeholder: "CFO \xB7 Group Controller \xB7 Founder"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    required: false
  }, /*#__PURE__*/React.createElement("input", {
    className: "text-input",
    type: "text",
    value: state.company || "",
    onChange: e => set({
      company: e.target.value
    }),
    placeholder: "Khoury Holding Co."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    required: true,
    error: errors.email
  }, /*#__PURE__*/React.createElement("input", {
    className: "text-input",
    type: "email",
    value: state.email || "",
    onChange: e => set({
      email: e.target.value
    }),
    placeholder: "layla@khoury-holding.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp (optional)",
    required: false,
    hint: "Fastest reply"
  }, /*#__PURE__*/React.createElement("input", {
    className: "text-input",
    type: "tel",
    value: state.phone || "",
    onChange: e => set({
      phone: e.target.value
    }),
    placeholder: "+962 7 9800 8835"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred call window",
    required: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "seg"
  }, ["Morning AST", "Afternoon AST", "Evening AST", "Async only"].map(w => /*#__PURE__*/React.createElement("button", {
    key: w,
    type: "button",
    className: "seg-btn" + (state.window === w ? " is-active" : ""),
    onClick: () => set({
      window: w
    })
  }, w))))), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!state.consent,
    onChange: e => set({
      consent: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", null, "I understand this is a ", /*#__PURE__*/React.createElement("em", null, "scoping conversation"), ", not an engagement. A fixed quote will follow within 48 hours.")));
}

/* -------------------- SHELL + FIELD -------------------- */
function StepShell({
  num,
  kicker,
  title,
  lede,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num mono"
  }, num), /*#__PURE__*/React.createElement("div", {
    className: "step-kicker mono rust"
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    className: "step-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "step-lede"
  }, lede)), /*#__PURE__*/React.createElement("div", {
    className: "step-body"
  }, children));
}
function Field({
  label,
  required,
  error,
  hint,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "field" + (error ? " has-error" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "field-label mono"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "field-req"
  }, " \xB7 required"), hint && !error && /*#__PURE__*/React.createElement("span", {
    className: "field-hint"
  }, " \xB7 ", hint), error && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, " \xB7 ", error)), children);
}
Object.assign(window, {
  StepMarket,
  StepArea,
  StepOutcome,
  StepContext,
  StepContact,
  StepShell,
  Field
});