import type { Education, Experience, Profile, Project, Skill } from '@/types';

export const profile: Profile = {
  fullName: 'Bavesh Raam S',
  title: 'Computer Science Student (AI) | ML Systems Evaluation',
  heroBadge: 'AI Systems Evaluation | ML Engineering',
  heroSummary:
    'Computer Science student specializing in AI with a focus on evaluating and stress-testing machine learning systems. Experienced in deploying end-to-end deep learning, RAG, computer vision, and real-world ML systems.',
  aboutIntro: [
    'Computer Science student specializing in AI with a focus on evaluating and stress-testing machine learning systems. Experienced in designing evaluation frameworks, benchmarking model performance, and deploying end-to-end deep learning systems, RAG systems, computer vision models, and real-world ML deployments.',
    'I focus on measurable improvements in retrieval fidelity, grounding, and system reliability, while keeping inference efficient for real-world constraints like latency, energy, and deployment environments.'
  ],
  languages: ['English (Fluent)', 'Tamil (Native)', 'Hindi (Fluent)'],
  location: 'Coimbatore, Tamil Nadu, India',
};

export const education: Education[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
    institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    duration: '2023-2027',
    gpa: '8.09/10',
    details: [
      'Specialization in Artificial Intelligence',
      'Focus: ML evaluation, deep learning systems, and applied AI deployments',
    ],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Kamala Niketan Montessori School',
    duration: '2023',
    gpa: '83%',
  },
];

