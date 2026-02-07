"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const LOGS = [
    "Education: MS Data Science - UMichigan",
    "Experience: 2+ years ML/AI",
    "Tech: Python | SQL | PyTorch | AWS",
    "✓ YOLO detection deployed",
    "✓ 32K+ records analyzed",
    "✓ RAG system: 94% uptime",
    "Status: READY ✓"
];

export default function ConsoleLog({ startDelay = 0 }: { startDelay?: number }) {
    const [visibleLineCount, setVisibleLineCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Start sequential line display after the box itself has faded in
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setVisibleLineCount(prev => {
                    if (prev >= LOGS.length) {
                        clearInterval(interval);
                        return LOGS.length;
                    }
                    return prev + 1;
                });
            }, 2000); // 2s per line

            return () => clearInterval(interval);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [visibleLineCount]);

    return (
        <div className="font-mono text-[14px] text-[#667788] bg-white/95 backdrop-blur-xl p-[25px] rounded-lg border border-[#dce2e8] w-[420px] h-[240px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col pointer-events-none select-none">
            <div ref={containerRef} className="flex-1 overflow-y-auto scrollbar-hide space-y-3 leading-[1.6]">
                {LOGS.slice(0, visibleLineCount).map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-2"
                    >
                        <span className="text-[#0066ff] font-bold">{">"}</span>
                        <span className={line.includes("✓") ? "text-[#ff6b35]" : ""}>{line}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
