import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Tech-Driven Platform Architecture Engineering Professional
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a technology-driven engineering professional with extensive experience in platform architecture and engineering management. Currently serving as Manager of Platform Architecture Engineering at Bajaj Finserv, I lead teams in designing and implementing robust, scalable systems that power financial technology solutions.
            </p>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My technical expertise spans backend development with Java, Kotlin, Go, and Python; frontend development with React, Angular, and Next.js; mobile development across Android, iOS, and Flutter; and cloud infrastructure on AWS, Azure, and GCP. I specialize in DevOps automation with Kubernetes, Terraform, and CI/CD pipelines, ensuring efficient deployment and scalability of cloud-native applications.
            </p>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Additionally, I have a deep understanding of distributed systems, microservices architecture, and event-driven design, leveraging tools like Kafka, RabbitMQ, and GraphQL. My passion lies in AI/ML innovations, integrating predictive analytics and data-driven decision-making into financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-semibold">Experience</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                10+ years of experience in software engineering and architecture
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                  <GraduationCap size={24} />
                </div>
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Bachelor's in Information Technology
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                  <MapPin size={24} />
                </div>
                <h4 className="text-xl font-semibold">Location</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Pune, Maharashtra, India
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-600 text-white mr-4">
                  <Award size={24} />
                </div>
                <h4 className="text-xl font-semibold">Certifications</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                AWS Solutions Architect, Terraform Associate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
