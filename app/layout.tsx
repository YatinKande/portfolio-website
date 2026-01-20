import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Yatin Kande | AI & Data Engineer",
    description: "Portfolio of Yatin Kande - AI Engineer, Data Scientist, and Full Stack Developer specializing in RAG, Computer Vision, and Cloud Solutions.",
};

import Background from "@/components/ui/Background";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={cn("min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground")}>
                <Background />
                {children}
            </body>
        </html>
    );
}
