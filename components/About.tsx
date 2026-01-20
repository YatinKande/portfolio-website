"use client";

import { motion } from "framer-motion";
import { personalInfo, projects, skills } from "@/lib/data";
import { Code2, Database, Brain, Coffee, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
    const stats = [
        { label: "Projects Completed", value: projects.length, icon: CheckCircle2, color: "text-green-400" },
        { label: "Tech Stack Items", value: Object.values(skills).flat().length, icon: Code2, color: "text-blue-400" },
        { label: "Models Trained", value: "50+", icon: Brain, color: "text-purple-400" },
        { label: "Coffee Consumed", value: "∞", icon: Coffee, color: "text-yellow-400" },
    ];

    return (
        <section id="about" className="py-24 bg-secondary/10 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Main Bio - "Data Story" */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm text-primary font-medium mb-2">
                            <Database className="size-4" />
                            <span>Bio Analysis</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold">
                            Engineering Logic from <span className="text-primary">Chaos</span>
                        </h2>

                        <div className="prose prose-invert text-muted-foreground leading-relaxed">
                            <p>
                                My journey isn't just about writing code; it's about <strong className="text-foreground">pattern recognition</strong>.
                                Whether I'm cleaning a messy dataset, architecting a scalable RAG pipeline, or optimizing a neural network,
                                I treat every problem as a data points waiting to be connected.
                            </p>
                            <p>
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* "Tech DNA" Visualization */}
                        <div className="pt-6">
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Core Competencies</h3>
                            <div className="flex flex-wrap gap-2">
                                {["System Design", "MLOps", "Data Engineering", "Full Stack Dev"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* "Metrics Dashboard" - Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                <h3 className="font-heading font-bold text-lg flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                                    Personal Analytics
                                </h3>
                                <span className="text-xs text-muted-foreground font-mono">LIVE_DATA</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-primary/20 transition-colors group"
                                    >
                                        <div className={`p-2 rounded-lg bg-white/5 w-fit mb-3 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                                            <stat.icon className="size-5" />
                                        </div>
                                        <div className="text-2xl font-bold font-heading mb-1">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Fake "Activity Graph" */}
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <div className="flex justify-between items-end h-24 gap-1">
                                    {[40, 65, 30, 80, 55, 90, 45, 70, 60, 95, 20, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                            className="w-full bg-primary/20 hover:bg-primary/60 rounded-t-sm transition-colors"
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                                    <span>JAN</span>
                                    <span>DEC</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
