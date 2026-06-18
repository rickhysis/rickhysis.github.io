"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = ["Blog", "Experiences"];

interface NavbarProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.3px", cursor: "pointer" }}>
        <Link href="/" style={{ color: "var(--text)", textDecoration: "none" }}>
          RS.
        </Link>
      </div>

      <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <Link key={l}
            href={`/${l.toLowerCase()}`}
            style={{
              fontSize: 13, fontWeight: 500, cursor: "pointer",
              color: "var(--accent)",
              textDecoration: "none",
              transition: "color 0.15s",
              letterSpacing: "0.02em",
            }}>
            {l}
          </Link>
        ))}
        <button
          onClick={() => setDark(!dark)}
          title="Toggle dark mode"
          style={{
            background: "var(--bg3)", border: "none", cursor: "pointer",
            borderRadius: "50%", width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 15, transition: "background 0.2s",
          }}>
          {dark ? "☾" : "☀"}
        </button>
      </div>
    </nav>
  );
}
