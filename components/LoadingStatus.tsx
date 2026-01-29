"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const STATES = [
    { range: [0, 20], text: "Loading datasets..." },
    { range: [20, 40], text: "Training models..." },
    { range: [40, 60], text: "Validating accuracy..." },
    { range: [60, 80], text: "Optimizing pipelines..." },
    { range: [80, 95], text: "Compiling results..." },
    { range: [95, 100], text: "Deployment ready..." }
];

export default function LoadingStatus({ progress }: { progress: number }) {
    const currentState = STATES.find(s => progress >= s.range[0] && progress <= s.range[1])?.text || "";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(currentState.slice(0, i));
            i++;
            if (i > currentState.length) clearInterval(interval);
        }, 30); // Quick typewriter
        return () => clearInterval(interval);
    }, [currentState]);

    return (
        <div className="font-mono text-[11px] text-cyan-400 h-4 flex items-center justify-center tracking-widest uppercase">
            {displayText}
            {displayText.length > 0 && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1 font-bold"
                >
                    |
                </motion.span>
            )}
        </div>
    );
}
