"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Dashboard", href: "/dashboard" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Hide header on intro and about pages
    if (pathname === "/" || pathname === "/about") {
        return null;
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Code2 className="text-primary size-6" />
                    </div>
                    <span className="font-heading font-bold text-lg md:text-xl tracking-tight">
                        Yatin Kande <span className="text-primary hidden sm:inline">| Portfolio Dashboard</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-full transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/Yatin_Kande_Resume.pdf"
                        target="_blank"
                        className="ml-4 px-6 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-[0_0_20px_-5px_hsl(var(--primary))] transition-shadow"
                    >
                        Resume
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/5"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
