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
        title: "AWS Docs RAG Bot",
        description: "Intelligent document Q&A system with retrieval-augmented generation.",
        bullets: [
            "Retrieval-augmented Q&A system for AWS documentation using FastAPI and FAISS.",
            "Retrieves most relevant passages and generates grounded answers with citations."
        ],
        tech: ["FastAPI", "FAISS", "AWS", "RAG"],
        github: "https://github.com/YatinKande/aws-docs-rag-bot",
        demo: null,
        image: "/projects/aws_rag_chatbot.png",
        featured: true,
        size: "large" // Bento: 2x2
    },
    {
        title: "Automotive Multimodal RAG",
        description: "Multimodal RAG system for automotive domain Q&A.",
        bullets: [
            "Advanced multimodal RAG system for manuals, recalls, and OBD data.",
            "Uses Google GenAI, FAISS, and FastAPI for grounded automotive Q&A."
        ],
        tech: ["Google GenAI", "FAISS", "FastAPI"],
        github: "https://github.com/YatinKande/auto-multimodal-rag",
        demo: null,
        image: "/projects/auto_multimodal_rag.png",
        featured: true,
        size: "tall" // Changed from large to tall to accommodate the new project in bento grid
    },
    {
        title: "Smart EV Charging Finder",
        description: "AI-powered conversational EV charging station finder.",
        bullets: [
            "Conversational AI powered by Llama 3 to find optimal charging stations.",
            "Leverages location services and dynamic user profiling for personalized tips."
        ],
        tech: ["Llama 3", "NLP", "Location Services"],
        github: "https://github.com/YatinKande/smart-ev-finder",
        demo: null,
        image: "/projects/ev-finder.png",
        featured: false,
        size: "wide" // Bento: 2x1
    },
    {
        title: "Dataset Concierge Bot",
        description: "Conversational bot for dataset discovery and management.",
        bullets: [
            "Intelligent bot for finding, saving, and retrieving datasets using natural language.",
            "Built with AWS Lex, Lambda, and DynamoDB, handling 500+ daily requests."
        ],
        tech: ["AWS Lex", "Lambda", "DynamoDB", "NLP"],
        github: "https://github.com/YatinKande/Dataset-Concierge-Bot",
        demo: null,
        image: "/projects/dataset-bot.png",
        featured: true,
        size: "tall"
    },
    {
        title: "SmartSoil Crop Recommender",
        description: "Data-driven crop recommendation for Indian farmers.",
        bullets: [
            "ML-powered system analyzing soil nutrient data to suggest optimal crops.",
            "Helps farmers and policymakers make informed decisions to improve yields."
        ],
        tech: ["Machine Learning", "Agriculture", "Data Analysis"],
        github: "https://github.com/YatinKande/Smartsoil-Crop-Recommender",
        demo: null,
        image: "/projects/smartsoil.png",
        featured: true,
        size: "wide"
    },
    {
        title: "CV Pipeline for Crop vs Weed Detection",
        description: "Trained YOLO-based models and built preprocessing + validation workflows.",
        bullets: [
            "Trained YOLO-based models and built preprocessing + validation workflows.",
            "Summarized precision/recall and error trends using dashboards for review."
        ],
        tech: ["YOLO", "Python", "Dash"],
        github: "https://github.com/YatinKande/Crop-Weed-Detection",
        demo: null,
        image: "/projects/cv_agri.png",
        featured: false,
        size: "wide" // Bento: 2x1
    },
    {
        title: "Kinesis Key Entry",
        description: "AWS-powered secure door access control system.",
        bullets: [
            "Real-time facial recognition using AWS Rekognition and Kinesis.",
            "Secure access management and audit logging with DynamoDB and S3."
        ],
        tech: ["AWS Rekognition", "Kinesis", "DynamoDB"],
        github: "https://github.com/YatinKande/KinesisKeyEntry",
        demo: null,
        image: "/projects/smart_door_auth.png",
        featured: true,
        size: "wide" // Bento: 2x1
    },
    {
        title: "Lip-Read AI using LipNet",
        description: "Deep learning lip-reading system with 3D CNNs.",
        bullets: [
            "Advanced deep learning lip-reading AI trained on the GRID dataset.",
            "Uses 3D CNNs, BiLSTMs, and CTC loss for silent speech recognition."
        ],
        tech: ["PyTorch", "3D CNN", "BiLSTM", "Computer Vision"],
        github: "https://github.com/YatinKande/Lip-Read-AI-using-LipNet",
        demo: null,
        image: "/projects/lipread.png",
        featured: true,
        size: "wide"
    },
    {
        title: "AI Car Simulation (NEAT)",
        description: "NeuroEvolution autonomous vehicle navigation.",
        bullets: [
            "Python simulation of self-driving cars using the NEAT algorithm.",
            "Neural networks evolve over generations to learn optimal racing lines."
        ],
        tech: ["NEAT", "Reinforcement Learning", "Python"],
        github: "https://github.com/YatinKande/AI-Car-Simulation-using-NEAT-Algorithm",
        demo: null,
        image: "/projects/ai-car.png",
        featured: false,
        size: "wide"
    },
    {
        title: "COVID-19 Data Analysis",
        description: "Comprehensive COVID-19 crisis data analysis.",
        bullets: [
            "Interactive visualizations examining infection rates and mortality trends.",
            "Data-driven storytelling on global health impacts and vaccination progress."
        ],
        tech: ["Python", "Data Viz", "Pandas", "Analytics"],
        github: "https://github.com/YatinKande/Covid--19-Data-Analysis-Capstone-Project",
        demo: null,
        image: "/projects/covid.png",
        featured: false,
        size: "wide"
    },
];

