"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import NextImage from "next/image";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-24 px-6 bg-[#f0f8f6]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a2e28] inline-block border-b-4 border-[#20c997] pb-2">
                        About Me
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left: Text Content */}
                    <div className="space-y-6 text-[#5a7069] text-base md:text-lg leading-relaxed">
                        <motion.p variants={itemVariants}>
                            My journey in data science began with a deep curiosity for patterns, leading me through a BS in Data Science at Jain University,
                            followed by a rigorous PG Program at VIT, and ultimately to my **Master's in Data Science at the University of Michigan Dearborn**,
                            where I maintained a **GPA of 3.8**.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Through my internships at **DataZymes** and **SmartKnower**, I've transitioned from theory to high-impact application.
                            I've engineered YOLO models for crop disease detection, built distributed Spark pipelines, and developed XGBoost
                            churn models achieving an **81% AUC-ROC**.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            I thrive on solving real-world challenges, whether it's building multi-modal RAG systems, visual speech recognition
                            with 3D CNNs, or autonomous navigation using NeuroEvolution. I believe in the transformative power of data to
                            shape the future of technology and business.
                        </motion.p>

                        {/* Highlight Box */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-[#20c997]/5 border-l-4 border-[#20c997] p-6 rounded-r-2xl mt-8 shadow-[0_8px_30px_rgba(32,201,151,0.05)] border-y border-y-[#cfe5df]/30 border-r border-r-[#cfe5df]/30"
                        >
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-[#20c997]">
                                    <GraduationCap className="size-5" />
                                    <span className="text-sm font-bold tracking-tight">MS Data Science @ UMich (3.8 GPA)</span>
                                </li>
                                <li className="flex items-center gap-3 text-[#20c997]">
                                    <Briefcase className="size-5" />
                                    <span className="text-sm font-bold tracking-tight">AI/ML Internships @ DataZymes & SmartKnower</span>
                                </li>
                                <li className="flex items-center gap-3 text-[#20c997]">
                                    <Award className="size-5" />
                                    <span className="text-sm font-bold tracking-tight">Expert in End-to-End ML & GenAI Systems</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center group">
                                <div className="text-3xl font-bold text-[#ff6b6b] group-hover:scale-110 transition-transform">3.8</div>
                                <div className="text-[10px] uppercase tracking-widest text-[#5a7069] font-bold opacity-60">UMich GPA</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-3xl font-bold text-[#ff6b6b] group-hover:scale-110 transition-transform">2</div>
                                <div className="text-[10px] uppercase tracking-widest text-[#5a7069] font-bold opacity-60">Internships</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-3xl font-bold text-[#ff6b6b] group-hover:scale-110 transition-transform">10+</div>
                                <div className="text-[10px] uppercase tracking-widest text-[#5a7069] font-bold opacity-60">ML Projects</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Decorative Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-[#20c997]/10 blur-3xl animate-pulse" />
                        <div className="relative rounded-[32px] shadow-2xl overflow-hidden border-2 border-[#cfe5df] bg-white h-[450px] group">
                            <NextImage
                                src="/about-visual.jpg"
                                alt="Data Visualization"
                                fill
                                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-[#20c997] font-mono text-sm font-bold mb-3 flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-[#20c997] animate-ping" />
                                    /usr/bin/python3 --deploy
                                </div>
                                <div className="text-[#1a2e28] font-bold text-2xl leading-tight">
                                    Transforming high-dimensional data into strategic, production-ready intelligence.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
