"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import BackButton from "@/components/BackButton";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                            Professional <span className="text-primary">Experience</span>
                        </h1>
                        <p className="text-muted-foreground">
                            {experience.length} positions in AI/ML and Data Analytics
                        </p>
                    </div>
                    <BackButton />
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experience.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold mb-2">{item.role}</h3>
                                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                        <Briefcase className="size-4" />
                                        {item.company}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                                        <Calendar className="size-4" />
                                        {item.period}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="size-4" />
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
