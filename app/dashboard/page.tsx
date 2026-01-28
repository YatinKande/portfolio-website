"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, User, Cpu, Briefcase, Award, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { personalInfo, aboutPageContent, projects, experience, certifications, education } from "@/lib/data";

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/20 selection:text-primary-foreground">
            {/* Background elements - lighter/subtle for light theme */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none fixed">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-5xl px-4 md:px-8 py-20 relative z-10 space-y-24">

                {/* HERO SECTION */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <motion.div
                        layoutId="profile-photo"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/10 relative shadow-xl shrink-0"
                    >
                        <Image
                            src="/me.jpg"
                            alt="Yatin Kande"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                    <div className="text-center md:text-left pt-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-gray-900"
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
                </div>

                {/* WHAT I DO (From About) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-card border border-border shadow-sm backdrop-blur-md"
                >
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                        <Brain className="size-5" />
                        {aboutPageContent.section1.title}
                    </h2>
                    <ul className="space-y-2">
                        {aboutPageContent.section1.points.map((point, i) => (
                            <li key={i} className="text-gray-600 text-sm leading-snug flex gap-3">
                                <span className="text-primary mt-1">•</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* 1. SKILLS */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                            <Cpu className="text-primary size-6" />
                            Skills
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Core tools and methods across analytics and machine learning.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {aboutPageContent.problemSpaceSkills.map((category, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-card border border-border shadow-sm h-full">
                                <h3 className="text-sm font-bold text-primary mb-3 border-b border-border pb-2">{category.title}</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {category.skills.map((skill, j) => (
                                        <span key={j} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-[11px] font-medium border border-border">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. PROJECTS */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                            <Briefcase className="text-primary size-6" />
                            Projects
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Selected builds showcasing end-to-end problem solving.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-all flex flex-col h-full shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                                <ul className="space-y-2 mt-auto">
                                    {project.bullets?.map((bullet, j) => (
                                        <li key={j} className="text-[11px] text-gray-600 leading-snug flex gap-2">
                                            <span className="text-primary">•</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                                    {project.tech.map((t, k) => (
                                        <span key={k} className="text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded font-medium">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. EXPERIENCE */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                            <User className="text-primary size-6" />
                            Experience
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Internship experience in AI/ML and data analytics.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {experience.map((role, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-base text-gray-900">{role.role}</h3>
                                    <span className="text-xs text-primary bg-primary/5 px-2 py-1 rounded font-medium">{role.period}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{role.company} • {role.location}</p>
                                <ul className="space-y-2">
                                    {role.bullets?.map((bullet, j) => (
                                        <li key={j} className="text-xs text-gray-600 leading-relaxed flex gap-2">
                                            <span className="text-primary">•</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. CERTIFICATIONS */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                            <Award className="text-primary size-6" />
                            Certifications
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Professional certifications in AI and data analytics.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {certifications.map((cert, i) => (
                            <div key={i} className="px-5 py-3 rounded-xl bg-card border border-border shadow-sm flex items-center gap-3">
                                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Award className="size-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{cert.name}</div>
                                    <div className="text-xs text-gray-500">{cert.issuer} {cert.year && `• ${cert.year}`}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. EDUCATION */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900">
                            <GraduationCap className="text-primary size-6" />
                            Education
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Academic background in data science.</p>
                    </div>
                    <div className="grid md:grid-cols-1 gap-6">
                        {education.map((edu, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <div>
                                    <h3 className="font-bold text-base text-gray-900">{edu.degree}</h3>
                                    <p className="text-sm text-gray-500">{edu.institution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action to Analytics */}
                <div className="flex justify-center pt-12 pb-20">
                    <button
                        onClick={() => router.push("/analytics")}
                        className="group relative px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full overflow-hidden transition-all duration-300 text-sm flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        View Analytics
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    );
}
