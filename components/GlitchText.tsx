"use client";

import { useState, useEffect, useCallback } from "react";

const ROLES = [
    "Data Scientist",
    "Data Analyst",
    "ML Engineer",
    "AI Engineer"
];

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function GlitchText() {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState(ROLES[0]);
    const [isGlitching, setIsGlitching] = useState(false);

    const scramble = useCallback((text: string) => {
        return text
            .split("")
            .map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
            .join("");
    }, []);

    useEffect(() => {
        const cycleInterval = setInterval(() => {
            setIsGlitching(true);

            // Animation sequence for transition (0.3s total)
            const nextIndex = (index + 1) % ROLES.length;
            const nextRole = ROLES[nextIndex];

            // Phase 1: Scramble current text
            let frames = 0;
            const scrambleInterval = setInterval(() => {
                setDisplayText(scramble(ROLES[index]));
                frames++;
                if (frames >= 3) {
                    clearInterval(scrambleInterval);
                    // Phase 2: Scramble next text
                    let framesNext = 0;
                    const scrambleNextInterval = setInterval(() => {
                        setDisplayText(scramble(nextRole));
                        framesNext++;
                        if (framesNext >= 3) {
                            clearInterval(scrambleNextInterval);
                            // Phase 3: Set actual next role
                            setDisplayText(nextRole);
                            setIsGlitching(false);
                            setIndex(nextIndex);
                        }
                    }, 50);
                }
            }, 50);

        }, 2300); // 2s show + 0.3s glitch

        return () => clearInterval(cycleInterval);
    }, [index, scramble]);

    return (
        <div className="h-8 flex items-center justify-center relative">
            <span
                className={`
                    font-mono font-medium tracking-[2px] uppercase transition-all duration-75
                    text-[14px] md:text-[16px] lg:text-[18px]
                    ${isGlitching ? 'text-coral scale-105 skew-x-12 animate-flicker' : 'text-[#5a7069]'}
                `}
                style={{
                    color: isGlitching ? (Math.random() > 0.5 ? '#ff6b6b' : '#20c997') : '#5a7069',
                    textShadow: isGlitching ? (Math.random() > 0.5 ? '2px 0 #20c997' : '-2px 0 #ff6b6b') : 'none'
                }}
            >
                {displayText}
            </span>

            <style jsx>{`
                @keyframes flicker {
                    0% { opacity: 0.8; transform: translate(1px, 1px); }
                    25% { opacity: 1; transform: translate(-1px, 0); }
                    50% { opacity: 0.9; transform: translate(2px, -1px); }
                    75% { opacity: 1; transform: translate(-1px, 1px); }
                    100% { opacity: 1; transform: translate(0); }
                }
                .animate-flicker {
                    animation: flicker 0.1s infinite;
                }
            `}</style>
        </div>
    );
}
