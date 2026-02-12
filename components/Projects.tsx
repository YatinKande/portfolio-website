"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECT_GLOWS: Record<string, string> = {
    "AWS Docs RAG Bot": "0 0 30px rgba(138, 43, 226, 0.5)",
    "Automotive Multimodal RAG": "0 0 30px rgba(255, 107, 53, 0.5)",
    "Dataset Concierge Bot": "0 0 30px rgba(94, 53, 177, 0.5)",
    "Kinesis Key Entry": "0 0 30px rgba(0, 188, 212, 0.5)",
    "SmartSoil Crop Recommender": "0 0 30px rgba(46, 125, 50, 0.5)",
    "Lip-Read AI using LipNet": "0 0 30px rgba(233, 30, 99, 0.5)"
};

export default function Projects() {
    const featuredTitles = [
        "AWS Docs RAG Bot",
        "Automotive Multimodal RAG",
        "Dataset Concierge Bot",
        "Kinesis Key Entry",
        "SmartSoil Crop Recommender",
        "Lip-Read AI using LipNet"
    ];

    const sortedProjects = featuredTitles.map(title =>
        projects.find(p => p.title === title)
    ).filter(Boolean);

    // CSS Grid positioning classes based on exact user specification
    const getGridClass = (index: number) => {
        switch (index) {
            case 0: return "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-[500px]"; // AWS RAG: 2 cols, 2 rows
            case 1: return "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:h-[240px]"; // Auto RAG: Col 3, Row 1
            case 2: return "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 lg:h-[240px]"; // Dataset Bot: Col 3, Row 2
            case 3: return "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:h-[240px]"; // Kinesis: Col 1, Row 3
            case 4: return "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 lg:h-[240px]"; // SmartSoil: Col 2, Row 3
            case 5: return "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:h-[240px]"; // LipNet: Col 3, Row 3
            default: return "lg:h-[240px]";
        }
    };

    return (
        <section id="projects" className="py-[60px] bg-[#f0f8f6]">
            <div className="max-w-[1240px] px-5 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6f4f1] mb-6"
                    >
                        <Sparkles className="size-3.5 text-[#20c997]" />
                        <span className="text-[11px] font-bold text-[#20c997] uppercase tracking-wider">
                            ⭐ Featured Work
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[42px] font-bold text-[#1a2e28] mb-4 tracking-tight"
                    >
                        Projects & Portfolio 💼
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#5a7069] text-[16px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Showcasing real-world applications of AI, data engineering, and full-stack development
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto">
                    {sortedProjects.map((project: any, index) => {
                        const isBig = index === 0;
                        const glow = PROJECT_GLOWS[project.title] || "0 0 30px rgba(255, 255, 255, 0.3)";

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: `0 12px 40px rgba(0,0,0,0.4), ${glow}`
                                }}
                                className={`group relative overflow-hidden rounded-[16px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out cursor-pointer h-[350px] ${getGridClass(index)}`}
                            >
                                <Link href="/projects" className="block w-full h-full relative z-10">
                                    {/* Background Image */}
                                    {project.image && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                priority={isBig}
                                            />
                                        </div>
                                    )}

                                    {/* Dark Overlay (gradient makes text at bottom readable) */}
                                    <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                    {/* Content Group (positioned at bottom-left) */}
                                    <div className="absolute inset-0 p-[30px] flex flex-col justify-end z-10">
                                        <div className="relative z-20">
                                            <h3 className={`font-bold text-white mb-[10px] leading-[1.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${isBig ? 'text-[36px]' : 'text-[24px]'}`}>
                                                {project.title}
                                            </h3>
                                            <p className={`text-white/90 font-normal mb-[15px] leading-[1.5] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] ${isBig ? 'text-[17px]' : 'text-[14px]'}`}>
                                                {project.description}
                                            </p>

                                            {/* Tech Tags */}
                                            <div className="flex flex-wrap gap-[8px]">
                                                {project.tech.slice(0, 3).map((t: string) => (
                                                    <span
                                                        key={t}
                                                        className="px-[14px] py-[6px] rounded-[20px] bg-white/15 border border-white/30 text-[11px] font-semibold text-white uppercase"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Projects Button */}
                <div className="mt-[40px] flex justify-center">
                    <Link
                        href="/projects"
                        className="group relative inline-flex items-center gap-2 px-[32px] py-[12px] border-2 border-[#20c997] text-[#20c997] font-bold rounded-full transition-all hover:bg-[#20c997] hover:text-white hover:shadow-[0_6px_16px_rgba(32,201,151,0.3)] hover:-translate-y-[2px] active:scale-95"
                    >
                        <span className="text-[15px]">View All Projects →</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
