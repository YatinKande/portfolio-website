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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

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
            } else {
                console.error("Submission failed:", result.message);
                alert("Sorry, there was an error sending your message. Please try again later.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);

            // Reset "Sent" state after a delay
            if (isSent) {
                setTimeout(() => setIsSent(false), 5000);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const socialLinks = [
        { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/yatin-kande/", color: "#0077b5" },
        { name: "GitHub", icon: Github, url: "https://github.com/YatinKande", color: "#181717" },
    ];

    return (
        <section id="contact" className="py-24 px-6 bg-[#f0f8f6]">
            <div className="max-w-5xl mx-auto">
                {/* Header Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-2xl border border-[#cfe5df] flex items-center gap-5 shadow-sm hover:border-[#20c997] transition-all"
                    >
                        <div className="size-14 rounded-xl bg-[#20c997]/10 flex items-center justify-center text-[#20c997]">
                            <Mail size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#5a7069] uppercase tracking-wider mb-1">Email Me</p>
                            <a href={`mailto:${personalInfo.email}`} className="text-xl font-bold text-[#1a2e28] hover:text-[#20c997] transition-colors">
                                {personalInfo.email}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-[#cfe5df] flex items-center gap-5 shadow-sm hover:border-[#20c997] transition-all"
                    >
                        <div className="size-14 rounded-xl bg-[#20c997]/10 flex items-center justify-center text-[#20c997]">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#5a7069] uppercase tracking-wider mb-1">Location</p>
                            <p className="text-xl font-bold text-[#1a2e28]">{personalInfo.location}</p>
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
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e28] mb-6 leading-tight">
                            Let's architect something <span className="text-[#20c997]">extraordinary</span>.
                        </h2>
                        <p className="text-xl text-[#5a7069] leading-relaxed mb-8">
                            I'm currently specialized in RAG ecosystems and Computer Vision deployment. Whether you have a specific role in mind or just want to discuss the future of AI, my inbox is always open.
                        </p>
                        <div className="h-1 w-24 bg-[#ff6b6b] rounded-full mb-8" />
                    </motion.div>

                    {/* Right Column Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border-2 border-[#cfe5df] rounded-3xl p-8 md:p-10 shadow-xl relative"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#1a2e28] uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#f8fdfc] border-2 border-[#cfe5df] rounded-xl px-5 py-4 outline-none focus:border-[#20c997] transition-all text-[#1a2e28] font-medium placeholder:text-[#5a7069]/40"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#1a2e28] uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#f8fdfc] border-2 border-[#cfe5df] rounded-xl px-5 py-4 outline-none focus:border-[#20c997] transition-all text-[#1a2e28] font-medium placeholder:text-[#5a7069]/40"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#1a2e28] uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-40 bg-[#f8fdfc] border-2 border-[#cfe5df] rounded-xl px-5 py-4 outline-none focus:border-[#20c997] transition-all resize-none text-[#1a2e28] font-medium placeholder:text-[#5a7069]/40"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full py-4 bg-[#1a2e28] text-white font-bold rounded-xl hover:bg-[#20c997] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-[#20c997]/20"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        SENDING...
                                    </span>
                                ) : isSent ? (
                                    "MESSAGE RECEIVED!"
                                ) : (
                                    <>
                                        SEND MESSAGE
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
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
                    <div className="text-xs font-bold text-[#5a7069] uppercase tracking-[0.3em] mb-8 opacity-60">
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
                                <div className="size-16 rounded-full bg-white border-2 border-[#cfe5df] flex items-center justify-center text-[#1a2e28] group-hover:border-[#20c997] group-hover:bg-[#20c997]/5 transition-all shadow-md">
                                    <social.icon size={28} className="group-hover:scale-110 transition-transform" style={{ color: social.color }} />
                                </div>
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-[#20c997] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
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
