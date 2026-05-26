"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import NextImage from "next/image";
import GlitchText from "./GlitchText";

export default function Hero() {
    const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
    const [animComplete, setAnimComplete] = useState(false);
    // Skip photo entrance animation when coming from the loader (photo already shown there)
    const [skipPhotoAnim] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return !sessionStorage.getItem('loaderSeen'); // true = loader is running right now
    });

    const { scrollY } = useScroll();
    const photoOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const photoScale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const photoY = useTransform(scrollY, [0, 500], [0, -50]);

    useEffect(() => {
        if (sessionStorage.getItem('hero_revealed')) { setAnimComplete(true); return; }
        const delays = [100, 500, 900, 1300, 1700, 2000];
        delays.forEach((delay, index) => {
            setTimeout(() => {
                setVisibleIndices(prev => [...prev, index]);
                if (index === delays.length - 1) {
                    setTimeout(() => { setAnimComplete(true); sessionStorage.setItem('hero_revealed', 'true'); }, 900);
                }
            }, delay);
        });
    }, []);

    const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

    const getHeroClass = (index: number) => {
        if (animComplete) return "";
        return `hero-hidden ${visibleIndices.includes(index) ? 'hero-visible' : ''}`;
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6 bg-[#111318]">
            {/* Warm amber depth glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F59E0B]/[0.04] blur-[130px] pointer-events-none" />

            <style jsx>{`
                .hero-hidden { opacity: 0; }
                .hero-visible { opacity: 1; transition: opacity 0.9s ease-in-out; }
                @media (prefers-reduced-motion: reduce) {
                    .hero-hidden { opacity: 1 !important; transition: none !important; }
                }
            `}</style>

            <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl mx-auto">

                {/* Profile Photo */}
                <motion.div style={{ opacity: photoOpacity, y: photoY, scale: photoScale }} className="relative mb-[30px]">
                    <motion.div
                        id="hero-profile-photo"
                        initial={skipPhotoAnim ? false : { opacity: 0, scale: 0.88, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={skipPhotoAnim ? {} : { duration: 0.9, ease: [0.34, 1.2, 0.64, 1], delay: 0.15 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 rounded-full bg-[#F59E0B]/15 blur-2xl animate-pulse" />
                        <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] min-w-[140px] min-h-[140px] rounded-full border-[3px] border-[#F59E0B] shadow-[0_0_40px_rgba(245,158,11,0.3)] overflow-hidden z-10">
                            <NextImage src="/me.jpg" alt="Yatin Kande" fill className="object-cover" priority />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Name */}
                <motion.h1 className={`font-bold text-[28px] md:text-[36px] lg:text-[48px] text-white mb-[15px] tracking-tight ${getHeroClass(1)}`}>
                    Hi, I'm <span className="text-white">Yatin Kande</span>
                </motion.h1>

                {/* Rotating Job Title */}
                <motion.div className={`mb-[12px] ${getHeroClass(2)}`}>
                    <GlitchText />
                </motion.div>

                {/* Credibility Line */}
                <motion.div className={`mb-[22px] flex flex-wrap items-center justify-center gap-x-2 gap-y-1 ${getHeroClass(2)}`}>
                    <span className="text-[12px] md:text-[13px] font-semibold text-slate-400 uppercase tracking-widest">MS @ UMich</span>
                    <span className="text-[#F59E0B]/40 font-bold text-[12px]">·</span>
                    <span className="text-[12px] md:text-[13px] font-semibold text-slate-400 uppercase tracking-widest">3.8 GPA</span>
                    <span className="text-[#F59E0B]/40 font-bold text-[12px]">·</span>
                    <span className="text-[12px] md:text-[13px] font-semibold text-slate-400 uppercase tracking-widest">Ex-DataZymes</span>
                    <span className="text-[#F59E0B]/40 font-bold text-[12px]">·</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[12px] font-bold text-[#F59E0B] uppercase tracking-widest">
                        <span className="size-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                        Open to Full-time
                    </span>
                </motion.div>

                {/* Summary */}
                <motion.p className={`text-[15px] lg:text-[17px] text-slate-400 leading-[1.7] max-w-xl mx-auto mb-[35px] ${getHeroClass(3)}`}>
                    Building production AI systems — <span className="text-white font-medium">RAG pipelines, AI Agents, LLMs & Computer Vision</span> — that ship and scale.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className={`mb-[50px] flex flex-col sm:flex-row items-center gap-4 ${getHeroClass(4)}`}>
                    <motion.div whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            href="#contact"
                            className="group bg-[#F59E0B] text-[#111318] font-bold px-[40px] py-[18px] rounded-full transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(245,158,11,0.35)] hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.45)] inline-flex items-center gap-2 text-[18px] hover:bg-[#F59E0B]/90"
                        >
                            Contact Me
                            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-[5px]" />
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <a
                            href="/YatinKande_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-2 border-[#F59E0B]/40 text-[#F59E0B] font-bold px-[40px] py-[16px] rounded-full transition-all duration-300 hover:bg-[#F59E0B] hover:text-[#111318] hover:border-[#F59E0B] hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.3)] inline-flex items-center gap-2 text-[18px]"
                        >
                            <Download className="size-5 transition-transform duration-300 group-hover:-translate-y-[2px]" />
                            Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Down Arrow */}
                <motion.div className={`mt-auto md:mb-[40px] ${getHeroClass(5)}`}>
                    <button onClick={scrollToAbout} aria-label="Scroll to About Section" className="text-[#F59E0B]/30 hover:text-[#F59E0B]/70 transition-all duration-300 transform hover:scale-110">
                        <ChevronDown className="size-[32px] animate-[bounce_2s_ease-in-out_infinite]" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
