"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const QUOTE = "Accuracy is meaningless without reproducibility.";

export default function TypewriterQuote({ delay = 0 }: { delay?: number }) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayedText.length < QUOTE.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(QUOTE.slice(0, displayedText.length + 1));
            }, 50); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [started, displayedText]);

    if (!started) return <div className="h-6" />; // Placeholder

    return (
        <div className="font-light italic text-[#667788] text-sm md:text-base h-6">
            "{displayedText}
            {displayedText.length < QUOTE.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-[2px] h-4 bg-[#0066ff] ml-1 align-middle"
                />
            )}
            "
        </div>
    );
}
