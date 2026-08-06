import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import SiteFooter from "../components/layout/site-footer";
import SiteHeader from "../components/layout/site-header";
import CustomCursor from "../components/ui/custom-cursor";

export const metadata: Metadata = {
    metadataBase: new URL("https://antoinejonville.fr"),
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
        locale: "en_US",
        url: "/",
        siteName: "Antoine Jonville Portfolio",
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
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <div className="app-shell">
                        <a href="#main-content" className="skip-link">
                            Skip to content
                        </a>
                        <CustomCursor />
                        <SiteHeader />
                        {children}
                        <SiteFooter />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
