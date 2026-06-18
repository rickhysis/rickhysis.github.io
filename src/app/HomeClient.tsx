"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function HomeClient() {
  const [dark, setDark] = useDarkMode();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", transition: "background 0.25s, color 0.25s" }}>
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
