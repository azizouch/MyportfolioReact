import React from 'react';
import { User, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My name is Abde Laziz, I am 26 years old, I am able to effectively carry out the mission that will be assigned. My adaptability and my team spirit will make me a good element within your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-full h-[300px] sm:h-[600px]  rounded-2xl flex items-center justify-center bg-[url('/bg_img_11.png')] bg-cover bg-center"
              >
                {/* <User size={120} className="text-purple-400" /> */}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 2 years of experience in web development, I specialize in creating 
                  modern, scalable applications using React, TypeScript, and Node.js. I'm passionate 
                  about clean code, user experience, and staying up-to-date with the latest technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of collaboration and continuous learning. When I'm not coding, 
                  you can find me contributing to open-source projects or exploring new frameworks and tools.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <Calendar className="text-purple-400 mb-3" size={24} />
                  <h4 className="font-semibold text-white mb-2">Experience</h4>
                  <p className="text-gray-300">2+ Years</p>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <MapPin className="text-cyan-400 mb-3" size={24} />
                  <h4 className="font-semibold text-white mb-2">Location</h4>
                  <p className="text-gray-300">Quartier Azentou Ait Ourir Marrakech, Morroco</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Problem Solving', 'Team Leadership', 'Agile Development', 'UI/UX Design'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full text-sm border border-purple-500/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;