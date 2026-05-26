"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Clock, CheckCircle2 } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 bg-[#111318] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#F59E0B]/[0.03] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center mb-16 px-4">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-3 bg-[#F59E0B]/10 rounded-2xl text-[#F59E0B] mb-6">
                        <Trophy size={32} />
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                        Professional Certifications
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "60px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-[2px] bg-[#F59E0B]/50 rounded-full"
                    />
                </div>

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
                                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.22)")}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                            >
                                {/* Amber left accent strip */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-[22px] bg-[#F59E0B]/40 opacity-50 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                        <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center bg-[#F59E0B]/10 text-[#F59E0B] group-hover:bg-[#F59E0B]/15 transition-all duration-300">
                                            <Award size={28} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white leading-tight mb-1">{cert.name}</h3>
                                            <div className="flex items-center gap-1.5">
                                                <span className="inline-block w-2 h-2 rounded-full shrink-0 bg-[#F59E0B]/40" />
                                                <span className="text-slate-400 font-medium text-sm">{cert.issuer}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="shrink-0">
                                        {isInProgress ? (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#F59E0B]/60 uppercase tracking-widest bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
                                                <Clock size={10} />
                                                In Progress
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#F59E0B]/80 uppercase tracking-widest bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
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
