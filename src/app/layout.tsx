import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: {
        default: "Antoine Jonville | Front-end Developer",
        template: "%s | Antoine Jonville",
    },
    description: "Front-end Developer specialized in React.js and React Native with 4 years of experience building polished web and mobile products.",
    keywords: ["React.js", "React Native", "Next.js", "TypeScript", "Front-end Developer", "UI Engineering"],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Antoine Jonville | Front-end Developer",
        description: "React.js and React Native developer portfolio with a focus on product quality, maintainability, and performance.",
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Antoine Jonville | Front-end Developer",
        description: "React.js and React Native developer portfolio.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
