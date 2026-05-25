"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { Sparkles, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "./ProjectModal";

const PROJECT_GLOWS: Record<string, string> = {
    "AWS Docs RAG Bot": "0 0 30px rgba(138, 43, 226, 0.5)",
    "Automotive Multimodal RAG": "0 0 30px rgba(255, 107, 53, 0.5)",
    "Dataset Concierge Bot": "0 0 30px rgba(94, 53, 177, 0.5)",
    "Kinesis Key Entry": "0 0 30px rgba(0, 188, 212, 0.5)",
    "SmartSoil Crop Recommender": "0 0 30px rgba(46, 125, 50, 0.5)",
    "Lip-Read AI using LipNet": "0 0 30px rgba(233, 30, 99, 0.5)"
};

// Domain category chips — colour-coded by AI/ML subdomain
const PROJECT_CATEGORIES: Record<string, { label: string; color: string; bg: string }> = {
    "AWS Docs RAG Bot":           { label: "RAG",          color: "#c4b5fd", bg: "rgba(124,58,237,0.25)" },
    "Automotive Multimodal RAG":  { label: "Multimodal",   color: "#fdba74", bg: "rgba(249,115,22,0.25)" },
    "Dataset Concierge Bot":      { label: "Serverless",   color: "#67e8f9", bg: "rgba(6,182,212,0.25)" },
    "Kinesis Key Entry":          { label: "Computer Vision", color: "#7dd3fc", bg: "rgba(14,165,233,0.25)" },
    "SmartSoil Crop Recommender": { label: "ML",           color: "#6ee7b7", bg: "rgba(32,201,151,0.25)" },
    "Lip-Read AI using LipNet":   { label: "Deep Learning",color: "#f9a8d4", bg: "rgba(236,72,153,0.25)" },
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const featuredTitles = [
        "AWS Docs RAG Bot",
        "Automotive Multimodal RAG",
        "Dataset Concierge Bot",
        "Kinesis Key Entry",
        "SmartSoil Crop Recommender",
        "Lip-Read AI using LipNet"
    ];

    const sortedProjects = featuredTitles
        .map(title => projects.find(p => p.title === title))
        .filter((p): p is Project => p !== undefined);

    // CSS Grid positioning classes for a compact bento layout
    const getGridClass = (index: number) => {
        switch (index) {
            case 0: return "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-[420px]"; // Big: 2 cols, 2 rows
            case 1: return "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:h-[200px]"; // Stacked Right 1
            case 2: return "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 lg:h-[200px]"; // Stacked Right 2
            case 3: return "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:h-[200px]"; // Row 2 bottom left
            case 4: return "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 lg:h-[200px]"; // Row 2 bottom center
            case 5: return "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:h-[200px]"; // Row 2 bottom right
            default: return "lg:h-[200px]";
        }
    };

    return (
        <section id="projects" className="py-[80px] bg-[#0a0f1e] relative overflow-hidden">
            {/* Subtle noise texture consistent with Experience section */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-[1240px] px-5 mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-tight"
                    >
                        Featured <span className="text-[#20c997]">Projects</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-[16px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Real-world AI systems — RAG pipelines, computer vision, serverless ML and beyond
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto">
                    {sortedProjects.map((project, index) => {
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
                                onClick={() => setSelectedProject(project)}
                                className={`group relative overflow-hidden rounded-[16px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out cursor-pointer h-[320px] ${getGridClass(index)}`}
                            >
                                <div className="block w-full h-full relative z-10">
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

                                    {/* Domain category chip — top-left */}
                                    {PROJECT_CATEGORIES[project.title] && (
                                        <div
                                            className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border"
                                            style={{
                                                color: PROJECT_CATEGORIES[project.title].color,
                                                backgroundColor: PROJECT_CATEGORIES[project.title].bg,
                                                borderColor: PROJECT_CATEGORIES[project.title].color + "50",
                                            }}
                                        >
                                            {PROJECT_CATEGORIES[project.title].label}
                                        </div>
                                    )}

                                    {/* GitHub link — always visible top-right */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold hover:bg-white/20 hover:border-white/40 transition-all"
                                        >
                                            <Github size={13} />
                                            Code
                                        </a>
                                    )}

                                    {/* Content Group (positioned at bottom-left) */}
                                    <div className="absolute inset-0 p-[30px] flex flex-col justify-end z-10">
                                        <div className="relative z-20">
                                            <h3 className={`font-bold text-white mb-[10px] leading-[1.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${isBig ? 'text-[36px]' : 'text-[24px]'}`}>
                                                {project.title}
                                            </h3>
                                            <p className={`text-white/90 font-normal mb-[15px] leading-[1.5] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] ${isBig ? 'text-[17px]' : 'text-[14px]'}`}>
                                                {project.intro || project.description}
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
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Projects Button */}
                <div className="mt-[48px] flex justify-center">
                    <Link
                        href="/projects"
                        className="group relative inline-flex items-center gap-2 px-[36px] py-[13px] border-2 border-[#20c997] text-[#20c997] font-bold rounded-full transition-all hover:bg-[#20c997] hover:text-white hover:shadow-[0_8px_24px_rgba(32,201,151,0.25)] hover:-translate-y-[2px] active:scale-95"
                    >
                        <span className="text-[15px]">View All Projects →</span>
                    </Link>
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
}
