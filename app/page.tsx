"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IntroPage() {
    const router = useRouter();

    const handleEnter = () => {
        router.push("/about");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center overflow-hidden relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4">
                {/* Profile photo with animations */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative inline-block"
                >
                    <motion.div
                        layoutId="profile-photo"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                                "0 0 40px rgba(59, 130, 246, 0.5)",
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 relative"
                    >
                        <Image
                            src="/me.jpg"
                            alt="Yatin Kande"
                            fill
                            className="object-cover"
                            priority
                            onError={(e) => {
                                // Fallback to placeholder if image doesn't exist
                                const target = e.target as HTMLImageElement;
                                target.src = "/api/placeholder/400/400";
                            }}
                        />
                    </motion.div>

                    {/* Floating animation */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    />
                </motion.div>

                {/* Name and title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        Yatin Kande
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-12">
                        Data Scientist | Machine Learning & AI
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEnter}
                    className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-[0_0_40px_-10px_hsl(var(--primary))] transition-all flex items-center gap-2 mx-auto group"
                >
                    Welcome
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>
        </div>
    );
}
