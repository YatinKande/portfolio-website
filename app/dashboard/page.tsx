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
    CheckCircle2,
    Settings,
    GraduationCap,
    BarChart3,
    ExternalLink,
    Copy,
    Trophy,
    ArrowRight
} from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";
import GlitchText from "@/components/GlitchText";
import { skills, education, experience, certifications, personalInfo } from "@/lib/data";
// Removed InteractiveSkillsPie import

// --- Helper Components ---

const StatCounter = ({ value, label, suffix, delay }: { value: number, label: string, suffix: string, delay: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const duration = 1500;
        const update = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * value));
            if (progress < 1) requestAnimationFrame(update);
        };
        const timeoutId = setTimeout(() => requestAnimationFrame(update), delay * 1000);
        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return (
        <div className="flex flex-col items-center">
            <div className="text-[32px] md:text-[40px] font-bold text-cyan-400 leading-tight font-heading drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
                {count}{suffix}
            </div>
            <div className="text-[11px] md:text-[12px] text-white/60 uppercase tracking-[2px] font-medium">
                {label}
            </div>
        </div>
    );
};

const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20">
        <Icon className="w-5 h-5 text-primary" />
        <h2 className="text-[16px] font-bold text-white uppercase tracking-[2px] font-heading">
            {title}
        </h2>
    </div>
);

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-primary/20 transition-colors text-primary/70 relative group"
            title="Copy to clipboard"
        >
            {copied ? <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-white text-[10px] rounded animate-bounce">Copied!</div> : null}
            <Copy size={16} />
        </button>
    );
};

// --- Page Component ---

