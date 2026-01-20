"use client";

import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 bg-background border-t border-white/5 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    &copy; {new Date().getFullYear()} <span className="text-primary font-medium">{personalInfo.name}</span>. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    {personalInfo.socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            className="hover:text-primary transition-colors"
                        >
                            <social.icon className="size-5" />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
