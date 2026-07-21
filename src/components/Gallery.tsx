"use client";

import Image from "next/image";
import { galleries, GalleryItem as GalleryItemType } from "../data";
import { swapByMap } from "@/utils/swap";

export default function Gallery() {
  const mobileGalery = swapByMap(galleries, [
    { fromId: 15, toId: 8 },
    { fromId: 8, toId: 23 },
    { fromId: 22, toId: 11 },
    { fromId: 26, toId: 9 },
    { fromId: 25, toId: 12 },
    { fromId: 24, toId: 10 },
    { fromId: 19, toId: 27 },
    { fromId: 10, toId: 9 },
    { fromId: 31, toId: 21 },
    { fromId: 11, toId: 19 },
    { fromId: 11, toId: 19 },
    { fromId: 31, toId: 21 },
    { fromId: 27, toId: 18 },
    { fromId: 19, toId: 28 },
    { fromId: 20, toId: 10 },
    { fromId: 19, toId: 11 },
    { fromId: 30, toId: 28 },
  ])

  return (
    <section id="gallery" className="gallery-section">
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Moments</h2>
      <p style={{ fontSize: 14, color: "var(--text3)", marginBottom: "1.5rem" }}>Some moments that I want to share with you</p>

      {/* Desktop Gallery Grid */}
      <div className="gallery-grid desktop-only">
        {galleries.map((g, i) => (
          <GalleryCard key={`d-${g.id}`} index={i} item={g} tall={i === 0 || i === 5 || i === 9 || i === 14 || i === 17} />
        ))}
      </div>

      {/* Mobile Gallery Grid */}
      <div className="gallery-grid mobile-only">
        {mobileGalery.map((g, i) => (
          <GalleryCard key={`m-${g.id}`} index={i} item={g} tall={i === 0 || i === 5 || i === 7 || i === 19 || i === 22} />
        ))}
      </div>
    </section>
  );
}

interface GalleryCardProps {
  item: GalleryItemType;
  index: number;
  tall: boolean;
}

function GalleryCard({ item, index, tall }: GalleryCardProps) {
  return (
    <div className={`gallery-card ${tall ? "tall" : "standard"}`}>
      <div style={{ position: "relative", width: "100%", height: "100%" }} data-x={index}>
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
