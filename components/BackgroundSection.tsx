"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education, experience } from "@/lib/data";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

export default function BackgroundSection() {
    const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#experience") {
                setActiveTab("experience");
            }
        };

        window.addEventListener("hashchange", handleHashChange);
        // Also check on initial load
        handleHashChange();

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <section id="experience" className="relative py-24 px-6 bg-[#0a0f1e] overflow-hidden scroll-mt-24">
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8">
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

                {/* Tab Switcher */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "experience" ? "text-white" : "text-gray-400 hover:text-gray-200"
                                }`}
                        >
                            {activeTab === "experience" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#20c997] rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <Briefcase className={`size-4 relative z-10 ${activeTab === "experience" ? "text-white" : "text-[#20c997]"}`} />
                            <span className="relative z-10">Experience 💼</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "education" ? "text-white" : "text-gray-400 hover:text-gray-200"
                                }`}
                        >
                            {activeTab === "education" && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#20c997] rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <GraduationCap className={`size-4 relative z-10 ${activeTab === "education" ? "text-white" : "text-[#20c997]"}`} />
                            <span className="relative z-10">Education 🎓</span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {activeTab === "experience" ? (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="space-y-8 relative"
                            >
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#20c997] to-transparent opacity-30 hidden md:block" />

                                {experience.map((item, idx) => (
                                    <div key={idx} className="relative md:pl-12 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-1.5 w-10 h-10 items-center justify-center hidden md:flex">
                                            <div className="w-3 h-3 rounded-full bg-[#20c997] shadow-[0_0_15px_rgba(32,201,151,0.6)] z-10 group-hover:scale-125 transition-transform" />
                                        </div>

                                        {/* Content Card */}
                                        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[24px] shadow-xl hover:bg-white/[0.05] transition-colors border-l-2 md:border-l border-l-[#20c997] md:border-l-white/10">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#20c997] transition-colors">
                                                        {item.role}
                                                    </h3>
                                                    <div className="text-[#20c997] font-semibold text-lg">
                                                        {item.company}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:items-end gap-2">
                                                    <div className="flex items-center gap-2 text-[#20c997] text-sm font-medium bg-[#20c997]/10 px-3 py-1 rounded-full">
                                                        <Calendar className="size-3.5" />
                                                        {item.period}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                                        <MapPin className="size-3.5" />
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {item.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="flex gap-3 text-gray-300 text-[15px] leading-relaxed">
                                                        <span className="text-[#20c997] font-bold mt-1.5 shrink-0">•</span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="space-y-8 relative"
                            >
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#20c997] to-transparent opacity-30 hidden md:block" />

                                {education.map((item, idx) => (
                                    <div key={idx} className="relative md:pl-12 group">
                                        {/* Timeline Dot */}
                                        <div className="absolute left-0 top-1.5 w-10 h-10 items-center justify-center hidden md:flex">
                                            <div className="w-3 h-3 rounded-full bg-[#20c997] shadow-[0_0_15px_rgba(32,201,151,0.6)] z-10 group-hover:scale-125 transition-transform" />
                                        </div>

                                        {/* Content Card */}
                                        <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[24px] shadow-xl hover:bg-white/[0.05] transition-colors border-l-2 md:border-l border-l-[#20c997] md:border-l-white/10">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#20c997] transition-colors">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="text-[#20c997] font-semibold text-lg">
                                                        {item.institution}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:items-end gap-2">
                                                    <div className="flex items-center gap-2 text-[#20c997] text-sm font-medium bg-[#20c997]/10 px-3 py-1 rounded-full">
                                                        <Calendar className="size-3.5" />
                                                        {item.year}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                                                        <MapPin className="size-3.5" />
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 mt-6">
                                                {item.achievements?.map((achievement, aIdx) => (
                                                    <div key={aIdx} className="bg-[#20c997]/10 border border-[#20c997]/20 px-4 py-2 rounded-xl">
                                                        <span className="text-[#20c997] font-bold text-sm">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
