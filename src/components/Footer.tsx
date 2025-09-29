import React from 'react';
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const quickLinks = ['about', 'resume', 'projects', 'skills', 'contact'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div 
                className="flex items-center space-x-2 cursor-pointer mb-4"
                onClick={scrollToTop}
              >
                <Code className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('header.portfolio')}
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                
                <a
                  href="https://wa.me/212617794638" 
                  target="_blank"
                  className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-all duration-300"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://www.facebook.com/abdelaziz.ouchwar"
                  target="_blank"
                  className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-all duration-300"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/aziz__oh/profilecard/?igsh=dzBwbGJvZGNhc2xt" 
                  target="_blank"
                  className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abde-laziz-ochwar-2ba0a7257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abde-laziz-ochwar-2ba0a7257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank"
                  className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=abdelazizochwar@gmail.com&su=Hello&body=Hi%20there!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {t(`header.${item}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-400">
                {t('footer.servicesList', { returnObjects: true }).map((service: string) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center gap-2">
                {t('footer.copyright')} <Heart size={16} className="text-red-500" /> {t('footer.and')} {t('footer.coffee')}
              </p>
              <p className="text-gray-400 text-sm">
                {t('footer.builtWith')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;