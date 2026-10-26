"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  SERVICE_ORDER,
  SERVICES,
  FOCUS,
  TIMING,
  EMAIL,
  type ServiceKey,
} from "../../_data/practice";

const DEFAULT_SERVICE: ServiceKey = "statements";
const DEFAULT_TIMING = "quarter";

/* The outline posts to Netlify Forms as "daftar-scope" (declared for the
   build-time bot in public/__forms.html, with these field names). With
   JavaScript the submit is a fetch and the reply shows in place; without it
   the form posts natively and Netlify returns the visitor to /scope?sent=1,
   which the mount effect reads. The mailto route stays as the fallback. */
const FORM_NAME = "daftar-scope";
type SendState = "idle" | "sending" | "sent" | "failed";

function isServiceKey(v: string | null): v is ServiceKey {
  return !!v && (SERVICE_ORDER as string[]).includes(v);
}

export default function ScopeBuilder() {
  const [service, setService] = useState<ServiceKey>(DEFAULT_SERVICE);
  const [focus, setFocus] = useState<string[]>([]);
  const [timing, setTiming] = useState<string>(DEFAULT_TIMING);
  const [send, setSend] = useState<SendState>("idle");

  /* /scope?service=audit lets the service rows on the home page open the
     builder with that line already chosen. Read after mount rather than with
     useSearchParams: that hook opts the route out of prerendering, which on a
     static export would ship /scope as an empty shell. */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("service");
    if (isServiceKey(q)) setService(q);
    if (params.get("sent") === "1") setSend("sent");
  }, []);

  const svc = SERVICES[service];
  const time = TIMING.find((t) => t.key === timing) ?? TIMING[0];

  const included = useMemo(
    () =>
      svc.included.concat(
        focus
          .map((f) => FOCUS.find((x) => x.key === f))
          .filter((x): x is (typeof FOCUS)[number] => Boolean(x))
          .map((x) => x.adds),
      ),
    [svc, focus],
  );

  const outlineText = useMemo(
    () =>
      "Engagement: " +
        svc.label +
        "\n\nOutcome\n" +
        svc.outcome +
        "\n\nIn scope\n" +
        included.map((l) => "- " + l).join("\n") +
        "\n\nNot in scope\n" +
        svc.excluded.map((l) => "- " + l).join("\n") +
        "\n\nDeliverable: " +
        svc.deliverable +
        "\nIndicative run: " +
        time.duration +
        "\nTiming: " +
        time.label +
        "\n",
    [svc, included, time],
  );

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent("Scope outline: " + svc.label);
    return `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(outlineText)}`;
  }, [svc, outlineText]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSend("sending");
    try {
      const body = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setSend(res.ok ? "sent" : "failed");
    } catch {
      setSend("failed");
    }
  };

  const toggleFocus = (key: string) =>
    setFocus((f) => (f.includes(key) ? f.filter((x) => x !== key) : f.concat(key)));

  const reset = () => {
    setService(DEFAULT_SERVICE);
    setFocus([]);
    setTiming(DEFAULT_TIMING);
    setSend("idle");
  };

  return (
    <div className="dft-scope-body">
      <div>
        <div className="dft-q">
          <div className="dft-q-head">
            <code>01</code>
            <h2>What kind of work is it?</h2>
          </div>
          <div className="dft-options">
            {SERVICE_ORDER.map((key, i) => (
              <button
                type="button"
                key={key}
                className="dft-option"
                aria-pressed={service === key}
                onClick={() => setService(key)}
              >
                <span className="dft-option-top">
                  <span className="dft-option-label">{SERVICES[key].label}</span>
                  <span className="dft-option-mark">
                    {service === key ? "Selected" : "0" + (i + 1)}
                  </span>
                </span>
                <span className="dft-option-blurb">{SERVICES[key].blurb}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="dft-q">
          <div className="dft-q-head dft-q-head-tight">
            <code>02</code>
            <h2>What makes it complicated?</h2>
          </div>
          <p className="dft-q-hint">Choose any that apply. Each one changes the scope.</p>
          <div className="dft-chips">
            {FOCUS.map((f) => (
              <button
                type="button"
                key={f.key}
                className="dft-chip"
                aria-pressed={focus.includes(f.key)}
                onClick={() => toggleFocus(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="dft-q">
          <div className="dft-q-head">
            <code>03</code>
            <h2>When does it need to be done?</h2>
          </div>
          <div className="dft-chips">
            {TIMING.map((t) => (
              <button
                type="button"
                key={t.key}
                className="dft-chip"
                aria-pressed={timing === t.key}
                onClick={() => setTiming(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="dft-outline">
        <div className="dft-panel-head">
          <span>Draft outline</span>
          <span>{svc.ref + " / " + time.code}</span>
        </div>
        <div className="dft-outline-body">
          <span className="dft-label">Engagement</span>
          <h3>{svc.label}</h3>
          <p className="dft-outline-outcome">{svc.outcome}</p>

          <span className="dft-label dft-outline-heading">In scope</span>
          <ul className="dft-outline-list">
            {included.map((line) => (
              <li key={line}>
                <span>·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <span className="dft-label dft-outline-heading">Not in scope</span>
          <ul className="dft-outline-list dft-outline-list-out">
            {svc.excluded.map((line) => (
              <li key={line}>
                <span>·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="dft-outline-meta">
            <div>
              <span className="dft-label">You receive</span>
              <b>{svc.deliverable}</b>
            </div>
            <div>
              <span className="dft-label">Indicative run</span>
              <b>{time.duration}</b>
            </div>
          </div>

          <div className="dft-outline-foot">
            {send === "sent" ? (
              <div className="dft-sent" role="status">
                <span className="dft-label">Received</span>
                <p>Thank you. Expect a reply from Ahmad within two working days.</p>
                <button type="button" className="dft-reset" onClick={reset}>Start over</button>
              </div>
            ) : (
              <form
                className="dft-form"
                name={FORM_NAME}
                method="POST"
                action="/scope?sent=1"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={submit}
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <input type="hidden" name="service" value={svc.ref + " " + svc.label} />
                <input type="hidden" name="timing" value={time.label} />
                <input type="hidden" name="message" value={outlineText} />
                <p className="dft-hp" aria-hidden="true">
                  <label>
                    Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <p>{time.next}</p>
                <div className="dft-field">
                  <label htmlFor="s-name">Name</label>
                  <input id="s-name" name="name" required autoComplete="name" />
                </div>
                <div className="dft-field">
                  <label htmlFor="s-email">Work email</label>
                  <input id="s-email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="dft-field">
                  <label htmlFor="s-company">Company</label>
                  <input id="s-company" name="company" autoComplete="organization" />
                </div>
                <button className="dft-btn" type="submit" disabled={send === "sending"}>
                  {send === "sending" ? "Sending" : "Send this outline"}
                </button>
                {send === "failed" && (
                  <p className="dft-form-error" role="alert">
                    That did not send. <a href={mailHref}>Email the outline instead.</a>
                  </p>
                )}
                {send !== "failed" && (
                  <a className="dft-form-alt" href={mailHref}>Or send it by email</a>
                )}
                <button type="button" className="dft-reset" onClick={reset}>Start over</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
