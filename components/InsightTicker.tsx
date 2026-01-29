"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const INSIGHTS = [
    "Specialized in production ML pipelines",
    "Trained YOLO on 1000+ multispectral images",
    "Built serverless AI systems on AWS",
    "Expert in end-to-end data workflows"
];

export default function InsightTicker() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % INSIGHTS.length);
        }, 4000); // 4 seconds per insight
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-6 flex items-center justify-center relative w-full max-w-sm mx-auto overflow-hidden hidden sm:flex">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 text-[12px] italic text-white font-light text-center"
                >
                    <span className="text-cyan-400">💡</span>
                    {INSIGHTS[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
