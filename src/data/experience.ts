export interface MiniProject {
    id: string;
    title: string;
    image: string;
}

export interface Experience {
    id: string;
    company: string;
    date: string;
    description: string;
    projects?: MiniProject[];
}

export const experienceData: Experience[] = [
    {
        id: "1",
        company: "Triv",
        date: "Feb 2026 – Present",
        description:
            "Oversee end-to-end development of crypto-asset transaction platforms and trading portals, bridging technical execution and stakeholder management.",
        projects: [
            {
                id: "triv-1",
                title: "Triv App",
                image: "/projects/triv_1.jpeg",
            },
            {
                id: "triv-2",
                title: "Triv Dashboard",
                image: "/projects/triv_2.jpeg",
            },
            {
                id: "triv-3",
                title: "Triv Trading Platform",
                image: "/projects/triv_3.jpeg",
            },
            {
                id: "triv-4",
                title: "Triv Menu",
                image: "/projects/triv_4.jpeg",
            }
        ],
    },
    {
        id: "2",
        company: "Sinamedic",
        date: "Mar 2026 – Present",
        description:
            "Designed and developed medical dashboard systems and electronic medical records (EMR) portals to improve clinic workflows.",
        projects: [
            {
                id: "sinamedic-1",
                title: "Sinamedic Dashboard",
                image: "/projects/sinamedic-1.png",
            },
            {
                id: "sinamedic-2",
                title: "Sinamedic Doctor Portal",
                image: "/projects/sinamedic-2.png",
            },
        ],
    },
    {
        id: "3",
        company: "Akusehat ai",
        date: "Jul 2024 – Aug 2025",
        description:
            "Led the development of AI-driven healthcare features, integrating computer vision and machine learning to enhance user diagnostics and wellness monitoring.",
        projects: [
            {
                id: "akusehat-1",
                title: "Akusehat AI Dashboard",
                image: "/projects/akusehat_1.jpeg",
            },
            {
                id: "akusehat-2",
                title: "Akusehat Liveness Check",
                image: "/projects/akusehat_2.jpeg",
            },
            {
                id: "akusehat-3",
                title: "Akusehat Result",
                image: "/projects/akusehat_3.jpeg",
            },
            {
                id: "akusehat-4",
                title: "Akusehat History",
                image: "/projects/akusehat_4.jpeg",
            },
        ],
    },
    {
        id: "4",
        company: "Palang Merah Indonesia",
        date: "Jan 2024 – Jun 2024",
        description:
            "Revamping PMI official website to improve accessibility, transparency, and humanitarian impact.",
        projects: [
            {
                id: "pmi-1",
                title: "PMI Portal Revamp",
                image: "/projects/pmi-1.png",
            },
            {
                id: "pmi-2",
                title: "News & Article Dashboard",
                image: "/projects/pmi-2.png",
            },
        ],
    },
];