"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Eye,
    Cloud,
    Database,
    MessageSquare,
    Settings,
    Layers,
} from "lucide-react";

type Proficiency = "Expert" | "Proficient" | "Familiar";

interface SkillItem {
    name: string;
    level: Proficiency;
}

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    skills: SkillItem[];
    accent: string;
}

const LEVEL_STYLES: Record<Proficiency, string> = {
    Expert: "bg-[#20c997]/15 text-[#20c997] border border-[#20c997]/30",
    Proficient: "bg-[#6366f1]/15 text-[#6366f1] border border-[#6366f1]/30",
    Familiar: "bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30",
};

/*
 * 3-colour domain grouping:
 *  🟢 Mint    #20c997 — Core AI/ML specialisations (output-facing)
 *  🟣 Indigo  #6366f1 — Research & infrastructure (tool-facing)
 *  🔴 Coral   #ff6b6b — Programming foundations
 */
const skillCategories: SkillCategory[] = [
    {
        title: "Machine Learning",
        icon: Brain,
        skills: [
            { name: "Scikit-learn, XGBoost, LightGBM", level: "Expert" },
            { name: "Feature engineering", level: "Expert" },
            { name: "Hyperparameter tuning & model evaluation", level: "Expert" },
        ],
        accent: "#20c997",   // 🟢 Core ML — mint
    },
    {
        title: "NLP & GenAI",
        icon: MessageSquare,
        skills: [
            { name: "RAG, LangChain, FAISS, Hugging Face", level: "Expert" },
            { name: "Prompt engineering, embeddings, hybrid search", level: "Expert" },
            { name: "Semantic chunking, metadata filtering", level: "Proficient" },
        ],
        accent: "#20c997",   // 🟢 Core GenAI — mint
    },
    {
        title: "MLOps & Deployment",
        icon: Settings,
        skills: [
            { name: "End-to-end training → deployment workflows", level: "Expert" },
            { name: "Docker, MLflow, CI/CD pipelines", level: "Proficient" },
            { name: "AWS SageMaker, serverless architecture", level: "Familiar" },
            { name: "Model tracking, versioning, reproducibility", level: "Proficient" },
        ],
        accent: "#20c997",   // 🟢 Production ML — mint
    },
    {
        title: "Deep Learning / Computer Vision",
        icon: Eye,
        skills: [
            { name: "PyTorch, TensorFlow, YOLOv5, 3D CNN-BiLSTM", level: "Expert" },
            { name: "Real-time inference optimization", level: "Proficient" },
            { name: "Data augmentation & transfer learning", level: "Proficient" },
        ],
        accent: "#6366f1",   // 🟣 Research / DL infra — indigo
    },
    {
        title: "Cloud / Applications",
        icon: Cloud,
        skills: [
            { name: "AWS Lex & Lambda serverless", level: "Proficient" },
            { name: "SQS, SNS, DynamoDB, API Gateway", level: "Proficient" },
            { name: "Lightweight scalable microservices", level: "Familiar" },
        ],
        accent: "#6366f1",   // 🟣 Cloud infra — indigo
    },
    {
        title: "Data Engineering & Big Data",
        icon: Layers,
        skills: [
            { name: "Apache Spark, PySpark, Kafka, Airflow", level: "Proficient" },
            { name: "AWS S3, Lambda, DynamoDB pipelines", level: "Proficient" },
        ],
        accent: "#6366f1",   // 🟣 Data infra — indigo
    },
    {
        title: "Programming & Databases",
        icon: Database,
        skills: [
            { name: "Python, SQL, Bash", level: "Expert" },
            { name: "PostgreSQL, MySQL, MongoDB, Snowflake", level: "Proficient" },
            { name: "API integration & clean code practices", level: "Proficient" },
        ],
        accent: "#ff6b6b",   // 🔴 Foundations — coral
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-[#f8fdfc]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1a2e28] mb-4"
                    >
                        Technical <span className="text-[#20c997]">Skills</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#ff6b6b] mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-[#5a7069] max-w-2xl mx-auto font-medium"
                    >
                        Specialized tech stack focused on building end-to-end intelligent systems,
                        scalable data pipelines, and high-performance ML models.
                    </motion.p>

                    {/* Proficiency legend */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mt-4 flex-wrap"
                    >
                        {(["Expert", "Proficient", "Familiar"] as Proficiency[]).map((lvl) => (
                            <span key={lvl} className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${LEVEL_STYLES[lvl]}`}>
                                {lvl}
                            </span>
                        ))}
                    </motion.div>

                    {/* Domain colour legend */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-6 mt-3 flex-wrap"
                    >
                        {[
                            { color: "#20c997", label: "Core AI/ML" },
                            { color: "#6366f1", label: "Research & Infra" },
                            { color: "#ff6b6b", label: "Foundations" },
                        ].map(({ color, label }) => (
                            <div key={label} className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                                <span className="text-[11px] text-[#5a7069] font-medium uppercase tracking-wider">{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-[#cfe5df] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(32,201,151,0.1)] transition-all group relative overflow-hidden h-full flex flex-col"
                            style={{
                                ["--card-accent" as string]: category.accent,
                            }}
                        >
                            {/* Subtle dot-matrix background pattern — same motif as project cards */}
                            <div
                                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                                    backgroundSize: "22px 22px",
                                }}
                            />

                            {/* Accent Bar */}
                            <div
                                className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: category.accent }}
                            />

                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="p-3 rounded-xl transition-colors"
                                    style={{ backgroundColor: `${category.accent}15` }}
                                >
                                    <category.icon
                                        size={28}
                                        style={{ color: category.accent }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#1a2e28] leading-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <ul className="space-y-3 flex-grow">
                                {category.skills.map((skill, sIndex) => (
                                    <li key={sIndex} className="flex items-start justify-between gap-3">
                                        <span className="text-[#5a7069] text-[14px] leading-relaxed flex-1">
                                            {skill.name}
                                        </span>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0 mt-0.5 ${LEVEL_STYLES[skill.level]}`}>
                                            {skill.level}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
