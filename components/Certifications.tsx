"use client";

import { motion } from "framer-motion";
import { Trophy, Cloud, BarChart3, Award, ArrowUpRight, Clock } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 bg-[#f8fdfc]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-[#20c997]/10 rounded-2xl text-[#20c997] mb-6"
                    >
                        <Trophy size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1a2e28] text-center mb-4"
                    >
                        Professional <span className="text-[#ff6b6b]">Certifications</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#20c997] rounded-full"
                    />
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => {
                        const isCloud = cert.name.toLowerCase().includes("cloud") || cert.name.toLowerCase().includes("oracle");
                        const isAnalytics = cert.name.toLowerCase().includes("analytics") || cert.name.toLowerCase().includes("google");
                        const isInProgress = cert.year === "In Progress";
                        const progress = (cert as { progress?: number }).progress;
                        const expectedCompletion = (cert as { expectedCompletion?: string }).expectedCompletion;

                        const Icon = isCloud ? Cloud : (isAnalytics ? BarChart3 : Award);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    borderColor: "#20c997",
                                    boxShadow: "0 10px 40px -10px rgba(32, 201, 151, 0.15)"
                                }}
                                className="group relative bg-white border-2 border-[#cfe5df] p-6 lg:p-8 rounded-[24px] transition-all duration-300"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                        {/* Icon Box */}
                                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f0f9f7] flex items-center justify-center text-[#20c997] group-hover:bg-[#20c997] group-hover:text-white transition-colors duration-300">
                                            <Icon size={28} />
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-[#1a2e28] leading-tight mb-1 group-hover:text-[#20c997] transition-colors">
                                                {cert.name}
                                            </h3>
                                            <span className="text-[#5a7069] font-medium text-sm">{cert.issuer}</span>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="shrink-0 flex flex-col items-end gap-1">
                                        {isInProgress ? (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                                                <Clock size={10} />
                                                In Progress
                                            </span>
                                        ) : (
                                            <span className="text-[12px] font-bold text-[#ff6b6b] uppercase tracking-widest bg-[#fff1f1] px-3 py-1 rounded-full">
                                                {cert.year}
                                            </span>
                                        )}
                                        <ArrowUpRight className="text-[#cfe5df] group-hover:text-[#20c997] transition-colors self-end" size={20} />
                                    </div>
                                </div>

                                {/* Progress indicator for in-progress certs */}
                                {isInProgress && progress !== undefined && (
                                    <div className="mt-2">
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-[11px] font-semibold text-[#5a7069] uppercase tracking-wider">
                                                {progress}% complete
                                            </span>
                                            {expectedCompletion && (
                                                <span className="text-[11px] font-semibold text-[#20c997] bg-[#20c997]/10 px-2 py-0.5 rounded-full">
                                                    Expected {expectedCompletion}
                                                </span>
                                            )}
                                        </div>
                                        <div className="h-1.5 w-full bg-[#cfe5df] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 + 0.3 }}
                                                className="h-full bg-gradient-to-r from-[#20c997] to-[#ff6b6b] rounded-full"
                                            />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
