"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Clock, CheckCircle2 } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 bg-[#111318] relative overflow-hidden">
            {/* Soft white depth glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-white/[0.07] rounded-2xl text-white mb-6"
                    >
                        <Trophy size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
                    >
                        Professional Certifications
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "60px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[2px] bg-white/25 rounded-full"
                    />
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => {
                        const isInProgress = cert.year === "In Progress";

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative bg-[#1c2030] border border-white/[0.07] p-6 lg:p-8 rounded-[24px] transition-all duration-300 overflow-hidden"
                                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                            >
                                {/* White left accent strip */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-[22px] bg-white/20 opacity-40 group-hover:opacity-80 transition-opacity" />

                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                        {/* Icon Box */}
                                        <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center bg-white/[0.07] text-white/70 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                                            <Award size={28} />
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white leading-tight mb-1">
                                                {cert.name}
                                            </h3>
                                            <div className="flex items-center gap-1.5">
                                                <span className="inline-block w-2 h-2 rounded-full shrink-0 bg-white/30" />
                                                <span className="text-slate-400 font-medium text-sm">{cert.issuer}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="shrink-0 flex flex-col items-end gap-2">
                                        {isInProgress ? (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-white/50 uppercase tracking-widest bg-white/[0.07] px-3 py-1 rounded-full border border-white/10">
                                                <Clock size={10} />
                                                In Progress
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-white/70 uppercase tracking-widest bg-white/[0.07] px-3 py-1 rounded-full border border-white/15">
                                                <CheckCircle2 size={10} />
                                                {cert.year}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
