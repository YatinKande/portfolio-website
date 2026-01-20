"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const skillList = Object.values(skills).flat();

export default function Skills() {
    return (
        <section id="skills" className="py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Tech Stack
                </h2>
                <p className="text-muted-foreground">
                    The tools I use to build the future.
                </p>
            </div>

            <div className="relative flex w-full flex-col gap-8">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                        className="flex gap-8 whitespace-nowrap px-8"
                    >
                        {[...skillList, ...skillList].map((skill, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-lg font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default backdrop-blur-sm"
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                        className="flex gap-8 whitespace-nowrap px-8"
                    >
                        {[...skillList, ...skillList].map((skill, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-lg font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default backdrop-blur-sm"
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Overlay Gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
}
