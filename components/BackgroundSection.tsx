"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";


export default function BackgroundSection() {
    return (
        <section id="experience" className="relative py-24 px-6 bg-[#0a0f1e] overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[32px] md:text-[42px] font-bold text-white mb-2 tracking-tight"
                    >
                        Experience & Education
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-[16px] md:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        My professional journey and academic background
                    </motion.p>
                </div>

                {/* Two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left: Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-xl bg-[#20c997]/15 text-[#20c997]">
                                <Briefcase className="size-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">
                                Experience
                            </h3>
                        </div>

                        <div className="space-y-6 relative">
                            <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#20c997] to-transparent opacity-30" />
                            {experience.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.12 }}
                                    className="relative pl-8 group"
                                >
                                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#20c997] shadow-[0_0_12px_rgba(32,201,151,0.6)] group-hover:scale-125 transition-transform" />
                                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/[0.05] transition-colors border-l-2 border-l-[#20c997]">
                                        <div className="flex flex-col gap-1 mb-3">
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#20c997] transition-colors leading-tight">
                                                {item.role}
                                            </h4>
                                            <span className="text-[#20c997] font-semibold text-sm">{item.company}</span>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                <span className="flex items-center gap-1 text-[#20c997] text-xs font-medium bg-[#20c997]/10 px-2 py-0.5 rounded-full">
                                                    <Calendar className="size-3" />{item.period}
                                                </span>
                                                <span className="flex items-center gap-1 text-gray-400 text-xs">
                                                    <MapPin className="size-3" />{item.location}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {item.bullets.slice(0, 3).map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex gap-2 text-gray-300 text-[13px] leading-relaxed">
                                                    <span className="text-[#20c997] font-bold mt-1.5 shrink-0">•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-xl bg-[#ff6b6b]/15 text-[#ff6b6b]">
                                <GraduationCap className="size-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-6 relative">
                            <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff6b6b] to-transparent opacity-30" />
                            {education.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    className="relative pl-8 group"
                                >
                                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#ff6b6b] shadow-[0_0_12px_rgba(255,107,107,0.6)] group-hover:scale-125 transition-transform" />
                                    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-white/[0.05] transition-colors border-l-2 border-l-[#ff6b6b]">
                                        <div className="flex flex-col gap-1 mb-3">
                                            <h4 className="text-base font-bold text-white group-hover:text-[#ff6b6b] transition-colors leading-tight">
                                                {item.degree}
                                            </h4>
                                            <span className="text-[#ff6b6b] font-semibold text-sm">{item.institution}</span>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                <span className="flex items-center gap-1 text-[#ff6b6b] text-xs font-medium bg-[#ff6b6b]/10 px-2 py-0.5 rounded-full">
                                                    <Calendar className="size-3" />{item.year}
                                                </span>
                                                <span className="flex items-center gap-1 text-gray-400 text-xs">
                                                    <MapPin className="size-3" />{item.location}
                                                </span>
                                            </div>
                                        </div>
                                        {item.achievements?.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.achievements.map((achievement, aIdx) => (
                                                    <span key={aIdx} className="bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 px-3 py-1 rounded-xl text-[#ff6b6b] font-bold text-xs">
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
