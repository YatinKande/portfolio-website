import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Yatin Kande | AI & Data Scientist",
    description: "Portfolio of Yatin Kande — MS Data Science @ University of Michigan. AI/ML engineer building agentic AI, RAG, and computer vision systems, open to Data Analyst, Data Scientist, and ML/AI Engineering roles.",
    keywords: ["AI Engineer", "Data Scientist", "Data Analyst", "Machine Learning", "Agentic AI", "RAG", "Computer Vision", "MLOps", "Python", "PyTorch", "AWS", "LangChain"],
    authors: [{ name: "Yatin Kande" }],
    metadataBase: new URL("https://portfolio-website-yatinkandes-projects.vercel.app"),
    openGraph: {
        type: "website",
        title: "Yatin Kande | AI & Data Scientist",
        description: "MS Data Science @ UMich. Building agentic AI, RAG, and computer vision systems — open to Data Analyst, Data Scientist & ML/AI Engineer roles.",
        siteName: "Yatin Kande Portfolio",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Yatin Kande | AI & Data Scientist",
        description: "MS Data Science @ UMich. Building agentic AI, RAG, and computer vision systems — open to Data Analyst, Data Scientist & ML/AI Engineer roles.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("scroll-smooth", inter.variable)}>
            <head>
                {/* Rajdhani & Orbitron — decorative fonts used in globals.css */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={cn("min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground")}>
                {children}
            </body>
        </html>
    );
}
