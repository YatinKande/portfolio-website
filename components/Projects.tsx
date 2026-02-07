"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1a2e28] mb-4"
                    >
                        Featured <span className="text-[#ff6b6b]">Projects</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#20c997] mx-auto rounded-full mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#5a7069] max-w-2xl mx-auto font-medium"
                    >
                        A selection of my recent work in Generative AI, Computer Vision,
                        and Cloud-native Machine Learning systems.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {projects.map((project, idx) => {
                        // Define grid spans based on size property
                        const gridClasses = {
                            large: "md:col-span-2 md:row-span-2", // 2x2
                            tall: "md:col-span-1 md:row-span-2",  // 1x2
                            wide: "md:col-span-1 md:row-span-1",  // Actually, let's make it 2x1 for the 3rd one to fit
                        };

                        // Override for 3-item bento logic if 3 items
                        let gridClass = "";
                        if (idx === 0) gridClass = "md:col-span-2 md:row-span-2"; // Left big block
                        if (idx === 1) gridClass = "md:col-span-2 md:row-span-1"; // Right top wide
                        if (idx === 2) gridClass = "md:col-span-2 md:row-span-1"; // Right bottom wide

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                className={`${gridClass} relative group overflow-hidden rounded-[32px] bg-[#1a2e28]`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-60"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#1a2e28] to-[#20c997]/20" />
                                    )}
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e28] via-[#1a2e28]/40 to-transparent opacity-90" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 text-sm md:text-base line-clamp-2 max-w-lg font-medium">
                                            {project.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[12px] text-white font-mono"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div className="pt-4 flex items-center gap-4">
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-colors"
                                                >
                                                    <Github size={20} />
                                                </Link>
                                            )}
                                            <Link
                                                href={project.github || "#"}
                                                target="_blank"
                                                className="flex items-center gap-2 px-6 py-3 bg-[#20c997] hover:bg-[#1eb885] text-[#1a2e28] font-bold rounded-full transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300"
                                            >
                                                View Details
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                    >
                        <Link
                            href="https://github.com/YatinKande"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#cfe5df] hover:border-[#20c997] text-[#1a2e28] font-bold rounded-full transition-all hover:bg-[#f8fdfc] group shadow-sm hover:shadow-xl hover:shadow-[#20c997]/10"
                        >
                            View All Projects
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
