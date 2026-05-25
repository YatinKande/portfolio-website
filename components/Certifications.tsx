"use client";

import { motion } from "framer-motion";
import { Trophy, Cloud, BarChart3, Award, Brain, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { certifications } from "@/lib/data";

// Provider-branded colours — each issuer gets its real brand identity
const PROVIDER_STYLES: Record<string, { iconBg: string; iconColor: string; borderAccent: string; iconHoverBg: string }> = {
    "Oracle":                { iconBg: "#fef2f0", iconColor: "#C74634", borderAccent: "#C74634", iconHoverBg: "#C74634" },
    "Google":                { iconBg: "#eff6ff", iconColor: "#4285F4", borderAccent: "#4285F4", iconHoverBg: "#4285F4" },
    "Amazon Web Services":   { iconBg: "#fff7ed", iconColor: "#FF9900", borderAccent: "#FF9900", iconHoverBg: "#FF9900" },
    "DeepLearning.AI":       { iconBg: "#f5f3ff", iconColor: "#7c3aed", borderAccent: "#7c3aed", iconHoverBg: "#7c3aed" },
};

const PROVIDER_ICONS: Record<string, React.ElementType> = {
    "Oracle":              Cloud,
    "Google":              BarChart3,
    "Amazon Web Services": Cloud,
    "DeepLearning.AI":     Brain,
};

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
                        const isInProgress = cert.year === "In Progress";
                        const progress = (cert as { progress?: number }).progress;
                        const expectedCompletion = (cert as { expectedCompletion?: string }).expectedCompletion;

                        const provider = PROVIDER_STYLES[cert.issuer] ?? {
                            iconBg: "#f0f9f7", iconColor: "#20c997", borderAccent: "#20c997", iconHoverBg: "#20c997"
                        };
                        const Icon = PROVIDER_ICONS[cert.issuer] ?? Award;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white border-2 border-[#cfe5df] p-6 lg:p-8 rounded-[24px] transition-all duration-300 overflow-hidden"
                                style={{
                                    ["--hover-border" as string]: provider.borderAccent,
                                }}
                                onMouseEnter={e => (e.currentTarget.style.borderColor = provider.borderAccent + "80")}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "#cfe5df")}
                            >
                                {/* Provider-coloured left accent strip */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[22px] opacity-70 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: provider.borderAccent }}
                                />

                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                        {/* Provider-branded Icon Box */}
                                        <div
                                            className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300"
                                            style={{
                                                backgroundColor: provider.iconBg,
                                                color: provider.iconColor,
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = provider.iconHoverBg;
                                                (e.currentTarget as HTMLElement).style.color = "#fff";
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLElement).style.backgroundColor = provider.iconBg;
                                                (e.currentTarget as HTMLElement).style.color = provider.iconColor;
                                            }}
                                        >
                                            <Icon size={28} />
                                        </div>
                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3
                                                className="text-lg font-bold text-[#1a2e28] leading-tight mb-1 transition-colors"
                                                style={{ ["--hover-color" as string]: provider.iconColor }}
                                            >
                                                {cert.name}
                                            </h3>
                                            {/* Issuer with provider colour dot */}
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className="inline-block w-2 h-2 rounded-full shrink-0"
                                                    style={{ backgroundColor: provider.iconColor }}
                                                />
                                                <span className="text-[#5a7069] font-medium text-sm">{cert.issuer}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="shrink-0 flex flex-col items-end gap-2">
                                        {isInProgress ? (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                                                <Clock size={10} />
                                                In Progress
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                                <CheckCircle2 size={10} />
                                                {cert.year}
                                            </span>
                                        )}
                                        <ArrowUpRight
                                            className="transition-colors self-end"
                                            style={{ color: "#cfe5df" }}
                                            onMouseEnter={e => ((e.currentTarget as SVGElement).style.color = provider.iconColor)}
                                            onMouseLeave={e => ((e.currentTarget as SVGElement).style.color = "#cfe5df")}
                                            size={20}
                                        />
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
                                                <span
                                                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                                                    style={{ color: provider.iconColor, backgroundColor: provider.iconColor + "18" }}
                                                >
                                                    Expected {expectedCompletion}
                                                </span>
                                            )}
                                        </div>
                                        <div className="h-1.5 w-full bg-[#cfe5df] rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 + 0.3 }}
                                                className="h-full rounded-full"
                                                style={{
                                                    background: `linear-gradient(90deg, ${provider.iconColor}, ${provider.borderAccent}cc)`,
                                                }}
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
