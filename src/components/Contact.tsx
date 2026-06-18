"use client";

import { useState } from "react";
import { socials, Social } from "../data";

import {
  IconGithub,
  IconMedium,
  IconLinkedin,
  IconWhatsapp,
  IconTelegram,
  IconYoutube,
} from "nucleo-social-media";

interface ContactCardProps {
  item: Social;
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
      <path d="M28,6H4A3,3,0,0,0,1,9V23a3,3,0,0,0,3,3H28a3,3,0,0,0,3-3V9A3,3,0,0,0,28,6Zm-1.6,2L16,14.78,5.6,8ZM3,23V9.58l11.85,7.9a2,2,0,0,0,2.3,0L29,9.58V23a1,1,0,0,1-1,1H4A1,1,0,0,1,3,23Z" />
    </svg>
  ),
  GitHub: <IconGithub size={20} />,
  Medium: <IconMedium size={20} />,
  LinkedIn: <IconLinkedin size={20} />,
  WhatsApp: <IconWhatsapp size={20} />,
  Telegram: <IconTelegram size={20} />,
  YouTube: <IconYoutube size={20} />,
};

function ContactCard({ item }: ContactCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: `0.5px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 12, padding: "1.25rem",
        display: "flex", alignItems: "center", gap: "1rem",
        textDecoration: "none",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "border-color 0.2s, transform 0.15s",
      }}>
      <div style={{
        width: 40, height: 40, borderRadius: "50%",
        background: item.bg, display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--text)", flexShrink: 0,
      }}>
        {SOCIAL_ICONS[item.label] || item.emoji}
      </div>
      <div>
        <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 2 }}>{item.label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{item.value}</div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>Connect with Me</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Contact & Social</h2>
      <p style={{ fontSize: 14, color: "var(--text3)", marginBottom: "2rem" }}>Don't hesitate to contact me — always open for collaboration and discussion</p>
      <div className="contact-grid">
        {socials.map((s) => <ContactCard key={s.label} item={s} />)}
      </div>
    </section>
  );
}
