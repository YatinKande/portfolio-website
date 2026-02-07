"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import NextImage from "next/image";

import GlitchText from "./GlitchText";

export default function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6 bg-gradient-to-br from-[#f0f8f6] via-[#e6f2ef] to-[#f0f8f6]">
            {/* Main Content Container */}
            <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl mx-auto">
                {/* 1. Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    layoutId="profile-photo"
                    className="relative mb-[30px]"
                >
                    <div className="absolute inset-0 rounded-full bg-[#20c997]/20 blur-2xl animate-pulse" />
                    <div className="relative w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] rounded-full border-[4px] border-[#20c997] shadow-[0_0_30px_rgba(32,201,151,0.3)] overflow-hidden z-10">
                        <NextImage
                            src="/me.jpg"
                            alt="Yatin Kande"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* 2. Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#1a2e28] mb-[15px] tracking-tight"
                >
                    Hi, I'm <span className="text-[#ff6b6b]">Yatin</span> <span className="text-[#20c997]">Kande</span>
                </motion.h1>

                {/* 3. Glitching Roles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-[25px]"
                >
                    <GlitchText />
                </motion.div>

                {/* 4. Description Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-[15px] lg:text-[16px] text-[#5a7069] leading-[1.6] max-w-[700px] mx-auto mb-[35px]"
                >
                    Experienced Data Scientist specializing in building scalable Machine Learning pipelines and deep learning solutions.
                    I transform complex data into measurable business impact, from advanced statistical modeling to deploying high-performance ML models.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-[50px]"
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

                {/* 6. Down Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-auto md:mb-[40px]"
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
