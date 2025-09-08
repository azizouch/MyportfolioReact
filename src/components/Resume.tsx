import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "Baccalaureate",
      period: "2017 - 2018",
      institution: "LYCEE ABTIH",
      location: "Ait Ourir",
      description: "Life and Earth Science"
    },
    {
      degree: "Diploma",
      period: "2019 - 2020",
      institution: "ISTA NTIC SYBA",
      location: "Marrakech",
      description: "Specialized Technician in IT Development"
    },
    {
      degree: "Certificate",
      period: "2021 - 2022",
      institution: "ISTA NTIC SYBA",
      location: "Marrakech",
      description: "Qualifying Training in Python"
    },
    {
      degree: "Baccalaureate",
      period: "2021 - 2022",
      institution: "LYCEE ABTIH",
      location: "Ait Ourir",
      description: "Free Baccalaureate in Letters and Human Sciences"
    }
  ];

  const experience = [
    {
      title: "INTERN",
      period: "03/2020 - 05/2020",
      company: "M.SAYSY company",
      location: "Casablanca",
      responsibilities: [
        "Development and creation of a desktop stock management application"
      ]
    },
    {
      title: "STOCK MANAGER",
      period: "05/2020 - 10/2020",
      company: "M.SAYSY company",
      location: "Casablanca",
      responsibilities: [
        "Manage negative and positive stocks of raw materials",
        "Receive and issue orders"
      ]
    },
    {
      title: "EMPLOYEE",
      period: "10/2024 - 12/2024",
      company: "Notary.Teacher Kamal Boutaskiouine",
      location: "Marrakech",
      responsibilities: [
        "Creating contracts in Word",
        "Saving contracts in Tawtik website and organizing files",
        "Creating general lists of clients in Excel",
        "Signing contracts with customers"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My educational background and professional journey in web development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <div className="absolute left-4 sm:left-6  top-12 sm:top-16 w-0.5 h-20 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                    )}
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 flex-1 hover:bg-gray-800/70 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                          <div className="flex items-center gap-2 text-purple-400 text-sm">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-300 mb-3">
                          <MapPin size={16} className="text-cyan-400" />
                          <span className="font-medium">{edu.institution}</span>
                          <span className="text-gray-400">• {edu.location}</span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
              </div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-4 sm:left-6  top-12 sm:top-16 w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                    )}
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 flex-1 hover:bg-gray-800/70 transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                          <div className="flex items-center gap-2 text-cyan-400 text-sm">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-300 mb-4">
                          <MapPin size={16} className="text-purple-400" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-gray-400">• {exp.location}</span>
                        </div>
                        
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-gray-300 leading-relaxed flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
              <GraduationCap size={20} />
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;