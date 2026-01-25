import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
    name: "Yatin Kande",
    title: "Data Scientist | Machine Learning & AI",
    email: "yatink@umich.edu",
    phone: "+1 313-413-8327",
    location: "Dearborn, MI, USA",
    bio: "As a Data Scientist and AI Engineer, I specialize in architecting high-performance machine learning systems and computer vision pipelines. My expertise lies in the full lifecycle of data-driven products—from high-dimensional feature engineering and GPU-accelerated model training to deploying scalable inference APIs. I am particularly focused on Generative AI and Transformer architectures, striving to bridge the gap between cutting-edge research and measurable business impact through rigorous statistical validation and intuitive data storytelling.",
    headline: "Architecting Intelligent Systems with Precision and Scalability",
    hobbies: {
        work: ["Deep Learning Research", "Open Source Contributing", "Cloud Architecture", "Interactive Data Viz"],
        nonWork: ["Photography", "Astronomy", "Hike & Exploration", "Chess"]
    },
    funFacts: [
        "Optimized a YOLO model to run at 60+ FPS on edge devices.",
        "A huge fan of the 'Physics First' approach to problem solving.",
        "Can explain backpropagation using only a deck of cards."
    ],
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/YatinKande",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/yatin-kande",
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "mailto:yatink@umich.edu",
            icon: Mail,
        },
    ],
};

export const skills = {
    "Programming Languages": ["Python", "SQL", "R"],
    "Data Analysis": ["Exploratory Data Analysis (EDA)", "Data Cleaning", "Feature Engineering", "Statistical Analysis", "A/B Testing"],
    "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Clustering", "Model Evaluation"],
    "Deep Learning & CV": ["CNNs", "RNNs", "LSTM", "Transformers", "YOLO", "Computer Vision Pipelines"],
    "Visualization & BI": ["Tableau", "Power BI", "Plotly", "Dash", "Matplotlib", "Seaborn", "Excel"],
    "Libraries & Frameworks": ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "OpenCV", "FastAPI"],
    "Databases": ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    "Cloud & DevOps": ["AWS S3", "AWS Lambda", "AWS API Gateway", "Docker", "Git", "REST APIs"],
};

export const projects = [
    {
        title: "YOLO-Based Crop-Weed Detection",
        description: "Developed computer vision models trained on 1,000+ multispectral field images to distinguish crops from weeds with high precision. Built complete CV pipelines with data preprocessing, GPU training, and validation.",
        tech: ["Python", "OpenCV", "YOLO", "PyTorch", "Plotly Dash"],
        github: "https://github.com/YatinKande",
        demo: null,
        image: null,
        featured: true,
    },
    {
        title: "Precision Agriculture Dashboard",
        description: "Designed interactive dashboards using Plotly Dash to visualize precision, recall, and error trends for deployment readiness reviews in agricultural AI systems.",
        tech: ["Python", "Plotly", "Dash", "Pandas"],
        github: "https://github.com/YatinKande",
        demo: null,
        image: null,
        featured: true,
    },
    {
        title: "Supervised Learning Pipeline",
        description: "Implemented ML pipelines on datasets exceeding 32,000 records. Performed EDA, feature engineering, and evaluated multiple models using accuracy, precision, recall, F1-score, and ROC-AUC metrics.",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        github: "https://github.com/YatinKande",
        demo: null,
        image: null,
        featured: true,
    },
];

export const experience = [
    {
        role: "Data Analyst Intern (AI / ML)",
        company: "DataZymes Inc",
        location: "Bengaluru, India",
        period: "Feb 2024 – Jul 2024",
        description: "Developed YOLO-based computer vision models on 1,000+ multispectral images for crop-weed detection. Built complete CV pipelines with data preprocessing, GPU training, and validation. Designed interactive dashboards using Plotly Dash to visualize model performance metrics.",
    },
    {
        role: "Machine Learning Intern",
        company: "SmartKnower",
        location: "Bengaluru, India",
        period: "Mar 2022 – Jun 2022",
        description: "Implemented supervised learning pipelines on datasets exceeding 32,000 records using Python and Scikit-learn. Performed exploratory data analysis and evaluated multiple models using comprehensive metrics including accuracy, precision, recall, F1-score, and ROC-AUC.",
    },
];

export const education = [
    {
        institution: "University of Michigan–Dearborn",
        degree: "Master of Science",
        field: "Data Science",
        location: "Dearborn, MI, USA",
    },
    {
        institution: "Vellore Institute of Technology",
        degree: "Post Graduate Program",
        field: "Data Science",
        location: "Bangalore, India",
    },
    {
        institution: "Jain University",
        degree: "Bachelor of Science (Honors)",
        field: "Data Science",
        location: "Bangalore, India",
    },
];

export const certifications = [
    {
        name: "Oracle Cloud Infrastructure AI Foundations Associate",
        issuer: "Oracle",
        year: "2025",
    },
    {
        name: "Google Data Analytics Professional Certificate",
        issuer: "Coursera",
        year: null,
    },
];
