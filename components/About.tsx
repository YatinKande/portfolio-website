"use client";

import { motion } from "framer-motion";
import { personalInfo, projects, skills } from "@/lib/data";
import { Code2, Database, Brain, Coffee, CheckCircle2, User } from "lucide-react";

export default function About() {
    const stats = [
        { label: "Projects", value: projects.length, icon: CheckCircle2, color: "text-green-400" },
        { label: "Skills", value: Object.values(skills).flat().length, icon: Code2, color: "text-blue-400" },
        { label: "Models", value: "50+", icon: Brain, color: "text-purple-400" },
        { label: "Coffee", value: "∞", icon: Coffee, color: "text-yellow-400" },
    ];

    return (
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/20 transition-all h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <User className="size-5" />
                </div>
                <div>
                    <h3 className="font-heading font-bold text-lg">About Me</h3>
                    <p className="text-xs text-muted-foreground">Data Scientist & AI Engineer</p>
                </div>
            </div>

            {/* Bio Preview */}
            <div className="mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {personalInfo.bio}
                </p>
            </div>

            {/* Core Competencies */}
            <div className="mb-6">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                    {["System Design", "MLOps", "Data Engineering", "Full Stack"].map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-muted-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-primary/20 transition-colors"
                    >
                        <div className={`mb-1 ${stat.color}`}>
                            <stat.icon className="size-4" />
                        </div>
                        <div className="text-xl font-bold font-heading">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
