import fs from "fs";
import path from "path";
import { Blog } from "./index";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function getBlogs(): Blog[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  const filenames = fs.readdirSync(blogDirectory);
  const blogs = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // Basic frontmatter parser
      const match = fileContent.match(/^---([\s\S]+?)---([\s\S]*)$/);
      if (!match) {
        throw new Error(`Invalid markdown file format: ${filename}`);
      }

      const frontmatterBlock = match[1];
      const content = match[2].trim();

      const metadata: Record<string, any> = {};
      frontmatterBlock.split("\n").forEach((line) => {
        const parts = line.split(":");
        if (parts.length >= 2) {
          const key = parts[0].trim();
          let val = parts.slice(1).join(":").trim();
          // Remove wrapping quotes if any
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
          } else if (val.startsWith("'") && val.endsWith("'")) {
            val = val.slice(1, -1);
          }
          if (val === "true") metadata[key] = true;
          else if (val === "false") metadata[key] = false;
          else if (!isNaN(Number(val))) metadata[key] = Number(val);
          else metadata[key] = val;
        }
      });

      return {
        id: metadata.id,
        tag: metadata.tag,
        readTime: metadata.readTime,
        title: metadata.title,
        date: metadata.date,
        author: metadata.author,
        excerpt: metadata.excerpt,
        featured: !!metadata.featured,
        emoji: metadata.emoji || undefined,
        image: metadata.image || undefined,
        color: metadata.color,
        content: content,
      } as Blog;
    });

  return blogs.sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const months: Record<string, number> = {
        "Januari": 0, "Februari": 1, "Maret": 2, "April": 3, "Mei": 4, "Juni": 5, 
        "Juli": 6, "Agustus": 7, "September": 8, "Oktober": 9, "November": 10, "Desember": 11
      };
      const parts = (dateStr || "").split(" ");
      if (parts.length === 3) {
        return new Date(parseInt(parts[2], 10), months[parts[1]] || 0, parseInt(parts[0], 10)).getTime();
      }
      return 0;
    };
    return parseDate(b.date) - parseDate(a.date);
  });
}
