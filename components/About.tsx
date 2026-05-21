"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, TrendingUp, Zap } from "lucide-react";
import NextImage from "next/image";

const achievements = [
    { icon: TrendingUp, stat: "84%", label: "Retrieval precision", sub: "Multi-modal RAG system" },
    { icon: Zap, stat: "40%", label: "Latency reduction", sub: "YOLOv5 CV pipeline" },
    { icon: TrendingUp, stat: "81%", label: "AUC-ROC score", sub: "XGBoost churn model" },
    { icon: Zap, stat: "500+", label: "Daily requests", sub: "Serverless AWS chatbot" },
];

export default function About() {
    return (
        <section id="about" className="relative px-6 overflow-hidden min-h-screen flex items-center justify-center bg-[#0f172a]">
            {/* Watermark Background Photo */}
            <div className="absolute inset-0 z-0">
                <NextImage
                    src="/me_about.jpg"
                    alt="About Background"
                    fill
                    className="object-cover object-[center_20%] opacity-100"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.92)] hidden md:block" />
                <div className="absolute inset-0 bg-[rgba(15,23,42,0.88)] md:hidden" />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-24 md:py-32">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-14"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                        About Me
                    </h2>
                    <div className="h-1.5 w-24 bg-[#20c997] rounded-full" />
                </motion.div>

                {/* Two-column layout */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
                    {/* Left: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6">
                            I build end-to-end ML systems — from distributed Spark pipelines to GenAI RAG architectures. Pursuing my MS in Data Science at UMich (3.8 GPA), I've shipped production ML at DataZymes and SmartKnower, cutting inference latency by 40% and achieving 81% AUC-ROC on churn prediction.
                        </p>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                            Today I focus on the full stack of modern AI — classical ML, deep learning, computer vision, and large language model systems. I believe the most valuable models are the ones that actually ship.
                        </p>

                        {/* Highlight bullets */}
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <GraduationCap className="size-5 text-[#20c997] shrink-0" />
                                <span>MS Data Science at UMich — 3.8 GPA</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <Briefcase className="size-5 text-[#20c997] shrink-0" />
                                <span>AI/ML Internships at DataZymes &amp; SmartKnower</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <Zap className="size-5 text-[#20c997] shrink-0" />
                                <span>ML · Deep Learning · GenAI · Cloud Deployment</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right: Achievement stats card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8"
                    >
                        <h3 className="text-xs font-bold text-[#20c997] uppercase tracking-[0.25em] mb-6">
                            Key Achievements
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {achievements.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 + idx * 0.08 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#20c997]/40 transition-colors"
                                >
                                    <div className="text-2xl font-bold text-[#ff6b6b] mb-1">{item.stat}</div>
                                    <div className="text-white text-sm font-semibold leading-tight mb-0.5">{item.label}</div>
                                    <div className="text-slate-400 text-xs">{item.sub}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">3.8</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 font-bold">UMich GPA</div>
                    </div>
                    <div className="hidden md:block h-12 w-[1px] bg-white/20" />
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">2</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 font-bold">AI/ML Internships</div>
                    </div>
                    <div className="hidden md:block h-12 w-[1px] bg-white/20" />
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">10+</div>
                        <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 font-bold">ML and AI Projects</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
