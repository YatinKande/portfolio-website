"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        type Particle = { x: number; y: number; vx: number; vy: number; layer: number; size: number };
        const particles: Particle[] = [];
        const particleCount = 60;
        const mouse = { x: -1000, y: -1000 };

        // Initialize particles with layers
        for (let i = 0; i < particleCount; i++) {
            const layer = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
            let speedMultiplier = 1;
            let size = 2;

            // Layer 1 (Foreground): slower, larger
            if (layer === 1) { speedMultiplier = 0.5; size = 2.5; }
            // Layer 2 (Middle): medium
            else if (layer === 2) { speedMultiplier = 0.8; size = 2; }
            // Layer 3 (Background): faster, smaller
            else { speedMultiplier = 1.2; size = 1.5; }

            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * speedMultiplier,
                vy: (Math.random() - 0.5) * speedMultiplier,
                layer: layer,
                size: size
            });
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw grid overlay
            ctx.strokeStyle = "rgba(0, 102, 255, 0.05)";
            ctx.lineWidth = 1;
            const gridSize = 40;
            for (let x = 0; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Wall bounce
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse Repulsion
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const repulsionStrength = 2 / p.layer; // Less repulsion for background layers
                    p.x -= (dx / distance) * force * repulsionStrength;
                    p.y -= (dy / distance) * force * repulsionStrength;
                }

                // Draw Particle
                const opacity = 0.4 / p.layer;
                ctx.fillStyle = `rgba(0, 102, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections (only within same layer or adjacent)
                for (let j = i; j < particles.length; j++) {
                    const p2 = particles[j];
                    if (Math.abs(p.layer - p2.layer) > 1) continue; // Only connect nearby layers

                    const dx2 = p.x - p2.x;
                    const dy2 = p.y - p2.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    const connectDist = 120;

                    if (dist2 < connectDist) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 102, 255, ${(0.15 - dist2 / connectDist) / p.layer})`;
                        ctx.lineWidth = 0.5 / p.layer;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 bg-transparent pointer-events-none"
        />
    );
}
