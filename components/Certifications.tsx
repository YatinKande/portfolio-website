"use client";

import { motion } from "framer-motion";
import { Trophy, Cloud, BarChart3, Award, Brain, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { certifications } from "@/lib/data";

// Provider-branded colours — each issuer gets its real brand identity
const PROVIDER_STYLES: Record<string, { iconBg: string; iconColor: string; borderAccent: string; iconHoverBg: string }> = {
    "Oracle":                { iconBg: "rgba(199,70,52,0.15)",  iconColor: "#C74634", borderAccent: "#C74634", iconHoverBg: "#C74634" },
    "Google":                { iconBg: "rgba(66,133,244,0.15)", iconColor: "#4285F4", borderAccent: "#4285F4", iconHoverBg: "#4285F4" },
    "Amazon Web Services":   { iconBg: "rgba(255,153,0,0.15)",  iconColor: "#FF9900", borderAccent: "#FF9900", iconHoverBg: "#FF9900" },
    "DeepLearning.AI":       { iconBg: "rgba(124,58,237,0.15)", iconColor: "#7c3aed", borderAccent: "#7c3aed", iconHoverBg: "#7c3aed" },
};

const PROVIDER_ICONS: Record<string, React.ElementType> = {
    "Oracle":              Cloud,
    "Google":              BarChart3,
    "Amazon Web Services": Cloud,
    "DeepLearning.AI":     Brain,
};

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 bg-[#111318] relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#2dd4bf]/[0.03] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-[#2dd4bf]/10 rounded-2xl text-[#2dd4bf] mb-6"
                    >
                        <Trophy size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
                    >
                        Professional <span className="bg-gradient-to-r from-[#f97316] to-[#f97316]/70 bg-clip-text text-transparent">Certifications</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#2dd4bf] rounded-full"
                    />
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => {
                        const isInProgress = cert.year === "In Progress";

                        const provider = PROVIDER_STYLES[cert.issuer] ?? {
                            iconBg: "rgba(45,212,191,0.15)", iconColor: "#2dd4bf", borderAccent: "#2dd4bf", iconHoverBg: "#2dd4bf"
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
                                className="group relative bg-[#1c2030] border-2 border-white/[0.07] p-6 lg:p-8 rounded-[24px] transition-all duration-300 overflow-hidden"
                                onMouseEnter={e => (e.currentTarget.style.borderColor = provider.borderAccent + "50")}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                            >
                                {/* Provider-coloured left accent strip */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[22px] opacity-60 group-hover:opacity-100 transition-opacity"
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
                                            <h3 className="text-lg font-bold text-white leading-tight mb-1 transition-colors">
                                                {cert.name}
                                            </h3>
                                            {/* Issuer with provider colour dot */}
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className="inline-block w-2 h-2 rounded-full shrink-0"
                                                    style={{ backgroundColor: provider.iconColor }}
                                                />
                                                <span className="text-slate-400 font-medium text-sm">{cert.issuer}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="shrink-0 flex flex-col items-end gap-2">
                                        {isInProgress ? (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                                                <Clock size={10} />
                                                In Progress
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                                                <CheckCircle2 size={10} />
                                                {cert.year}
                                            </span>
                                        )}
                                        <ArrowUpRight
                                            className="transition-colors self-end"
                                            style={{ color: "rgba(255,255,255,0.2)" }}
                                            onMouseEnter={e => ((e.currentTarget as SVGElement).style.color = provider.iconColor)}
                                            onMouseLeave={e => ((e.currentTarget as SVGElement).style.color = "rgba(255,255,255,0.2)")}
                                            size={20}
                                        />
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
