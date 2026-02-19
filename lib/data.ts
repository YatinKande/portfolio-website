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
        id: "aws-docs-rag-bot",
        title: "AWS Docs RAG Bot",
        fullTitle: "AWS Documentation RAG Chatbot",
        intro: "Intelligent document Q&A system with retrieval-augmented generation",
        description: "A sophisticated document RAG chatbot that allows users to upload AWS documentation or any files and ask questions. The system retrieves the most relevant passages from documents and generates grounded, contextual answers with informative citations. Ensures responses are strictly based on provided content.",
        features: [
            "Upload and process AWS documentation",
            "Intelligent passage retrieval using FAISS",
            "Grounded answer generation with citations",
            "Fast query response times",
            "RESTful API architecture"
        ],
        tech: ["FastAPI", "FAISS", "Python", "LangChain", "AWS"],
        techDetails: [
            { name: "FastAPI", description: "High-performance web framework for the backend." },
            { name: "FAISS", description: "Efficient vector similarity search for document retrieval." },
            { name: "LangChain", description: "Framework for building LLM-powered applications." },
            { name: "AWS", description: "Cloud infrastructure for hosting and storage." }
        ],
        github: "https://github.com/YatinKande/aws-docs-rag-bot",
        image: "/projects/aws_rag_chatbot.png",
        featured: true,
        size: "large"
    },
    {
        id: "smart-ev-finder",
        title: "Smart EV Finder",
        fullTitle: "Smart EV Charging Station Finder",
        intro: "AI-powered conversational EV charging station finder",
        description: "A conversational AI application powered by Llama 3 that helps users find the best EV charging stations. The system leverages natural language understanding to interpret user queries and provides personalized charging station recommendations based on location, availability, and speed.",
        features: [
            "Natural language query processing",
            "Dynamic user profiling system",
            "Real-time charging station availability",
            "Personalized recommendations",
            "Multi-criteria filtering"
        ],
        tech: ["Llama 3", "Python", "NLP", "Geolocation APIs"],
        techDetails: [
            { name: "Llama 3", description: "State-of-the-art LLM for natural language processing." },
            { name: "Python", description: "Primary language for backend logic and data processing." },
            { name: "Geolocation APIs", description: "Used for mapping and station discovery." }
        ],
        github: "https://github.com/YatinKande/smart-ev-finder",
        image: "/projects/ev-finder.png",
        featured: false,
        size: "wide"
    },
    {
        id: "auto-multimodal-rag",
        title: "Automotive Multimodal RAG",
        fullTitle: "Automotive Multimodal RAG System",
        intro: "Multimodal RAG system for automotive domain Q&A",
        description: "An advanced multimodal RAG system designed specifically for the automotive domain. It supports document ingestion, vector search, and grounded Q&A capabilities over automotive manuals, recall documents, and OBD-II diagnostic data, processing both text and imagery.",
        features: [
            "Multimodal data processing (text, images, diagrams)",
            "Vector-based semantic search",
            "Automotive domain specialization",
            "OBD-II data integration",
            "Recall and manual documentation support"
        ],
        tech: ["Google GenAI", "FAISS", "FastAPI", "Python"],
        techDetails: [
            { name: "Google GenAI", description: "Multimodal LLM for text and image understanding." },
            { name: "FAISS", description: "Vector database for fast document retrieval." },
            { name: "FastAPI", description: "Fast and modern API framework." }
        ],
        github: "https://github.com/YatinKande/auto-multimodal-rag",
        image: "/projects/auto_multimodal_rag.png",
        featured: true,
        size: "tall"
    },
    {
        id: "kinesis-key-entry",
        title: "Kinesis Key Entry",
        fullTitle: "Kinesis Smart Door Authentication System",
        intro: "AWS-powered secure door access control system",
        description: "A cutting-edge smart door authentication system using AWS Rekognition for facial recognition, Kinesis Video Streams for real-time video processing, S3 for secure storage, and DynamoDB for access control management. Provides secure, contactless entry with comprehensive audit trails.",
        features: [
            "Real-time facial recognition",
            "Video stream processing with Kinesis",
            "Secure access control management",
            "Audit trail and logging",
            "Integration with AWS cloud services"
        ],
        tech: ["AWS Rekognition", "Kinesis", "S3", "DynamoDB"],
        techDetails: [
            { name: "AWS Rekognition", description: "Facial recognition for secure authentication." },
            { name: "Kinesis Video Streams", description: "Real-time video processing pipeline." },
            { name: "DynamoDB", description: "NoSQL database for access management." }
        ],
        github: "https://github.com/YatinKande/KinesisKeyEntry",
        image: "/projects/smart_door_auth.png",
        featured: true,
        size: "wide"
    },
    {
        id: "dataset-concierge-bot",
        title: "Dataset Concierge Bot",
        fullTitle: "Dataset Concierge Bot",
        intro: "Conversational bot for dataset discovery and management",
        description: "An intelligent conversational bot that helps users find, save, and retrieve datasets from multiple sources using natural language. Features include new-user onboarding, slot-filling for precise queries, flexible date handling, and user ID-based data management. Built as a serverless chatbot using AWS Lex, Lambda, and DynamoDB with 500+ daily requests.",
        features: [
            "Natural language dataset search",
            "Multi-source dataset aggregation",
            "User preference learning",
            "Slot-filling conversation flow",
            "Serverless architecture (500+ daily requests)"
        ],
        tech: ["AWS Lex", "AWS Lambda", "DynamoDB", "JavaScript", "S3"],
        techDetails: [
            { name: "AWS Lex", description: "Conversational AI for building intelligent bots." },
            { name: "AWS Lambda", description: "Serverless compute for handling requests." },
            { name: "DynamoDB", description: "Scalable NoSQL database for management." }
        ],
        github: "https://github.com/YatinKande/Dataset-Concierge-Bot",
        image: "/projects/dataset-bot.png",
        featured: true,
        size: "tall"
    },
    {
        id: "smartsoil-crop-recommender",
        title: "SmartSoil Crop Recommender",
        fullTitle: "SmartSoil Crop Recommender System",
        intro: "Data-driven crop recommendation for Indian farmers",
        description: "A machine learning-powered crop recommendation system that analyzes soil nutrient data to suggest the best crops for different regions in India. Helps farmers and policymakers make informed, data-driven decisions to improve crop yields and support sustainable agriculture practices.",
        features: [
            "Soil nutrient analysis",
            "Regional crop optimization",
            "Data-driven recommendations",
            "Farmer-friendly interface",
            "Policy support insights"
        ],
        tech: ["Python", "Jupyter", "Scikit-learn", "Pandas"],
        techDetails: [
            { name: "Scikit-learn", description: "Machine learning algorithms for recommendations." },
            { name: "Pandas", description: "Data manipulation and analysis toolkit." },
            { name: "Jupyter Notebook", description: "Interactive development environment." }
        ],
        github: "https://github.com/YatinKande/Smartsoil-Crop-Recommender",
        image: "/projects/smartsoil.png",
        featured: true,
        size: "wide"
    },
    {
        id: "lip-read-ai-lipnet",
        title: "Lip-Read AI using LipNet",
        fullTitle: "AI Lip Reading System using LipNet Architecture",
        intro: "Deep learning lip-reading system with 3D CNNs",
        description: "An advanced deep learning-based lip-reading AI system trained on the GRID dataset. Uses a LipNet-inspired architecture with 3D Convolutional Neural Networks, Bi-directional LSTMs, and CTC loss for accurate speech recognition from silent video. Processes video input with OpenCV and trains models using TensorFlow.",
        features: [
            "Silent speech recognition from video",
            "3D CNN + BiLSTM architecture",
            "CTC loss optimization",
            "Video preprocessing pipeline",
            "High accuracy on GRID dataset"
        ],
        tech: ["PyTorch", "3D CNN", "BiLSTM", "OpenCV"],
        techDetails: [
            { name: "3D CNNs", description: "Spatiotemporal feature extraction from video." },
            { name: "BiLSTM", description: "Sequence modeling for phoneme recognition." },
            { name: "OpenCV", description: "Robust video frame processing." }
        ],
        github: "https://github.com/YatinKande/Lip-Read-AI-using-LipNet",
        image: "/projects/lipread.png",
        featured: true,
        size: "wide"
    },
    {
        id: "covid-19-data-analysis",
        title: "COVID-19 Data Analysis",
        fullTitle: "COVID-19 Data Analysis Capstone Project",
        intro: "Comprehensive COVID-19 crisis data analysis",
        description: "A comprehensive data analysis and visualization project examining the COVID-19 pandemic. Features interactive visualizations that describe infection rates, mortality trends, vaccination progress, and regional impacts. Provides insights into the global health crisis through data-driven storytelling.",
        features: [
            "Interactive data visualizations",
            "Time-series analysis",
            "Regional impact comparisons",
            "Vaccination tracking",
            "Mortality trend analysis"
        ],
        tech: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn"],
        techDetails: [
            { name: "Pandas", description: "Large-scale health data manipulation." },
            { name: "Matplotlib/Seaborn", description: "Advanced statistical visualizations." },
            { name: "NumPy", description: "High-performance numerical computing." }
        ],
        github: "https://github.com/YatinKande/Covid--19-Data-Analysis-Capstone-Project",
        image: "/projects/covid.png",
        featured: false,
        size: "wide"
    },
    {
        id: "ai-car-simulation-neat",
        title: "AI Car Simulation (NEAT)",
        fullTitle: "AI Car Simulation using NEAT Algorithm",
        intro: "NeuroEvolution autonomous vehicle navigation",
        description: "A Python-based simulation of self-driving cars using NeuroEvolution of Augmenting Topologies (NEAT). Implements reinforcement learning for autonomous navigation where neural networks evolve over generations to learn optimal driving strategies on complex tracks. Cars learn to navigate obstacles and optimize racing lines through genetic algorithms.",
        features: [
            "Genetic algorithm-based learning",
            "Neural network evolution",
            "Autonomous track navigation",
            "Multi-generation optimization",
            "Real-time simulation visualization"
        ],
        tech: ["Python", "NEAT", "Reinforcement Learning", "Pygame"],
        techDetails: [
            { name: "NEAT Algorithm", description: "NeuroEvolution for adaptive control systems." },
            { name: "Reinforcement Learning", description: "Optimization through environment interaction." },
            { name: "Pygame", description: "2D rendering for simulation visualization." }
        ],
        github: "https://github.com/YatinKande/AI-Car-Simulation-using-NEAT-Algorithm",
        image: "/projects/ai-car.png",
        featured: false,
        size: "wide"
    }
];

