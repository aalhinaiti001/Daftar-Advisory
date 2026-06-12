// ============================================================
// Daftar Advisory UI Kit — Chrome (topbar + footer)
// ============================================================
const { useState, useEffect, useRef } = React;

// Wordmark — Daftar (ink, upright) + Advisory. (rust, italic). Always the period.
function Wordmark({ onClick, as = 'button' }) {
  const inner = <React.Fragment>Daftar <em>Advisory.</em></React.Fragment>;
  if (as === 'span') return <span className="wordmark">{inner}</span>;
  return <button className="wordmark" onClick={onClick} aria-label="Daftar Advisory — home">{inner}</button>;
}

function Topbar({ view, go }) {
  return (
    <header className="topbar">
      <Wordmark onClick={() => go('home')} />
      <nav aria-label="Primary">
        <button className="navlink" onClick={() => go('home')}>Services</button>
        <button className="navlink" onClick={() => go('home')}>Case Studies</button>
        <button className="navlink" onClick={() => go('home')}>How It Works</button>
        <button className={'navlink' + (view !== 'home' ? ' is-here' : '')} onClick={() => go('research')}>Research</button>
        <a className="ar-link" href="#" onClick={(e) => e.preventDefault()} lang="ar">العربية</a>
      </nav>
      <button className="cta-btn" onClick={() => go('home', 'contact')}>Book a free call</button>
    </header>
  );
}

function SiteFooter({ go }) {
  return (
    <footer className="site-footer">
      <Wordmark as="span" />
      <nav className="footer-links" aria-label="Footer">
        <button onClick={() => go('home')}>Capability statement</button>
        <button onClick={() => go('research')}>Research</button>
        <button onClick={() => go('home', 'contact')}>Start a scoping call</button>
        <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
      </nav>
      <div className="footer-copy">© 2026 · Amman, Jordan</div>
    </footer>
  );
}

// Scroll-reveal hook — fade up, respects reduced-motion
function useReveal(dep) {
  useEffect(() => {
    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (rm) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}

Object.assign(window, { Wordmark, Topbar, SiteFooter, useReveal });