export const experience = [
    {
        role: "Data Analyst Intern (AI/ML)",
        company: "DataZymes Inc",
        location: "Bengaluru, India",
        period: "Feb 2024 — Jul 2024",
        description: "",
        bullets: [
            "Developed a YOLOv5 object detection model on 1,200 plus images achieving 74 percent mAP and 79 percent precision for crop disease identification.",
            "Streamlined a computer vision pipeline using Python and OpenCV reducing inference time by 40 percent for real-time monitoring workflows.",
            "Implemented data augmentation including rotation, flipping, brightness adjustment, and noise injection boosting F1-score from 0.72 to 0.76.",
            "Architected distributed preprocessing workflows with Apache Spark enabling scalable processing of 10,000 plus images per day."
        ]
    },
    {
        role: "Data Science Intern",
        company: "SmartKnower",
        location: "Bengaluru, India",
        period: "Mar 2022 — Jun 2022",
        description: "",
        bullets: [
            "Built churn prediction models on 8,500 plus customer records achieving 81 percent AUC-ROC and 79 percent accuracy using XGBoost.",
            "Engineered 15 plus features from customer behavior data including transaction trends and usage metrics boosting baseline accuracy by 5 points.",
            "Evaluated Random Forest, Logistic Regression, and gradient boosting models selecting XGBoost as the final production model.",
            "Optimized hyperparameters with GridSearchCV improving precision by 4 percent while maintaining 75 percent recall for production deployment."
        ]
    },
];

export const education = [
    {
        institution: "University of Michigan Dearborn",
        degree: "MS in Data Science",
        field: "Data Science",
        location: "Dearborn, MI, USA",
        year: "2024 — 2026 (Expected)",
        achievements: ["GPA: 3.8"]
    },
    {
        institution: "Vellore Institute of Technology",
        degree: "Post Graduate Program in Data Science",
        field: "Data Science",
        location: "Bangalore, India",
        year: "2023 — 2024",
        achievements: ["Advanced coursework in Machine Learning, Deep Learning, and Statistical Modeling"]
    },
    {
        institution: "Jain University",
        degree: "BSc Honors in Data Science",
        field: "Data Science",
        location: "Bangalore, India",
        year: "2019 — 2022",
        achievements: ["Foundation in Data Science, Statistics, Programming, and Analytical Problem Solving"]
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
