import React from 'react';
import { Github, Linkedin, Mail, Download, Facebook, Instagram } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-100">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Abde Laziz Ouchouar
            </span>
          </h1>
          <p className="text-xl md:text-2xl px-6 md:px-0 text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p> 

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button 
            onClick={() => window.open("/my-cv.pdf", "_blank")}
            className="px-8 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:border-purple-400 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-6">
            <a
              href="https://wa.me/212617794638" 
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.facebook.com/abdelaziz.ouchwar"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/aziz__oh/profilecard/?igsh=dzBwbGJvZGNhc2xt" 
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a> 
            <a
              href="https://github.com/azizouch"
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abde-laziz-ochwar-2ba0a7257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank"
              className="p-3 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelazizochwar@gmail.com&su=Hello&body=Hi%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-[#0099FF] transition-all duration-300 transform hover:scale-110"
            >
              <FaMessage size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mt-8 sm:mt-0">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;