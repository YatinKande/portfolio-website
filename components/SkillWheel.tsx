"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Eye,
    MessageSquare,
    Database,
    Server,
    Code,
    Cloud,
    Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const SKILL_CATEGORIES = [
    {
        id: "ml",
        title: "Machine Learning",
        icon: Brain,
        skills: [
            "Scikit-learn, XGBoost, LightGBM",
            "Feature engineering (15+ features)",
            { text: "Churn prediction model with 81% AUC-ROC", highlight: "81% AUC-ROC" },
            "Hyperparameter tuning & model evaluation"
        ],
        angle: 0
    },
    {
        id: "dl",
        title: "Deep Learning / Computer Vision",
        icon: Eye,
        skills: [
            "PyTorch, TensorFlow, YOLOv5, 3D CNN-BiLSTM",
            { text: "74% mAP YOLOv5 crop disease model", highlight: "74% mAP" },
            { text: "Real-time inference optimization (40% faster)", highlight: "(40% faster)" },
            "Data augmentation & transfer learning"
        ],
        angle: 51.4
    },
    {
        id: "nlp",
        title: "NLP & GenAI",
        icon: MessageSquare,
        skills: [
            "RAG, LangChain, FAISS, Hugging Face",
            { text: "Multi-modal RAG system with 84% retrieval precision", highlight: "84% retrieval precision" },
            "Prompt engineering, embeddings, hybrid search",
            "Semantic chunking, metadata filtering"
        ],
        angle: 102.8
    },
    {
        id: "de",
        title: "Data Engineering & Big Data",
        icon: Database,
        skills: [
            "Apache Spark, PySpark, Kafka, Airflow",
            { text: "Distributed preprocessing of 10,000+ images/day", highlight: "10,000+ images/day" },
            "AWS S3, Lambda, DynamoDB pipelines",
            "ETL development & automation"
        ],
        angle: 154.2
    },
    {
        id: "mlops",
        title: "MLOps & Deployment",
        icon: Server,
        skills: [
            "Docker, Kubernetes, MLflow, CI/CD",
            "End-to-end training → deployment workflows",
            "Model tracking, versioning, reproducibility",
            "AWS SageMaker, serverless event-driven architectures"
        ],
        angle: 205.6
    },
    {
        id: "prog",
        title: "Programming & Databases",
        icon: Code,
        skills: [
            "Python, SQL, Bash, R",
            "PostgreSQL, MySQL, MongoDB, Snowflake",
            "API integration, modular architecture, clean code practices"
        ],
        angle: 257
    },
    {
        id: "cloud",
        title: "Cloud / Applications",
        icon: Cloud,
        skills: [
            { text: "AWS Lex & Lambda serverless chatbot (500+ daily requests)", highlight: "(500+ daily requests)" },
            "SQS, SNS, DynamoDB, API Gateway",
            "Lightweight scalable microservices"
        ],
        angle: 308.4
    }
];

export default function SkillWheel() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="proficiencies" className="relative py-20 md:py-32 px-6 bg-[#e6f2ef] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#20c997] bg-clip-text text-transparent inline-block">
                        Technical Proficiencies
                    </h2>
                </div>

                {isMobile ? (
                    /* Grid Fallback for Mobile */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {SKILL_CATEGORIES.map((cat) => (
                            <SkillCard key={cat.id} category={cat} />
                        ))}
                    </div>
                ) : (
                    /* Radial Layout for Desktop */
                    <div className="relative h-[800px] flex items-center justify-center">
                        {/* Central Hub */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20 w-32 h-32 bg-gradient-to-br from-[#ff6b6b] to-[#20c997] rounded-full flex items-center justify-center shadow-2xl shadow-[#20c997]/50"
                        >
                            <Zap className="text-white size-12" />
                        </motion.div>

                        {/* Skill Cards arranged in a circle */}
                        {SKILL_CATEGORIES.map((cat) => {
                            const radius = 340;
                            const x = Math.cos((cat.angle - 90) * (Math.PI / 180)) * radius;
                            const y = Math.sin((cat.angle - 90) * (Math.PI / 180)) * radius;

                            return (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: cat.angle / 360 }}
                                    style={{
                                        position: "absolute",
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    className="z-10"
                                    onMouseEnter={() => setHoveredId(cat.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Connecting Line */}
                                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10">
                                        <motion.line
                                            x1="400"
                                            y1="400"
                                            x2={400 + x}
                                            y2={400 + y}
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeDasharray="4 4"
                                            className="text-[#20c997]/30"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </svg>

                                    <div className={`w-[280px] bg-white border border-[#cfe5df] rounded-2xl p-6 transition-all duration-300 shadow-xl ${hoveredId === cat.id ? "border-[#20c997]/50 scale-105 -translate-y-2 shadow-[#20c997]/20 shadow-2xl bg-white" : ""}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <cat.icon className="text-[#20c997] size-6" />
                                            <h3 className="text-xl font-bold text-[#20c997]">{cat.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {cat.skills.map((skill, idx) => (
                                                <li key={idx} className="text-sm text-[#5a7069] flex items-start gap-2">
                                                    <span className="text-[#20c997] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#20c997]" />
                                                    {typeof skill === "string" ? (
                                                        skill
                                                    ) : (
                                                        <span>
                                                            {skill.text.split(skill.highlight)[0]}
                                                            <span className="text-[#ff6b6b] font-semibold">{skill.highlight}</span>
                                                            {skill.text.split(skill.highlight)[1]}
                                                        </span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

function SkillCard({ category }: { category: typeof SKILL_CATEGORIES[0] }) {
    return (
        <div className="bg-white border border-[#cfe5df] rounded-2xl p-6 transition-all duration-300 shadow-xl hover:border-[#20c997]/50 hover:bg-white group">
            <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-[#20c997] size-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold text-[#20c997]">{category.title}</h3>
            </div>
            <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm md:text-base text-[#5a7069] flex items-start gap-2">
                        <span className="text-[#20c997] mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#20c997]" />
                        {typeof skill === "string" ? (
                            skill
                        ) : (
                            <span>
                                {skill.text.split(skill.highlight)[0]}
                                <span className="text-[#ff6b6b] font-semibold">{skill.highlight}</span>
                                {skill.text.split(skill.highlight)[1]}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
