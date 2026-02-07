"use client";

import { useRef, useEffect } from "react";

export default function Background() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = clientX - container.offsetLeft;
            const y = clientY - container.offsetTop;

            container.style.setProperty("--mouse-x", `${x}px`);
            container.style.setProperty("--mouse-y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-20 h-full w-full bg-[#fafbfc] overflow-hidden"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#dce2e8_0.5px,transparent_0.5px),linear-gradient(to_bottom,#dce2e8_0.5px,transparent_0.5px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,102,255,0.02), transparent 40%)`,
                }}
            />

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>
    );
}
