import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Ganesh<span className="text-blue-600"> Divekar</span>
            </a>
            <p className={`mt-2 max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Platform Architecture Engineering professional specializing in scalable, robust software solutions.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
            </a>
            <a 
              href="https://linkedin.com/in/ganesh-divekar-96a72bb7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
            </a>
            <a 
              href="mailto:ganeshajdivekar@gmail.com" 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label="Email"
            >
              <Mail size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
            </a>
            <a 
              href="https://ganeshajdivekar.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              aria-label="Blog"
            >
              <FileText size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              &copy; {currentYear} Ganesh Divekar. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="#home" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;