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

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    skills: string[];
    accent: string;
    glow: string;
}

/*
 * 3-colour domain grouping (accent bar only — no proficiency labels):
 *  🩵 Electric Teal #2dd4bf — Core AI/ML output (ML, GenAI, MLOps)
 *  🟣 Violet       #a78bfa — Research & infrastructure (DL/CV, Cloud, Data Eng)
 *  🟠 Orange       #f97316 — Programming foundations
 */
const skillCategories: SkillCategory[] = [
    {
        title: "Machine Learning",
        icon: Brain,
        skills: [
            "Scikit-learn · XGBoost · LightGBM",
            "Feature Engineering & Selection",
            "Cross-validation & Model Evaluation",
            "Gradient Boosting & Ensemble Methods",
            "Classification, Regression & Clustering",
        ],
        accent: "#2dd4bf",
        glow: "rgba(45,212,191,0.08)",
    },
    {
        title: "NLP & GenAI",
        icon: MessageSquare,
        skills: [
            "RAG Pipelines & Vector Search",
            "LangChain · FAISS · Hugging Face",
            "AI Agents & Tool-Use Frameworks",
            "Prompt Engineering & Chain-of-Thought",
            "Embeddings & Hybrid Retrieval",
        ],
        accent: "#2dd4bf",
        glow: "rgba(45,212,191,0.08)",
    },
    {
        title: "MLOps & Deployment",
        icon: Settings,
        skills: [
            "Docker · MLflow · CI/CD Pipelines",
            "FastAPI & REST API Development",
            "AWS SageMaker & Serverless Deploy",
            "Model Versioning & Experiment Tracking",
            "End-to-end ML Workflow Design",
        ],
        accent: "#2dd4bf",
        glow: "rgba(45,212,191,0.08)",
    },
    {
        title: "Deep Learning / Computer Vision",
        icon: Eye,
        skills: [
            "PyTorch · TensorFlow · Keras",
            "YOLOv5 · Object Detection & Tracking",
            "3D CNN · BiLSTM · Transformers",
            "Transfer Learning & Fine-tuning",
            "Real-time Inference Optimization",
        ],
        accent: "#a78bfa",
        glow: "rgba(167,139,250,0.08)",
    },
    {
        title: "Cloud / Applications",
        icon: Cloud,
        skills: [
            "AWS Lambda · S3 · API Gateway",
            "AWS Lex · Kinesis · Rekognition",
            "DynamoDB · SQS · SNS",
            "Serverless & Microservices Architecture",
        ],
        accent: "#a78bfa",
        glow: "rgba(167,139,250,0.08)",
    },
    {
        title: "Data Engineering & Big Data",
        icon: Layers,
        skills: [
            "Apache Spark · PySpark · Kafka",
            "Apache Airflow · ETL Pipeline Design",
            "AWS Glue · Redshift · S3 Pipelines",
            "Data Validation & Quality Engineering",
        ],
        accent: "#a78bfa",
        glow: "rgba(167,139,250,0.08)",
    },
    {
        title: "Programming & Databases",
        icon: Database,
        skills: [
            "Python · SQL · Bash",
            "PostgreSQL · MySQL · MongoDB · Snowflake",
            "Pandas · NumPy · Data Analysis",
            "Git · REST APIs · Code Review",
        ],
        accent: "#f97316",
        glow: "rgba(249,115,22,0.08)",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-[#111318] relative overflow-hidden">
            {/* Subtle ambient glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2dd4bf]/[0.04] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#a78bfa]/[0.04] blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Technical <span className="bg-gradient-to-r from-[#2dd4bf] to-[#a78bfa] bg-clip-text text-transparent">Skills</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-[#f97316] mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        End-to-end stack for building intelligent systems — from
                        raw data and model training to production-grade AI deployment.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className="bg-[#1c2030] rounded-2xl p-8 border border-white/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all group relative overflow-hidden h-full flex flex-col"
                            style={{
                                boxShadow: `0 8px 30px rgba(0,0,0,0.3)`,
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 40px ${category.glow}`;
                                (e.currentTarget as HTMLElement).style.borderColor = `${category.accent}30`;
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.3)`;
                                (e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.07)`;
                            }}
                        >
                            {/* Accent Bar — domain colour */}
                            <div
                                className="absolute top-0 left-0 w-full h-[3px] opacity-50 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: category.accent }}
                            />

                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="p-3 rounded-xl transition-colors"
                                    style={{ backgroundColor: `${category.accent}18` }}
                                >
                                    <category.icon
                                        size={26}
                                        style={{ color: category.accent }}
                                    />
                                </div>
                                <h3 className="text-[17px] font-bold text-white leading-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List — clean bullets, no proficiency labels */}
                            <ul className="space-y-2.5 flex-grow">
                                {category.skills.map((skill, sIndex) => (
                                    <li key={sIndex} className="flex items-start gap-2.5">
                                        <span
                                            className="mt-[7px] shrink-0 w-[5px] h-[5px] rounded-full"
                                            style={{ backgroundColor: category.accent + "bb" }}
                                        />
                                        <span className="text-slate-400 text-[13.5px] leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {skill}
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
