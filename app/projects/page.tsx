"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Github, X, Calendar, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";

// Project Data
const PROJECTS_DATA = [
    {
        id: "autorag",
        title: "Auto Multimodal RAG",
        intro: "Multimodal RAG system for automotive domain using GenAI, FAISS, and FastAPI",
        description: "Engineered a multimodal RAG system for the automotive domain. Supports document ingestion, vector search, and grounded Q&A over manuals, recalls, and OBD data using Google GenAI and FAISS.",
        timeline: "Nov 2025 - Present",
        tech: ["Python", "FastAPI", "FAISS", "Google GenAI"],
        techBars: [
            { label: "Python", value: 95 },
            { label: "FastAPI", value: 85 },
            { label: "FAISS", value: 80 },
            { label: "Google GenAI", value: 82 }
        ],
        achievements: [
            "Built document and image search with chunking and metadata filtering",
            "Achieved 94% service availability with retry logic and circuit controls",
            "Implemented request logging and monitoring for latency tracking"
        ],
        github: "https://github.com/YatinKande/auto-multimodal-rag",
        class: "card-autorag",
        isInternship: false
    },
    {
        id: "lipread",
        title: "Lip Read AI — LipNet",
        intro: "Deep learning lip-reading system using 3D CNNs, Bi-LSTMs, and CTC loss",
        description: "Implemented a deep learning lip-reading AI system trained on the GRID dataset using a LipNet-inspired architecture with 3D CNNs, Bi-LSTMs, and CTC loss. Processes video with OpenCV and trains via TensorFlow.",
        timeline: "Apr 2025 - Jul 2025",
        tech: ["Python", "3D CNN", "Bi-LSTM", "TensorFlow", "OpenCV"],
        techBars: [
            { label: "Python", value: 92 },
            { label: "3D CNN", value: 88 },
            { label: "Bi-LSTM", value: 85 },
            { label: "TensorFlow", value: 80 },
            { label: "OpenCV", value: 78 }
        ],
        achievements: [
            "Processed and normalized 30,000+ video frames with structured splits",
            "Performed SQL-based analysis across 50+ training iterations",
            "Built complete training and validation pipeline with CTC loss"
        ],
        github: "https://github.com/YatinKande/Lip-Read-AI-using-LipNet",
        class: "card-lipread",
        isInternship: false
    },
    {
        id: "dataset-bot",
        title: "Dataset Concierge Bot",
        intro: "Conversational bot to find and retrieve datasets using natural language",
        description: "A conversational bot that helps users find, save, and retrieve datasets from multiple sources using natural language. Features new-user onboarding, slot-filling, and flexible date handling.",
        timeline: "Aug 2025 - Oct 2025",
        tech: ["JavaScript", "AWS Lex", "DynamoDB", "Lambda"],
        techBars: [
            { label: "JavaScript", value: 85 },
            { label: "AWS Lex", value: 88 },
            { label: "DynamoDB", value: 80 },
            { label: "Lambda", value: 82 }
        ],
        achievements: [
            "Implemented natural language understanding with AWS Lex",
            "Built flexible date handling and user ID management system",
            "Deployed serverless architecture with Lambda and DynamoDB"
        ],
        github: "https://github.com/YatinKande/Dataset-Concierge-Bot",
        class: "card-dataset-bot",
        isInternship: false
    },
    {
        id: "ai-car",
        title: "AI Car Simulation — NEAT",
        intro: "Self-driving car simulation using NeuroEvolution for autonomous navigation",
        description: "Python-based simulation of self-driving cars using NeuroEvolution of Augmenting Topologies (NEAT). Implements reinforcement learning for cars to autonomously navigate tracks by evolving neural networks.",
        timeline: "Jan 2025",
        tech: ["Python", "NEAT", "Reinforcement Learning"],
        techBars: [
            { label: "Python", value: 95 },
            { label: "NEAT", value: 88 },
            { label: "Reinforcement Learning", value: 82 }
        ],
        achievements: [
            "Implemented full NEAT algorithm for neural network evolution",
            "Built autonomous track navigation and collision avoidance",
            "Visualized evolutionary progress across generations"
        ],
        github: "https://github.com/YatinKande/AI-Car-Simulation-using-NEAT-Algorithm",
        class: "card-ai-car",
        isInternship: false
    },
    {
        id: "covid",
        title: "COVID-19 Data Analysis",
        intro: "Comprehensive data visualizations analyzing Covid-19 crisis patterns and trends",
        description: "Comprehensive data analysis and visualization project describing Covid-19 crisis patterns. Includes trend analysis, geographic comparisons, and interactive dashboards built with Plotly.",
        timeline: "Sep 2025",
        tech: ["Python", "Pandas", "Plotly", "Jupyter"],
        techBars: [
            { label: "Python", value: 90 },
            { label: "Pandas", value: 92 },
            { label: "Plotly", value: 85 },
            { label: "Jupyter", value: 88 }
        ],
        achievements: [
            "Created interactive visualizations for crisis trend analysis",
            "Performed geographic and temporal pattern comparisons",
            "Built full capstone project with documentation"
        ],
        github: "https://github.com/YatinKande/Covid--19-Data-Analysis-Capstone-Project",
        class: "card-covid",
        isInternship: false
    },
    {
        id: "kinesis",
        title: "KinesisKeyEntry",
        intro: "Smart door authentication using AWS Rekognition and Kinesis Video Streams",
        description: "Smart Door Authentication System using AWS Rekognition for facial detection, Kinesis Video Streams for real-time processing, S3 for storage, and DynamoDB for secure access control management.",
        timeline: "Dec 2025",
        tech: ["AWS Rekognition", "Kinesis", "S3", "DynamoDB"],
        techBars: [
            { label: "AWS Rekognition", value: 88 },
            { label: "Kinesis", value: 82 },
            { label: "DynamoDB", value: 80 },
            { label: "S3", value: 78 }
        ],
        achievements: [
            "Integrated AWS Rekognition for real-time facial authentication",
            "Built video stream processing pipeline with Kinesis",
            "Implemented secure access control with S3 and DynamoDB"
        ],
        github: "https://github.com/YatinKande/KinesisKeyEntry",
        class: "card-kinesis",
        isInternship: false
    },
    {
        id: "ev-finder",
        title: "Smart EV Finder",
        intro: "LLM-powered EV charging station finder using Llama 3 for personalized recommendations",
        description: "Conversational EV charging station finder powered by Llama 3 LLM. Leverages natural language understanding and dynamic user profiling to deliver personalized charging station recommendations.",
        timeline: "Jan 2026",
        tech: ["Python", "Llama 3", "LLM", "NLP"],
        techBars: [
            { label: "Python", value: 92 },
            { label: "Llama 3", value: 85 },
            { label: "NLP", value: 88 },
            { label: "LLM", value: 82 }
        ],
        achievements: [
            "Integrated Llama 3 for advanced natural language understanding",
            "Built dynamic user profiling for personalized results",
            "Delivered location-based personalized charging recommendations"
        ],
        github: "https://github.com/YatinKande/smart-ev-finder",
        class: "card-ev-finder",
        isInternship: false
    },
    {
        id: "smartsoil",
        title: "SmartSoil Crop Recommender",
        intro: "AI system recommending optimal crops using soil nutrient data analysis",
        description: "AI-powered crop recommendation system using soil nutrient data analysis. Helps farmers and policymakers in India make informed, data-driven choices to improve crop yields across regions.",
        timeline: "Oct 2025",
        tech: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
        techBars: [
            { label: "Python", value: 90 },
            { label: "Scikit-learn", value: 88 },
            { label: "Pandas", value: 85 },
            { label: "Jupyter", value: 82 }
        ],
        achievements: [
            "Built soil nutrient analysis and classification pipeline",
            "Trained recommendation model for regional crop optimization",
            "Designed for real-world agricultural decision support"
        ],
        github: "https://github.com/YatinKande/Smartsoil-Crop-Recommender",
        class: "card-smartsoil",
        isInternship: false
    },
    {
        id: "license",
        title: "License Plate Recognition",
        intro: "ANPR system detecting and recognizing license plates from vehicle images",
        description: "Automatic Number Plate Recognition system using image processing and deep learning techniques to automatically detect, extract, and recognize license plate numbers from vehicles in images or videos.",
        timeline: "Jan 2025",
        tech: ["Python", "OpenCV", "Deep Learning", "Jupyter"],
        techBars: [
            { label: "Python", value: 90 },
            { label: "OpenCV", value: 88 },
            { label: "Deep Learning", value: 85 },
            { label: "Jupyter", value: 80 }
        ],
        achievements: [
            "Built detection pipeline using deep learning and OpenCV",
            "Implemented OCR for license plate character extraction",
            "Achieved real-time processing capability on video streams"
        ],
        github: "https://github.com/YatinKande/Automatic-License-Plate-Recognition",
        class: "card-license",
        isInternship: false
    },
    {
        id: "yolo-crop",
        title: "YOLO Crop Detection",
        intro: "Real-time weed detection in agriculture using YOLO on 1000+ multispectral images",
        description: "Trained YOLO-based vision models on 1000+ multispectral images to distinguish crops from weeds in real agricultural field conditions. Built end-to-end computer vision pipelines with deployment dashboards.",
        timeline: "Feb 2024 - Jul 2024 | DataZymes Inc, Bengaluru",
        tech: ["YOLO", "OpenCV", "Python", "Plotly Dash"],
        techBars: [
            { label: "YOLO", value: 95 },
            { label: "OpenCV", value: 90 },
            { label: "Python", value: 92 },
            { label: "Plotly Dash", value: 82 }
        ],
        achievements: [
            "Trained YOLO on 1000+ multispectral real-field images",
            "Reduced false positives using augmentation and normalization",
            "Created Plotly Dash dashboards for deployment readiness reviews"
        ],
        github: "https://github.com/YatinKande",
        class: "card-yolo-crop",
        isInternship: true
    },
    {
        id: "ml-pipeline",
        title: "ML Classification Pipeline",
        intro: "End-to-end supervised learning pipeline on 32K+ records with full EDA",
        description: "Implemented supervised learning pipelines on datasets exceeding 32,000 records using Python, Pandas, and Scikit-learn. Conducted thorough EDA and evaluated models using multiple metrics.",
        timeline: "Mar 2022 - Jun 2022 | SmartKnower, Bengaluru",
        tech: ["Scikit-learn", "Pandas", "Python"],
        techBars: [
            { label: "Scikit-learn", value: 90 },
            { label: "Pandas", value: 92 },
            { label: "Python", value: 95 }
        ],
        achievements: [
            "Built full pipeline on 32,000+ record dataset",
            "Evaluated using accuracy, precision, recall, F1-score, ROC-AUC",
            "Documented reproducible experiment notes for model selection"
        ],
        github: "https://github.com/YatinKande",
        class: "card-ml-pipeline",
        isInternship: true
    }
];

