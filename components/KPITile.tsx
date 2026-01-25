"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface KPITileProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    color?: string;
    delay?: number;
}

export default function KPITile({ label, value, icon: Icon, color = "text-primary", delay = 0 }: KPITileProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all"
        >
            <div className={`mb-3 ${color}`}>
                <Icon className="size-6" />
            </div>
            <div className="text-3xl font-bold font-heading mb-1">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </motion.div>
    );
}
