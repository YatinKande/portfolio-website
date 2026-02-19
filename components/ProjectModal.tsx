"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Mail, Check } from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
    project: any;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-[#0a1512]/90 backdrop-blur-xl"
                />

                <motion.div
                    layoutId={project.id || project.title}
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 40 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-[40px] shadow-2xl flex flex-col lg:flex-row"
                >
                    {/* Modal Left - Sticky Image Sidebar */}
                    <div className="lg:w-[40%] relative bg-[#f0f8f6] min-h-[300px] lg:min-h-full">
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/95 hidden lg:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 to-transparent lg:hidden" />

                        <div className="absolute top-10 left-10 z-20">
                            <div className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-[#cfe5df] rounded-full shadow-sm">
                                <span className="text-[12px] font-bold text-[#20c997] uppercase tracking-[3px]">Project Spotlight</span>
                            </div>
                        </div>
                    </div>

                    {/* Modal Right - Content */}
                    <div className="flex-1 overflow-y-auto p-10 md:p-16 relative flex flex-col custom-scrollbar bg-white">
                        <button
                            onClick={onClose}
                            className="absolute top-10 right-10 p-3 rounded-full bg-[#f0f8f6] text-[#1a2e28] hover:bg-[#ff6b35] hover:text-white transition-all transform hover:rotate-90 shadow-sm z-30"
                        >
                            <X size={26} />
                        </button>

                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-[#1a2e28]">
                                {project.fullTitle || project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2.5">
                                {project.tech.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 bg-[#f0f8f6] border border-[#20c997]/30 text-[#20c997] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12 flex-1">
                            {project.description && (
                                <section>
                                    <h4 className="text-[12px] font-bold text-[#20c997] uppercase tracking-[4px] mb-5 flex items-center gap-4">
                                        <span>Overview</span>
                                        <div className="h-[1px] flex-1 bg-[#cfe5df]" />
                                    </h4>
                                    <p className="text-[16px] text-[#5a7069] leading-[1.8] font-medium">
                                        {project.description}
                                    </p>
                                </section>
                            )}

                            {project.features && (
                                <section>
                                    <h4 className="text-[12px] font-bold text-[#20c997] uppercase tracking-[4px] mb-6 flex items-center gap-4">
                                        <span>Key Features</span>
                                        <div className="h-[1px] flex-1 bg-[#cfe5df]" />
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {project.features.map((feature: string, i: number) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="flex items-start gap-4 p-4 bg-[#f0f8f6]/50 rounded-2xl border border-[#cfe5df] border-dashed hover:border-solid hover:bg-white hover:shadow-md transition-all duration-300"
                                            >
                                                <div className="w-6 h-6 shrink-0 rounded-full bg-[#20c997]/20 flex items-center justify-center mt-0.5">
                                                    <Check className="w-4 h-4 text-[#20c997]" />
                                                </div>
                                                <span className="text-[14px] text-[#1a2e28] font-medium leading-relaxed">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {project.techDetails && (
                                <article>
                                    <h4 className="text-[12px] font-bold text-[#20c997] uppercase tracking-[4px] mb-6 flex items-center gap-4">
                                        <span>Technologies Used</span>
                                        <div className="h-[1px] flex-1 bg-[#cfe5df]" />
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {project.techDetails.map((td: any) => (
                                            <div key={td.name} className="flex flex-col gap-2 group/tech">
                                                <h5 className="text-[14px] font-bold text-[#1a2e28] group-hover/tech:text-[#20c997] transition-colors">{td.name}</h5>
                                                <div className="h-0.5 w-6 bg-[#20c997] group-hover/tech:w-12 transition-all" />
                                                <p className="text-[13px] text-[#5a7069] leading-relaxed italic">{td.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            )}
                        </div>

                        <div className="mt-20 pt-10 border-t border-[#f0f8f6] flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <a href="mailto:yatink@umich.edu" className="p-3 bg-white border border-[#cfe5df] rounded-full text-[#5a7069] hover:bg-[#20c997] hover:text-white transition-all shadow-sm">
                                    <Mail size={20} />
                                </a>
                                <p className="text-[13px] font-bold text-[#5a7069]">Interested in this tech?</p>
                            </div>

                            <div className="flex items-center gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#20c997] text-[#20c997] font-bold rounded-2xl hover:bg-[#20c997] hover:text-white transition-all group scale-105 active:scale-100 shadow-[0_10px_20px_rgba(32,201,151,0.15)]"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="tracking-wide">View on GitHub</span>
                                        <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f0f8f6;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cfe5df;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #20c997;
                }
            `}</style>
        </AnimatePresence>
    );
}
