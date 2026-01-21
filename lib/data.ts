import { Github, Linkedin, Mail, Twitter, Globe, Link as LinkIcon, Brain, Coffee, Code2, Database, CheckCircle2 } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

// Map string icon names to Lucide components
const iconMap: { [key: string]: any } = {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Globe,
    Link: LinkIcon,
    Brain,
    Coffee,
    Code2,
    Database,
    CheckCircle2
};

export const personalInfo = {
    ...portfolioData.personalInfo,
    socials: portfolioData.personalInfo.socials.map((social) => ({
        ...social,
        icon: iconMap[social.icon] || LinkIcon,
    })),
};

export const heroData = portfolioData.hero;

export const aboutData = {
    ...portfolioData.about,
    additionalStats: portfolioData.about.additionalStats.map((stat) => ({
        ...stat,
        icon: iconMap[stat.icon] || Brain,
    })),
};

export const skills = portfolioData.skills;
export const projects = portfolioData.projects;
export const experience = portfolioData.experience;
export const education = portfolioData.education;
export const certifications = portfolioData.certifications;
