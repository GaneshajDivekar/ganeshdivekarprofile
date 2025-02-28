import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center pt-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      style={{
        backgroundImage: darkMode 
          ? 'radial-gradient(circle at 10% 20%, rgba(21, 27, 38, 1) 0%, rgba(13, 16, 23, 1) 90.1%)'
          : 'radial-gradient(circle at 10% 20%, rgba(236, 242, 255, 1) 0%, rgba(252, 252, 252, 1) 90.1%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Hello, I'm</span>
                <br />
                <span className="text-blue-600">Ganesh Divekar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                Manager - Platform Architecture Engineering
              </h2>
              <p className={`text-lg max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Engineering at Bajaj Finserv | Backend: Java, Kotlin, Go, Python | Frontend: ReactJS, Next.js, Angular, JavaScript | Mobile: Android, iOS, Flutter, KMP | Cloud: AWS, GCP | Database: SQL, NoSQL | Innovating in AI/ML.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className={`px-6 py-3 ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} font-medium rounded-lg shadow-lg transition-colors duration-300`}
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/GaneshajDivekar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                aria-label="GitHub"
              >
                <Github size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
              </a>
              <a 
                href="https://linkedin.com/in/ganesh-divekar-96a72bb7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
              </a>
              <a 
                href="mailto:ganeshajdivekar@gmail.com" 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                aria-label="Email"
              >
                <Mail size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
              </a>
              <a 
                href="https://ganeshajdivekar.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                aria-label="Blog"
              >
                <FileText size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className={`relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-600 shadow-lg shadow-blue-500/20' : 'border-blue-500 shadow-lg'}`}>
              <img 
                src="https://imgur.com/a/G5irnxJ" 
                alt="Ganesh Divekar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;