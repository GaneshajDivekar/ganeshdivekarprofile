// Gallery.js
import React from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  darkMode: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ darkMode }) => {
  const personalImages = [
    'https://www.dropbox.com/scl/fi/nzrwqo9omonq8kn05uhep/image1.jpeg?rlkey=s8ft32if63ad75v6fzsi9oapz&st=erisda7y&dl=0',
    'https://source.unsplash.com/400x300/?travel,mountains',
    'https://source.unsplash.com/400x300/?adventure,forest'
  ];

  const professionalImages = [
    'https://source.unsplash.com/400x300/?technology,office',
    'https://source.unsplash.com/400x300/?business,meeting',
    'https://source.unsplash.com/400x300/?corporate,work'
  ];

  return (
    <section className={`py-10 transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-4xl font-extrabold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        
        <h3 className="text-2xl font-semibold mb-4">Personal</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {personalImages.map((src, index) => (
            <motion.img 
              key={index} 
              src={src} 
              alt={`Personal ${index + 1}`} 
              className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Professional</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {professionalImages.map((src, index) => (
            <motion.img 
              key={index} 
              src={src} 
              alt={`Professional ${index + 1}`} 
              className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;