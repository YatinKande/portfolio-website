"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
    return (
        <Link href="/dashboard">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 rounded-lg transition-all text-sm font-medium"
            >
                <ArrowLeft className="size-4" />
                Back to Dashboard
            </motion.button>
        </Link>
    );
}
