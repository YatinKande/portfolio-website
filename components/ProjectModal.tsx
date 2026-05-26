"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Mail, Check } from "lucide-react";
import Image from "next/image";
import { type Project } from "@/lib/data";

interface ProjectModalProps { project: Project; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-8">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

                <motion.div
                    layoutId={project.id || project.title}
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 40 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] overflow-hidden bg-[#111318] border border-white/[0.08] rounded-t-[24px] sm:rounded-[32px] shadow-2xl flex flex-col lg:flex-row"
                >
                    {/* Image Sidebar */}
                    <div className="lg:w-[38%] relative bg-[#0d0f14] min-h-[160px] sm:min-h-[220px] lg:min-h-full">
                        {project.image && <Image src={project.image} alt={project.title} fill className="object-cover opacity-60" />}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111318] hidden lg:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111318] to-transparent lg:hidden" />
                        <div className="absolute top-8 left-8 z-20">
                            <div className="px-3 py-1.5 bg-[#F59E0B]/10 backdrop-blur-sm border border-[#F59E0B]/20 rounded-full">
                                <span className="text-[11px] font-bold text-[#F59E0B]/70 uppercase tracking-[3px]">Project Spotlight</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 relative flex flex-col modal-scrollbar bg-[#111318]">
                        <button onClick={onClose} className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2.5 rounded-full bg-white/[0.07] text-white/60 hover:bg-[#F59E0B]/15 hover:text-[#F59E0B] transition-all transform hover:rotate-90 z-30">
                            <X size={22} />
                        </button>

                        <div className="mb-6 sm:mb-10 pt-6 sm:pt-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 tracking-tight leading-tight text-white">{project.fullTitle || project.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tag: string) => (
                                    <span key={tag} className="px-3 py-1 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B]/80 text-[11px] font-bold uppercase tracking-wider rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10 flex-1">
                            {project.description && (
                                <section>
                                    <h4 className="text-[11px] font-bold text-[#F59E0B]/50 uppercase tracking-[4px] mb-4 flex items-center gap-4">
                                        <span>Overview</span><div className="h-[1px] flex-1 bg-white/10" />
                                    </h4>
                                    <p className="text-[15px] text-slate-300 leading-[1.8] font-medium">{project.description}</p>
                                </section>
                            )}

                            {project.features && (
                                <section>
                                    <h4 className="text-[11px] font-bold text-[#F59E0B]/50 uppercase tracking-[4px] mb-5 flex items-center gap-4">
                                        <span>Key Features</span><div className="h-[1px] flex-1 bg-white/10" />
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.features.map((feature: string, i: number) => (
                                            <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start gap-3 p-4 bg-[#F59E0B]/[0.04] rounded-2xl border border-[#F59E0B]/10 hover:border-[#F59E0B]/20 hover:bg-[#F59E0B]/[0.07] transition-all duration-300">
                                                <div className="w-5 h-5 shrink-0 rounded-full bg-[#F59E0B]/15 flex items-center justify-center mt-0.5">
                                                    <Check className="w-3 h-3 text-[#F59E0B]/70" />
                                                </div>
                                                <span className="text-[13px] text-slate-300 font-medium leading-relaxed">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {project.techDetails && (
                                <article>
                                    <h4 className="text-[11px] font-bold text-[#F59E0B]/50 uppercase tracking-[4px] mb-5 flex items-center gap-4">
                                        <span>Technologies Used</span><div className="h-[1px] flex-1 bg-white/10" />
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {project.techDetails.map((td) => (
                                            <div key={td.name} className="flex flex-col gap-2 group/tech">
                                                <h5 className="text-[14px] font-bold text-white group-hover/tech:text-[#F59E0B] transition-colors">{td.name}</h5>
                                                <div className="h-[1px] w-6 bg-[#F59E0B]/30 group-hover/tech:w-12 transition-all" />
                                                <p className="text-[13px] text-slate-400 leading-relaxed">{td.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            )}
                        </div>

                        <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                            <div className="flex items-center gap-4">
                                <a href="mailto:yatink@umich.edu" className="p-2.5 bg-[#F59E0B]/10 border border-[#F59E0B]/15 rounded-full text-[#F59E0B]/60 hover:bg-[#F59E0B]/20 hover:text-[#F59E0B] transition-all">
                                    <Mail size={18} />
                                </a>
                                <p className="text-[13px] font-bold text-slate-400">Interested in this tech?</p>
                            </div>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3 bg-[#F59E0B] text-[#111318] font-bold rounded-xl hover:bg-[#F59E0B]/90 transition-all group shadow-[0_8px_20px_rgba(245,158,11,0.2)]">
                                    <Github className="w-4 h-4" />
                                    <span className="tracking-wide text-sm">View on GitHub</span>
                                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
            <style jsx global>{`
                .modal-scrollbar::-webkit-scrollbar { width: 6px; }
                .modal-scrollbar::-webkit-scrollbar-track { background: #111318; }
                .modal-scrollbar::-webkit-scrollbar-thumb { background: rgba(245,158,11,0.2); border-radius: 4px; }
                .modal-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(245,158,11,0.35); }
            `}</style>
        </AnimatePresence>
    );
}
