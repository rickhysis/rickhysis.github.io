"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import { Blog as BlogType } from "@/data";

interface BlogClientProps {
  blogs: BlogType[];
}

export default function BlogClient({ blogs }: BlogClientProps) {
  const [dark, setDark] = useDarkMode();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", transition: "background 0.25s, color 0.25s" }}>
      <Navbar dark={dark} setDark={setDark} />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>
        <Blog blogs={blogs} />
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
