import { getBlogs } from "@/data/blogLoader";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id == params.id);

  if (!blog) {
    return { title: "Not Found" };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: blog.image ? [{ url: blog.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const blogs = getBlogs();
  const blog = blogs.find((b) => b.id == params.id);

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}
