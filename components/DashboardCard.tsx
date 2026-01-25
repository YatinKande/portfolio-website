"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface DashboardCardProps {
    title: string;
    preview: string;
    icon: LucideIcon;
    href: string;
    delay?: number;
}

export default function DashboardCard({ title, preview, icon: Icon, href, delay = 0 }: DashboardCardProps) {
    return (
        <Link href={href}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.4 }}
                whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-card/70 transition-all cursor-pointer h-full"
            >
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Icon className="size-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl flex-1">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {preview}
                </p>
            </motion.div>
        </Link>
    );
}
