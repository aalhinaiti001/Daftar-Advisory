"use client";

import { useEffect, useState } from "react";

/* Shows the "received" note after Netlify returns the visitor to /ar?sent=1.
   Client side only because the page itself is static. */
export default function SentNotice() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setSent(new URLSearchParams(window.location.search).get("sent") === "1");
  }, []);
  if (!sent) return null;
  return (
    <div className="dft-sent" role="status">
      <span className="dft-label">وصلتنا</span>
      <p>شكرًا لك. نردّ خلال يومي عمل.</p>
    </div>
  );
}
