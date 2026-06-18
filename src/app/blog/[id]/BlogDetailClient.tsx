"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Navbar from "@/components/Navbar";
import { Blog } from "@/data";
import { renderMarkdown } from "@/components/renderMarkdown";
import Link from "next/link";

interface BlogDetailClientProps {
  blog: Blog;
}

export default function BlogDetailClient({ blog }: BlogDetailClientProps) {
  const [dark, setDark] = useDarkMode();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", transition: "background 0.25s, color 0.25s" }}>
      <Navbar dark={dark} setDark={setDark} />
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/blog" style={{ fontSize: 13, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
            ← Kembali ke Blog
          </Link>
        </div>

        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
          {blog.tag} · {blog.readTime}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "var(--text)", lineHeight: 1.25, marginBottom: "0.5rem" }}>
          {blog.title}
        </h1>
        <div style={{ fontSize: 12, color: "var(--text3)", display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <span>{blog.author}</span><span>·</span><span>{blog.date}</span>
        </div>
        <div style={{ height: "0.5px", background: "var(--border)", marginBottom: "1.5rem" }} />

        <div dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }} />
      </main>
      <footer style={{ borderTop: "0.5px solid var(--border)", padding: "2rem", marginTop: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text3)" }}>
          <span>© 2025 Rickhy Siswanto</span>
          <span>Made with ♥ in Surabaya</span>
        </div>
      </footer>
    </div>
  );
}
