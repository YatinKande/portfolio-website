"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    User,
    Briefcase,
    Mail,
    Github,
    Linkedin,
    Phone,
    MapPin,
    ChevronDown,
    CheckCircle2,
    Cloud,
    BarChart3,
    Shield,
    Code,
    GraduationCap
} from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";
import DashboardCard from "@/components/DashboardCard";
import GlitchText from "@/components/GlitchText";

// Stat Counter Component
const StatCounter = ({ value, label, suffix, delay }: { value: number, label: string, suffix: string, delay: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const duration = 1500; // 1.5 seconds

        const update = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * value));

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        const timeoutId = setTimeout(() => {
            requestAnimationFrame(update);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return (
        <div className="flex flex-col items-center">
            <div className="text-[32px] font-bold text-cyan-400 leading-tight font-heading drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                {count}{suffix}
            </div>
            <div className="text-[12px] text-white/80 uppercase tracking-[1px] font-medium">
                {label}
            </div>
        </div>
    );
};

export default function DashboardPage() {
    const router = useRouter();
    const [openCard, setOpenCard] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleCard = (id: string) => {
        setOpenCard(openCard === id ? null : id);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden pt-12 pb-20 px-6 sm:px-10">
            <NeuralBackground />

            {/* Background Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,17,40,0.4)_100%)]" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-[1200px] mx-auto relative z-10"
            >
                {/* HERO SECTION */}
                <motion.section variants={itemVariants} className="flex flex-col items-center text-center mb-12">
                    {/* Profile Photo */}
                    <div className="relative mb-6">
                        <motion.div
                            animate={{ opacity: [0.3, 0.4, 0.3], scale: [1.1, 1.2, 1.1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full bg-primary/40 blur-2xl"
                        />
                        <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-primary/60 relative shadow-[0_0_30px_rgba(6,182,212,0.4)] z-10">
                            <Image
                                src="/me.jpg"
                                alt="Yatin Kande"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Name & Role */}
                    <h1 className="text-[44px] font-bold text-white mb-2 font-heading tracking-tight leading-none">
                        Yatin Kande
                    </h1>
                    <div className="h-10 mb-6 flex items-center justify-center">
                        <GlitchText startTime={1000} />
                    </div>

                    {/* Bio */}
                    <p className="max-w-[600px] text-[15px] text-white/90 font-inter leading-[1.7] mb-10">
                        Results-driven Data Scientist specializing in machine learning, computer vision, and AI solutions with a strong analytics foundation. Proficient in Python and SQL with hands-on experience building end-to-end pipelines from preprocessing through deployment. Skilled at translating complex data insights into actionable recommendations.
                    </p>

                    {/* Stat Counters */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl mb-12">
                        <StatCounter value={11} suffix="+" label="Projects" delay={0.2} />
                        <StatCounter value={32} suffix="K+" label="Records Analyzed" delay={0.3} />
                        <StatCounter value={94} suffix="%" label="System Uptime" delay={0.4} />
                        <StatCounter value={2} suffix="+" label="Years Experience" delay={0.5} />
                    </div>

                    <div className="w-[80%] h-[1px] bg-primary/20" />
                </motion.section>

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">

                    {/* ABOUT ME - Col 1-5 */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <DashboardCard
                            title="ABOUT ME"
                            icon={User}
                            isOpen={openCard === 'about'}
                            onToggle={() => toggleCard('about')}
                            preview={
                                <p className="text-[13px] text-primary/70 font-medium">
                                    MS Data Science | UMichigan | Dearborn, MI
                                </p>
                            }
                        >
                            <div className="space-y-4 text-white/80 text-[13px] leading-relaxed">
                                <p>
                                    Results-driven Data Scientist based in Dearborn, Michigan. Currently pursuing MS in Data Science at University of Michigan Dearborn. Passionate about building production-ready AI/ML systems and turning complex data into business value.
                                </p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span>Dearborn, MI, USA</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-primary" />
                                        <span>yatink@umich.edu</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 pt-2">
                                    <a href="https://linkedin.com/in/yatin-kande" target="_blank" className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 text-white hover:bg-primary/30 transition-colors">
                                        <Linkedin className="w-4 h-4 fill-white" />
                                    </a>
                                    <a href="https://github.com/YatinKande" target="_blank" className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/15 border border-primary/30 text-white hover:bg-primary/30 transition-colors">
                                        <Github className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </DashboardCard>
                    </motion.div>

                    {/* SKILLS - Col 6-12 */}
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        <DashboardCard
                            title="TECHNICAL SKILLS"
                            icon={Code}
                            isOpen={openCard === 'skills'}
                            onToggle={() => toggleCard('skills')}
                            preview={
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= 3 ? 'bg-primary' : 'bg-secondary'}`} />)}
                                    </div>
                                    <span className="text-[13px] text-primary/70">9 Skills | Click to explore</span>
                                </div>
                            }
                        >
                            <div className="space-y-3 py-2">
                                {[
                                    { name: "Python", level: 95 },
                                    { name: "Computer Vision", level: 92 },
                                    { name: "Machine Learning", level: 90 },
                                    { name: "Deep Learning", level: 88 },
                                    { name: "SQL", level: 85 },
                                    { name: "NLP", level: 85 },
                                    { name: "Cloud (AWS)", level: 82 },
                                    { name: "Data Viz", level: 80 },
                                    { name: "Docker", level: 75 }
                                ].map((skill, idx) => (
                                    <div key={skill.name} className="flex items-center gap-4">
                                        <span className="w-32 text-[13px] text-white/90 truncate">{skill.name}</span>
                                        <div className="flex-1 h-[6px] bg-primary/15 rounded-full overflow-hidden relative group">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={openCard === 'skills' ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-shadow"
                                            />
                                        </div>
                                        <span className="w-8 text-[13px] text-primary font-bold text-right">{skill.level}%</span>
                                    </div>
                                ))}
                            </div>
                        </DashboardCard>
                    </motion.div>

                    {/* EDUCATION - Col 1-6 */}
                    <motion.div variants={itemVariants} className="lg:col-span-6">
                        <DashboardCard
                            title="EDUCATION"
                            icon={GraduationCap}
                            isOpen={openCard === 'education'}
                            onToggle={() => toggleCard('education')}
                            preview={
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-center gap-[2px]">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <div className="w-[1px] h-3 bg-primary/30" />
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <span className="text-[13px] text-primary/70">3 Degrees | 2 Countries</span>
                                </div>
                            }
                        >
                            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20 before:animate-pulse">
                                {[
                                    { school: "University of Michigan Dearborn", degree: "MS in Data Science", loc: "Dearborn, MI, USA" },
                                    { school: "Vellore Institute of Technology", degree: "PG Program in Data Science", loc: "Bangalore, India" },
                                    { school: "Jain University", degree: "BSc Honors in Data Science", loc: "Bangalore, India" }
                                ].map((edu, idx) => (
                                    <motion.div
                                        key={edu.degree}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={openCard === 'education' ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.5)] z-10" />
                                        <div className="p-3 bg-primary/[0.04] border border-primary/20 rounded-[10px] backdrop-blur-sm">
                                            <h4 className="text-[14px] font-bold text-white leading-tight mb-1">{edu.school}</h4>
                                            <div className="text-[13px] text-primary font-medium mb-1">{edu.degree}</div>
                                            <div className="text-[12px] text-white/50">{edu.loc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </DashboardCard>
                    </motion.div>

                    {/* EXPERIENCE - Col 7-12 */}
                    <motion.div variants={itemVariants} className="lg:col-span-6">
                        <DashboardCard
                            title="EXPERIENCE"
                            icon={Briefcase}
                            isOpen={openCard === 'experience'}
                            onToggle={() => toggleCard('experience')}
                            preview={
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-center gap-[2px]">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <div className="w-[1px] h-3 bg-primary/30" />
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <span className="text-[13px] text-primary/70">2 Internships | AI/ML Focus</span>
                                </div>
                            }
                        >
                            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20 before:animate-pulse">
                                {[
                                    {
                                        company: "DataZymes Inc",
                                        role: "Data Analyst Intern (AI/ML)",
                                        date: "Feb 2024 - Jul 2024 | Bengaluru, India",
                                        bullets: ["YOLO vision models on 1000+ images", "End-to-end CV pipelines built", "Plotly Dash deployment dashboards"]
                                    },
                                    {
                                        company: "SmartKnower",
                                        role: "Machine Learning Intern",
                                        date: "Mar 2022 - Jun 2022 | Bengaluru, India",
                                        bullets: ["Supervised learning on 32K+ records", "Full EDA and model evaluation", "Reproducible experiment documentation"]
                                    }
                                ].map((exp, idx) => (
                                    <motion.div
                                        key={exp.company}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={openCard === 'experience' ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.5)] z-10" />
                                        <div className="p-3 bg-primary/[0.04] border border-primary/20 rounded-[10px] backdrop-blur-sm">
                                            <h4 className="text-[14px] font-bold text-white leading-tight mb-0.5">{exp.company}</h4>
                                            <div className="text-[13px] text-primary font-medium mb-1">{exp.role}</div>
                                            <div className="text-[11px] text-white/40 mb-3">{exp.date}</div>
                                            <ul className="space-y-1.5">
                                                {exp.bullets.map((bullet, bIdx) => (
                                                    <motion.li
                                                        key={bIdx}
                                                        initial={{ opacity: 0, x: -5 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.2 + (bIdx * 0.1) + 0.3 }}
                                                        className="flex items-start gap-2 text-[12px] text-white/80"
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                        <span>{bullet}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </DashboardCard>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-12">
                        <div
                            onClick={() => router.push('/projects')}
                            className="glass-card p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:border-primary border-primary/30 relative overflow-hidden"
                        >
                            {/* Pattern Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #06B6D4 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h2 className="text-[22px] font-bold text-white mb-2 font-heading tracking-[1px]">PROJECTS</h2>
                                <p className="text-[14px] text-primary/70 mb-4">11 Projects | Explore my work</p>
                                <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                                    <span>Explore All Projects →</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CERTIFICATIONS - Col 1-6 */}
                    <motion.div variants={itemVariants} className="lg:col-span-6">
                        <DashboardCard
                            title="CERTIFICATIONS"
                            icon={Shield}
                            isOpen={openCard === 'certs'}
                            onToggle={() => toggleCard('certs')}
                            preview={
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-1">
                                        <div className="w-3 h-3 rounded-full bg-blue-500 border border-primary/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500 border border-primary/20" />
                                    </div>
                                    <span className="text-[13px] text-primary/70">2 Certifications</span>
                                </div>
                            }
                        >
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { title: "Oracle Cloud Infrastructure AI Foundations Associate", issuer: "Oracle", year: "2025", icon: Cloud, color: "text-blue-400" },
                                    { title: "Google Data Analytics Professional Certificate", issuer: "Coursera", year: "2024", icon: BarChart3, color: "text-green-400" }
                                ].map(cert => (
                                    <div key={cert.title} className="p-3 bg-primary/[0.04] border border-primary/20 rounded-xl flex items-center gap-4">
                                        <div className={`p-2 rounded-lg bg-primary/10 ${cert.color}`}>
                                            <cert.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-bold text-white leading-tight">{cert.title}</h4>
                                            <p className="text-[11px] text-white/50">{cert.issuer} • {cert.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DashboardCard>
                    </motion.div>

                    {/* CONTACT - Col 7-12 */}
                    <motion.div variants={itemVariants} className="lg:col-span-6">
                        <DashboardCard
                            title="CONTACT"
                            icon={Mail}
                            isOpen={openCard === 'contact'}
                            onToggle={() => toggleCard('contact')}
                            preview={
                                <div className="flex gap-2">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <Linkedin className="w-4 h-4 text-primary fill-primary" />
                                    <Github className="w-4 h-4 text-primary" />
                                    <span className="text-[13px] text-primary/70 ml-2">Get in Touch</span>
                                </div>
                            }
                        >
                            <div className="space-y-3">
                                {[
                                    { icon: Mail, label: "yatink@umich.edu", action: "copy" },
                                    { icon: MapPin, label: "Dearborn, MI, USA", action: "none" },
                                    { icon: Linkedin, label: "linkedin.com/in/yatin-kande", action: "link", url: "https://linkedin.com/in/yatin-kande" },
                                    { icon: Github, label: "github.com/YatinKande", action: "link", url: "https://github.com/YatinKande" },
                                    { icon: Phone, label: "+1 313-413-8327", action: "copy" }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 group/item cursor-pointer"
                                        onClick={() => {
                                            if (item.action === 'link') window.open(item.url, '_blank');
                                            if (item.action === 'copy') {
                                                navigator.clipboard.writeText(item.label);
                                                alert('Copied to clipboard!'); // Simple toast replacement
                                            }
                                        }}
                                    >
                                        <item.icon className="w-4 h-4 text-primary group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[13px] text-white/80 group-hover/item:text-primary transition-colors">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </DashboardCard>
                    </motion.div>

                </div>
            </motion.div>

            {/* Build Info */}
            <div className="fixed bottom-6 right-8 z-50 text-[10px] font-mono text-primary/30 text-right leading-relaxed select-none uppercase tracking-widest hidden sm:block">
                BUILD: 2025.01<br />
                ENV: PRODUCTION<br />
                STATUS: ✓ ONLINE
            </div>
        </div>
    );
}
