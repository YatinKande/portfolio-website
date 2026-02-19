"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Active section tracking logic
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let currentSection = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop } = element;
                    if (scrollPosition >= offsetTop) {
                        currentSection = section;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-white/80 backdrop-blur-md border-b border-[#cfe5df] py-3 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="size-10 rounded-xl bg-[#20c997] flex items-center justify-center text-white font-bold text-xl group-hover:bg-[#ff6b6b] transition-colors">
                        Y
                    </div>
                    <span className="text-xl font-bold text-[#1a2e28] tracking-tighter group-hover:text-[#20c997] transition-colors">
                        Yatin <span className="text-[#20c997] group-hover:text-[#ff6b6b]">Kande</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 bg-[#f0f8f6]/50 p-1 rounded-full border border-[#cfe5df]/30 backdrop-blur-sm">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative",
                                    isActive ? "text-[#20c997]" : "text-[#5a7069] hover:text-[#1a2e28]"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white shadow-sm rounded-full z-[-1]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button - Visual Placeholder */}
                <div className="md:hidden">
                    <button className="p-2 text-[#1a2e28]">
                        <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full" />
                        <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full" />
                        <div className="w-4 h-0.5 bg-current rounded-full ml-2" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
