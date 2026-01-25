"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

export default function CareerTimeline() {
    const timeline = [
        {
            year: "2024",
            type: "education",
            title: "MS Data Science",
            subtitle: "University of Michigan–Dearborn",
            current: true,
        },
        {
            year: "2024",
            type: "work",
            title: "Data Analyst Intern",
            subtitle: "DataZymes Inc",
        },
        {
            year: "2023",
            type: "education",
            title: "PG Program Data Science",
            subtitle: "Vellore Institute of Technology",
        },
        {
            year: "2022",
            type: "work",
            title: "ML Intern",
            subtitle: "SmartKnower",
        },
        {
            year: "2022",
            type: "education",
            title: "BS Data Science",
            subtitle: "Jain University",
        },
    ];

    return (
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary animate-pulse" />
                Career Timeline
            </h3>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />

                {/* Timeline items */}
                <div className="space-y-6">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative pl-12"
                        >
                            {/* Icon */}
                            <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${item.type === "education" ? "bg-purple-500/20 text-purple-400" : "bg-primary/20 text-primary"
                                } ${item.current ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}>
                                {item.type === "education" ? (
                                    <GraduationCap className="size-4" />
                                ) : (
                                    <Briefcase className="size-4" />
                                )}
                            </div>

                            {/* Content */}
                            <div>
                                <div className="text-xs text-muted-foreground font-mono mb-1">{item.year}</div>
                                <div className="font-semibold text-sm">{item.title}</div>
                                <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                                {item.current && (
                                    <div className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                                        Current
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
