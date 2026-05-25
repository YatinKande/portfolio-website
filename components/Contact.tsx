"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Portfolio Contact from ${formData.name}`
                })
            });

            const result = await response.json();

            if (result.success) {
                setIsSent(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSent(false), 5000);
            } else {
                setErrorMessage("Submission failed. Please try again or email yatink@umich.edu directly.");
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const socialLinks = [
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/yatin-kande/" },
        { name: "GitHub", icon: Github, url: "https://github.com/YatinKande" },
    ];

    return (
        <section id="contact" className="py-24 px-6 bg-[#0d0f14] relative overflow-hidden">
            {/* Subtle white depth glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1c2030] p-6 rounded-2xl border border-white/[0.07] flex items-center gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-white/15 transition-all"
                    >
                        <div className="size-14 rounded-xl bg-white/[0.07] flex items-center justify-center text-white">
                            <Mail size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Me</p>
                            <a href={`mailto:${personalInfo.email}`} className="text-lg font-bold text-white hover:text-white/70 transition-colors">
                                {personalInfo.email}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#1c2030] p-6 rounded-2xl border border-white/[0.07] flex items-center gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-white/15 transition-all"
                    >
                        <div className="size-14 rounded-xl bg-white/[0.07] flex items-center justify-center text-white">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-lg font-bold text-white">{personalInfo.location}</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Let's architect something <span className="text-white/60">extraordinary</span>.
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed mb-8">
                            I build production AI systems — RAG pipelines, AI Agents, LLM applications, and Computer Vision at scale. These are exactly what the market demands right now, and I ship them end-to-end. Whether you have a role in mind or want to explore what modern AI can do for your team, my inbox is always open.
                        </p>
                        <div className="h-[2px] w-20 bg-white/20 rounded-full mb-8" />
                    </motion.div>

                    {/* Right Column Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1c2030] border border-white/[0.07] rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#111318] border border-white/[0.10] rounded-xl px-5 py-4 outline-none focus:border-white/30 transition-all text-white font-medium placeholder:text-slate-600"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#111318] border border-white/[0.10] rounded-xl px-5 py-4 outline-none focus:border-white/30 transition-all text-white font-medium placeholder:text-slate-600"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-40 bg-[#111318] border border-white/[0.10] rounded-xl px-5 py-4 outline-none focus:border-white/30 transition-all resize-none text-white font-medium placeholder:text-slate-600"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full py-4 bg-white text-[#111318] font-bold rounded-xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-[0_8px_24px_rgba(255,255,255,0.08)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.12)]"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="size-4 border-2 border-[#111318]/30 border-t-[#111318] rounded-full animate-spin" />
                                        SENDING...
                                    </span>
                                ) : isSent ? (
                                    "MESSAGE RECEIVED! ✓"
                                ) : (
                                    <>
                                        SEND MESSAGE
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 font-medium"
                                >
                                    <span className="mt-0.5 size-2 rounded-full bg-red-500 shrink-0" />
                                    {errorMessage}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Social Integration Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center"
                >
                    <div className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] mb-8">
                        Digital Footprint
                    </div>
                    <div className="flex gap-6">
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.1 }}
                                className="group relative"
                            >
                                <div className="size-16 rounded-full bg-[#1c2030] border border-white/[0.07] flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/[0.05] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                                    <social.icon size={26} className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all" />
                                </div>
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
                                    {social.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
