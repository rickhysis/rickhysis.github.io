"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <section id="about" className="hero-section">
      <Image
        src="/profile.jpeg"
        alt="Rickhy Siswanto"
        width={200}
        height={200}
        style={{
          flexShrink: 0,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <div className="hero-content">
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.6rem" }}>
          Profesional Sleeper · Surabaya, Indonesia
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 6vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15, color: "var(--text)", marginBottom: "1rem", letterSpacing: "-0.5px" }}>
          Rickhy Siswanto
        </h1>
        <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.75, maxWidth: 520, marginBottom: "1.25rem" }}>
          Dynamic and highly dedicated unconsciousness specialist with over 20+ years of extensive, daily experience in advanced circadian rhythm optimization. I don't just sleep; I rigorously stress-test mattress ergonomics and evaluate blanket temperature control systems. Fluent in snoring, expert in power-napping, and passionate about doing absolutely nothing for a solid 8 hours.
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {["Web & Cloud Engineer", "Fake Philosopher", "Art Appreciator", "Music Lover", "Hikking Enthusiast", "Culinary Master"].map((t) => (
            <span key={t} style={{ fontSize: 11, fontWeight: 500, padding: "4px 10px", background: "var(--tag-bg)", color: "var(--tag-text)", borderRadius: 20, letterSpacing: "0.03em" }}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button onClick={() => handleScroll("contact")} style={{ background: "transparent", color: "var(--text)", border: "0.5px solid var(--border2)", borderRadius: 8, padding: "9px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg3)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            Hubungi Saya
          </button>
        </div>
      </div>
    </section>
  );
}
