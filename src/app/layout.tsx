import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: {
        default: "Antoine Jonville | Front-end Developer",
        template: "%s | Antoine Jonville",
    },
    description: "Front-end Developer specialized in React.js and React Native with 4 years of experience building polished web and mobile products.",
    metadataBase: new URL("https://antoine-jonville.dev"),
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
