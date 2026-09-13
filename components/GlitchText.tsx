"use client";

import { useState, useEffect, useCallback } from "react";

const ROLES = [
    "Data Scientist",
    "ML Engineer",
    "GenAI Engineer"
];

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface GlitchTextProps {
    startTime?: number;
}

export default function GlitchText({ startTime = 0 }: GlitchTextProps) {
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

            const nextIndex = (index + 1) % ROLES.length;
            const nextRole = ROLES[nextIndex];

            let frames = 0;
            const scrambleInterval = setInterval(() => {
                setDisplayText(scramble(ROLES[index]));
                frames++;
                if (frames >= 3) {
                    clearInterval(scrambleInterval);
                    let framesNext = 0;
                    const scrambleNextInterval = setInterval(() => {
                        setDisplayText(scramble(nextRole));
                        framesNext++;
                        if (framesNext >= 3) {
                            clearInterval(scrambleNextInterval);
                            setDisplayText(nextRole);
                            setIsGlitching(false);
                            setIndex(nextIndex);
                        }
                    }, 50);
                }
            }, 50);

        }, 2300);

        return () => clearInterval(cycleInterval);
    }, [index, scramble]);

    return (
        <div className="h-8 flex items-center justify-center relative">
            <span
                className={`
                    font-mono font-medium tracking-[2px] uppercase transition-all duration-75
                    text-[14px] md:text-[16px] lg:text-[18px]
                    ${isGlitching ? 'scale-105 skew-x-12 animate-flicker' : ''}
                `}
                style={{
                    color: isGlitching ? '#F59E0B' : '#94a3b8',
                    textShadow: isGlitching ? '2px 0 rgba(245,158,11,0.5), -2px 0 rgba(245,158,11,0.3)' : 'none'
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
