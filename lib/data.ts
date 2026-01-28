import { Github, Linkedin, Mail } from "lucide-react";

export const personalInfo = {
    name: "Yatin Kande",
    title: "AI & Data Scientist",
    email: "yatink@umich.edu",
    phone: "+1 313-413-8327",
    location: "Dearborn, MI, USA",
    bio: "I architect high-performance machine learning systems and computer vision pipelines with a focus on end-to-end reliability. I specialize in the full lifecycle of data products—from high-dimensional feature engineering and GPU-accelerated training to deploying scalable inference APIs.\n\nMy focus is on bridging the gap between Generative AI research and real-world deployment. By combining rigorous statistical validation with intuitive data storytelling, I ensure complex models deliver measurable business value and production-ready performance.",
    headline: "Architecting Intelligent Systems with Precision and Scalability",
    hobbies: {
        work: ["Deep Learning Research", "Open Source Contributing", "Cloud Architecture", "Interactive Data Viz"],
        nonWork: ["Astrophotography: Celestial Analysis", "Strategic Chess: Pattern Recognition", "Backcountry Trekking"]
    },
    funFacts: [
        "Deployed edge-optimized YOLO models achieving 60+ FPS on production hardware.",
        "Utilize 'Physics First' frameworks to decouple and solve complex system constraints.",
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
        title: "AutoRAG: Multi-Modal Generative AI Assistant",
        description: "Retrieval-augmented Q&A for documents and images using FastAPI and FAISS.",
        bullets: [
            "Retrieval-augmented Q&A for documents and images using FastAPI and FAISS.",
            "Added request logging and basic monitoring to track latency and failures."
        ],
        tech: ["FastAPI", "FAISS", "GenAI"],
        github: null,
        demo: null,
        image: null,
        featured: true,
    },
    {
        title: "Dataset Recommender Bot (AWS)",
        description: "Serverless chatbot using Amazon Lex, Lambda, DynamoDB, and an S3-hosted UI.",
        bullets: [
            "Serverless chatbot using Amazon Lex, Lambda, DynamoDB, and an S3-hosted UI.",
            "Instrumented logging to measure engagement and support controlled experimentation."
        ],
        tech: ["AWS Lex", "Lambda", "DynamoDB", "S3"],
        github: null,
        demo: null,
        image: null,
        featured: true,
    },
    {
        title: "CV Pipeline for Crop vs Weed Detection",
        description: "Trained YOLO-based models and built preprocessing + validation workflows.",
        bullets: [
            "Trained YOLO-based models and built preprocessing + validation workflows.",
            "Summarized precision/recall and error trends using dashboards for review."
        ],
        tech: ["YOLO", "Python", "Dash"],
        github: null,
        demo: null,
        image: null,
        featured: true,
    },
];

export const experience = [
    {
        role: "Data Analyst Intern (AI/ML)",
        company: "DataZymes",
        location: "Bengaluru, India",
        period: "Feb 2024 – Jul 2024",
        description: "Trained YOLO-based vision models on multispectral images for crop vs weed detection.",
        bullets: [
            "Trained YOLO-based vision models on multispectral images for crop vs weed detection.",
            "Built Python/OpenCV pipelines for preprocessing, training, validation, and performance tracking.",
            "Created dashboards to summarize precision, recall, and error trends."
        ]
    },
    {
        role: "Machine Learning Intern",
        company: "SmartKnower",
        location: "Bengaluru, India",
        period: "Mar 2022 – Jun 2022",
        description: "Built supervised learning pipelines using Python, Pandas, and Scikit-learn.",
        bullets: [
            "Built supervised learning pipelines using Python, Pandas, and Scikit-learn.",
            "Performed EDA and evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC.",
            "Documented assumptions and results to support reproducible model selection."
        ]
    },
];

export const education = [
    {
        institution: "University of Michigan–Dearborn",
        degree: "MS in Data Science",
        field: "Data Science",
        location: "Dearborn, MI, USA",
        year: null
    }
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

export const aboutPageContent = {
    section1: {
        title: "What I Do",
        points: [
            "Build and evaluate ML workflows across data validation, feature engineering, training, evaluation, and inference integration.",
            "Apply computer vision and deep learning techniques using CNNs, YOLO, and transformer-based models."
        ]
    },
    capabilities: [
        {
            title: "End-to-End ML Experience",
            description: "Hands-on experience across data preprocessing, feature engineering, model training, evaluation, and inference workflows.",
            icon: "Brain"
        },
        {
            title: "Applied Computer Vision & AI",
            description: "Practical experience implementing object detection and deep learning models using CNNs, YOLO, and transformer-based approaches.",
            icon: "Camera"
        },
        {
            title: "Analytics & Model Evaluation",
            description: "Experience performing exploratory analysis and evaluating models using standard ML metrics to guide technical decisions.",
            icon: "Microscope"
        }
    ],
    problemSpaceSkills: [
        {
            title: "Data & Analytics",
            skills: ["Python", "SQL", "Pandas", "Data Validation", "Exploratory Data Analysis (EDA)"]
        },
        {
            title: "Applied Machine Learning",
            skills: ["Classification & Regression", "Computer Vision (YOLO)", "NLP & Transformers", "Model Evaluation (Precision, Recall, F1, ROC-AUC)", "Error Analysis"]
        },
        {
            title: "MLOps & Engineering",
            skills: ["FastAPI", "AWS (S3, Lambda, DynamoDB)", "Docker", "Experiment Tracking", "Inference Pipelines"]
        }
    ]
};
