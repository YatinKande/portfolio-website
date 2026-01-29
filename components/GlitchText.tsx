"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ROLES = ["DATA SCIENTIST", "DATA ANALYST", "AI ENGINEER", "ML ENGINEER"];

export default function GlitchText({ startTime = 0 }: { startTime?: number }) {
    const [index, setIndex] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        let cycleTimer: NodeJS.Timeout;
        let glitchTimer: NodeJS.Timeout;

        const startCycling = () => {
            const cycle = () => {
                // Show role for 3 seconds
                cycleTimer = setTimeout(() => {
                    // Trigger glitch (0.4s)
                    setIsGlitching(true);

                    glitchTimer = setTimeout(() => {
                        setIsGlitching(false);
                        setIndex((prev) => (prev + 1) % ROLES.length);
                        cycle(); // Recursive call for next role
                    }, 400);
                }, 3000);
            };
            cycle();
        };

        // Delay starting the cycle until the hero section is visible
        const initialDelay = setTimeout(startCycling, startTime);

        return () => {
            clearTimeout(initialDelay);
            clearTimeout(cycleTimer);
            clearTimeout(glitchTimer);
        };
    }, [startTime]);

    return (
        <div className="h-8 flex items-center justify-center relative overflow-visible">
            <span
                className={`font-bold text-cyan-400 tracking-widest text-lg md:text-xl font-heading uppercase relative inline-block transition-opacity duration-300 ${isGlitching ? 'glitch-active' : ''}`}
                data-text={ROLES[index]}
            >
                {ROLES[index]}
            </span>

            <style jsx>{`
                .glitch-active {
                    animation: glitch 0.4s ease forwards;
                }
                
                @keyframes glitch {
                  0%, 100% { transform: translate(0); text-shadow: none; }
                  25% { transform: translate(-2px, 2px); text-shadow: 2px 0 cyan, -2px 0 cyan; }
                  50% { transform: translate(2px, -2px); }
                  75% { transform: translate(-2px, -2px); text-shadow: -2px 0 cyan, 2px 0 cyan; }
                }

                .glitch-active::before,
                .glitch-active::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                }
            `}</style>
        </div>
    );
}
