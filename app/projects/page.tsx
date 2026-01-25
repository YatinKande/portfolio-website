"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import BackButton from "@/components/BackButton";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                            Projects & <span className="text-primary">Portfolio</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Real-world applications of ML, CV, and Data Analytics
                        </p>
                    </div>
                    <BackButton />
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="font-heading font-bold text-xl mb-1">{project.title}</h3>
                                    {project.featured && (
                                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/20 rounded text-xs text-primary">
                                            <Star className="size-3" />
                                            Featured
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 py-1 text-xs text-muted-foreground">
                                            +{project.tech.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Links with GitHub cat emoji */}
                                <div className="flex items-center gap-3">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <Github className="size-4" />
                                            <span>Code 🐱</span>
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="size-4" />
                                            <span>Demo</span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
