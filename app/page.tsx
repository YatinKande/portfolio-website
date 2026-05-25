"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import BackgroundSection from "@/components/BackgroundSection";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { BarChart3, GraduationCap, Briefcase, Rocket } from "lucide-react";
import NextImage from "next/image";
import GlitchText from "@/components/GlitchText";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export default function LandingPage() {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("INITIALIZING_SYSTEM");
    const [phase, setPhase] = useState<"loading" | "transitioning" | "complete">("loading");
    const [isLoading, setIsLoading] = useState(true);
    const [isHydrated, setIsHydrated] = useState(false);

    const duration = 2500; // 2.5s for loading fill

    useEffect(() => {
        setIsHydrated(true);

        // Check if loader has already been seen in this session
        const loaderSeen = sessionStorage.getItem("loaderSeen");
        if (loaderSeen) {
            setIsLoading(false);
            setPhase("complete");
            setProgress(100);
            return;
        }

        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                // Loading complete (3.0s total with 0.5s delay)
                setTimeout(() => {
                    setStatus("DEPLOYMENT_COMPLETE");
                    // Step 2 starts at 3.2s
                    setTimeout(() => {
                        setPhase("transitioning");
                        // Loader completely removed after transition (4.0s)
                        setTimeout(() => {
                            setIsLoading(false);
                            setPhase("complete");
                            // Mark loader as seen for this session
                            sessionStorage.setItem("loaderSeen", "true");
                        }, 800);
                    }, 200);
                }, 500);
            }
        };
        const initialDelay = setTimeout(() => {
            requestAnimationFrame(updateProgress);
        }, 500);

        return () => clearTimeout(initialDelay);
    }, []);

    // Manual hash scroll handler
    useEffect(() => {
        if (!isLoading && isHydrated) {
            const hash = window.location.hash;
            if (hash) {
                // Small delay to ensure all animations/layouts are settled
                const timeoutId = setTimeout(() => {
                    const targetId = hash.replace("#", "");
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
                return () => clearTimeout(timeoutId);
            }
        }
    }, [isLoading, isHydrated]);

    const stats = [
        { icon: BarChart3, text: "3.8 GPA", delay: 1.2 },
        { icon: GraduationCap, text: "MS @ UMichigan", delay: 1.35 },
        { icon: Briefcase, text: "2+ Years ML/AI", delay: 1.5 },
        { icon: Rocket, text: "10+ Projects", delay: 1.65 },
    ];

    if (!isHydrated) return null;

    return (
        <main className="min-h-screen bg-[#111318] selection:bg-[#2dd4bf]/20 relative overflow-hidden">
            {/* Subtle animated dot grid on dark bg */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(#2dd4bf 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />
            </div>

            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader-container"
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Profile Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                            className="relative mb-[30px] z-20"
                        >
                            <div className="absolute inset-0 rounded-full bg-[#2dd4bf]/25 blur-[40px] animate-pulse" />
                            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full border-[4px] border-[#2dd4bf] shadow-[0_0_40px_rgba(45,212,191,0.35)] overflow-hidden">
                                <NextImage
                                    src="/me.jpg"
                                    alt="Yatin Kande"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Loader UI wrapper for fading out */}
                        <motion.div
                            animate={{
                                opacity: phase === "transitioning" ? 0 : 1,
                                y: phase === "transitioning" ? 40 : 0
                            }}
                            transition={{ duration: 0.4, ease: "easeIn" }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {/* Name & Title */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className="mb-[40px]"
                            >
                                <h1 className="text-[32px] md:text-[42px] font-bold text-white tracking-tight leading-none mb-2">
                                    Yatin Kande
                                </h1>
                                <div className="mt-4">
                                    <GlitchText />
                                </div>
                            </motion.div>

                            {/* Loading Section */}
                            <div className="w-full max-w-[300px] md:max-w-[450px] mb-[35px]">
                                <div className="flex justify-between items-end mb-[12px] font-mono text-[13px]">
                                    <div className={status === "DEPLOYMENT_COMPLETE" ? "text-[#2dd4bf] font-bold" : "text-[#2dd4bf]/70"}>
                                        {status}
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity }}
                                        >
                                            |
                                        </motion.span>
                                    </div>
                                    <div className="text-[#2dd4bf] opacity-60 font-bold">{Math.floor(progress)}%</div>
                                </div>
                                <div className="h-[6px] w-full bg-white/10 rounded-[3px] overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-[#ff6b6b] to-[#20c997] shadow-[0_0_15px_rgba(32,201,151,0.5)]"
                                        style={{ width: `${progress}%` }}
                                        transition={{ ease: "easeInOut" }}
                                    />
                                </div>
                            </div>

                            {/* Info Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="bg-[#1c2030]/90 backdrop-blur-[12px] border border-white/10 rounded-[16px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mb-[25px]"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px]">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: stat.delay, duration: 0.3 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="p-2 rounded-lg bg-[#2dd4bf]/10">
                                                <stat.icon className="text-[#2dd4bf] size-5" />
                                            </div>
                                            <span className="text-white font-bold text-[16px] whitespace-nowrap">
                                                {stat.text}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.8, duration: 0.5 }}
                                className="italic text-[15px] text-slate-500 font-medium"
                            >
                                "Transforming raw data into strategic intelligence"
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Main Portfolio Content */}
                {(!isLoading || phase === "transitioning") && (
                    <motion.div
                        key="portfolio-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <ScrollProgress />
                        <Navbar />

                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Hero />
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <About />
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Skills />
                        </motion.section>

                        <BackgroundSection />

                        <motion.section
                            id="projects"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="scroll-mt-24"
                        >
                            <Projects />
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Certifications />
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Contact />
                        </motion.section>

                        <footer className="py-12 bg-[#080a0d] border-t border-white/[0.06] px-6">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                                {/* Availability signal */}
                                <div className="flex items-center gap-3">
                                    <div className="size-2.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                                    <span className="text-[10px] font-mono text-[#2dd4bf]/80 uppercase tracking-widest font-bold">
                                        Open to Full-time · Data Scientist / ML Engineer
                                    </span>
                                </div>

                                {/* Dashboard link */}
                                <a
                                    href="/dashboard"
                                    className="group flex items-center gap-2 text-[10px] font-mono text-[#2dd4bf]/40 hover:text-[#2dd4bf] uppercase tracking-widest transition-colors"
                                    title="Interactive Portfolio Dashboard"
                                >
                                    <span className="size-1.5 rounded-full bg-[#2dd4bf]/30 group-hover:bg-[#2dd4bf] transition-colors animate-pulse" />
                                    View Dashboard →
                                </a>

                                {/* Copyright + location */}
                                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                                    © 2026 Yatin Kande · Dearborn, MI
                                </div>
                            </div>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
