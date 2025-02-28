import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "FinTech Payment Gateway",
      description: "A scalable payment processing system handling millions of transactions daily",
      longDescription: "Designed and implemented a high-throughput payment gateway system for Bajaj Finserv that processes over 5 million transactions daily. The system features real-time fraud detection, multi-currency support, and seamless integration with major payment networks. Built with Java and Kotlin microservices deployed on AWS, with a React frontend for the merchant dashboard. The architecture includes event-driven components using Kafka for transaction processing and a PostgreSQL/MongoDB hybrid database approach for different data storage needs.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Java", "Kotlin", "Spring Boot", "AWS", "React", "Kafka", "PostgreSQL", "MongoDB"],
      category: "backend"
    },
    {
      id: 2,
      title: "AI-Powered Loan Approval System",
      description: "Machine learning system that automates loan approval decisions",
      longDescription: "Developed an AI-powered loan approval system that reduced decision time from days to seconds while maintaining high accuracy. The system uses machine learning models trained on historical loan data to predict default risk and recommend appropriate loan terms. Built with Python, TensorFlow, and deployed on GCP with a microservice architecture. The system includes explainable AI components to provide transparency into decision-making, real-time credit scoring integration, and a React-based dashboard for loan officers to review automated decisions.",
      image: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "TensorFlow", "GCP", "React", "FastAPI", "PostgreSQL"],
      category: "ai"
    },
    {
      id: 3,
      title: "Cross-Platform Mobile Banking App",
      description: "Feature-rich banking application for Android and iOS using Flutter",
      longDescription: "Led the development of a cross-platform mobile banking application that serves over 2 million users. The app provides comprehensive banking features including account management, fund transfers, bill payments, investment tracking, and personalized financial insights. Built with Flutter for the frontend and Kotlin Multiplatform for shared business logic, with a Go-based backend. The app implements biometric authentication, real-time notifications, and offline capabilities. The architecture follows clean architecture principles with a robust state management approach.",
      image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Flutter", "Kotlin Multiplatform", "Go", "Firebase", "AWS"],
      category: "mobile"
    },
    {
      id: 4,
      title: "Distributed Ledger for Financial Records",
      description: "Blockchain-based system for immutable financial record-keeping",
      longDescription: "Architected a private blockchain solution for maintaining immutable financial records across multiple business entities. The system provides a distributed ledger that ensures data integrity, auditability, and compliance with financial regulations. Built with Rust for the core blockchain components, with Go microservices for the API layer and React for the administrative interface. The system implements a custom consensus algorithm optimized for financial transactions, with support for smart contracts to automate inter-company settlements.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      technologies: ["Rust", "Go", "React", "AWS", "Hyperledger"],
      category: "backend"
    },
    {
      id: 5,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for monitoring business metrics in real-time",
      longDescription: "Created a real-time analytics dashboard that provides instant visibility into key business metrics across the organization. The dashboard features interactive visualizations, customizable widgets, and automated alerting capabilities. Built with Next.js and D3.js for the frontend, with a real-time data pipeline using Kafka, Spark Streaming, and Cassandra. The system processes millions of events per minute and supports drill-down analytics with sub-second query response times through a carefully optimized data model and caching strategy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Next.js", "D3.js", "Kafka", "Spark", "Cassandra", "GCP"],
      category: "frontend"},
    {
      id: 6,
      title: "Microservices Migration Framework",
      description: "Framework for migrating monolithic applications to microservices",
      longDescription: "Developed a comprehensive framework and methodology for migrating legacy monolithic applications to a microservices architecture. The framework includes tools for service boundary identification, data migration, API gateway configuration, and deployment automation. Built with Go for the core tools, with Kubernetes operators for deployment orchestration. The framework has been successfully used to migrate several critical systems, reducing deployment times by 80% and improving system reliability. It includes monitoring, tracing, and logging components based on the OpenTelemetry standard.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
      technologies: ["Go", "Kubernetes", "Docker", "Terraform", "AWS", "Istio"],
      category: "backend"
    },
    {
      id: 7,
      title: "Secure Document Management System",
      description: "End-to-end encrypted document storage and sharing platform",
      longDescription: "Architected a secure document management system for handling sensitive financial and legal documents. The system features end-to-end encryption, fine-grained access controls, and comprehensive audit logging. Built with Angular for the frontend, Java Spring Boot for the backend, and deployed on Azure with a zero-trust security model. The system includes advanced features such as document versioning, digital signatures, automated OCR for searchability, and compliance with financial industry regulations. It handles millions of documents while maintaining sub-second retrieval times.",
      image: "https://images.unsplash.com/photo-1568027762272-e4da8b8dde3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Angular", "Java", "Spring Boot", "Azure", "PostgreSQL"],
      category: "frontend"
    },
    {
      id: 8,
      title: "Conversational AI for Customer Service",
      description: "NLP-powered chatbot handling customer inquiries with high accuracy",
      longDescription: "Developed an advanced conversational AI system that handles over 70% of customer service inquiries without human intervention. The system uses natural language processing to understand customer intent, maintain context across conversations, and provide personalized responses. Built with Python, PyTorch, and deployed on GCP with a microservice architecture. The system includes sentiment analysis to detect customer frustration, seamless handoff to human agents when needed, and continuous learning from interactions to improve over time. It integrates with CRM systems to provide agents with full context when escalations occur.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
      technologies: ["Python", "PyTorch", "NLP", "GCP", "React", "MongoDB"],
      category: "ai"
    },
    {
      id: 9,
      title: "Financial Data Integration Platform",
      description: "System for integrating data from multiple financial sources",
      longDescription: "Designed and implemented a data integration platform that consolidates information from over 50 different financial systems and data providers. The platform standardizes data formats, ensures data quality, and provides a unified API for applications to access financial information. Built with Kotlin and Spring Boot for the backend, with a complex ETL pipeline using Apache NiFi and Airflow. The system processes terabytes of data daily while maintaining strict SLAs for data freshness and accuracy. It includes comprehensive data lineage tracking and quality monitoring dashboards.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      technologies: ["Kotlin", "Spring Boot", "Apache NiFi", "Airflow", "AWS", "PostgreSQL"],
      category: "backend"
    },
    {
      id: 10,
      title: "Mobile Wallet with Offline Capabilities",
      description: "Digital wallet app that works in low-connectivity environments",
      longDescription: "Led the development of a mobile wallet application designed to work in areas with limited internet connectivity. The app allows users to make payments, transfer money, and manage their finances even when offline, with transactions synchronizing when connectivity is restored. Built with Flutter for the frontend and Rust for the secure offline transaction engine. The system implements a novel cryptographic approach to ensure transaction security and prevent double-spending in offline mode. It has been deployed in rural areas with limited connectivity and serves over 500,000 users.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Flutter", "Rust", "Kotlin", "SQLite", "AWS"],
      category: "mobile"
    },
    {
      id: 11,
    title: "Cloud-Native Health Insurance Platform",
    description: "Scalable platform connecting patients, providers, and insurers",
    longDescription: "Designed and built a comprehensive health insurance platform that streamlines interactions between patients, healthcare providers, and insurance companies. The platform includes features for policy management, claims processing, provider network management, and member services. Implemented as a cloud-native solution using microservices architecture on AWS EKS with Node.js and TypeScript. The system processes over 10,000 claims daily with automated adjudication for 80% of submissions, reducing processing time from weeks to minutes while maintaining compliance with healthcare regulations and security standards.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: ["TypeScript", "Node.js", "AWS EKS", "MongoDB", "Redis", "React", "Express"],
    category: "backend"
    },{
      id: 12,
    title: "AR-Assisted Property Inspection",
    description: "Mobile app using augmented reality for property assessments",
    longDescription: "Developed an innovative mobile application that uses augmented reality to assist property inspectors and appraisers. The app allows users to visualize property data in real-time, capture measurements using AR capabilities, document issues with spatial annotations, and generate comprehensive reports. Built with Swift for iOS and Kotlin for Android, using ARKit and ARCore respectively. The app integrates with existing property management systems through a custom API layer built with GraphQL. Field tests showed a 40% reduction in inspection time and significantly improved accuracy in damage assessment and measurement collection.",
    image: "https://images.unsplash.com/photo-1633421878925-ac180dea689b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Swift", "Kotlin", "ARKit", "ARCore", "GraphQL", "Firebase", "Node.js"],
    category: "mobile"
    },{
      id: 13,
    title: "Accessible E-Commerce Platform",
    description: "Fully accessible online shopping experience adhering to WCAG standards",
    longDescription: "Architected and implemented a fully accessible e-commerce platform that provides an inclusive shopping experience for users with disabilities. The platform adheres to WCAG 2.1 AAA standards and includes features such as keyboard navigation, screen reader compatibility, high contrast modes, and simplified interfaces for cognitive accessibility. Built with Next.js for the frontend, with a headless commerce backend using Strapi and integrated with multiple payment gateways. The application uses specialized testing frameworks to continuously validate accessibility compliance. After launch, the platform increased conversion rates by 23% across all user segments and significantly improved retention metrics for users with accessibility needs.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS", "Jest", "Cypress", "Vercel"],
    category: "frontend"
    },{
      id: 14,
    title: "Real-time Collaborative Code Editor",
    description: "Browser-based IDE with multi-user editing and execution capabilities",
    longDescription: "Built a collaborative, browser-based code editor that allows multiple developers to write and execute code together in real-time. The editor features syntax highlighting for over 40 programming languages, intelligent code completion, real-time cursor tracking for all participants, integrated terminal for command execution, and isolated execution environments for running code securely. The frontend is built with React and Monaco Editor, while the backend uses Node.js with Socket.io for real-time communication and Docker for secure code execution. The system includes features like permissions management, version history, and integration with GitHub for seamless project import/export.",
    image: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    technologies: ["React", "TypeScript", "Monaco Editor", "Node.js", "Socket.io", "Docker", "Redis"],
    category: "frontend"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution in the world of software engineering.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('frontend')} 
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'frontend' 
                  ? 'bg-blue-600 text-white' 
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('backend')} 
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'backend' 
                  ? 'bg-blue-600 text-white' 
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('mobile')} 
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'mobile' 
                  ? 'bg-blue-600 text-white' 
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Mobile
            </button>
            <button 
              onClick={() => setFilter('ai')} 
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === 'ai' 
                  ? 'bg-blue-600 text-white' 
                  : darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              AI/ML
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} transition-all duration-300 transform hover:-translate-y-2`}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button 
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={closeProjectModal}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div 
              className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className={`bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none`}
                  onClick={closeProjectModal}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div>
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {activeProject.longDescription}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;