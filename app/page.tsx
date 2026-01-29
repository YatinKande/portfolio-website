"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import NeuralBackground from "@/components/NeuralBackground";
import BackgroundWatermarks from "@/components/BackgroundWatermarks";
import GlitchText from "@/components/GlitchText";
import TypewriterQuote from "@/components/TypewriterQuote";
import ConsoleLog from "@/components/ConsoleLog";
import InsightTicker from "@/components/InsightTicker";
import LoadingStatus from "@/components/LoadingStatus";
import Image from "next/image";

export default function LandingPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [phase, setPhase] = useState(0);
    const progressRef = useRef(0);
    const transitionTriggered = useRef(false);

    useEffect(() => {
        // Clear completion state on fresh load
        sessionStorage.removeItem('loaderCompleted');

        // Master Timing Sequence
        // 0.0s - Profile photo (CSS handles initial fade-in via animation)
        // 1.0s - Name & Console box
        // 2.0s - Role title
        // 3.0s - Quote
        // 4.0s - Insight line
        // 4.5s - Progress bar container
        // 5.0s - Progress bar starts filling

        const sequenceTimer = setTimeout(() => {
            const duration = 15000; // 15 seconds filling time
            const startTime = Date.now();

            const updateProgress = () => {
                const elapsed = Date.now() - startTime;
                const newProgress = Math.min((elapsed / duration) * 100, 100);

                progressRef.current = newProgress;
                setProgress(newProgress);

                if (newProgress < 100) {
                    requestAnimationFrame(updateProgress);
                } else {
                    // Reached 100%, hold for 1.5s then transition
                    if (!transitionTriggered.current) {
                        transitionTriggered.current = true;
                        setTimeout(() => {
                            sessionStorage.setItem('loaderCompleted', 'true');
                            setIsComplete(true);
                        }, 1500);
                    }
                }
            };

            requestAnimationFrame(updateProgress);
        }, 5000); // Start progress at 5s

        return () => clearTimeout(sequenceTimer);
    }, []);

    useEffect(() => {
        if (isComplete) {
            router.push("/dashboard");
        }
    }, [isComplete, router]);

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-background loader-container">

            <NeuralBackground />
            <BackgroundWatermarks />

            {/* Vignette & Scanline Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,17,40,0.9)_100%)]" />
            <div className="fixed inset-0 pointer-events-none z-[5] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(18,16,16,1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-[0.02] animate-scanline" />

            <style jsx global>{`
                /* Global Animations */
                @keyframes fadeInUp {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }

                @keyframes scanline {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }

                @keyframes packet-move {
                    0% { left: -10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 100%; opacity: 0; }
                }

                .animate-scanline { animation: scanline 20s linear infinite; }

                .fade-up-element {
                    opacity: 0;
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .data-packet {
                    position: absolute;
                    top: 50%;
                    width: 8px;
                    height: 8px;
                    background: #06B6D4;
                    border-radius: 50%;
                    transform: translateY(-50%);
                    box-shadow: 0 0 10px #06B6D4;
                    animation: packet-move 2s infinite linear;
                }

                /* Mobile Optimization */
                @media (max-width: 639px) {
                    .md-only { display: none !important; }
                }
            `}</style>

            <AnimatePresence>
                {!isComplete && (
                    <motion.div
                        className="relative z-10 flex flex-col items-center gap-6 w-full max-w-lg px-4 text-center"
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 1.2 } }}
                    >

                        {/* 1. Profile Image (0s Delay) */}
                        <div className="fade-up-element" style={{ animationDelay: '0s' }}>
                            <div className="relative mb-2">
                                <motion.div
                                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.1, 1.3, 1.1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl"
                                />
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-cyan-400/60 relative shadow-[0_0_40px_rgba(6,182,212,0.5)] z-10">
                                    <Image
                                        src="/me.jpg"
                                        alt="Yatin Kande"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 2. Name & Title (1s / 2s Delay) */}
                        <div className="space-y-1">
                            <div className="fade-up-element" style={{ animationDelay: '1000ms' }}>
                                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                    Yatin Kande
                                </h1>
                            </div>

                            <div className="fade-up-element" style={{ animationDelay: '2000ms' }}>
                                <GlitchText startTime={2800} />
                            </div>
                        </div>

                        {/* 3. Quote (3s Delay) */}
                        <div className="fade-up-element" style={{ animationDelay: '3000ms' }}>
                            <TypewriterQuote delay={0} />
                        </div>

                        {/* 4. Insights (4s start) & Progress Section (4.5s) */}
                        <div className="w-full max-w-sm flex flex-col items-center mt-8">
                            <div className="fade-up-element w-full" style={{ animationDelay: '4000ms' }}>
                                <InsightTicker />
                            </div>

                            <div className="fade-up-element w-full px-8 sm:px-0" style={{ animationDelay: '4500ms' }}>
                                <div className="h-2 w-full bg-[#0A1128]/50 border border-cyan-900/50 rounded-full overflow-hidden backdrop-blur-sm relative mt-8 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 relative transition-[width] duration-[16ms] linear"
                                        style={{ width: `${progress}%` }}
                                    >
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <div className="data-packet" style={{ animationDelay: '0s' }} />
                                            <div className="data-packet" style={{ animationDelay: '0.6s' }} />
                                            <div className="data-packet" style={{ animationDelay: '1.2s' }} />
                                        </div>
                                    </div>
                                </div>

                                <LoadingStatus progress={progress} />

                                <div className="mt-2 text-[10px] font-mono text-cyan-400/40 uppercase tracking-widest text-right w-full">
                                    {Math.floor(progress)}%
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Console Log (Bottom Left - 1s Delay) */}
            <div className="fade-up-element md-only" style={{ animationDelay: '1000ms', position: 'fixed', bottom: '30px', left: '30px', zIndex: 40 }}>
                <ConsoleLog startDelay={500} />
            </div>

            {/* Build & System Info (Bottom Right) */}
            <div className="fixed bottom-[25px] right-[30px] z-50 text-[10px] sm:text-[11px] font-mono text-cyan-400/20 text-right leading-relaxed select-none uppercase tracking-widest">
                BUILD: 2025.01<br />
                ENV: PRODUCTION<br />
                STATUS: ✓ ONLINE
            </div>
        </div>
    );
}
