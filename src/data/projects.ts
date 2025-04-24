import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'robotic-arm',
    title: 'Robotic Arm Mounted on a Four-Wheeled Drive Vehicle',
    shortDescription: 'Autonomous robotic arm system with advanced sensor integration',
    fullDescription: 'Developed a versatile robotic arm mounted on a four-wheeled drive vehicle, capable of autonomous operation through sensor feedback and remote control capabilities. Implemented complex motion algorithms and sensor integration.',
    technologies: ['Arduino', 'C++', 'Sensors', 'Automation'],
    category: ['Robotics', 'IoT'],
    role: 'Lead Developer',
    contributions: [
      'Designed and implemented the arm control system',
      'Integrated multiple sensors for environmental awareness',
      'Developed autonomous operation algorithms',
      'Built the physical prototype and tested in various conditions'
    ],
    challenges: [
      'Optimizing the weight distribution for stable operation',
      'Programming precise movement controls',
      'Integrating multiple sensors without interference'
    ],
    results: [
      'Successfully demonstrated autonomous object detection and manipulation',
      'Achieved precise movement control with minimal drift',
      'Created a platform that can be further extended with additional capabilities'
    ],
    previewImage: '/pic1.jpg', // Image for Projects page
    detailImage: '/pic2.png', // Image for detail page
    externalLink: 'https://four-wheeled-robotic-arm.vercel.app/'
  },
  {
    id: 'sequence-alignment',
    title: 'Analysis of Sequence Alignment Methods for Cyanobacteria Strains',
    shortDescription: 'Bioinformatics research comparing alignment algorithms for cyanobacteria genomics',
    fullDescription: 'Conducted extensive research on various sequence alignment methods specifically optimized for cyanobacteria strains. Implemented and compared multiple alignment algorithms, utilizing K-means clustering to identify patterns and relationships between different strains.',
    technologies: ['Python', 'Biopython', 'K-means', 'Data Analysis'],
    category: ['AI', 'Data Science'],
    contributions: [
      'Implemented multiple sequence alignment algorithms',
      'Applied K-means clustering to identify strain relationships',
      'Developed visualization tools for genomic comparison',
      'Analyzed performance metrics of different alignment methods'
    ],
    challenges: [
      'Handling large genomic datasets efficiently',
      'Optimizing alignment algorithms for specific cyanobacteria characteristics',
      'Interpreting complex clustering results'
    ],
    results: [
      'Identified optimal alignment methods for cyanobacteria genomics',
      'Discovered previously unknown relationships between specific strains',
      'Created a reusable framework for future genomic analysis'
    ],
    previewImage: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg'
  },
  {
    id: 'iot-healthcare',
    title: 'IoT-based Healthcare Monitoring and Disease Prediction',
    shortDescription: 'Smart healthcare system using IoT sensors and ML for disease prediction',
    fullDescription: 'Developed a comprehensive IoT-based healthcare monitoring system capable of tracking vital signs and predicting potential health issues using machine learning models. The system integrates with Arduino sensors and provides a Streamlit dashboard for healthcare providers.',
    technologies: ['Arduino', 'Python', 'Streamlit', 'ML Models'],
    category: ['IoT', 'AI', 'Web Dev'],
    role: 'Full Stack Developer',
    contributions: [
      'Designed the IoT sensor network for vital sign monitoring',
      'Developed machine learning models for disease prediction',
      'Created an intuitive Streamlit dashboard for data visualization',
      'Implemented secure data transmission protocols'
    ],
    challenges: [
      'Ensuring accuracy of health monitoring sensors',
      'Developing reliable prediction models with limited training data',
      'Creating a user-friendly interface for medical professionals'
    ],
    results: [
      'Successfully deployed system in test environment with 95% prediction accuracy',
      'Reduced monitoring overhead for healthcare providers by 40%',
      'Created a scalable platform that can incorporate additional sensors and prediction models'
    ],
    previewImage: 'https://images.pexels.com/photos/8413099/pexels-photo-8413099.jpeg'
  },
  {
    id: 'knn-stock',
    title: 'KNN-based Stock Rise and Fall Predictor',
    shortDescription: 'Machine learning stock market prediction tool using K-Nearest Neighbors algorithm',
    fullDescription: 'Developed a stock market prediction system using K-Nearest Neighbors algorithm to forecast stock price movements. The system analyzes historical data from yfinance API to identify patterns and make predictions on future price directions.',
    technologies: ['Python', 'yfinance', 'KNN', 'Data Analysis'],
    category: ['AI', 'Data Science'],
    contributions: [
      'Designed and implemented the KNN prediction algorithm',
      'Built data pipeline for historical stock data collection',
      'Developed feature engineering techniques for market analysis',
      'Created visualization tools for prediction results'
    ],
    challenges: [
      'Handling market volatility and unexpected events',
      'Selecting optimal features for the KNN algorithm',
      'Balancing prediction accuracy with computational efficiency'
    ],
    results: [
      'Achieved 68% accuracy in predicting daily price movements',
      'Developed a tool that can be applied to various market sectors',
      'Created an extendable framework for testing different ML algorithms'
    ],
    previewImage: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg'
  },
  {
    id: 'university-management',
    title: 'University Management System',
    shortDescription: 'Comprehensive Java-based system for university administration',
    fullDescription: 'Developed a comprehensive University Management System to streamline administrative processes including student registration, course management, faculty assignment, and academic record keeping. The system features a robust SQL database integration with a Java frontend.',
    technologies: ['Java', 'SQL', 'Database Design', 'UI/UX'],
    category: ['Web Dev'],
    role: 'Backend Developer',
    contributions: [
      'Designed and implemented the database schema',
      'Developed core business logic for academic processes',
      'Created APIs for frontend integration',
      'Implemented security measures for sensitive student data'
    ],
    challenges: [
      'Designing a flexible database schema to accommodate diverse academic structures',
      'Implementing complex business rules for course prerequisites and scheduling',
      'Ensuring system performance with large volumes of student data'
    ],
    results: [
      'Successfully deployed system handling records for 10,000+ students',
      'Reduced administrative processing time by 60%',
      'Created a maintainable codebase with comprehensive documentation'
    ],
    previewImage: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg'
  },
  {
    id: 'urban-utopia',
    title: 'Urban Utopia: Property Listing Website',
    shortDescription: 'Modern real estate listing platform with advanced search capabilities',
    fullDescription: 'Designed and developed Urban Utopia, a property listing website that connects buyers, sellers, and renters in the real estate market. The platform features advanced search capabilities, property comparisons, and contact forms for interested parties.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: ['Web Dev'],
    role: 'Frontend Developer',
    contributions: [
      'Designed the responsive user interface',
      'Implemented advanced search and filtering functionality',
      'Developed property comparison features',
      'Created contact and inquiry forms with validation'
    ],
    challenges: [
      'Designing an intuitive interface for complex property searches',
      'Optimizing performance with large property image galleries',
      'Ensuring responsive design across all device types'
    ],
    results: [
      'Created a fully responsive website with optimal user experience',
      'Implemented intuitive search features that increased user engagement',
      'Designed a clean, modern interface that showcased properties effectively'
    ],
    previewImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
  },
  {
    id: 'handwriting-detection',
    title: 'Handwriting Detection & Authentication',
    shortDescription: 'AI-powered system for handwriting analysis and verification',
    fullDescription: 'Developed a handwriting detection and authentication system using TensorFlow and Convolutional Neural Networks. The system can analyze handwritten text, verify the authenticity of signatures, and identify potential forgeries through pattern recognition.',
    technologies: ['TensorFlow', 'CNN Models', 'Image Processing', 'Python'],
    category: ['AI'],
    role: 'Machine Learning Engineer',
    contributions: [
      'Designed and trained the CNN model for handwriting analysis',
      'Developed preprocessing techniques for handwriting samples',
      'Implemented authentication algorithms based on writing patterns',
      'Created a user interface for sample submission and results visualization'
    ],
    challenges: [
      'Gathering sufficient training data for diverse handwriting styles',
      'Developing robust features to distinguish authentic writings from forgeries',
      'Optimizing the CNN architecture for both accuracy and speed'
    ],
    results: [
      'Achieved 92% accuracy in handwriting verification',
      'Successfully identified forgery attempts with 88% precision',
      'Created a system that can be integrated into various document verification workflows'
    ],
    previewImage: 'https://images.pexels.com/photos/5238118/pexels-photo-5238118.jpeg'
  }
];