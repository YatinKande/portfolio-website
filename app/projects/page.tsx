"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Github, X, ArrowLeft, ExternalLink, Mail, Linkedin, ChevronRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPage() {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#f0f8f6] font-sans text-[#1a2e28] overflow-x-hidden selection:bg-[#20c997]/30">
            {/* Header Section */}
            <header className="pt-24 pb-20 px-6 sm:px-10 max-w-[1240px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-[#20c997] font-bold hover:gap-3 transition-all mb-10 group w-fit"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[14px] uppercase tracking-widest">Back to Portfolio</span>
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                        All Projects <span className="inline-block hover:rotate-12 transition-transform cursor-help">📂</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-[#5a7069] max-w-3xl leading-relaxed font-medium">
                        A comprehensive gallery of my work in <span className="text-[#20c997]">AI</span>, <span className="text-[#20c997]">ML</span>, and <span className="text-[#20c997]">Data Engineering</span>.
                    </p>
                    <div className="h-1.5 w-32 bg-[#20c997] mt-10 rounded-full" />
                </motion.div>
            </header>

            {/* Projects Grid */}
            <main className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {projects.map((project: any, idx) => (
                        <motion.div
                            key={project.id || project.title}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white border border-[#cfe5df] rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(26,46,40,0.1)] transition-all duration-500 h-[350px] flex flex-col"
                        >
                            {/* Card Media */}
                            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#20c997]/20 to-[#20c997]/5" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                                <div className="absolute bottom-4 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                                    <h3 className="text-white text-[20px] font-bold tracking-tight leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-[#5a7069] text-[14px] line-clamp-2 mb-auto leading-relaxed font-medium">
                                    {project.intro || project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.slice(0, 3).map((tag: any) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-[#f0f8f6] border border-[#20c997]/20 text-[#20c997] text-[10px] font-bold uppercase tracking-wider rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <a
                        href="https://github.com/YatinKande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#20c997] text-[#20c997] font-bold text-lg rounded-full hover:bg-[#20c997] hover:text-white transition-all duration-500 shadow-sm hover:shadow-[0_15px_30px_rgba(32,201,151,0.2)] hover:-translate-y-1.5"
                    >
                        <Github className="w-6 h-6" />
                        <span>View More on GitHub</span>
                    </a>

                    <div className="flex justify-center gap-10 mt-16 scale-110">
                        <a href="https://linkedin.com/in/yatin-kande" target="_blank" className="text-[#5a7069] hover:text-[#20c997] transition-all hover:scale-125 duration-300">
                            <Linkedin className="w-7 h-7" />
                        </a>
                        <a href="https://github.com/YatinKande" target="_blank" className="text-[#5a7069] hover:text-[#20c997] transition-all hover:scale-125 duration-300">
                            <Github className="w-7 h-7" />
                        </a>
                        <a href="mailto:yatink@umich.edu" className="text-[#5a7069] hover:text-[#20c997] transition-all hover:scale-125 duration-300">
                            <Mail className="w-7 h-7" />
                        </a>
                    </div>
                </motion.div>
            </main>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
}
