"use client";

import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import BackButton from "@/components/BackButton";
import { certifications } from "@/lib/data";

export default function CertificationsPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                            Certifications & <span className="text-primary">Credentials</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Professional certifications in AI and Data Analytics
                        </p>
                    </div>
                    <BackButton />
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Award className="size-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-heading font-bold mb-3">
                                        {cert.name}
                                    </h3>
                                    <div className="text-muted-foreground mb-2">
                                        Issued by <span className="text-primary font-semibold">{cert.issuer}</span>
                                    </div>
                                    {cert.year && (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="size-4" />
                                            {cert.year}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
