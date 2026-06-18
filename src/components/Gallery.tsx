"use client";

import Image from "next/image";
import { galleries, GalleryItem as GalleryItemType } from "../data";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Moments</h2>
      <p style={{ fontSize: 14, color: "var(--text3)", marginBottom: "1.5rem" }}>Some moments that I want to share with you</p>

      <div className="gallery-grid">
        {galleries.map((g, i) => (
          <GalleryCard key={g.id} item={g} tall={i === 0 || i === 5 || i === 9 || i === 14 || i === 17} />
        ))}
      </div>
    </section>
  );
}

interface GalleryCardProps {
  item: GalleryItemType;
  tall: boolean;
}

function GalleryCard({ item, tall }: GalleryCardProps) {
  return (
    <div className={`gallery-card ${tall ? "tall" : "standard"}`}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={`/gallery/${item.id}.jpeg`}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
