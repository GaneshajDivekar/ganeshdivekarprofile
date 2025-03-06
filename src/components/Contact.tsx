import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Instagram, Twitter } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:ganeshajdivekar@gmail.com" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    ganeshajdivekar@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+918459684546" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    +91 8459684546
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ganesh-divekar-96a72bb7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    linkedin.com/in/ganesh-divekar-96a72bb7
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Instagram className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/codeguruganeshula/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    @codeguruganeshula
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Twitter className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Twitter</h4>
                  <a 
                    href="https://x.com/GaneshAJD" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    @GaneshAJD
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
