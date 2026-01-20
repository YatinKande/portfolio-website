"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
    return (
        <section id="projects" className="py-32">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            Selected Works
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md">
                            A curated collection of projects pushing the boundaries of AI and Engineering.
                        </p>
                    </div>
                    <Link
                        href="https://github.com/YatinKande"
                        target="_blank"
                        className="group flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    >
                        View All GitHub <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={cn(
                                "group relative bg-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col",
                                idx === 0 || idx === 3 ? "lg:col-span-2" : "col-span-1"
                            )}
                        >
                            {/* Project Image Background */}
                            {project.image && (
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full p-8">
                                <div className="flex justify-between items-start mb-auto">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:scale-110 transition-all cursor-pointer z-20"
                                    >
                                        <Github className="size-6 text-foreground" />
                                    </Link>
                                </div>

                                <div className="mt-auto space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full text-xs font-medium text-primary shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground/90 leading-relaxed line-clamp-3 md:line-clamp-none text-sm md:text-base">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