export const experiences: Experience[] = [
  {
    position: 'Intern',
    company: 'DRDO, Aeronautical Development Establishment, Bangalore',
    duration: 'Apr 2026 - Jun 2026',
    responsibilities: [
      'Deployed a production-grade fully self-hosted agentic AI system for large-scale repository restructuring, combining centralized GPU-backed LLM serving, distributed semantic code intelligence, MCP service orchestration, and offline infrastructure automation.',
      'Implemented scalable code understanding and restructuring pipelines leveraging Serena, Tree-sitter, Clang-based analysis, cpp-tools, vector retrieval systems, and air-gapped deployment workflows supporting multi-user enterprise environments.',
    ],
  },
  {
    position: 'Firmware Intern',
    company: 'Grace EV, Bangalore',
    duration: 'Nov 2025 - Dec 2025',
    responsibilities: [
      'Developed physics-based optimization models for EV motion control and designed algorithms under real-world constraints (efficiency, latency, energy trade-offs).',
      'Built firmware-ready workflows for motor efficiency mapping and dynamic speed profile generation, validating behavior across operating regimes.',
    ],
  },
  {
    position: 'Full Stack Development Intern',
    company: 'VDart, Trichy',
    duration: 'Nov 2024 - Dec 2024',
    responsibilities: [
      'Engineered a resume parsing and ATS platform using a Python backend and REST APIs, improving structured output accuracy by 23%.',
      'Optimized backend processing pipelines for high-volume document analysis, reducing average processing time by 35%.',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming',
    items: ['Python', 'SQL', 'C/C++', 'Java', 'Dart', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'AI/ML',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'CNNs (ResNet, EfficientNet)',
      'RNNs/LSTM',
      'Computer Vision',
      'NLP',
      'RAG',
      'SHAP',
      'Time-Series (ARIMA, Prophet)'
    ],
  },
  {
    category: 'AI Systems & NLP',
    items: ['RAG Systems', 'LangChain', 'FAISS', 'NLP Pipelines', 'Information Retrieval'],
  },
  {
    category: 'Data & Processing',
    items: ['NumPy', 'Pandas', 'Data Preprocessing', 'ETL Pipelines'],
  },
  {
    category: 'Big Data',
    items: ['Apache Spark', 'Hadoop HDFS', 'Kafka', 'Spark Streaming'],
  },
  {
    category: 'Web & Mobile',
    items: ['React', 'Next.js', 'Flutter', 'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Backend & Databases',
    items: ['PostgreSQL', 'SurrealDB', 'Prisma', 'MongoDB', 'Firebase', 'Supabase', 'SQLAlchemy'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS S3', 'AWS RDS', 'Docker', 'Git', 'Linux'],
  },
  {
    category: 'Embedded & IoT',
    items: ['Arduino', 'Sensor Integration', 'GEKKO'],
  },
  {
    category: 'Visualization',
    items: ['D3.js', 'Streamlit', 'OpenCV'],
  },
];

export const projects: Project[] = [
  {
    id: 'open-notebook',
    title: 'Open Notebook',
    shortDescription:
      'RAG evaluation and persistent knowledge system with metrics, knowledge graphs, and retrieval improvements.',
    fullDescription:
      'Designed a RAG system evaluation framework and persistent AI knowledge system. Defined metrics such as Hit@K, semantic relevance, and grounding alignment, improving Hit@5 from 0.53 to 0.87 and answer quality from 3.1/5 to 4.4/5. Implemented chunking strategies, embedding pipelines, FAISS retrieval, and knowledge graph extraction (precision 0.72, recall 0.68) with FastAPI orchestration and Dockerized services.',
    technologies: ['LangChain', 'FAISS', 'FastAPI', 'SurrealDB', 'spaCy', 'Docker'],
    category: ['AI', 'Infrastructure'],
    tags: ['RAG', 'Evaluation', 'Knowledge Graphs'],
  },
  {
    id: 'small-vessel-detection',
    title: 'Small Vessel Detection from SAR Imagery',
    shortDescription:
      'Model behavior and tradeoff analysis for SAR vessel detection with adaptive inference selection.',
    fullDescription:
      'Evaluated detection models on a SAR imagery dataset (43,000 images) using COCO metrics and scenario-based testing. Compared architectures across accuracy and latency tradeoffs: ResNet-50-FPN (0.73 mAP) vs ResNet-18 (0.68 mAP, 2.3x faster). Built adaptive inference logic selecting models based on scene complexity and a hybrid system achieving 0.71 mAP with real-time performance.',
    technologies: ['PyTorch', 'Detectron2', 'ResNet', 'OpenCV'],
    category: ['AI'],
    tags: ['Computer Vision', 'SAR', 'Model Evaluation'],
  },
  {
    id: 'visualverse',
    title: 'VisualVerse',
    shortDescription:
      'NLP pipeline benchmarking for classification, keyphrase extraction, and topic modeling on 7,000 documents.',
    fullDescription:
      'Evaluated NLP pipelines for classification, keyphrase extraction, and topic modeling on 7,000 documents. Random Forest achieved 91% accuracy over Naive Bayes at 74%. Gradient Boosting reached Precision@5 of 0.68, outperforming TF-IDF at 0.42. LDA topic clustering (15 topics, coherence 0.52) enabled segmentation, with user studies rating interpretability at 4.3/5. Delivered as a FastAPI service with a React and D3.js interface for visual narratives.',
    technologies: ['spaCy', 'scikit-learn', 'FastAPI', 'React', 'D3.js'],
    category: ['AI', 'Data Science'],
    tags: ['NLP', 'Benchmarking'],
  },
  {
    id: 'namma-vayal',
    title: 'Namma Vayal',
    shortDescription:
      'AI-powered agricultural platform with on-device disease detection and RAG-based advisory.',
    fullDescription:
      'Built a Flutter app with TFLite disease diagnosis (EfficientNet-Lite0) achieving 84% accuracy, 120ms inference, and 6MB model size on mid-range devices. Implemented RAG for farmer queries using real-world datasets, improving relevance from 58% to 87% via hybrid search. Added marketplace workflows with 12-hour bidding windows and UPI integration; finalist at Gen AI CBE Hackathon 2025.',
    technologies: ['Flutter', 'TFLite', 'RAG', 'LangChain'],
    category: ['AI', 'Web Dev'],
    tags: ['On-Device AI', 'Agritech'],
  },
  {
    id: 'smart-city-traffic',
    title: 'Smart City Traffic Congestion Prediction System',
    shortDescription:
      'End-to-end traffic prediction using Spark, Kafka, and gradient boosted trees on 46M GPS records.',
    fullDescription:
      'Processed 46M+ GPS trip records with Spark and Hadoop HDFS, engineering spatial grid features and temporal lags. Trained Gradient Boosted Trees (One-Vs-Rest) to classify congestion with 79% accuracy and weighted F1 of 0.76. Built a real-time Kafka and Spark Structured Streaming pipeline handling 1,000+ events/sec at ~3s latency, and optimized storage from 120GB CSV to 28GB Parquet with Snappy.',
    technologies: ['Apache Spark', 'Kafka', 'HDFS', 'GBT'],
    category: ['Data Science', 'Infrastructure'],
    tags: ['Big Data', 'Streaming'],
  },
  {
    id: 'chronosai',
    title: 'ChronosAI',
    shortDescription:
      'Hybrid time-series ensemble combining LSTM, ARIMA, and Prophet with explainability.',
    fullDescription:
      'Developed a forecasting framework combining LSTM, ARIMA(1,1,1), and Prophet with inverse-error weighted ensemble. Reduced error to 62% MAPE from individual model errors (Prophet 84%, LSTM 71%). Processed high-frequency behavioral data and built VAR models with Granger causality (p < 0.05) and SHAP-based explainability, with mood accounting for 31% feature importance.',
    technologies: ['LSTM', 'ARIMA', 'Prophet', 'SHAP'],
    category: ['Data Science', 'AI'],
    tags: ['Time Series', 'Forecasting'],
  },
  {
    id: 'honeypot-dashboard',
    title: 'Honeypot Security Dashboard',
    shortDescription:
      'Real-time threat monitoring platform with classification and geospatial visualization.',
    fullDescription:
      'Built a full-stack honeypot platform with 6 decoy endpoints capturing 2,300+ malicious requests. Enhanced attack classification to 89% accuracy using TF-IDF and Random Forest. Delivered a real-time dashboard with Server-Sent Events (4.2s average detection time) and GeoIP mapping via Leaflet.',
    technologies: ['React', 'Flask', 'scikit-learn', 'Leaflet'],
    category: ['Web Dev', 'Infrastructure'],
    tags: ['Security', 'Streaming'],
  },
  {
    id: 'doc-patient-connect',
    title: 'Doc-Patient Connect',
    shortDescription:
      'Production-grade telehealth platform with video consultations and RBAC.',
    fullDescription:
      'Engineered a telehealth platform with appointment scheduling, secure records, and real-time video consultations. Integrated Clerk authentication and Vonage video sessions (average connection time under 2 seconds). Implemented role-based access control with Prisma and PostgreSQL, plus live notifications via WebSockets. Deployed on Vercel with 99.9% uptime during testing.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vonage', 'WebSockets'],
    category: ['Web Dev'],
    tags: ['Telehealth', 'RBAC'],
  },
  {
    id: 'enterprise-forecasting',
    title: 'Enterprise Forecasting and Scenario Planning Platform',
    shortDescription:
      'Automated ETL and time-series forecasting for weekly operational metrics.',
    fullDescription:
      'Designed data analytics workflows to forecast weekly metrics and evaluate planning scenarios. Built automated ETL pipelines for 2M+ records and time-series models (Prophet, ARIMA) achieving 18% lower MAPE than baseline moving averages. Delivered variance analysis dashboards comparing predicted vs actual performance.',
    technologies: ['Python', 'SQL', 'ETL', 'Prophet', 'ARIMA'],
    category: ['Data Science', 'Infrastructure'],
    tags: ['Forecasting', 'ETL'],
  },
  {
    id: 'autonomous-bi-insight-engine',
    title: 'Autonomous BI Insight Engine',
    shortDescription:
      'Automated anomaly detection and executive-ready insight generation for business data.',
    fullDescription:
      'Developed analytics pipelines that detect anomalies using Z-score and IQR methods and generate structured insights across 15+ KPIs. Built automated reporting workflows translating statistical findings into executive-ready summaries, reducing manual analysis time by 80%.',
    technologies: ['Python', 'Anomaly Detection'],
    category: ['Data Science', 'Infrastructure'],
    tags: ['Analytics Automation'],
  },
  {
    id: 'enterprise-data-warehouse',
    title: 'Enterprise Data Warehouse and BI Analytics Stack',
    shortDescription:
      'End-to-end data warehouse with star schema design and optimized analytical queries.',
    fullDescription:
      'Architected a business intelligence pipeline integrating ETL workflows, relational databases, and KPI dashboards. Designed normalized and star-schema structures handling 10M+ rows and optimized SQL queries for 40% faster analytical workloads.',
    technologies: ['PostgreSQL', 'SQL', 'Data Warehousing'],
    category: ['Infrastructure', 'Data Science'],
    tags: ['BI', 'Data Modeling'],
  },
  {
    id: 'maritime-visual-detection',
    title: 'DL-Based Visual Detection System for Maritime Surveillance',
    shortDescription:
      'Deep learning detection pipeline balancing accuracy and inference latency for SAR imagery.',
    fullDescription:
      'Developed a deep learning detection pipeline using ResNet-FPN architectures for SAR satellite imagery. Designed model selection workflows balancing accuracy and inference latency for large-scale image processing. Achieved 0.71 mAP with inference under 60ms on consumer GPUs.',
    technologies: ['PyTorch', 'Detectron2', 'ResNet'],
    category: ['AI'],
    tags: ['Maritime Surveillance'],
  },
  {
    id: 'iot-healthcare-monitoring',
    title: 'IoT-Based Healthcare Monitoring and Disease Prediction',
    shortDescription:
      'Arduino-based monitoring with ML disease prediction and real-time dashboards.',
    fullDescription:
      'Built an IoT healthcare system using Arduino Mega 2560 with SpO2, heart rate, and temperature sensors. Trained ML models (SVM, Logistic Regression) for diabetes, heart disease, and Parkinsons prediction with 82% accuracy. Delivered real-time dashboards in Streamlit for live monitoring.',
    technologies: ['Arduino', 'scikit-learn', 'Streamlit'],
    category: ['IoT', 'AI'],
    tags: ['Healthcare'],
  },
  {
    id: 'robotic-arm-vehicle',
    title: 'Robotic Arm Mounted on Four-Wheeled Drive Vehicle',
    shortDescription:
      'Robotic vehicle with pick-and-place automation and obstacle detection.',
    fullDescription:
      'Designed a four-wheeled robotic vehicle with a mounted arm for object manipulation. Implemented motion-control algorithms with obstacle detection and pick-and-place automation, achieving 92% success in controlled trials.',
    technologies: ['Arduino', 'C++', 'Motion Control'],
    category: ['Robotics', 'IoT'],
    tags: ['Robotics'],
  },
  {
    id: 'sequence-alignment-cyanobacteria',
    title: 'Sequence Alignment Analysis for Cyanobacteria Strains',
    shortDescription:
      'Compared Needleman-Wunsch and Smith-Waterman with clustering on gene sequences.',
    fullDescription:
      'Compared Needleman-Wunsch and Smith-Waterman alignment algorithms with K-means clustering on 500+ gene sequences. Computed similarity scores and visualized phylogenetic relationships using Python pipelines.',
    technologies: ['Python', 'Biopython'],
    category: ['Data Science'],
    tags: ['Bioinformatics'],
  },
  {
    id: 'knn-stock-predictor',
    title: 'KNN-Based Stock Price Movement Predictor',
    shortDescription:
      'KNN classifier for next-day price direction using RSI and moving average features.',
    fullDescription:
      'Analyzed Apple stock data (2021-2023) and built a KNN-based price movement classifier with feature engineering (RSI, moving averages). Achieved 61% accuracy, outperforming a 50% random baseline.',
    technologies: ['Python', 'yfinance', 'scikit-learn'],
    category: ['Data Science'],
    tags: ['Finance'],
  },
  {
    id: 'university-management-system',
    title: 'University Management System',
    shortDescription:
      'Academic management system with role-based access control and reporting.',
    fullDescription:
      'Developed an academic management system handling student records, faculty data, course enrollments, and fee structures. Implemented role-based access control and optimized SQL queries for reporting across 10+ entities.',
    technologies: ['SQL', 'Database Design'],
    category: ['Web Dev', 'Infrastructure'],
    tags: ['RBAC', 'Reporting'],
  },
  {
    id: 'urban-utopia',
    title: 'Urban Utopia',
    shortDescription:
      'Responsive property listing platform with filtering and map-based visualization.',
    fullDescription:
      'Built a responsive real estate platform with advanced property search, filtering across 10+ criteria, and interactive listings. Implemented dynamic filters and map-based visualization for improved discovery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    category: ['Web Dev'],
    tags: ['UI', 'Search'],
  },
  {
    id: 'handwriting-recognition',
    title: 'Handwriting Recognition and Authentication System',
    shortDescription:
      'CNN-based handwriting authentication with template matching and similarity scoring.',
    fullDescription:
      'Built a CNN-based handwriting authentication system verifying identity through handwriting patterns. Implemented template matching and similarity scoring, reaching 94% authentication accuracy on a dataset of 50 users.',
    technologies: ['Python', 'TensorFlow', 'Computer Vision'],
    category: ['AI'],
    tags: ['Authentication'],
  },
];
