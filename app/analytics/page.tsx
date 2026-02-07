"use client";

import { motion } from "framer-motion";
import ProgressChart from "@/components/ProgressChart";
import CareerTimeline from "@/components/CareerTimeline";
import KPITile from "@/components/KPITile";
import { CheckCircle2, Code2, Briefcase, Calendar } from "lucide-react";
import { projects, aboutPageContent, experience } from "@/lib/data";

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                        Portfolio <span className="text-primary">Analytics</span>
                    </h1>
                    <p className="text-muted-foreground">
                        Insights into my technical journey and project impact.
                    </p>
                </motion.div>

                {/* KPI Tiles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <KPITile
                        label="Projects"
                        value={projects.length}
                        icon={CheckCircle2}
                        color="text-green-400"
                        delay={0.1}
                    />
                    <KPITile
                        label="Skills"
                        value={`${aboutPageContent.problemSpaceSkills.flatMap(s => s.skills).length}+`}
                        icon={Code2}
                        color="text-blue-400"
                        delay={0.2}
                    />
                    <KPITile
                        label="Experience"
                        value={`${experience.length}`}
                        icon={Briefcase}
                        color="text-purple-400"
                        delay={0.3}
                    />
                    <KPITile
                        label="Years"
                        value="3+"
                        icon={Calendar}
                        color="text-primary"
                        delay={0.4}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <CareerTimeline />
                    <ProgressChart />
                </div>
            </div>
        </div>
    );
}
