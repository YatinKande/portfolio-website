"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    // Show only the latest 2 experiences in preview
    const previewExperiences = experience.slice(0, 2);

    return (
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/20 transition-all h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Briefcase className="size-5" />
                </div>
                <div>
                    <h3 className="font-heading font-bold text-lg">Experience</h3>
                    <p className="text-xs text-muted-foreground">{experience.length} Positions</p>
                </div>
            </div>

            {/* Timeline Preview */}
            <div className="space-y-4">
                {previewExperiences.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-6 border-l-2 border-white/10 hover:border-primary/30 transition-colors pb-4 last:pb-0"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="size-3 text-primary" />
                            <span className="text-xs text-primary font-mono">{item.period}</span>
                        </div>
                        <h4 className="font-bold text-sm mb-1">{item.role}</h4>
                        <div className="text-xs text-muted-foreground mb-2">{item.company}</div>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* View More */}
            {experience.length > 2 && (
                <div className="pt-4 border-t border-white/5 mt-4">
                    <div className="text-xs text-primary text-center">
                        +{experience.length - 2} more positions
                    </div>
                </div>
            )}
        </div>
    );
}
