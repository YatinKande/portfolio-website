"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity } from "lucide-react";

export default function ProgressChart() {
    // Sample data for career growth over time
    const monthlyData = [
        { month: "Jan", projects: 2, skills: 15 },
        { month: "Feb", projects: 3, skills: 18 },
        { month: "Mar", projects: 5, skills: 22 },
        { month: "Apr", projects: 6, skills: 25 },
        { month: "May", projects: 8, skills: 28 },
        { month: "Jun", projects: 10, skills: 32 },
        { month: "Jul", projects: 12, skills: 35 },
        { month: "Aug", projects: 14, skills: 38 },
        { month: "Sep", projects: 16, skills: 42 },
        { month: "Oct", projects: 18, skills: 45 },
        { month: "Nov", projects: 20, skills: 48 },
        { month: "Dec", projects: 22, skills: 50 },
    ];

    const maxProjects = Math.max(...monthlyData.map(d => d.projects));

    return (
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/20 transition-all">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Activity className="size-5 text-primary" />
                        <h3 className="font-heading font-bold text-lg">Growth Analytics</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Project completion & skill acquisition over time</p>
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                    <TrendingUp className="size-4" />
                    <span className="font-mono">+45%</span>
                </div>
            </div>

            {/* Chart */}
            <div className="space-y-4">
                {/* Projects Chart */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Cumulative Projects</span>
                        <span className="text-sm text-muted-foreground font-mono">{monthlyData[monthlyData.length - 1].projects} total</span>
                    </div>
                    <div className="flex items-end justify-between h-32 gap-1">
                        {monthlyData.map((data, i) => {
                            const height = (data.projects / maxProjects) * 100;
                            return (
                                <div key={data.month} className="flex-1 flex flex-col items-center gap-1">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}%` }}
                                        transition={{ duration: 0.8, delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="w-full bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-sm hover:from-primary/80 hover:to-primary/40 transition-all cursor-pointer relative group"
                                    >
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-white/10 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            {data.projects} projects
                                        </div>
                                    </motion.div>
                                    <span className="text-xs text-muted-foreground font-mono">{data.month}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Skills Progress Line */}
                <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Skills Acquired</span>
                        <span className="text-sm text-muted-foreground font-mono">{monthlyData[monthlyData.length - 1].skills} skills</span>
                    </div>
                    <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-purple-400 to-pink-400 rounded-full"
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                        <span>0</span>
                        <span>25</span>
                        <span>50+</span>
                    </div>
                </div>
            </div>

            {/* Stats Footer */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/5">
                <div className="text-center">
                    <div className="text-2xl font-bold font-heading text-primary">22</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold font-heading text-purple-400">50+</div>
                    <div className="text-xs text-muted-foreground">Skills</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold font-heading text-green-400">3+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                </div>
            </div>
        </div>
    );
}
