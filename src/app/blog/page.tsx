import { getBlogs } from "@/data/blogLoader";
import BlogClient from "./BlogClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Pemikiran, tutorial, dan catatan dari perjalanan saya",
  openGraph: {
    title: "Blog | Rickhy Siswanto",
    description: "Pemikiran, tutorial, dan catatan dari perjalanan saya",
  },
};

export const dynamic = 'force-static';

export default function BlogPage() {
  const blogs = getBlogs();
  return <BlogClient blogs={blogs} />;
}