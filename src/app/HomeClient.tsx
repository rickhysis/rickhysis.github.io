"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";

export default function HomeClient() {
  const [dark, setDark] = useDarkMode();
  const [showIntro, setShowIntro] = useState(true);

  // Disable/enable scroll on body based on intro visibility
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", transition: "background 0.25s, color 0.25s" }}>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      <Navbar dark={dark} setDark={setDark} />
      <main style={{ margin: "0 auto", padding: "0" }}>
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <footer style={{ borderTop: "0.5px solid var(--border)", padding: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text3)" }}>
          <span>© 2025 Rickhy Siswanto</span>
          <span>Made with ♥ in Surabaya</span>
        </div>
      </footer>
    </div>
  );
}

