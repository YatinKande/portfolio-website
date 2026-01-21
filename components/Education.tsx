"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Qualifications 🎓
                    </h2>
                    <p className="text-muted-foreground">
                        My academic background and professional certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <GraduationCap className="text-primary size-6" />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-card border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold">{edu.institution}</h4>
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{edu.period || "Graduated"}</span>
                                    </div>
                                    <div className="text-foreground/90 font-medium mb-1">{edu.degree}</div>
                                    <div className="text-sm text-muted-foreground">{edu.field}</div>
                                    <div className="text-xs text-muted-foreground mt-2">{edu.location}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <Award className="text-primary size-6" />
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>
                        <div className="space-y-8">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-card border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors"
                                >
                                    <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Issued by <span className="text-foreground">{cert.issuer}</span></span>
                                        {cert.year && <span className="font-mono text-xs bg-white/5 px-2 py-1 rounded">{cert.year}</span>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
