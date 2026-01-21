"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Experience 💼
                    </h2>
                    <p className="text-muted-foreground">
                        My professional journey so far.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experience.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 border-l-2 border-white/10 hover:border-primary transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                            <div className="mb-1 text-sm text-primary font-mono">{item.period}</div>
                            <h3 className="text-xl font-bold">{item.role}</h3>
                            <div className="text-muted-foreground mb-2 flex justify-between items-center">
                                <span>{item.company}</span>
                                <span className="text-sm">{item.location}</span>
                            </div>

                            {item.description && (
                                <p className="text-muted-foreground/80 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                            )}

                            {item.highlights && item.highlights.length > 0 && (
                                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground/80 leading-relaxed">
                                    {item.highlights.map((point: string, i: number) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