export default function ProjectsPage() {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_DATA[0] | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen relative overflow-x-hidden pt-12 pb-20">
            <NeuralBackground />

            {/* Background Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,17,40,0.4)_100%)]" />

            <div className="max-w-[1200px] mx-auto relative z-10 px-6 sm:px-10">

                {/* PAGE HEADER */}
                <motion.header
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <button
                        onClick={() => router.push('/dashboard')}
                        className="text-primary text-[14px] font-bold hover:underline flex items-center gap-2 mb-8 transition-opacity"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </button>

                    <div className="text-center">
                        <h1 className="text-[42px] font-bold text-white mb-2 font-heading tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">PROJECTS</h1>
                        <p className="text-[16px] italic text-white/70 mb-8 font-medium">Explore my work</p>
                        <div className="h-[1px] w-full max-w-sm mx-auto bg-primary/30" />
                    </div>
                </motion.header>

                {/* PROJECTS GRID */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]"
                    initial="visible"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.05
                            }
                        }
                    }}
                >
                    {PROJECTS_DATA.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            onClick={() => setSelectedProject(project)}
                            className={`project-card relative h-[320px] rounded-[16px] border border-primary/30 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-primary/70 hover:shadow-[0_8px_30px_rgba(6,182,212,0.2)] ${project.class}`}
                            style={{ position: 'relative' }} // ensure relative for z-index
                        >

                            {/* Internship Badge */}
                            {project.isInternship && (
                                <div className="absolute top-[14px] left-[14px] px-[8px] py-[3px] bg-blue-500/30 border border-blue-500/50 text-[#60A5FA] text-[9px] font-bold uppercase rounded-[12px] z-[5]">
                                    INTERNSHIP
                                </div>
                            )}

                            {/* GitHub Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.github, '_blank');
                                }}
                                className="absolute top-[14px] right-[14px] w-[38px] h-[38px] rounded-full bg-black/60 border border-white/25 flex items-center justify-center text-white hover:bg-black/85 hover:border-white transition-all z-[5]"
                            >
                                <Github size={18} />
                            </button>

                            {/* Bottom Glassmorphism Area */}
                            <div className="absolute bottom-0 left-0 right-0 h-[58%] p-[24px] flex flex-col justify-end bg-gradient-to-t from-[#0A1128] via-[#0A1128]/90 to-transparent z-[5]">
                                <h2 className="text-[19px] font-bold text-white mb-[8px] font-heading drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{project.title}</h2>
                                <p className="text-[13px] font-medium text-white/90 mb-[12px] line-clamp-2 leading-relaxed">{project.intro}</p>
                                <div className="flex flex-wrap gap-[6px]">
                                    {project.tech.map(tag => (
                                        <span key={tag} className="px-[10px] py-[4px] bg-primary/20 border border-primary/40 text-primary text-[11px] font-bold uppercase rounded-[20px]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* PROJECT MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 sm:p-10">
                        {/* Modal Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                        />

                        {/* Modal Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-[680px] max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[#0a1628] to-[#122240] border border-primary/40 rounded-[20px] p-[36px] shadow-2xl custom-scrollbar"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
                            >
                                <X size={28} />
                            </button>

                            {/* Modal Content */}
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 className="text-[26px] font-bold text-white mb-2 font-heading">{selectedProject.title}</h2>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedProject.tech.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 bg-primary/20 border border-primary/40 text-primary text-[11px] font-bold uppercase rounded-[20px]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-primary text-[13px] font-medium">
                                        <Calendar size={14} />
                                        <span>{selectedProject.timeline}</span>
                                    </div>
                                </div>

                                <div className="h-[1px] w-full bg-primary/15" />

                                <div>
                                    <span className="text-[12px] uppercase text-primary font-bold tracking-[2px] block mb-3">DESCRIPTION</span>
                                    <p className="text-[14px] text-white/75 leading-[1.7]">{selectedProject.description}</p>
                                </div>

                                <div className="h-[1px] w-full bg-primary/15" />

                                <div>
                                    <span className="text-[12px] uppercase text-primary font-bold tracking-[2px] block mb-4">KEY ACHIEVEMENTS</span>
                                    <ul className="space-y-3">
                                        {selectedProject.achievements.map((achievement, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (idx * 0.15) }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                                <span className="text-[14px] text-white leading-relaxed">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="h-[1px] w-full bg-primary/15" />

                                <div>
                                    <span className="text-[12px] uppercase text-primary font-bold tracking-[2px] block mb-4">TECH STACK</span>
                                    <div className="space-y-3">
                                        {selectedProject.techBars.map((bar, idx) => (
                                            <div key={bar.label} className="flex flex-col gap-1.5">
                                                <div className="flex justify-between items-center px-1">
                                                    <span className="text-[12px] text-white/70 font-medium">{bar.label}</span>
                                                    <span className="text-[12px] text-primary font-bold">{bar.value}%</span>
                                                </div>
                                                <div className="h-[6px] bg-primary/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${bar.value}%` }}
                                                        transition={{ duration: 1.2, delay: 0.4 + (idx * 0.2), ease: "easeOut" }}
                                                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => window.open(selectedProject.github, '_blank')}
                                        className="w-fit flex items-center gap-3 px-6 py-3 bg-primary/15 border border-primary/50 text-primary font-bold rounded-[8px] hover:bg-primary/25 transition-all"
                                    >
                                        <Github size={20} />
                                        View on GitHub →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
          pointer-events: none;
        }
        .card-autorag { background: linear-gradient(135deg, #0a1128 0%, #0d2f5a 40%, #1a4a7a 100%); }
        .card-lipread { background: linear-gradient(135deg, #0a1128 0%, #2d1b69 40%, #4a2d8a 100%); }
        .card-dataset-bot { background: linear-gradient(135deg, #0a1128 0%, #0d4f4f 40%, #1a6b6b 100%); }
        .card-ai-car { background: linear-gradient(135deg, #0a1128 0%, #3d2b1f 40%, #5a4a30 100%); }
        .card-covid { background: linear-gradient(135deg, #0a1128 0%, #4a1942 40%, #6b2d5c 100%); }
        .card-kinesis { background: linear-gradient(135deg, #0a1128 0%, #1b4332 40%, #2d6b52 100%); }
        .card-ev-finder { background: linear-gradient(135deg, #0a1128 0%, #1a4a2a 40%, #2d7a45 100%); }
        .card-smartsoil { background: linear-gradient(135deg, #0a1128 0%, #3a5a1b 40%, #5a8a2d 100%); }
        .card-license { background: linear-gradient(135deg, #0a1128 0%, #4a3b1b 40%, #6b5a2d 100%); }
        .card-yolo-crop { background: linear-gradient(135deg, #0a1128 0%, #2a5a1b 40%, #3d7a2d 100%); }
        .card-ml-pipeline { background: linear-gradient(135deg, #0a1128 0%, #1b3a6b 40%, #2d5a9a 100%); }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
        </div>
    );
}
