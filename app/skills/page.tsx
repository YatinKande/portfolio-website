"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench, Globe, Server, BarChart3 } from "lucide-react";
import BackButton from "@/components/BackButton";
import { skills } from "@/lib/data";

const iconMap: Record<string, any> = {
    "Programming Languages": Code2,
    "Data Analysis": BarChart3,
    "Machine Learning": Database,
    "Deep Learning & CV": Server,
    "Visualization & BI": Globe,
    "Libraries & Frameworks": Wrench,
    "Databases": Database,
    "Cloud & DevOps": Cloud,
};

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                            Skills & <span className="text-primary">Technologies</span>
                        </h1>
                        <p className="text-muted-foreground">
                            {Object.values(skills).flat().length}+ technologies across multiple domains
                        </p>
                    </div>
                    <BackButton />
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], idx) => {
                        const Icon = iconMap[category] || Code2;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Icon className="size-6" />
                                    </div>
                                    <h3 className="font-heading font-bold text-lg">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
