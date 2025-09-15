import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useState, useEffect  } from "react";


const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
  }

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // 🔹 Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // unlock scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [isOpen]);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group shadow-xl hover:shadow-2xl"
              >
                {/* <div className="h-48 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 p-8 flex items-center justify-center">
                  <div className="text-6xl opacity-50">{project.icon}</div>
                </div> */}
                <div className="h-60 overflow-hidden shadow-lg group relative">
                  <img
                    src={project.image}
                    alt="Project preview"
                    className="w-full object-top transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[85%]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between gap-4">
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProject(project); // set this project as active
                        setIsOpen(true); // open modal
                      }}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Eye size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-lg hover:bg-purple-500 transition-all duration-300"
            >
              <Github size={20} />
              View All Projects
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && activeProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-6xl w-full max-h-[90vh] relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Scrollable container */}
            <div className=" h-[90vh] overflow-y-auto">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full object-contain "
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;