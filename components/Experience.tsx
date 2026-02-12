"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <div className="bg-white border border-[#cfe5df] p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
                <div className="p-2.5 bg-[#20c997]/10 rounded-xl text-[#20c997]">
                    <Briefcase className="size-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a2e28]">Experience</h2>
            </div>

            {/* Timeline */}
            <div className="relative space-y-0 pb-2">
                {/* Vertical Line - Continuous */}
                <div className="absolute left-[7px] top-2 bottom-6 w-[2px] bg-[#cfe5df]" />

                {experience.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-10 pb-10 last:pb-0 group"
                    >
                        {/* Timeline Dot - Aligned with Title */}
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#20c997] z-10 group-hover:scale-125 transition-transform" />

                        {/* Heading & Date Range */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1 md:gap-4">
                            <h4 className="font-bold text-lg md:text-xl text-[#1a2e28] leading-tight group-hover:text-[#20c997] transition-colors">
                                {item.role}
                            </h4>
                            <span className="text-sm font-medium tracking-wide text-[#20c997] whitespace-nowrap">
                                {item.period}
                            </span>
                        </div>

                        {/* Company & Location */}
                        <div className="flex flex-col gap-1 mb-4">
                            <div className="text-[#ff6b6b] font-semibold text-base md:text-lg leading-none">
                                {item.company}
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-500 font-normal text-sm">
                                <MapPin className="size-3.5" />
                                <span>{item.location}</span>
                            </div>
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-2">
                            {item.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex gap-2 text-sm md:text-base font-normal text-slate-600 leading-relaxed mb-2 last:mb-0">
                                    <span className="text-[#20c997] font-bold select-none">•</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
