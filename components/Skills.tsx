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
}

/*
 * 3-colour domain grouping (accent bar only — no proficiency labels):
 *  🟢 Mint    #20c997 — Core AI/ML output (ML, GenAI, MLOps)
 *  🟣 Indigo  #6366f1 — Research & infrastructure (DL/CV, Cloud, Data Eng)
 *  🔴 Coral   #ff6b6b — Programming foundations
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
        accent: "#20c997",
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
        accent: "#20c997",
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
        accent: "#20c997",
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
        accent: "#6366f1",
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
        accent: "#6366f1",
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
        accent: "#6366f1",
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
        accent: "#ff6b6b",
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
                        End-to-end stack for building intelligent systems — from
                        raw data and model training to production-grade AI deployment.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl p-8 border border-[#cfe5df] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all group relative overflow-hidden h-full flex flex-col"
                        >
                            {/* Subtle dot-matrix background pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                                    backgroundSize: "22px 22px",
                                }}
                            />

                            {/* Accent Bar — domain colour */}
                            <div
                                className="absolute top-0 left-0 w-full h-[3px] opacity-50 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: category.accent }}
                            />

                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="p-3 rounded-xl transition-colors"
                                    style={{ backgroundColor: `${category.accent}15` }}
                                >
                                    <category.icon
                                        size={26}
                                        style={{ color: category.accent }}
                                    />
                                </div>
                                <h3 className="text-[17px] font-bold text-[#1a2e28] leading-tight">
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
                                        <span className="text-[#5a7069] text-[13.5px] leading-relaxed">
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
