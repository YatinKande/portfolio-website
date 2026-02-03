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
    "Programming Languages": [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "SQL", level: 85, icon: "📊" },
        { name: "R", level: 75, icon: "📉" },
        { name: "JavaScript", level: 70, icon: "📜" }
    ],
    "Databases": [
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "SQLite", level: 85, icon: "🪶" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "DynamoDB", level: 78, icon: "⚡" }
    ],
    "Machine Learning": [
        { name: "Classification", level: 90, icon: "🏷️" },
        { name: "Regression", level: 90, icon: "📈" },
        { name: "Clustering", level: 85, icon: "🧩" },
        { name: "Model Evaluation", level: 92, icon: "🧪" },
        { name: "Hyperparameter Tuning", level: 88, icon: "⚙️" }
    ],
    "Deep Learning": [
        { name: "CNNs", level: 90, icon: "🖼️" },
        { name: "RNNs", level: 85, icon: "🔄" },
        { name: "LSTMs", level: 88, icon: "🧠" },
        { name: "Transformers", level: 85, icon: "🤖" },
        { name: "YOLO", level: 95, icon: "👁️" },
        { name: "Object Detection", level: 92, icon: "🎯" }
    ],
    "Data Analytics": [
        { name: "Exploratory Analysis", level: 92, icon: "🔎" },
        { name: "Data Validation", level: 90, icon: "✅" },
        { name: "Feature Engineering", level: 88, icon: "🛠️" },
        { name: "Hypothesis Testing", level: 85, icon: "📊" },
        { name: "A/B Testing", level: 82, icon: "🅰️" }
    ],
    "Visualization & BI": [
        { name: "Tableau", level: 82, icon: "📊" },
        { name: "Power BI", level: 80, icon: "📉" },
        { name: "Qlik Sense", level: 75, icon: "📈" },
        { name: "Plotly", level: 85, icon: "🎨" },
        { name: "Dash", level: 82, icon: "📉" },
        { name: "Matplotlib", level: 88, icon: "📊" },
        { name: "Excel", level: 85, icon: "📂" }
    ],
    "Libraries & Frameworks": [
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "NumPy", level: 92, icon: "🔢" },
        { name: "Scikit-learn", level: 92, icon: "🤖" },
        { name: "PyTorch", level: 90, icon: "🔥" },
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "OpenCV", level: 90, icon: "📷" },
        { name: "FastAPI", level: 85, icon: "🚀" }
    ],
    "Cloud & DevOps": [
        { name: "AWS S3", level: 82, icon: "☁️" },
        { name: "AWS Lambda", level: 80, icon: "ƛ" },
        { name: "AWS Lex", level: 85, icon: "💬" },
        { name: "AWS DynamoDB", level: 78, icon: "⚡" },
        { name: "AWS Rekognition", level: 80, icon: "👁️" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Git", level: 88, icon: "📁" }
    ],
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
        institution: "University of Michigan Dearborn",
        degree: "MS in Data Science",
        field: "Data Science",
        location: "Dearborn, MI, USA",
        year: "2024 - 2026 (Expected)"
    },
    {
        institution: "Vellore Institute of Technology",
        degree: "PG Program in Data Science",
        field: "Data Science",
        location: "Bangalore, India",
        year: "2023 - 2024"
    },
    {
        institution: "Jain University",
        degree: "BSc Honors in Data Science",
        field: "Data Science",
        location: "Bangalore, India",
        year: "2019 - 2022"
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
        year: "2024",
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
