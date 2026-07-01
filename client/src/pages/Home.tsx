import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--paper)" }}>
      <Header />
      <main>
        <Hero />
        <Reveal><Services /></Reveal>
        <Reveal><CaseStudies /></Reveal>
        <Reveal><HowIWork /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
