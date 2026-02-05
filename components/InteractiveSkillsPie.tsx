"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillCategory {
    id: number;
    name: string;
    color: string;
    skills: string[];
}

const SKILLS_DATA: SkillCategory[] = [
    {
        id: 1,
        name: "Programming Languages",
        color: "#06B6D4",
        skills: ["Python", "SQL", "R", "JavaScript"]
    },
    {
        id: 2,
        name: "Databases",
        color: "#3B82F6",
        skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "DynamoDB"]
    },
    {
        id: 3,
        name: "Machine Learning",
        color: "#8B5CF6",
        skills: ["Classification", "Regression", "Clustering", "Model Evaluation", "Hyperparameter Tuning"]
    },
    {
        id: 4,
        name: "Deep Learning",
        color: "#EC4899",
        skills: ["CNNs", "RNNs", "LSTMs", "Transformers", "YOLO", "Object Detection"]
    },
    {
        id: 5,
        name: "Data Analytics",
        color: "#10B981",
        skills: ["Exploratory Analysis", "Data Validation", "Feature Engineering", "Hypothesis Testing", "A/B Testing"]
    },
    {
        id: 6,
        name: "Visualization & BI",
        color: "#F59E0B",
        skills: ["Tableau", "Power BI", "Qlik Sense", "Plotly", "Dash", "Matplotlib", "Excel"]
    },
    {
        id: 7,
        name: "Libraries & Frameworks",
        color: "#14B8A6",
        skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "OpenCV", "FastAPI"]
    },
    {
        id: 8,
        name: "Cloud & DevOps",
        color: "#6366F1",
        skills: ["AWS S3", "AWS Lambda", "AWS Lex", "AWS Rekognition", "AWS DynamoDB", "Docker", "Git"]
    }
];

export default function InteractiveSkillsPie() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Donut Specs
    const size = 320;
    const strokeWidth = 35;
    const radius = 102.5; // (size - strokeWidth) / 2 = (320-35)/2 = 142.5? No, specs say outer 120, inner 85. 
    // Let's use the provided specs: viewbox 320, size 280.
    // Viewbox is 0 0 320 320. If circle size is 280, it's centered.
    // Outer radius 120, inner 85. Centered at 160.
    // (120 + 85) / 2 = 102.5 (center of stroke)
    // Stroke width = 120 - 85 = 35. Correct.
    const arcRadius = 102.5;
    const circumference = 2 * Math.PI * arcRadius;
    const segmentLength = circumference / 8;

    // Reset logic
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setActiveId(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="glass-card w-full p-12 rounded-[16px] border border-cyan-400/30 bg-cyan-400/10 flex flex-col items-center gap-12 overflow-hidden shadow-2xl">

            {/* SECTION 1: DONUT CHART */}
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                    <svg width="280" height="280" viewBox="0 0 320 320" className="transform -rotate-90">
                        {SKILLS_DATA.map((cat, idx) => {
                            const offset = idx * segmentLength;
                            const isHighlighted = activeId === cat.id;

                            return (
                                <motion.circle
                                    key={cat.id}
                                    cx="160"
                                    cy="160"
                                    r={arcRadius}
                                    fill="none"
                                    stroke={cat.color}
                                    strokeWidth={isHighlighted ? 40 : 35}
                                    strokeDasharray={`${segmentLength - 2} ${circumference - (segmentLength - 2)}`}
                                    strokeDashoffset={-offset}
                                    strokeLinecap="round"
                                    initial={{ opacity: 0.9 }}
                                    animate={{
                                        opacity: isHighlighted || activeId === null ? 1 : 0.4,
                                        scale: isHighlighted ? 1.02 : 1,
                                        strokeWidth: isHighlighted ? 40 : 35,
                                        filter: isHighlighted ? `brightness(1.3) drop-shadow(0 0 12px ${cat.color})` : 'brightness(1)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{ cursor: 'pointer', transformOrigin: 'center' }}
                                    onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
                                />
                            );
                        })}
                    </svg>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                        <span className="text-[16px] font-bold text-white uppercase tracking-[2px] leading-tight">Technical</span>
                        <span className="text-[16px] font-bold text-white uppercase tracking-[2px] leading-tight mt-1">Skills</span>
                    </div>
                </div>

                <p className="text-[13px] text-white/50 font-medium uppercase tracking-wider">
                    Click a category to view skills
                </p>
            </div>

            {/* SECTION 2: SKILLS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-[1100px] mt-8">
                {SKILLS_DATA.map((cat) => {
                    const isActive = activeId === cat.id;
                    const isDimmed = activeId !== null && activeId !== cat.id;

                    return (
                        <motion.div
                            key={cat.id}
                            onClick={() => setActiveId(cat.id)}
                            animate={{
                                opacity: isActive ? 1 : (isDimmed ? 0.2 : 0.3),
                                y: isActive ? -4 : 0,
                                borderColor: isActive ? `${cat.color}99` : `${cat.color}44`,
                                boxShadow: isActive ? `0 4px 20px ${cat.color}33` : 'none'
                            }}
                            transition={{ duration: 0.3 }}
                            className={`relative p-6 rounded-[12px] border bg-opacity-10 min-h-[160px] cursor-pointer transition-all duration-300 backdrop-blur-md overflow-hidden`}
                            style={{
                                backgroundColor: `${cat.color}11`,
                                borderColor: `${cat.color}44`
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-[14px] h-[14px] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                                    style={{ backgroundColor: cat.color }}
                                />
                                <h3 className="text-[14px] font-bold text-white uppercase tracking-[1.5px] whitespace-nowrap">
                                    {cat.name}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {cat.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={isActive ? { scale: 1.05, filter: 'brightness(1.2)' } : {}}
                                        className={`px-3.5 py-2 rounded-full border text-[12px] font-medium text-white/90 transition-all duration-200 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                                        style={{
                                            backgroundColor: `${cat.color}22`,
                                            borderColor: `${cat.color}44`
                                        }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
