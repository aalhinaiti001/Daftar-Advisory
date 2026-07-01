import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend or email service
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="block" id="contact">
      <div className="wrap">
        <div className="doc-tag">GET IN TOUCH</div>
        <h2>Start a conversation</h2>

        {submitted ? (
          <div
            style={{
              maxWidth: "600px",
              padding: "var(--s4)",
              background: "var(--paper-2)",
              border: "1px solid var(--sage)",
              borderRadius: "var(--r-md)",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, color: "var(--sage)", fontSize: "18px" }}>
              ✓ Message received
            </p>
            <p className="small muted" style={{ margin: "var(--s1) 0 0" }}>
              I'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: "600px", marginTop: "var(--s4)" }}>
            <div style={{ marginBottom: "var(--s3)" }}>
              <label
                htmlFor="name"
                className="eyebrow"
                style={{ marginBottom: "var(--s1)" }}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "var(--s2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-sm)",
                  fontFamily: "var(--body)",
                  fontSize: "16px",
                  backgroundColor: "var(--paper-2)",
                  color: "var(--ink)",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--rust)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
              />
            </div>

            <div style={{ marginBottom: "var(--s3)" }}>
              <label
                htmlFor="email"
                className="eyebrow"
                style={{ marginBottom: "var(--s1)" }}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "var(--s2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-sm)",
                  fontFamily: "var(--body)",
                  fontSize: "16px",
                  backgroundColor: "var(--paper-2)",
                  color: "var(--ink)",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--rust)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
              />
            </div>

            <div style={{ marginBottom: "var(--s3)" }}>
              <label
                htmlFor="company"
                className="eyebrow"
                style={{ marginBottom: "var(--s1)" }}
              >
                Company (optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "var(--s2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-sm)",
                  fontFamily: "var(--body)",
                  fontSize: "16px",
                  backgroundColor: "var(--paper-2)",
                  color: "var(--ink)",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--rust)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
              />
            </div>

            <div style={{ marginBottom: "var(--s4)" }}>
              <label
                htmlFor="message"
                className="eyebrow"
                style={{ marginBottom: "var(--s1)" }}
              >
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "var(--s2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-sm)",
                  fontFamily: "var(--body)",
                  fontSize: "16px",
                  backgroundColor: "var(--paper-2)",
                  color: "var(--ink)",
                  boxSizing: "border-box",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--rust)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
