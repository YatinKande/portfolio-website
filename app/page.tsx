"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const DESTINATION_ROUTE = "/dashboard";

export default function LandingPage() {
    const router = useRouter();
    const [isComplete, setIsComplete] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Detect end of scroll
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest > 0.99 && !isComplete) {
                setIsComplete(true);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, isComplete]);

    useEffect(() => {
        // Auto-redirect logic
        if (isComplete) {
            const timer = setTimeout(() => {
                router.push(DESTINATION_ROUTE);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isComplete, router]);

    const handleSkip = () => {
        router.push(DESTINATION_ROUTE);
    };

    return (
        <div ref={containerRef} className="min-h-[140vh] bg-[#F7F8FA] relative selection:bg-primary/20 flex flex-col items-center">

            {/* STICKY HEADER */}
            <div className="fixed top-0 left-0 w-full z-50 bg-[#F7F8FA]/90 backdrop-blur-md pt-10 pb-6 border-b border-transparent transition-all duration-300">
                <div className="max-w-xl mx-auto px-6 flex flex-col items-center text-center">
                    {/* Shared Profile Image */}
                    <motion.div
                        layoutId="profile-photo"
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0 mb-4"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <img
                            src="/me.jpg"
                            alt="Yatin Kande"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    <div className="space-y-1 mb-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Yatin Kande</h1>
                        <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                            AI & Data Scientist
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full max-w-xs h-1 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            style={{ scaleX }}
                            initial={{ scaleX: 0 }}
                        />
                    </div>
                </div>

                {/* Skip Link (Absolute in header) */}
                <button
                    onClick={handleSkip}
                    className="absolute top-6 right-6 text-xs font-semibold text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                >
                    Skip <ArrowRight className="size-3" />
                </button>
            </div>

            {/* SCROLLABLE BODY CONTENT */}
            {/* Padding top pushes content below sticky header. Padding bottom allows scroll to completion. */}
            <div className="w-full max-w-2xl px-6 pt-[320px] pb-[40vh] flex flex-col items-center text-center gap-12">

                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-lg">
                    I build ML workflows across data validation, training, evaluation, and inference.
                </p>

                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-lg">
                    Focused on computer vision (YOLO), NLP/transformers, and SQL-driven analytics.
                </p>

                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-lg">
                    I care about clean evaluation, reproducibility, and reliable deployment.
                </p>

                <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-lg">
                    This portfolio is structured for quick scanning: skills, projects, and experience.
                </p>

            </div>

            {/* COMPLETION CARD */}
            {/* Appears at the bottom of the flow */}
            <div className="pb-20 w-full flex justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isComplete ? 1 : 0.5, y: isComplete ? 0 : 10 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-sm w-full text-center transition-all duration-500 ${isComplete ? 'scale-100 opacity-100' : 'scale-95 opacity-50 grayscale'}`}
                >
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Meet the Scientist</h2>
                    <p className="text-slate-500 text-sm mb-6">Opening portfolio...</p>

                    <button
                        onClick={() => router.push(DESTINATION_ROUTE)}
                        className={`w-full py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${isComplete ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                        disabled={!isComplete}
                    >
                        Enter <ArrowRight className="size-4" />
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
