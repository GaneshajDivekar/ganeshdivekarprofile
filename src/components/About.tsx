import React from 'react';
import { Award, Briefcase, GraduationCap, MapPin, Code, Globe, Heart } from 'lucide-react';

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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              🚀 Tech-Driven <span className="text-blue-500">Platform Architecture Engineering</span> Professional
            </h3>
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <p className={`text-lg mb-4 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I am a <span className="text-blue-500 font-bold">technology-driven engineering leader</span> with a passion for architecting scalable, high-performance platforms that power modern financial technology solutions.
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Currently serving as <span className="font-bold">Manager - Platform Architecture Engineering at Bajaj Finserv</span>, I lead teams in designing, developing, and optimizing mission-critical systems that drive digital transformation in financial services.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/** Experience */}
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Experience</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                10+ years in <span className="font-bold">software engineering & architecture</span>
              </p>
            </div>
            
            {/** Education */}
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Bachelor's in <span className="font-bold">Information Technology</span>
              </p>
            </div>

            {/** Location */}
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Location</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Pune, Maharashtra, India
              </p>
            </div>

            {/** Certifications */}
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <Award size={24} className="text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Certifications</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                <span className="font-bold">AWS Solutions Architect</span>, Terraform Associate
              </p>
            </div>
          </div>
        </div>

        {/** Additional Details */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">🌟 Vision & Passion</h3>
          <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My passion lies in <span className="font-bold">AI/ML innovations</span>, integrating predictive analytics and data-driven decision-making into fintech. I thrive on solving complex engineering challenges, mentoring teams, and fostering a culture of <span className="font-bold">technical excellence</span>.
            </p>
          </div>
        </div>

        {/** Hobbies & Interests */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">🏆 Beyond Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <Globe size={24} className="text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Travel & Adventure</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Exploring new places & cultures keeps me inspired! 🌍
              </p>
            </div>
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <Heart size={24} className="text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Fitness & Well-being</h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Running, trekking & yoga keep me energized! 🏃‍♂️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;