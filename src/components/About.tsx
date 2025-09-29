import React from 'react';
import { User, Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-800/50" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t('about.subtitle')}
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
                <h3 className="text-2xl font-semibold mb-4 text-white">{t('about.journeyTitle')}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('about.journeyP1')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.journeyP2')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <Calendar className="text-purple-400 mb-3" size={24} />
                  <h4 className="font-semibold text-white mb-2">{t('about.experience')}</h4>
                  <p className="text-gray-300">{t('about.experienceValue')}</p>
                </div>

                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <MapPin className="text-cyan-400 mb-3" size={24} />
                  <h4 className="font-semibold text-white mb-2">{t('about.location')}</h4>
                  <p className="text-gray-300">{t('about.locationValue')}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {t('about.traits', { returnObjects: true }).map((trait: string) => (
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