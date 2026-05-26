"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, ArrowLeft, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#111318] font-sans text-white overflow-x-hidden selection:bg-[#F59E0B]/15">
            <header className="pt-24 pb-20 px-6 sm:px-10 max-w-[1240px] mx-auto">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Link href="/#projects" className="flex items-center gap-2 text-white/40 font-bold hover:text-[#F59E0B] hover:gap-3 transition-all mb-10 group w-fit">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[14px] uppercase tracking-widest">Back to Portfolio</span>
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-white">
                        All Projects <span className="inline-block hover:rotate-12 transition-transform cursor-help">📂</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
                        A comprehensive gallery of my work in <span className="text-[#F59E0B]">AI</span>, <span className="text-[#F59E0B]">ML</span>, and <span className="text-[#F59E0B]">Data Engineering</span>.
                    </p>
                    <div className="h-[2px] w-32 bg-[#F59E0B]/40 mt-10 rounded-full" />
                </motion.div>
            </header>

            <main className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id || project.title}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-[#1c2030] border border-white/[0.07] rounded-[24px] overflow-hidden cursor-pointer hover:border-[#F59E0B]/20 transition-all duration-500 h-[340px] flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                                {project.image ? (
                                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                                ) : (
                                    <div className="w-full h-full bg-[#F59E0B]/[0.04]" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-4 left-5 right-5">
                                    <h3 className="text-white text-[19px] font-bold tracking-tight leading-tight">{project.title}</h3>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-slate-400 text-[13px] line-clamp-2 mb-auto leading-relaxed">{project.intro || project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.slice(0, 3).map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 bg-[#F59E0B]/[0.07] border border-[#F59E0B]/15 text-[#F59E0B]/60 text-[10px] font-bold uppercase tracking-wider rounded-md">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-32 text-center">
                    <a href="https://github.com/YatinKande" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-[#F59E0B] text-[#111318] font-bold text-lg rounded-full hover:bg-[#F59E0B]/90 transition-all duration-300 shadow-[0_8px_24px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.3)] hover:-translate-y-1">
                        <Github className="w-6 h-6" />
                        <span>View More on GitHub</span>
                    </a>
                    <div className="flex justify-center gap-10 mt-16">
                        <a href="https://linkedin.com/in/yatin-kande" target="_blank" className="text-white/25 hover:text-[#F59E0B] transition-all hover:scale-125 duration-300"><Linkedin className="w-7 h-7" /></a>
                        <a href="https://github.com/YatinKande" target="_blank" className="text-white/25 hover:text-[#F59E0B] transition-all hover:scale-125 duration-300"><Github className="w-7 h-7" /></a>
                        <a href="mailto:yatink@umich.edu" className="text-white/25 hover:text-[#F59E0B] transition-all hover:scale-125 duration-300"><Mail className="w-7 h-7" /></a>
                    </div>
                </motion.div>
            </main>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
}
