"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
    const roles = ["Data Scientist", "ML Engineer", "Data Analyst", "Data Engineer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedRole(role.slice(0, displayedRole.length + 1));
                if (displayedRole === role) {
                    setTimeout(() => setIsDeleting(true), 2000); // Pause at end
                }
            } else {
                setDisplayedRole(role.slice(0, displayedRole.length - 1));
                if (displayedRole === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [displayedRole, isDeleting, roleIndex, roles]);

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">

            <div className="container mx-auto px-4 md:px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >


                    <h1 className="text-5xl md:text-7xl/tight font-bold font-heading tracking-tight">
                        Hi, I'm <span className="text-foreground">{personalInfo.name}</span>.<br />
                        I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 animate-gradient bg-300%">
                            {displayedRole}
                        </span>
                        <span className="animate-pulse text-primary">|</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Bridging the gap between complex data and actionable insights.
                        Specializing in Generative AI, Computer Vision, and Cloud Architecture.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-[0_0_40px_-10px_hsl(var(--primary))] transition-shadow w-full sm:w-auto flex items-center justify-center gap-2 group"
                        >
                            View My Work
                            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 font-semibold rounded-full transition-colors w-full sm:w-auto backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
            >
                <ChevronDown className="size-6" />
            </motion.div>
        </section>
    );
}
