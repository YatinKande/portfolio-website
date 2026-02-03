"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { skills } from "@/lib/data";
import { Code2, Database, Brain, BarChart3, Presentation, Box, Cloud, Settings2 } from "lucide-react";

const categoryIcons: Record<string, any> = {
    "Programming Languages": "🐍",
    "Databases": "💾",
    "Machine Learning": "📊",
    "Deep Learning": "🧠",
    "Data Analytics": "📈",
    "Visualization & BI": "📊",
    "Libraries & Frameworks": "📚",
    "Cloud & DevOps": "☁️"
};

const categoryColors: Record<string, string> = {
    "Programming Languages": "#06B6D4",
    "Databases": "#3B82F6",
    "Machine Learning": "#8B5CF6",
    "Deep Learning": "#EC4899",
    "Data Analytics": "#10B981",
    "Visualization & BI": "#F59E0B",
    "Libraries & Frameworks": "#14B8A6",
    "Cloud & DevOps": "#6366F1"
};

const categoryGradients: Record<string, string> = {
    "Programming Languages": "linear-gradient(90deg, #06B6D4, #3B82F6)",
    "Databases": "linear-gradient(90deg, #3B82F6, #1D4ED8)",
    "Machine Learning": "linear-gradient(90deg, #8B5CF6, #6D28D9)",
    "Deep Learning": "linear-gradient(90deg, #EC4899, #BE185D)",
    "Data Analytics": "linear-gradient(90deg, #10B981, #059669)",
    "Visualization & BI": "linear-gradient(90deg, #F59E0B, #D97706)",
    "Libraries & Frameworks": "linear-gradient(90deg, #14B8A6, #0D9488)",
    "Cloud & DevOps": "linear-gradient(90deg, #6366F1, #4338CA)"
};

export default function ComprehensiveSkills() {
    const [mounted, setMounted] = useState(false);
    const categories = Object.keys(skills);
    const [activeCategory, setActiveCategory] = useState(categories[0] || "");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="animate-pulse bg-white/5 h-64 rounded-xl" />;

    const activeSkills = (skills as any)[activeCategory] || [];

    return (
        <div className="w-full">
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-primary/20 no-scrollbar">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg text-[12px] uppercase tracking-wide transition-all whitespace-nowrap border ${activeCategory === category
                            ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                            }`}
                        style={{
                            borderBottom: activeCategory === category ? `3px solid ${categoryColors[category] || "var(--primary)"}` : undefined
                        }}
                    >
                        <span className="mr-2">{categoryIcons[category]}</span>
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="contents"
                    >
                        {activeSkills.map((skill: any, idx: number) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-primary/5 border border-primary/10 rounded-xl p-4 hover:border-primary/30 transition-colors group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className="text-[14px] font-bold text-white group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="text-[16px] font-bold text-primary">
                                        {skill.level}%
                                    </span>
                                </div>

                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + idx * 0.05 }}
                                        className="h-full rounded-full"
                                        style={{
                                            background: categoryGradients[activeCategory] || "var(--primary)"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export function SkillsPreview() {
    const totalSkills = Object.values(skills).flat().length;
    const totalCategories = Object.keys(skills).length;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-10 w-32 animate-pulse bg-white/5 rounded" />;

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
                {/* 4x2 Dots Grid */}
                <div className="grid grid-cols-4 gap-1.5">
                    {Object.keys(skills).map((cat) => (
                        <div
                            key={cat}
                            className="w-2.5 h-2.5 rounded-full shadow-[0_0_5px_rgba(0,0,0,0.5)]"
                            style={{ backgroundColor: categoryColors[cat] || "var(--primary)" }}
                        />
                    ))}
                </div>
                <div>
                    <span className="text-[13px] text-primary/70 font-medium block">
                        {totalSkills}+ Skills | {totalCategories} Categories
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white/40 uppercase tracking-widest mt-1">
                <Settings2 className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Click to explore</span>
            </div>
        </div>
    );
}
