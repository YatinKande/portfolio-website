"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Code2, Sparkles } from "lucide-react";

export default function Skills() {
    // Get top skills from each category for preview
    const topSkills = Object.entries(skills).slice(0, 3).flatMap(([category, items]) =>
        (items as any[]).slice(0, 3).map(skill => ({ skill, category }))
    );

    return (
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/20 transition-all h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Code2 className="size-5" />
                </div>
                <div>
                    <h3 className="font-heading font-bold text-lg">Tech Stack</h3>
                    <p className="text-xs text-muted-foreground">{Object.values(skills).flat().length}+ Technologies</p>
                </div>
            </div>

            {/* Skills Preview */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {topSkills.map(({ skill, category }, idx) => (
                        <motion.span
                            key={`${category}-${skill.name}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                        >
                            {skill.name}
                        </motion.span>
                    ))}
                    <span className="px-3 py-1 text-xs text-primary flex items-center gap-1">
                        <Sparkles className="size-3" />
                        +{Object.values(skills).flat().length - topSkills.length} more
                    </span>
                </div>
            </div>

            {/* Categories */}
            <div className="space-y-3 pt-4 border-t border-white/5">
                {Object.entries(skills).slice(0, 4).map(([category, items]) => (
                    <div key={category} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category}</span>
                        <span className="text-xs text-muted-foreground font-mono">{items.length} skills</span>
                    </div>
                ))}
                {Object.keys(skills).length > 4 && (
                    <div className="text-xs text-primary text-center pt-2">
                        +{Object.keys(skills).length - 4} more categories
                    </div>
                )}
            </div>
        </div>
    );
}