export const experience = [
    {
        role: "Data Analyst Intern (AI/ML)",
        company: "SmartKnower",
        location: "Bengaluru, India",
        period: "Mar 2023 — Aug 2023",
        description: "",
        bullets: [
            "Engineered a YOLOv5 object detection model with transfer learning on 10,000+ preprocessed field images, stabilizing mAP at 74% and F1-score at 0.76 to automate weed and crop disease identification.",
            "Architected a distributed image preprocessing pipeline with Apache Spark and OpenCV, achieving 3–4x improvement in pipeline throughput for high-volume agricultural sensor workflows.",
            "Optimized real-time computer vision inference through batched frame processing, reducing inference latency by 40% for farm machinery embedded hardware.",
            "Constructed 1,500+ supplementary plant images via web scraping and custom augmentation (rotation, flipping, noise injection, contrast variance), boosting F1-score from 0.72 to 0.76."
        ]
    },
    {
        role: "Data Science Intern",
        company: "SmartKnower",
        location: "Bengaluru, India",
        period: "Mar 2022 — Jun 2022",
        description: "",
        bullets: [
            "Built a customer churn prediction system with XGBoost on 8,500+ records, achieving 81% AUC-ROC and 79% accuracy for targeted retention interventions.",
            "Evaluated Random Forest, Logistic Regression, and gradient boosting via stratified cross-validation, selecting XGBoost as the optimal production model.",
            "Refined XGBoost via GridSearchCV hyperparameter tuning, improving precision by 4% while maintaining 75% recall.",
            "Engineered 15+ behavioral and transactional features from temporal usage patterns, boosting baseline accuracy by 5 percentage points."
        ]
    },
];

export const education = [
    {
        institution: "University of Michigan Dearborn",
        degree: "MS in Data Science",
        field: "Data Science",
        location: "Dearborn, MI, USA",
        year: "Aug 2024 — Dec 2025",
        achievements: ["GPA: 3.77"]
    },
    {
        institution: "Vellore Institute of Technology",
        degree: "Post Graduate Program in Data Science",
        field: "Data Science",
        location: "Bangalore, India",
        year: "Jul 2023 — May 2024",
        achievements: ["GPA: 3.7"]
    },
    {
        institution: "Jain University",
        degree: "BSc Honors in Data Science",
        field: "Data Science",
        location: "Bangalore, India",
        year: "Jul 2020 — May 2023",
        achievements: ["GPA: 3.6"]
    }
];

export const certifications = [
    {
        name: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
        issuer: "Oracle",
        year: "2025",
    },
    {
        name: "Google Data Analytics Professional Certificate",
        issuer: "Google",
        year: "2024",
    },
    {
        name: "AWS Certified Machine Learning Specialty",
        issuer: "Amazon Web Services",
        year: "In Progress",
    },
    {
        name: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        year: "In Progress",
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
