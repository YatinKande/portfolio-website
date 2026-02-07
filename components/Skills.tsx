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
    CheckCircle2
} from "lucide-react";

const skillCategories = [
    {
        title: "Machine Learning",
        icon: Brain,
        skills: [
            "Scikit-learn, XGBoost, LightGBM",
            "Feature engineering",
            "Hyperparameter tuning & model evaluation"
        ],
        accent: "#20c997" // Mint
    },
    {
        title: "Deep Learning / Computer Vision",
        icon: Eye,
        skills: [
            "PyTorch, TensorFlow, YOLOv5, 3D CNN-BiLSTM",
            "Real-time inference optimization",
            "Data augmentation & transfer learning"
        ],
        accent: "#ff6b6b" // Coral
    },
    {
        title: "Cloud / Applications",
        icon: Cloud,
        skills: [
            "AWS Lex & Lambda serverless",
            "SQS, SNS, DynamoDB, API Gateway",
            "Lightweight scalable microservices"
        ],
        accent: "#20c997"
    },
    {
        title: "Programming & Databases",
        icon: Database,
        skills: [
            "Python, SQL, Bash, R",
            "PostgreSQL, MySQL, MongoDB, Snowflake",
            "API integration, modular architecture, clean code practices"
        ],
        accent: "#ff6b6b"
    },
    {
        title: "NLP & GenAI",
        icon: MessageSquare,
        skills: [
            "RAG, LangChain, FAISS, Hugging Face",
            "Prompt engineering, embeddings, hybrid search",
            "Semantic chunking, metadata filtering"
        ],
        accent: "#20c997"
    },
    {
        title: "MLOps & Deployment",
        icon: Settings,
        skills: [
            "Docker, Kubernetes, MLflow, CI/CD",
            "End-to-end training → deployment workflows",
            "Model tracking, versioning, reproducibility",
            "AWS SageMaker, serverless event-driven architecture"
        ],
        accent: "#ff6b6b"
    },
    {
        title: "Data Engineering & Big Data",
        icon: Layers,
        skills: [
            "Apache Spark, PySpark, Kafka, Airflow",
            "AWS S3, Lambda, DynamoDB pipelines"
        ],
        accent: "#20c997"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-[#f8fdfc]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
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
                        >
                            {/* Accent Bar */}
                            <div
                                className="absolute top-0 left-0 w-full h-1 opacity-60 group-hover:opacity-100 transition-opacity"
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
                            <ul className="space-y-4 flex-grow">
                                {category.skills.map((skill, sIndex) => (
                                    <li key={sIndex} className="flex gap-3 items-start group/item">
                                        <CheckCircle2
                                            size={16}
                                            className="mt-1 flex-shrink-0 transition-colors"
                                            style={{ color: `${category.accent}80` }}
                                        />
                                        <span className="text-[#5a7069] text-[15px] leading-relaxed group-hover/item:text-[#1a2e28] transition-colors">
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
