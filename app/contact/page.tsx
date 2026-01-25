"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import BackButton from "@/components/BackButton";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

export default function ContactPage() {
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

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Construct mailto link
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setIsSubmitting(false);
        setIsSent(true);

        // Reset after showing success
        setTimeout(() => {
            setIsSent(false);
            setFormData({ name: "", email: "", message: "" });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                            Get in <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Open to full-time Data Scientist opportunities
                        </p>
                    </div>
                    <BackButton />
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-heading font-bold mb-6">
                            Let's Connect
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <div className="font-medium">Email</div>
                                    <Link href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {personalInfo.email}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin className="size-6" />
                                </div>
                                <div>
                                    <div className="font-medium">Location</div>
                                    <div className="text-muted-foreground">{personalInfo.location}</div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="font-medium mb-4">Connect on social media</div>
                                <div className="flex gap-4">
                                    {personalInfo.socials.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 rounded-lg transition-all"
                                        >
                                            <social.icon className="size-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                    >
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full h-32 bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Hello..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : isSent ? (
                                    "Message Sent!"
                                ) : (
                                    <>Send Message <Send className="size-4" /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
