import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Yatin Kande | AI & Data Scientist",
    description: "Portfolio of Yatin Kande - AI Engineer and Data Scientist specializing in RAG, Computer Vision, and Cloud Solutions.",
};

import Background from "@/components/ui/Background";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <head>
                {/* Font Awesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                {/* Devicon */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            </head>
            <body className={cn("min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground")}>
                <Background />
                {children}
            </body>
        </html>
    );
}
