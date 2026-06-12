// ============================================================
// Daftar Advisory UI Kit — App shell (view routing)
// ============================================================
const { useState: useS, useEffect: useE, useRef: useR } = React;

function App() {
  const [view, setView] = useS('home');   // 'home' | 'research' | 'reader'
  const [briefId, setBriefId] = useS('001');
  const servicesRef = useR(null);
  const contactRef = useR(null);
  const pendingScroll = useR(null);

  function go(nextView, anchor) {
    pendingScroll.current = anchor || null;
    if (nextView === view && anchor) { scrollTo(anchor); pendingScroll.current = null; }
    else { setView(nextView); window.scrollTo({ top: 0, behavior: 'auto' }); }
  }
  function scrollTo(anchor) {
    const ref = anchor === 'contact' ? contactRef : anchor === 'services' ? servicesRef : null;
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function openBrief(id) { setBriefId(id); setView('reader'); window.scrollTo({ top: 0 }); }

  useE(() => {
    if (pendingScroll.current) {
      const a = pendingScroll.current; pendingScroll.current = null;
      requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(a)));
    }
  }, [view]);

  useReveal(view + briefId);

  return (
    <React.Fragment>
      <Topbar view={view} go={go} />
      <main id="main">
        {view === 'home' && <HomePage go={go} servicesRef={servicesRef} contactRef={contactRef} />}
        {view === 'research' && <BriefList open={openBrief} />}
        {view === 'reader' && <BriefReader id={briefId} back={() => { setView('research'); window.scrollTo({ top: 0 }); }} />}
      </main>
      <SiteFooter go={go} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
