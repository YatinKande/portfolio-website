"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "./ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const featuredTitles = ["AWS Docs RAG Bot", "Automotive Multimodal RAG", "Dataset Concierge Bot", "Kinesis Key Entry", "SmartSoil Crop Recommender", "Lip-Read AI using LipNet"];
    const sortedProjects = featuredTitles.map(title => projects.find(p => p.title === title)).filter((p): p is Project => p !== undefined);

    const getGridClass = (index: number) => {
        switch (index) {
            case 0: return "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:h-[420px]";
            case 1: return "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:h-[200px]";
            case 2: return "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 lg:h-[200px]";
            case 3: return "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 lg:h-[200px]";
            case 4: return "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 lg:h-[200px]";
            case 5: return "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4 lg:h-[200px]";
            default: return "lg:h-[200px]";
        }
    };

    return (
        <section id="projects" className="py-[80px] bg-[#0a0f1e] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-[1240px] px-5 mx-auto relative z-10">
                <div className="text-center mb-12">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[32px] md:text-[42px] font-bold text-white mb-4 tracking-tight">
                        Featured Projects
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-400 text-[16px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed">
                        Real-world AI systems — RAG pipelines, computer vision, serverless ML and beyond
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto">
                    {sortedProjects.map((project, index) => {
                        const isBig = index === 0;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 30px rgba(245,158,11,0.07)` }}
                                onClick={() => setSelectedProject(project)}
                                className={`group relative overflow-hidden rounded-[16px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer h-[320px] ${getGridClass(index)}`}
                            >
                                <div className="block w-full h-full relative z-10">
                                    {project.image && (
                                        <div className="absolute inset-0 z-0">
                                            <Image src={project.image} alt={project.title} fill className="object-cover" priority={isBig} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold hover:bg-white/20 hover:border-white/40 transition-all">
                                            <Github size={13} />Code
                                        </a>
                                    )}

                                    <div className="absolute inset-0 p-[30px] flex flex-col justify-end z-10">
                                        <div className="relative z-20">
                                            <h3 className={`font-bold text-white mb-[10px] leading-[1.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${isBig ? 'text-[36px]' : 'text-[24px]'}`}>{project.title}</h3>
                                            <p className={`text-white/80 font-normal mb-[15px] leading-[1.5] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] ${isBig ? 'text-[17px]' : 'text-[14px]'}`}>{project.intro || project.description}</p>
                                            <div className="flex flex-wrap gap-[8px]">
                                                {project.tech.slice(0, 3).map((t: string) => (
                                                    <span key={t} className="px-[14px] py-[6px] rounded-[20px] bg-white/15 border border-white/25 text-[11px] font-semibold text-white uppercase">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-[48px] flex justify-center">
                    <Link href="/projects" className="group relative inline-flex items-center gap-2 px-[36px] py-[13px] border border-[#F59E0B]/40 text-[#F59E0B] font-bold rounded-full transition-all hover:bg-[#F59E0B] hover:text-[#111318] hover:border-[#F59E0B] hover:shadow-[0_8px_24px_rgba(245,158,11,0.2)] hover:-translate-y-[2px] active:scale-95">
                        <span className="text-[15px]">View All Projects →</span>
                    </Link>
                </div>
            </div>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}
