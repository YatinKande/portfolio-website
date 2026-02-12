"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import NextImage from "next/image";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="relative px-6 overflow-hidden min-h-screen flex items-center justify-center bg-[#0f172a]">
            {/* Background Photo with Overlay */}
            <div className="absolute inset-0 z-0">
                <NextImage
                    src="/me.jpg"
                    alt="About Background"
                    fill
                    className="object-cover object-[center_20%] opacity-100"
                    priority
                />
                {/* Responsive Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.85)] to-[rgba(15,23,42,0.92)] hidden md:block" />
                <div className="absolute inset-0 bg-[rgba(15,23,42,0.88)] md:hidden" />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                        About Me
                    </h2>
                    <div className="h-1.5 w-24 bg-[#20c997] rounded-full" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col items-center text-center w-full"
                >
                    {/* Paragraphs */}
                    <div className="space-y-6 max-w-3xl mx-auto text-slate-200 text-sm md:text-lg leading-relaxed mb-10">
                        <motion.p variants={itemVariants}>
                            My journey in data science began with a deep curiosity for how data can reveal patterns that change the way we see the world. That curiosity led me through a Bachelor of Science in Data Science at Jain University, a rigorous Post Graduate Program at Vellore Institute of Technology, and ultimately to my Master of Science in Data Science at the University of Michigan Dearborn, where I have maintained a GPA of 3.8. Each step of this academic journey sharpened my foundation and pushed me to apply what I learned in increasingly complex, real-world settings.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            My internships at DataZymes and SmartKnower gave me the opportunity to move beyond theory and into high-impact engineering. At DataZymes, I built a YOLOv5 object detection model for crop disease identification, optimized computer vision pipelines to cut inference time by 40 percent, and architected distributed Spark workflows processing over 10,000 images per day. At SmartKnower, I engineered a customer churn prediction model using XGBoost that achieved an 81 percent AUC-ROC, built 15 plus domain-specific features from raw behavioral data, and ran rigorous model comparisons before selecting the best solution for production. These experiences taught me that the most valuable models are the ones that actually ship.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Today I focus on the full spectrum of modern data science — from classical machine learning and deep learning to GenAI and large language model systems. I have built multi-modal RAG systems with 84 percent retrieval precision, developed a serverless AWS chatbot handling 500 plus daily requests, and created a Visual Speech Recognition system using 3D CNN-BiLSTM architecture. I believe data has the power to transform industries, and I am driven by the challenge of building systems that are not just accurate but genuinely useful in the real world.
                        </motion.p>
                    </div>

                    {/* Highlight Box */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 w-full max-w-2xl mx-auto mb-10"
                    >
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <GraduationCap className="size-5 text-[#20c997]" />
                                <span>MS Data Science at UMich — 3.8 GPA</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <Briefcase className="size-5 text-[#20c997]" />
                                <span>AI/ML Internships at DataZymes and SmartKnower</span>
                            </li>
                            <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                                <Award className="size-5 text-[#20c997]" />
                                <span>ML, Deep Learning, GenAI and Cloud Deployment</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">3.8</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 font-bold">UMich GPA</div>
                        </div>
                        <div className="hidden md:block h-12 w-[1px] bg-white/20" />
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">2</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 font-bold">AI/ML Internships</div>
                        </div>
                        <div className="hidden md:block h-12 w-[1px] bg-white/20" />
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">10+</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 font-bold">ML and AI Projects</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
