import type { Metadata } from "next";
import ExperienceSection from "@/components/Experience";

export const metadata: Metadata = {
    title: "Project",
    description: "Pengalaman saya selama membuat project dan pengalaman project terakhir saya",
    openGraph: {
        title: "Project | Rickhy Siswanto",
        description: "Pengalaman saya selama membuat project dan pengalaman project terakhir saya",
    },
};

export const dynamic = 'force-static';

export default function BlogPage() {
    return <ExperienceSection />;
}