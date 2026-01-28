"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, Microscope, Camera, Mountain, Trophy, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function AboutPage() {
    const router = useRouter();

    const stats = [
        { label: "Models Trained", value: "25+", icon: Brain },
        { label: "CV Pipelines", value: "10+", icon: Cpu },
        { label: "Data Records", value: "50k+", icon: Database },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-end mb-20">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.div
                            layoutId="profile-photo"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 relative shadow-2xl mb-8"
                        >
                            <Image
                                src="/me.jpg"
                                alt="Yatin Kande"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                        >
                            Yatin Kande
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-primary text-xl font-medium tracking-wide uppercase"
                        >
                            {personalInfo.title}
                        </motion.p>
                    </div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
                        >
                            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                <Microscope className="text-primary size-6" />
                                Technical Philosophy
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {personalInfo.bio}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"
                                >
                                    <stat.icon className="size-5 text-primary mb-2" />
                                    <span className="text-2xl font-bold">{stat.value}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bento Grid Info */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Fun Facts */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-1 p-8 rounded-3xl bg-secondary/30 border border-white/5 space-y-4"
                    >
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Sparkles className="text-yellow-400 size-5" />
                            Inner Workings
                        </h3>
                        <ul className="space-y-3">
                            {personalInfo.funFacts.map((fact, i) => (
                                <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                                    <span className="text-primary">•</span>
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Hobbies - Work */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl bg-primary/5 border border-primary/10 space-y-4"
                    >
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Cpu className="text-primary size-5" />
                            Work Passion
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {personalInfo.hobbies.work.map((hobby, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Hobbies - Non-Work */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 space-y-4"
                    >
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Mountain className="text-purple-400 size-5" />
                            Beyond the Screen
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {personalInfo.hobbies.nonWork.map((hobby, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/20">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Footer Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden hover:pr-16 transition-all duration-300"
                    >
                        <span className="relative z-10">Explore My Dashboard</span>
                        <ArrowRight className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
