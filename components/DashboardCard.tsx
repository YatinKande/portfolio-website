"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useState, ReactNode } from "react";

interface DashboardCardProps {
    title: string;
    icon: LucideIcon;
    preview?: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
    isExpandable?: boolean;
}

export default function DashboardCard({
    title,
    icon: Icon,
    preview,
    children,
    isOpen = false,
    onToggle,
    isExpandable = true
}: DashboardCardProps) {
    return (
        <motion.div
            layout
            onClick={isExpandable ? onToggle : undefined}
            className={`glass-card p-6 overflow-hidden flex flex-col gap-4 ${isExpandable ? 'cursor-pointer' : ''} ${isOpen ? 'border-primary/60' : 'border-primary/30'}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <h2 className="text-base font-bold text-white uppercase tracking-[2px]">
                        {title}
                    </h2>
                </div>
                {isExpandable && (
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-5 h-5 text-primary/70" />
                    </motion.div>
                )}
            </div>

            <AnimatePresence mode="wait">
                {!isOpen && preview && (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-2"
                    >
                        {preview}
                    </motion.div>
                )}

                {isOpen && (
                    <motion.div
                        key="expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-4 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            {isExpandable && !isOpen && (
                <div className="flex justify-end">
                    <span className="text-[11px] text-primary/50 uppercase tracking-wider">
                        Click to expand +
                    </span>
                </div>
            )}
        </motion.div>
    );
}