export default function DashboardPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

    const featuredProjectsPreviews = [
        {
            title: "Auto Multimodal RAG",
            subtitle: "GenAI & FAISS Pipeline",
            tech: ["Python", "FastAPI", "GenAI"],
            gradient: "from-blue-600/20 to-cyan-500/20",
            bg: "/projects/autorag.png"
        },
        {
            title: "Lip Read AI — LipNet",
            subtitle: "Deep Learning & Computer Vision",
            tech: ["PyTorch", "OpenCV", "Bi-LSTM"],
            gradient: "from-purple-600/20 to-blue-500/20",
            bg: "/projects/lipread.png"
        },
        {
            title: "AI Car Simulation",
            subtitle: "NeuroEvolution & NEAT",
            tech: ["Python", "NEAT", "RL"],
            gradient: "from-green-600/20 to-teal-500/20",
            bg: "/projects/ai-car.png"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-x-hidden pt-12 pb-20 px-6 sm:px-10">
            <NeuralBackground />
            <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,17,40,0.6)_100%)]" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-[1200px] mx-auto relative z-10 space-y-8"
            >
                {/* --- HERO SECTION --- */}
                <motion.section variants={itemVariants} className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="relative shrink-0">
                        <motion.div
                            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.1, 1.25, 1.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full bg-primary/40 blur-3xl"
                        />
                        <div className="w-[150px] h-[150px] md:w-[170px] md:h-[170px] rounded-full overflow-hidden border-2 border-primary/60 relative shadow-[0_0_40px_rgba(6,182,212,0.4)] z-10">
                            <Image src="/me.jpg" alt="Yatin Kande" fill className="object-cover" priority />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                            <div>
                                <h1 className="text-[36px] md:text-[48px] font-bold text-white mb-1 font-heading tracking-tight leading-none">
                                    {personalInfo.name}
                                </h1>
                                <div className="h-8 flex items-center justify-center md:justify-start overflow-hidden">
                                    <GlitchText startTime={500} />
                                </div>
                            </div>
                            <button
                                onClick={() => router.push('mailto:' + personalInfo.email)}
                                className="px-6 py-2.5 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-full text-white text-[14px] font-bold flex items-center gap-2 transition-all mx-auto md:mx-0 shrink-0"
                            >
                                <Mail size={16} /> CONTACT ME
                            </button>
                        </div>

                        <p className="max-w-[700px] text-[15px] text-white/80 font-inter leading-[1.7] mb-8">
                            {personalInfo.bio.split('\n\n')[0]}
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-t border-primary/10 pt-8 mt-auto">
                            <StatCounter value={11} suffix="+" label="PROJECTS" delay={0.4} />
                            <StatCounter value={32} suffix="K+" label="RECORDS ANALYZED" delay={0.5} />
                            <StatCounter value={94} suffix="%" label="SYSTEM UPTIME" delay={0.6} />
                            <StatCounter value={2} suffix="+" label="YEARS EXPERIENCE" delay={0.7} />
                        </div>
                    </div>
                </motion.section>

                {/* --- ABOUT & SKILLS SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
                    {/* LEFT COLUMN: ABOUT ME */}
                    <motion.section variants={itemVariants} className="glass-card p-8 md:p-10">
                        <SectionHeader icon={User} title="MY JOURNEY" />
                        <div className="space-y-6">
                            {(personalInfo as any).journey.map((paragraph: string, idx: number) => (
                                <p key={idx} className="text-[15px] md:text-[16px] text-white/70 leading-[1.8] font-inter">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* RIGHT COLUMN: CONDENSED SKILLS */}
                    <motion.section variants={itemVariants} className="glass-card p-8 flex flex-col">
                        <SectionHeader icon={Settings} title="SKILLS" />
                        <div className="space-y-6 flex-grow">
                            {Object.entries(skills).map(([category, items]: [string, any]) => (
                                <div key={category} className="space-y-3">
                                    <h4 className="text-[11px] font-bold text-primary uppercase tracking-[2px] opacity-70">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill: any) => (
                                            <span
                                                key={skill.name}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[12px] text-white/80 font-medium hover:border-primary/40 hover:bg-primary/5 transition-all"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* --- EDUCATION SECTION --- */}
                    <motion.section variants={itemVariants} className="glass-card p-8">
                        <SectionHeader icon={GraduationCap} title="EDUCATION" />
                        <div className="relative pl-8 space-y-8 before:absolute before:left-0.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
                            {education.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="relative bg-primary/5 border border-primary/10 p-5 rounded-xl"
                                >
                                    <div className="absolute -left-[35px] top-4 w-[12px] h-[12px] rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-[16px] font-bold text-white">{item.institution}</h4>
                                        <span className="text-[14px] text-primary font-medium">{item.degree}</span>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-[13px] text-white/50 font-bold">{item.year}</span>
                                            <span className="text-[12px] text-white/40">{item.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* --- EXPERIENCE SECTION --- */}
                    <motion.section variants={itemVariants} className="glass-card p-8">
                        <SectionHeader icon={Briefcase} title="EXPERIENCE" />
                        <div className="relative pl-8 space-y-8 before:absolute before:left-0.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
                            {experience.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="relative bg-primary/5 border border-primary/10 p-5 rounded-xl"
                                >
                                    <div className="absolute -left-[35px] top-4 w-[12px] h-[12px] rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10" />
                                    <div className="flex flex-col gap-1">
                                        <h4 className="text-[16px] font-bold text-white">{item.company}</h4>
                                        <span className="text-[14px] text-primary font-medium">{item.role}</span>
                                        <span className="text-[13px] text-white/50 font-bold mt-1">{item.period}</span>
                                        <div className="mt-4 space-y-2">
                                            {item.bullets.map((bullet, bIdx) => (
                                                <div key={bIdx} className="flex gap-2">
                                                    <span className="text-primary mt-1 text-[14px]">•</span>
                                                    <p className="text-[13px] text-white/70 leading-relaxed">{bullet}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* --- PROJECTS BENTO GRID SECTION --- */}
                <motion.section variants={itemVariants} className="space-y-6">
                    <SectionHeader icon={BarChart3} title="PROJECTS" />

                    <div className="projects-bento-grid">
                        {/* Card 1 — Auto Multimodal RAG (TALL) */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-1 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/autorag.png" alt="Auto Multimodal RAG" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="timeline-badge">Nov 2025 - Present</div>
                                <h3 className="project-title">Auto Multimodal RAG</h3>
                                <p className="project-subtitle">Multimodal AI Assistant</p>
                                <p className="project-description">
                                    RAG system for automotive domain using Google GenAI and FAISS. Supports document ingestion, vector search, and grounded Q&A over manuals and OBD data with 94% availability.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">PYTHON</span>
                                    <span className="badge">FASTAPI</span>
                                    <span className="badge">FAISS</span>
                                    <span className="badge">GOOGLE GENAI</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 — Smart EV Finder */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-2 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/ev-finder.png" alt="Smart EV Finder" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10">
                                <div className="timeline-badge">Jan 2026</div>
                                <h3 className="project-title">Smart EV Finder</h3>
                                <p className="project-subtitle">LLM-Powered Recommendations</p>
                                <p className="project-description">
                                    Conversational charging station finder using Llama 3 for personalized recommendations.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">PYTHON</span>
                                    <span className="badge">LLAMA 3</span>
                                    <span className="badge">NLP</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 — Lip Read AI */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-3 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/lipread.png" alt="Lip Read AI" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10">
                                <div className="timeline-badge">Apr 2025 - Jul 2025</div>
                                <h3 className="project-title">Lip Read AI — LipNet</h3>
                                <p className="project-subtitle">3D CNN & Bi-LSTM</p>
                                <p className="project-description">
                                    Deep learning lip-reading system trained on 30K+ video frames using CNNs and LSTMs.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">PYTORCH</span>
                                    <span className="badge">3D CNN</span>
                                    <span className="badge">BI-LSTM</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 4 — AI Car Simulation */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-4 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/ai-car.png" alt="AI Car Simulation" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10">
                                <div className="timeline-badge">Jan 2025</div>
                                <h3 className="project-title">AI Car Simulation</h3>
                                <p className="project-subtitle">NEAT Algorithm</p>
                                <p className="project-description">
                                    Self-driving car simulation using NeuroEvolution to autonomously navigate tracks.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">PYTHON</span>
                                    <span className="badge">NEAT</span>
                                    <span className="badge">RL</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 5 — KinesisKeyEntry */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-5 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/kinesis.png" alt="KinesisKeyEntry" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10">
                                <div className="timeline-badge">Dec 2025</div>
                                <h3 className="project-title">KinesisKeyEntry</h3>
                                <p className="project-subtitle">AWS Smart Authentication</p>
                                <p className="project-description">
                                    Smart door system using AWS Rekognition for facial authentication and access control.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">AWS</span>
                                    <span className="badge">REKOGNITION</span>
                                    <span className="badge">KINESIS</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 6 — Dataset Concierge Bot */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-6 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/dataset-bot.png" alt="Dataset Concierge Bot" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10">
                                <div className="timeline-badge">Aug 2025 - Oct 2025</div>
                                <h3 className="project-title">Dataset Concierge Bot</h3>
                                <p className="project-subtitle">Conversational AI</p>
                                <p className="project-description">
                                    AWS-powered bot to find and retrieve datasets using natural language processing.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">JS</span>
                                    <span className="badge">AWS LEX</span>
                                    <span className="badge">DYNAMODB</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 7 — License Plate Recognition */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="project-card project-card-7 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/projects/license.png" alt="License Plate Recognition" className="w-full h-full object-cover opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent" />
                            </div>
                            <div className="relative z-10">
                                <div className="timeline-badge">Jan 2025</div>
                                <h3 className="project-title">License Plate Recognition</h3>
                                <p className="project-subtitle">ANPR System</p>
                                <p className="project-description">
                                    Automatic detection and recognition of license plates from vehicle images using deep learning.
                                </p>
                                <div className="tech-badges">
                                    <span className="badge">PYTHON</span>
                                    <span className="badge">OPENCV</span>
                                    <span className="badge">DL</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 8 — View All Projects Button (Cube) */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() => router.push('/projects')}
                            className="view-all-button"
                        >
                            <BarChart3 className="w-9 h-9 text-primary mb-2" />
                            <div className="text-[15px] font-bold text-primary tracking-[2px] mb-1">VIEW ALL</div>
                            <div className="text-[20px] font-bold text-white mb-2">11 PROJECTS</div>
                            <span className="text-[28px] text-primary">→</span>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* --- CERTIFICATIONS SECTION --- */}
                    <motion.section variants={itemVariants} className="glass-card p-8">
                        <SectionHeader icon={Trophy} title="CERTIFICATIONS" />
                        <div className="space-y-4">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.12)" }}
                                    className="p-5 bg-primary/5 border border-primary/20 rounded-xl flex items-center gap-5 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-[24px]">
                                        {cert.name.includes("Cloud") ? "☁️" : "📊"}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[15px] font-bold text-white leading-tight mb-1">{cert.name}</h4>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[13px] text-white/50 font-medium">{cert.issuer}</span>
                                            <span className="text-[12px] text-primary font-bold uppercase tracking-wider">{cert.year}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* --- CONTACT SECTION --- */}
                    <motion.section variants={itemVariants} className="glass-card p-8">
                        <SectionHeader icon={Mail} title="CONTACT" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Email</p>
                                    <div className="flex items-center justify-between">
                                        <a href={`mailto:${personalInfo.email}`} className="text-[14px] text-white hover:text-primary transition-colors font-medium">{personalInfo.email}</a>
                                        <CopyButton text={personalInfo.email} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] text-white/40 uppercase font-bold tracking-wider mb-0.5">Phone</p>
                                    <div className="flex items-center justify-between">
                                        <a href={`tel:${personalInfo.phone}`} className="text-[14px] text-white hover:text-primary transition-colors font-medium">{personalInfo.phone}</a>
                                        <CopyButton text={personalInfo.phone} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <Linkedin size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] text-white/40 uppercase font-bold tracking-wider mb-0.5">LinkedIn</p>
                                    <a href="https://linkedin.com/in/yatin-kande" target="_blank" className="text-[14px] text-white hover:text-primary transition-colors font-medium flex items-center gap-1.5">
                                        linkedin.com/in/yatin-kande <ExternalLink size={12} className="opacity-40" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                    <Github size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] text-white/40 uppercase font-bold tracking-wider mb-0.5">GitHub</p>
                                    <a href="https://github.com/YatinKande" target="_blank" className="text-[14px] text-white hover:text-primary transition-colors font-medium flex items-center gap-1.5">
                                        github.com/YatinKande <ExternalLink size={12} className="opacity-40" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </motion.div >

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div >
    );
}
