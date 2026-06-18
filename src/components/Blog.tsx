"use client";

import { useState } from "react";
import Link from "next/link";
import { Blog as BlogType } from "@/data";

interface BlogCardProps {
  blog: BlogType;
}

function FeaturedCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="blog-featured-card"
    >
      <div>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "0.75rem" }}>
          {blog.tag} · {blog.readTime}
        </span>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "var(--text)", lineHeight: 1.3, marginBottom: "0.75rem" }}>
          {blog.title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, marginBottom: "1rem" }}>{blog.excerpt}</p>
        <div style={{ fontSize: 12, color: "var(--text3)", display: "flex", gap: "0.75rem" }}>
          <span>{blog.author}</span><span>·</span><span>{blog.date}</span>
        </div>
      </div>
      <div style={{
        height: 180, borderRadius: 8,
        background: blog.color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 56,
        overflow: "hidden",
      }}>
        {blog.image ? (
          <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          blog.emoji
        )}
      </div>
    </Link>
  );
}

function BlogCard({ blog }: BlogCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/blog/${blog.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)", border: `0.5px solid ${hovered ? "var(--border2)" : "var(--border)"}`,
        borderRadius: 12, overflow: "hidden", cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "border-color 0.2s, transform 0.15s",
        textDecoration: "none",
        color: "inherit",
      }}>
      <div style={{ height: 130, background: blog.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, overflow: "hidden" }}>
        {blog.image ? (
          <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          blog.emoji
        )}
      </div>
      <div style={{ padding: "1rem" }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.4rem" }}>
          {blog.tag} · {blog.readTime}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, marginBottom: "0.4rem" }}>{blog.title}</div>
        <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: "0.6rem" }}>{blog.date}</div>
        <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6, marginBottom: "0.75rem" }}>{blog.excerpt}</div>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)" }}>Baca selengkapnya →</span>
      </div>
    </Link>
  );
}

interface BlogProps {
  blogs: BlogType[];
}

export default function Blog({ blogs }: BlogProps) {
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <section id="blog" style={{ padding: "4rem 0", borderTop: "0.5px solid var(--border)" }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>Tulisan</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Blog</h2>
      <p style={{ fontSize: 14, color: "var(--text3)", marginBottom: "2rem" }}>Pemikiran, tutorial, dan catatan dari perjalanan saya sebagai developer</p>

      {featured && <FeaturedCard blog={featured} />}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
        {rest.map((b) => <BlogCard key={b.id} blog={b} />)}
      </div>
    </section>
  );
}
