"use client";

import { motion } from "framer-motion";
import { Trophy, Cloud, BarChart3, Award, ArrowUpRight } from "lucide-react";
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => {
                        // Icon mapping
                        const isCloud = cert.name.toLowerCase().includes("cloud") || cert.name.toLowerCase().includes("oracle");
                        const isAnalytics = cert.name.toLowerCase().includes("analytics") || cert.name.toLowerCase().includes("google");

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
                                className="group relative bg-white border-2 border-[#cfe5df] p-6 lg:p-8 rounded-[24px] transition-all duration-300 flex items-center justify-between gap-6"
                            >
                                <div className="flex items-center gap-5">
                                    {/* Icon Box */}
                                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#f0f9f7] flex items-center justify-center text-[#20c997] group-hover:bg-[#20c997] group-hover:text-white transition-colors duration-300">
                                        <Icon size={32} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-bold text-[#1a2e28] leading-tight mb-1 group-hover:text-[#20c997] transition-colors">
                                            {cert.name}
                                        </h3>
                                        <span className="text-[#5a7069] font-medium text-sm">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                </div>

                                {/* Year Badge */}
                                <div className="hidden sm:flex flex-col items-end shrink-0">
                                    <span className="text-[12px] font-bold text-[#ff6b6b] uppercase tracking-widest bg-[#fff1f1] px-3 py-1 rounded-full mb-2">
                                        {cert.year}
                                    </span>
                                    <ArrowUpRight className="text-[#cfe5df] group-hover:text-[#20c997] transition-colors" size={24} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
