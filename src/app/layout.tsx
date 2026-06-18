import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://rickhysiswanto.com'),
  title: {
    default: "Rickhy Siswanto | Personal Blog",
    template: "%s | Rickhy Siswanto",
  },
  description: "Personal website of Rickhy Siswanto. Building thoughtful digital experiences",
  keywords: ["Rickhy Siswanto", "Project", "Personal", "Blog"],
  authors: [{ name: "Rickhy Siswanto" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rickhysiswanto.com",
    title: "Rickhy Siswanto | Personal Blog",
    description: "Personal website of Rickhy Siswanto. Building thoughtful digital experiences.",
    siteName: "Rickhy Siswanto",
    images: [{ url: "/profile.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rickhy Siswanto | Personal Blog",
    description: "Personal website of Rickhy Siswanto. Building thoughtful digital experiences.",
    images: ["/profile.jpeg"],
  },
};

const themeScript = `
  (function() {
    try {
      const saved = localStorage.getItem("theme");
      const dark = saved === "dark";
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
