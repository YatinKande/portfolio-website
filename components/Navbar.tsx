"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X, Download } from "lucide-react";

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
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
                    isScrolled
                        ? "bg-[#111318]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="size-10 rounded-xl bg-[#2dd4bf] flex items-center justify-center text-[#111318] font-bold text-xl group-hover:bg-[#f97316] transition-colors">
                            Y
                        </div>
                        <span className="text-xl font-bold text-white tracking-tighter group-hover:text-[#2dd4bf] transition-colors">
                            Yatin <span className="text-[#2dd4bf] group-hover:text-[#f97316]">Kande</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/[0.08] backdrop-blur-sm">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 relative",
                                        isActive ? "text-[#2dd4bf]" : "text-slate-400 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Resume Button */}
                    <a
                        href="/YatinKande_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#2dd4bf] text-[#111318] text-sm font-bold rounded-full hover:bg-[#2dd4bf]/90 transition-all shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:shadow-[0_0_28px_rgba(45,212,191,0.4)]"
                    >
                        <Download className="size-3.5" />
                        Resume
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {mobileOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <X className="size-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="flex flex-col gap-1.5"
                                >
                                    <div className="w-6 h-0.5 bg-current rounded-full" />
                                    <div className="w-6 h-0.5 bg-current rounded-full" />
                                    <div className="w-4 h-0.5 bg-current rounded-full ml-2" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden"
                        />
                        <motion.div
                            key="drawer"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ type: "spring", damping: 28, stiffness: 350 }}
                            className="fixed top-[64px] left-4 right-4 bg-[#16191f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-[95] md:hidden overflow-hidden"
                        >
                            <div className="p-4 flex flex-col gap-1">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={cn(
                                                "px-4 py-3 rounded-xl text-sm font-bold transition-all",
                                                isActive
                                                    ? "text-[#2dd4bf] bg-[#2dd4bf]/10"
                                                    : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <div className="h-px bg-white/10 my-2" />
                                <a
                                    href="/YatinKande_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2dd4bf] text-[#111318] text-sm font-bold hover:bg-[#2dd4bf]/90 transition-colors"
                                >
                                    <Download className="size-4" />
                                    Download Resume
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
