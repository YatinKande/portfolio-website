"use client";

import { motion } from "framer-motion";
import { User, Code2, Briefcase, GraduationCap, Award, FolderGit2, Mail, CheckCircle2, Brain, Calendar } from "lucide-react";
import KPITile from "@/components/KPITile";
import DashboardCard from "@/components/DashboardCard";
import CareerTimeline from "@/components/CareerTimeline";
import ProgressChart from "@/components/ProgressChart";
import { projects, skills, experience } from "@/lib/data";

export default function DashboardPage() {
    const sections = [
        {
            title: "About",
            preview: "Learn about my background, education, and what drives my passion for data science and machine learning.",
            icon: User,
            href: "/about",
        },
        {
            title: "Skills",
            preview: "44+ technologies across programming, ML/AI, data analysis, visualization, and cloud platforms.",
            icon: Code2,
            href: "/skills",
        },
        {
            title: "Experience",
            preview: "2 internships in AI/ML and data analytics at DataZymes Inc and SmartKnower, building CV models and ML pipelines.",
            icon: Briefcase,
            href: "/experience",
        },
        {
            title: "Education",
            preview: "MS Data Science from University of Michigan–Dearborn, plus specialized programs in data science and analytics.",
            icon: GraduationCap,
            href: "/education",
        },
        {
            title: "Certifications",
            preview: "Oracle Cloud Infrastructure AI Foundations and Google Data Analytics Professional certifications.",
            icon: Award,
            href: "/certifications",
        },
        {
            title: "Projects",
            preview: "YOLO-based crop-weed detection, precision agriculture dashboards, and supervised learning pipelines on 32K+ records.",
            icon: FolderGit2,
            href: "/projects",
        },
        {
            title: "Contact",
            preview: "Get in touch for opportunities, collaborations, or just to connect. Open to full-time Data Scientist roles.",
            icon: Mail,
            href: "/contact",
        },
    ];

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                        Portfolio <span className="text-primary">Dashboard</span>
                    </h1>
                    <p className="text-muted-foreground">
                        Data Scientist | Machine Learning & AI
                    </p>
                </motion.div>

                {/* KPI Tiles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <KPITile
                        label="Projects"
                        value={projects.length}
                        icon={CheckCircle2}
                        color="text-green-400"
                        delay={0.1}
                    />
                    <KPITile
                        label="Skills"
                        value={`${Object.values(skills).flat().length}+`}
                        icon={Code2}
                        color="text-blue-400"
                        delay={0.2}
                    />
                    <KPITile
                        label="Experience"
                        value={`${experience.length}`}
                        icon={Briefcase}
                        color="text-purple-400"
                        delay={0.3}
                    />
                    <KPITile
                        label="Years"
                        value="3+"
                        icon={Calendar}
                        color="text-primary"
                        delay={0.4}
                    />
                </div>

                {/* Interactive Visualizations */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <CareerTimeline />
                    <ProgressChart />
                </div>

                {/* Section Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <h2 className="text-2xl font-heading font-bold mb-6">Explore Sections</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((section, idx) => (
                            <DashboardCard
                                key={section.title}
                                title={section.title}
                                preview={section.preview}
                                icon={section.icon}
                                href={section.href}
                                delay={0.6 + idx * 0.1}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
