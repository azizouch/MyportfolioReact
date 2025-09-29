import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Award, Laptop, Cake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { t, i18n } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t('contact.title')}
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">{t('contact.getInTouch')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">{t('contact.phone')}</p>
                    <p className="text-white font-medium">+212 (6) 17794638</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">{t('contact.email')}</p>
                    <p className="text-white font-medium">abdelazizochwar@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">{t('contact.address')}</p>
                    <p className="text-white font-medium">{t('about.locationValue')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center">
                    <Cake className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">{t('contact.birthday')}</p>
                    <p className="text-white font-medium">January 02, 1998</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Laptop className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">{t('contact.freelance')}</p>
                    <p className="text-white font-medium">{t('contact.freelanceValue')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Award className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-300">{t('contact.softSkills')}</p>
                    <p className="text-white font-medium">{t('contact.softSkillsValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-4 sm:p-8 rounded-2xl">
              <form action="https://formspree.io/f/mzzaqvgv" method="post" className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium text-gray-300 mb-2 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder={t('contact.formNamePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium text-gray-300 mb-2 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder={t('contact.formEmailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium text-gray-300 mb-2 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder={t('contact.formMessagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;