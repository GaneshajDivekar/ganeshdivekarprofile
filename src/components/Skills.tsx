import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Next.js', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Kotlin', level: 90 },
        { name: 'Go', level: 85 },
        { name: 'Rust', level: 75 },
        { name: 'Python', level: 88 },
      ],
    },
    {
      name: 'Cloud',
      skills: [
        { name: 'AWS', level: 92 },
        { name: 'Azure', level: 85 },
        { name: 'GCP', level: 88 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Docker', level: 90 },
      ],
    },
    {
      name: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Cassandra', level: 82 },
        { name: 'Couchbase', level: 80 },
        { name: 'DynamoDB', level: 85 },
      ],
    },
    {
      name: 'Mobile',
      skills: [
        { name: 'Android', level: 88 },
        { name: 'iOS', level: 80 },
        { name: 'Flutter', level: 85 },
        { name: 'KMP', level: 82 },
        { name: 'React Native', level: 78 },
      ],
    },
    {
      name: 'AI/ML',
      skills: [
        { name: 'LLM', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 72 },
        { name: 'NLP', level: 78 },
        { name: 'Computer Vision', level: 70 },
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition-all duration-300 transform hover:-translate-y-1`}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-600">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-full rounded-full bg-blue-600" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;