/* ============================================================
   APP — orchestrates steps, validates, mounts on #root
   ============================================================ */

const {
  useState: useS,
  useEffect: useE,
  useMemo: useM,
  useRef: useR
} = React;

// Tweakable defaults
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "default",
  "summarySide": "right",
  "darkMode": false,
  "showProgress": true,
  "accent": "rust"
} /*EDITMODE-END*/;
const ACCENTS = {
  rust: {
    name: "Rust",
    hex: "#A8341F"
  },
  ink: {
    name: "Ink",
    hex: "#1A1814"
  },
  ochre: {
    name: "Ochre",
    hex: "#9B6B1F"
  },
  sage: {
    name: "Sage",
    hex: "#4A6B4A"
  }
};
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [step, setStep] = useS(0); // 0..4 = steps, 5 = confirm
  const [state, setState] = useS({});
  const [errors, setErrors] = useS({});
  const [refCode, setRefCode] = useS(null);
  const set = patch => setState(s => ({
    ...s,
    ...patch
  }));

  // Apply tweaks to document
  useE(() => {
    const root = document.documentElement;
    root.dataset.density = tweaks.density;
    root.dataset.summarySide = tweaks.summarySide;
    root.dataset.dark = tweaks.darkMode ? "1" : "0";
    const accent = ACCENTS[tweaks.accent] || ACCENTS.rust;
    root.style.setProperty("--rust", accent.hex);
  }, [tweaks]);
  const STEPS = [{
    id: "market",
    label: "Market",
    render: () => /*#__PURE__*/React.createElement(StepMarket, {
      state: state,
      set: set
    })
  }, {
    id: "area",
    label: "Area",
    render: () => /*#__PURE__*/React.createElement(StepArea, {
      state: state,
      set: set
    })
  }, {
    id: "outcome",
    label: "Outcome",
    render: () => /*#__PURE__*/React.createElement(StepOutcome, {
      state: state,
      set: set
    })
  }, {
    id: "context",
    label: "Context",
    render: () => /*#__PURE__*/React.createElement(StepContext, {
      state: state,
      set: set
    })
  }, {
    id: "contact",
    label: "Contact",
    render: () => /*#__PURE__*/React.createElement(StepContact, {
      state: state,
      set: set,
      errors: errors
    })
  }];
  const canAdvance = useM(() => {
    if (step === 0) return !!state.market;
    if (step === 1) return !!state.area;
    if (step === 2) return !!state.outcome;
    if (step === 3) return true; // context optional
    if (step === 4) {
      const errs = {};
      if (!state.name || state.name.trim().length < 2) errs.name = "required";
      if (!state.email || !/^\S+@\S+\.\S+$/.test(state.email)) errs.email = "invalid";
      if (!state.consent) errs.consent = "required";
      return Object.keys(errs).length === 0 ? true : errs;
    }
    return true;
  }, [step, state]);
  const onNext = () => {
    if (step === 4) {
      const ok = canAdvance;
      if (ok === true) {
        // submit
        const code = "DA-" + new Date().getFullYear().toString().slice(2) + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
        setRefCode(code);
        setStep(5);
        setErrors({});
      } else {
        setErrors(ok);
      }
    } else if (canAdvance) {
      setStep(s => Math.min(s + 1, 5));
    }
  };
  const onBack = () => setStep(s => Math.max(s - 1, 0));
  const onReset = () => {
    setState({});
    setStep(0);
    setErrors({});
    setRefCode(null);
  };
  const advanceEnabled = canAdvance === true;
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topstrip"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "wordmark"
  }, "Daftar ", /*#__PURE__*/React.createElement("em", null, "Advisory.")), /*#__PURE__*/React.createElement("div", {
    className: "topstrip-meta mono"
  }, /*#__PURE__*/React.createElement("span", null, "Scoping intake"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "rust"
  }, "Est. reply 48 hrs"))), tweaks.showProgress && step < 5 && /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-inner"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    type: "button",
    className: "prog-step" + (i === step ? " is-current" : "") + (i < step ? " is-done" : ""),
    onClick: () => i <= step && setStep(i),
    disabled: i > step
  }, /*#__PURE__*/React.createElement("span", {
    className: "prog-num mono"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "prog-label"
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar-fill",
    style: {
      width: `${(step + (advanceEnabled ? 1 : 0)) / STEPS.length * 100}%`
    }
  }))), /*#__PURE__*/React.createElement("main", {
    className: "main" + (step === 5 ? " is-confirm" : "")
  }, step < 5 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "step-col"
  }, STEPS[step].render(), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: onBack,
    disabled: step === 0
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
    className: "actions-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary" + (advanceEnabled ? "" : " is-disabled"),
    onClick: onNext,
    disabled: !advanceEnabled && step !== 4
  }, step === 4 ? "Submit scope" : "Continue", /*#__PURE__*/React.createElement("span", {
    className: "btn-arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement(ScopeSummary, {
    state: state,
    step: step
  })) : /*#__PURE__*/React.createElement(Confirmation, {
    state: state,
    ref$: refCode,
    onReset: onReset
  })), /*#__PURE__*/React.createElement("footer", {
    className: "bottomstrip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Amman \xB7 Riyadh \xB7 Dubai"), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, /*#__PURE__*/React.createElement("a", {
    href: "start.html"
  }, "daftaradvisory.com / start"))), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
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
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Summary placement",
    value: tweaks.summarySide,
    onChange: v => setTweak("summarySide", v),
    options: [{
      value: "right",
      label: "Right"
    }, {
      value: "left",
      label: "Left"
    }]
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Show progress bar",
    value: tweaks.showProgress,
    onChange: v => setTweak("showProgress", v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Theme"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Dark mode",
    value: tweaks.darkMode,
    onChange: v => setTweak("darkMode", v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Accent",
    value: tweaks.accent,
    onChange: v => setTweak("accent", v),
    options: [{
      value: "rust",
      label: "Rust"
    }, {
      value: "ink",
      label: "Ink"
    }, {
      value: "ochre",
      label: "Ochre"
    }, {
      value: "sage",
      label: "Sage"
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Demo"
  }, /*#__PURE__*/React.createElement(TweakButton, {
    onClick: () => {
      setState({
        market: "ksa",
        area: "A",
        outcome: "A03",
        sector: "Construction & contracting",
        revenue: "100-500",
        urgency: "now",
        note: "First external IFRS audit in three years. Need PBC binder before Big Four arrive in six weeks."
      });
      setStep(4);
    }
  }, "Pre-fill demo data"), /*#__PURE__*/React.createElement(TweakButton, {
    onClick: onReset
  }, "Reset"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));