"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import BackButton from "@/components/BackButton";
import { education } from "@/lib/data";

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                            Education & <span className="text-primary">Qualifications</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Academic background in Data Science
                        </p>
                    </div>
                    <BackButton />
                </div>

                {/* Education List */}
                <div className="space-y-6">
                    {education.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <GraduationCap className="size-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-heading font-bold mb-2">
                                        {item.degree}
                                    </h3>
                                    <div className="text-lg text-primary font-semibold mb-2">
                                        {item.field}
                                    </div>
                                    <div className="text-muted-foreground mb-2">
                                        {item.institution}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="size-4" />
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
