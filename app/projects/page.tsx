"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Github, X, ArrowLeft, ExternalLink, Mail, Linkedin, ChevronRight, Check } from "lucide-react";
import Image from "next/image";

const PROJECTS_DATA = [
    {
        id: "aws-docs-rag-bot",
        title: "AWS Docs RAG Bot",
        fullTitle: "AWS Documentation RAG Chatbot",
        intro: "Intelligent document Q&A system with retrieval-augmented generation",
        description: "A sophisticated document RAG chatbot that allows users to upload AWS documentation or any files and ask questions. The system retrieves the most relevant passages from documents and generates grounded, contextual answers with informative citations. Ensures responses are strictly based on provided content.",
        features: [
            "Upload and process AWS documentation",
            "Intelligent passage retrieval using FAISS",
            "Grounded answer generation with citations",
            "Fast query response times",
            "RESTful API architecture"
        ],
        tech: ["FastAPI", "FAISS", "Python", "LangChain", "AWS"],
        techDetails: [
            { name: "FastAPI", description: "High-performance web framework for the backend." },
            { name: "FAISS", description: "Efficient vector similarity search for document retrieval." },
            { name: "LangChain", description: "Framework for building LLM-powered applications." },
            { name: "AWS", description: "Cloud infrastructure for hosting and storage." }
        ],
        github: "https://github.com/YatinKande/aws-docs-rag-bot",
        image: "/projects/aws_rag_chatbot.png"
    },
    {
        id: "smart-ev-finder",
        title: "Smart EV Finder",
        fullTitle: "Smart EV Charging Station Finder",
        intro: "AI-powered conversational EV charging station finder",
        description: "A conversational AI application powered by Llama 3 that helps users find the best EV charging stations. The system leverages natural language understanding to interpret user queries and provides personalized charging station recommendations based on location, availability, and speed.",
        features: [
            "Natural language query processing",
            "Dynamic user profiling system",
            "Real-time charging station availability",
            "Personalized recommendations",
            "Multi-criteria filtering"
        ],
        tech: ["Llama 3", "Python", "NLP", "Geolocation APIs"],
        techDetails: [
            { name: "Llama 3", description: "State-of-the-art LLM for natural language processing." },
            { name: "Python", description: "Primary language for backend logic and data processing." },
            { name: "Geolocation APIs", description: "Used for mapping and station discovery." }
        ],
        github: "https://github.com/YatinKande/smart-ev-finder",
        image: "/projects/ev-finder.png"
    },
    {
        id: "auto-multimodal-rag",
        title: "Automotive Multimodal RAG",
        fullTitle: "Automotive Multimodal RAG System",
        intro: "Multimodal RAG system for automotive domain Q&A",
        description: "An advanced multimodal RAG system designed specifically for the automotive domain. It supports document ingestion, vector search, and grounded Q&A capabilities over automotive manuals, recall documents, and OBD-II diagnostic data, processing both text and imagery.",
        features: [
            "Multimodal data processing (text, images, diagrams)",
            "Vector-based semantic search",
            "Automotive domain specialization",
            "OBD-II data integration",
            "Recall and manual documentation support"
        ],
        tech: ["Google GenAI", "FAISS", "FastAPI", "Python"],
        techDetails: [
            { name: "Google GenAI", description: "Multimodal LLM for text and image understanding." },
            { name: "FAISS", description: "Vector database for fast document retrieval." },
            { name: "FastAPI", description: "Fast and modern API framework." }
        ],
        github: "https://github.com/YatinKande/auto-multimodal-rag",
        image: "/projects/auto_multimodal_rag.png"
    },
    {
        id: "kinesis-key-entry",
        title: "Kinesis Key Entry",
        fullTitle: "Kinesis Smart Door Authentication System",
        intro: "AWS-powered secure door access control system",
        description: "A cutting-edge smart door authentication system using AWS Rekognition for facial recognition, Kinesis Video Streams for real-time video processing, S3 for secure storage, and DynamoDB for access control management. Provides secure, contactless entry with comprehensive audit trails.",
        features: [
            "Real-time facial recognition",
            "Video stream processing with Kinesis",
            "Secure access control management",
            "Audit trail and logging",
            "Integration with AWS cloud services"
        ],
        tech: ["AWS Rekognition", "Kinesis", "S3", "DynamoDB"],
        techDetails: [
            { name: "AWS Rekognition", description: "Facial recognition for secure authentication." },
            { name: "Kinesis Video Streams", description: "Real-time video processing pipeline." },
            { name: "DynamoDB", description: "NoSQL database for access management." }
        ],
        github: "https://github.com/YatinKande/KinesisKeyEntry",
        image: "/projects/smart_door_auth.png"
    },
    {
        id: "dataset-concierge-bot",
        title: "Dataset Concierge Bot",
        fullTitle: "Dataset Concierge Bot",
        intro: "Conversational bot for dataset discovery and management",
        description: "An intelligent conversational bot that helps users find, save, and retrieve datasets from multiple sources using natural language. Features include new-user onboarding, slot-filling for precise queries, flexible date handling, and user ID-based data management. Built as a serverless chatbot using AWS Lex, Lambda, and DynamoDB with 500+ daily requests.",
        features: [
            "Natural language dataset search",
            "Multi-source dataset aggregation",
            "User preference learning",
            "Slot-filling conversation flow",
            "Serverless architecture (500+ daily requests)"
        ],
        tech: ["AWS Lex", "AWS Lambda", "DynamoDB", "JavaScript", "S3"],
        techDetails: [
            { name: "AWS Lex", description: "Conversational AI for building intelligent bots." },
            { name: "AWS Lambda", description: "Serverless compute for handling requests." },
            { name: "DynamoDB", description: "Scalable NoSQL database for management." }
        ],
        github: "https://github.com/YatinKande/Dataset-Concierge-Bot",
        image: "/projects/dataset-bot.png"
    },
    {
        id: "smartsoil-crop-recommender",
        title: "SmartSoil Crop Recommender",
        fullTitle: "SmartSoil Crop Recommender System",
        intro: "Data-driven crop recommendation for Indian farmers",
        description: "A machine learning-powered crop recommendation system that analyzes soil nutrient data to suggest the best crops for different regions in India. Helps farmers and policymakers make informed, data-driven decisions to improve crop yields and support sustainable agriculture practices.",
        features: [
            "Soil nutrient analysis",
            "Regional crop optimization",
            "Data-driven recommendations",
            "Farmer-friendly interface",
            "Policy support insights"
        ],
        tech: ["Python", "Jupyter", "Scikit-learn", "Pandas"],
        techDetails: [
            { name: "Scikit-learn", description: "Machine learning algorithms for recommendations." },
            { name: "Pandas", description: "Data manipulation and analysis toolkit." },
            { name: "Jupyter Notebook", description: "Interactive development environment." }
        ],
        github: "https://github.com/YatinKande/Smartsoil-Crop-Recommender",
        image: "/projects/smartsoil.png"
    },
    {
        id: "lip-read-ai-lipnet",
        title: "Lip-Read AI using LipNet",
        fullTitle: "AI Lip Reading System using LipNet Architecture",
        intro: "Deep learning lip-reading system with 3D CNNs",
        description: "An advanced deep learning-based lip-reading AI system trained on the GRID dataset. Uses a LipNet-inspired architecture with 3D Convolutional Neural Networks, Bi-directional LSTMs, and CTC loss for accurate speech recognition from silent video. Processes video input with OpenCV and trains models using TensorFlow.",
        features: [
            "Silent speech recognition from video",
            "3D CNN + BiLSTM architecture",
            "CTC loss optimization",
            "Video preprocessing pipeline",
            "High accuracy on GRID dataset"
        ],
        tech: ["PyTorch", "3D CNN", "BiLSTM", "OpenCV"],
        techDetails: [
            { name: "3D CNNs", description: "Spatiotemporal feature extraction from video." },
            { name: "BiLSTM", description: "Sequence modeling for phoneme recognition." },
            { name: "OpenCV", description: "Robust video frame processing." }
        ],
        github: "https://github.com/YatinKande/Lip-Read-AI-using-LipNet",
        image: "/projects/lipread.png"
    },
    {
        id: "covid-19-data-analysis",
        title: "COVID-19 Data Analysis",
        fullTitle: "COVID-19 Data Analysis Capstone Project",
        intro: "Comprehensive COVID-19 crisis data analysis",
        description: "A comprehensive data analysis and visualization project examining the COVID-19 pandemic. Features interactive visualizations that describe infection rates, mortality trends, vaccination progress, and regional impacts. Provides insights into the global health crisis through data-driven storytelling.",
        features: [
            "Interactive data visualizations",
            "Time-series analysis",
            "Regional impact comparisons",
            "Vaccination tracking",
            "Mortality trend analysis"
        ],
        tech: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn"],
        techDetails: [
            { name: "Pandas", description: "Large-scale health data manipulation." },
            { name: "Matplotlib/Seaborn", description: "Advanced statistical visualizations." },
            { name: "NumPy", description: "High-performance numerical computing." }
        ],
        github: "https://github.com/YatinKande/Covid--19-Data-Analysis-Capstone-Project",
        image: "/projects/covid.png"
    },
    {
        id: "ai-car-simulation-neat",
        title: "AI Car Simulation (NEAT)",
        fullTitle: "AI Car Simulation using NEAT Algorithm",
        intro: "NeuroEvolution autonomous vehicle navigation",
        description: "A Python-based simulation of self-driving cars using NeuroEvolution of Augmenting Topologies (NEAT). Implements reinforcement learning for autonomous navigation where neural networks evolve over generations to learn optimal driving strategies on complex tracks. Cars learn to navigate obstacles and optimize racing lines through genetic algorithms.",
        features: [
            "Genetic algorithm-based learning",
            "Neural network evolution",
            "Autonomous track navigation",
            "Multi-generation optimization",
            "Real-time simulation visualization"
        ],
        tech: ["Python", "NEAT", "Reinforcement Learning", "Pygame"],
        techDetails: [
            { name: "NEAT Algorithm", description: "NeuroEvolution for adaptive control systems." },
            { name: "Reinforcement Learning", description: "Optimization through environment interaction." },
            { name: "Pygame", description: "2D rendering for simulation visualization." }
        ],
        github: "https://github.com/YatinKande/AI-Car-Simulation-using-NEAT-Algorithm",
        image: "/projects/ai-car.png"
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
        <div className="min-h-screen bg-[#f0f8f6] font-sans text-[#1a2e28] overflow-x-hidden selection:bg-[#20c997]/30">
            {/* Header Section */}
            <header className="pt-24 pb-20 px-6 sm:px-10 max-w-[1240px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        onClick={() => router.push('/')}
                        className="flex items-center gap-2 text-[#20c997] font-bold hover:gap-3 transition-all mb-10 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[14px] uppercase tracking-widest">Back to Portfolio</span>
                    </button>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
                        All Projects <span className="inline-block hover:rotate-12 transition-transform cursor-help">📂</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-[#5a7069] max-w-3xl leading-relaxed font-medium">
                        A comprehensive gallery of my work in <span className="text-[#20c997]">AI</span>, <span className="text-[#20c997]">ML</span>, and <span className="text-[#20c997]">Data Engineering</span>.
                    </p>
                    <div className="h-1.5 w-32 bg-[#20c997] mt-10 rounded-full" />
                </motion.div>
            </header>

            {/* Projects Grid */}
            <main className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {PROJECTS_DATA.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-white border border-[#cfe5df] rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_20px_40px_rgba(26,46,40,0.1)] transition-all duration-500 h-[350px] flex flex-col"
                        >
                            {/* Card Media */}
                            <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#20c997]/20 to-[#20c997]/5" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                                <div className="absolute bottom-4 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                                    <h3 className="text-white text-[20px] font-bold tracking-tight leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-[#5a7069] text-[14px] line-clamp-2 mb-auto leading-relaxed font-medium">
                                    {project.intro}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-[#f0f8f6] border border-[#20c997]/20 text-[#20c997] text-[10px] font-bold uppercase tracking-wider rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <a
                        href="https://github.com/YatinKande"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#20c997] text-[#20c997] font-bold text-lg rounded-full hover:bg-[#20c997] hover:text-white transition-all duration-500 shadow-sm hover:shadow-[0_15px_30px_rgba(32,201,151,0.2)] hover:-translate-y-1.5"
                    >
                        <Github className="w-6 h-6" />
                        <span>View More on GitHub</span>
                    </a>

                    <div className="flex justify-center gap-10 mt-16 scale-110">
                        <a href="https://linkedin.com/in/yatin-kande" target="_blank" className="text-[#5a7069] hover:text-[#20c997] transition-all hover:scale-125 duration-300">
                            <Linkedin className="w-7 h-7" />
                        </a>
                        <a href="https://github.com/YatinKande" target="_blank" className="text-[#5a7069] hover:text-[#20c997] transition-all hover:scale-125 duration-300">
                            <Github className="w-7 h-7" />
                        </a>
                        <a href="mailto:yatink@umich.edu" className="text-[#5a7069] hover:text-[#20c997] transition-all hover:scale-125 duration-300">
                            <Mail className="w-7 h-7" />
                        </a>
                    </div>
                </motion.div>
            </main>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-[#0a1512]/90 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={selectedProject.id}
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-[40px] shadow-2xl flex flex-col lg:flex-row"
                        >
                            {/* Modal Left - Sticky Image Sidebar */}
                            <div className="lg:w-[40%] relative bg-[#f0f8f6] min-h-[300px] lg:min-h-full">
                                {selectedProject.image && (
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/95 hidden lg:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/95 to-transparent lg:hidden" />

                                <div className="absolute top-10 left-10 z-20">
                                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-[#cfe5df] rounded-full shadow-sm">
                                        <span className="text-[12px] font-bold text-[#20c997] uppercase tracking-[3px]">Project Spotlight</span>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Right - Content */}
                            <div className="flex-1 overflow-y-auto p-10 md:p-16 relative flex flex-col custom-scrollbar">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-10 right-10 p-3 rounded-full bg-[#f0f8f6] text-[#1a2e28] hover:bg-[#ff6b35] hover:text-white transition-all transform hover:rotate-90 shadow-sm"
                                >
                                    <X size={26} />
                                </button>

                                <div className="mb-12">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-[#1a2e28]">
                                        {selectedProject.fullTitle}
                                    </h2>
                                    <div className="flex flex-wrap gap-2.5">
                                        {selectedProject.tech.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 bg-[#f0f8f6] border border-[#20c997]/30 text-[#20c997] text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-12 flex-1">
                                    <section>
                                        <h4 className="text-[12px] font-bold text-[#20c997] uppercase tracking-[4px] mb-5 flex items-center gap-4">
                                            <span>Overview</span>
                                            <div className="h-[1px] flex-1 bg-[#cfe5df]" />
                                        </h4>
                                        <p className="text-[16px] text-[#5a7069] leading-[1.8] font-medium">
                                            {selectedProject.description}
                                        </p>
                                    </section>

                                    <section>
                                        <h4 className="text-[12px] font-bold text-[#20c997] uppercase tracking-[4px] mb-6 flex items-center gap-4">
                                            <span>Key Features</span>
                                            <div className="h-[1px] flex-1 bg-[#cfe5df]" />
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {selectedProject.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -15 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                                    className="flex items-start gap-4 p-4 bg-[#f0f8f6]/50 rounded-2xl border border-[#cfe5df] border-dashed hover:border-solid hover:bg-white hover:shadow-md transition-all duration-300"
                                                >
                                                    <div className="w-6 h-6 shrink-0 rounded-full bg-[#20c997]/20 flex items-center justify-center mt-0.5">
                                                        <Check className="w-4 h-4 text-[#20c997]" />
                                                    </div>
                                                    <span className="text-[14px] text-[#1a2e28] font-medium leading-relaxed">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </section>

                                    <article>
                                        <h4 className="text-[12px] font-bold text-[#20c997] uppercase tracking-[4px] mb-6 flex items-center gap-4">
                                            <span>Technologies Used</span>
                                            <div className="h-[1px] flex-1 bg-[#cfe5df]" />
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {selectedProject.techDetails.map((td, i) => (
                                                <div key={td.name} className="flex flex-col gap-2 group/tech">
                                                    <h5 className="text-[14px] font-bold text-[#1a2e28] group-hover/tech:text-[#20c997] transition-colors">{td.name}</h5>
                                                    <div className="h-0.5 w-6 bg-[#20c997] group-hover/tech:w-12 transition-all" />
                                                    <p className="text-[13px] text-[#5a7069] leading-relaxed italic">{td.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </article>
                                </div>

                                <div className="mt-20 pt-10 border-t border-[#f0f8f6] flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <a href="mailto:yatink@umich.edu" className="p-3 bg-white border border-[#cfe5df] rounded-full text-[#5a7069] hover:bg-[#20c997] hover:text-white transition-all shadow-sm">
                                            <Mail size={20} />
                                        </a>
                                        <p className="text-[13px] font-bold text-[#5a7069]">Interested in this tech?</p>
                                    </div>

                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#20c997] text-[#20c997] font-bold rounded-2xl hover:bg-[#20c997] hover:text-white transition-all group scale-105 active:scale-100 shadow-[0_10px_20px_rgba(32,201,151,0.15)]"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="tracking-wide">View on GitHub</span>
                                        <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f0f8f6;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cfe5df;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #20c997;
                }
            `}</style>
        </div>
    );
}
