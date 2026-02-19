"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import NextImage from "next/image";

import GlitchText from "./GlitchText";

export default function Hero() {
    const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
    const [animComplete, setAnimComplete] = useState(false);

    // 1. Scroll-triggered blur effect
    useEffect(() => {
        const handleScroll = () => {
            const photoContainer = document.getElementById("hero-profile-photo");
            if (!photoContainer) return;

            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const heroHeight = window.innerHeight;
                const startThreshold = heroHeight * 0.1;

                if (scrollY <= startThreshold) {
                    photoContainer.style.filter = "blur(0px)";
                    photoContainer.style.opacity = "1";
                    return;
                }

                let progress = (scrollY - startThreshold) / (heroHeight * 0.9);

                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;

                const blurAmount = progress * 12;
                const opacityAmount = 1 - progress;

                photoContainer.style.filter = `blur(${blurAmount}px)`;
                photoContainer.style.opacity = `${opacityAmount}`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Cinematic Entrance Animation
    useEffect(() => {
        // Prevent replay on back navigation within the same session
        if (sessionStorage.getItem('hero_revealed')) {
            setAnimComplete(true);
            return;
        }

        const delays = [100, 500, 900, 1300, 1700, 2000];
        delays.forEach((delay, index) => {
            setTimeout(() => {
                setVisibleIndices(prev => [...prev, index]);
                if (index === delays.length - 1) {
                    setTimeout(() => {
                        setAnimComplete(true);
                        sessionStorage.setItem('hero_revealed', 'true');
                    }, 900);
                }
            }, delay);
        });
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const getHeroClass = (index: number) => {
        if (animComplete) return "";
        return `hero-hidden ${visibleIndices.includes(index) ? 'hero-visible' : ''}`;
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6 bg-gradient-to-br from-[#f0f8f6] via-[#e6f2ef] to-[#f0f8f6]">
            {/* Main Content Container */}
            <style jsx>{`
                .hero-hidden {
                    opacity: 0;
                }
                .hero-visible {
                    opacity: 1;
                    transition: opacity 0.9s ease-in-out;
                }
                @media (prefers-reduced-motion: reduce) {
                    .hero-hidden {
                        opacity: 1 !important;
                        transition: none !important;
                    }
                }
            `}</style>

            <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl mx-auto">

                {/* Step 1: Profile Photo */}
                <motion.div
                    id="hero-profile-photo"
                    layoutId="profile-photo"
                    transition={{
                        type: "tween",
                        duration: 1.0,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className={`relative mb-[30px] opacity-100 ${animComplete ? '' : 'hero-visible'}`}
                    style={{ willChange: "filter, opacity" }}
                >
                    <div className="absolute inset-0 rounded-full bg-[#20c997]/20 blur-2xl animate-pulse" />
                    <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border-[4px] border-[#20c997] shadow-[0_0_30px_rgba(32,201,151,0.3)] overflow-hidden z-10">
                        <NextImage
                            src="/me.jpg"
                            alt="Yatin Kande"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Step 2: Name */}
                <motion.h1
                    className={`font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#1a2e28] mb-[15px] tracking-tight ${getHeroClass(1)}`}
                >
                    Hi, I'm <span className="text-[#ff6b6b]">Yatin</span> <span className="text-[#20c997]">Kande</span>
                </motion.h1>

                {/* Step 3: Rotating Job Title */}
                <motion.div
                    className={`mb-[25px] ${getHeroClass(2)}`}
                >
                    <GlitchText />
                </motion.div>

                {/* Step 4: Summary Paragraph */}
                <motion.p
                    className={`text-[15px] lg:text-[16px] text-[#5a7069] leading-[1.6] max-w-2xl mx-auto mb-[35px] ${getHeroClass(3)}`}
                >
                    Data Scientist specializing in building scalable ML pipelines, deep learning systems, and GenAI solutions.
                    Skilled in Python, PyTorch, and AWS cloud workflows — delivering models that drive measurable business impact from experimentation to production deployment.
                </motion.p>

                {/* Step 5: Contact Button */}
                <motion.div
                    className={`mb-[50px] ${getHeroClass(4)}`}
                >
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="#contact"
                            className="group bg-[#20c997] text-white font-bold px-[40px] py-[18px] rounded-full transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(32,201,151,0.4)] hover:shadow-[0_20px_30px_-10px_rgba(32,201,151,0.5)] inline-flex items-center gap-2 text-[18px]"
                        >
                            Contact Me
                            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-[5px]" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Step 6: Down Arrow */}
                <motion.div
                    className={`mt-auto md:mb-[40px] ${getHeroClass(5)}`}
                >
                    <button
                        onClick={scrollToAbout}
                        aria-label="Scroll to About Section"
                        className="text-[#20c997] hover:text-[#2dd4a8] transition-all duration-300 transform hover:scale-110"
                    >
                        <ChevronDown className="size-[32px] animate-[bounce_2s_ease-in-out_infinite]" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

