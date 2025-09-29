import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hero: {
            name: 'Abde Laziz Ouchouar',
            greeting: "Hello, I'm",
            title:
              'I am a passionate Full Stack Developer specializing in creating modern and scalable web applications.',
            getInTouch: 'Get in Touch',
            downloadCV: 'Download CV',
          },
          about: {
            title: 'About Me',
            subtitle:
              'My name is Abde Laziz, I am 26 years old, I am able to effectively carry out the mission that will be assigned. My adaptability and my team spirit will make me a good element within your team.',
            journeyTitle: 'My Journey',
            journeyP1:
              "With over 2 years of experience in web development, I specialize in creating modern, scalable applications using React, TypeScript, and Node.js. I'm passionate about clean code, user experience, and staying up-to-date with the latest technologies.",
            journeyP2:
              "I believe in the power of collaboration and continuous learning. When I'm not coding, you can find me contributing to open-source projects or exploring new frameworks and tools.",
            experience: 'Experience',
            experienceValue: '2+ Years',
            location: 'Location',
            locationValue: 'Quartier Azentou Ait Ourir Marrakech, Morroco',
            traits: ['Problem Solving', 'Team Leadership', 'Agile Development', 'UI/UX Design'],
          },
          resume: {
            title: 'Resume',
            subtitle: 'My educational background and professional journey in web development',
            educationTitle: 'Education',
            experienceTitle: 'Professional Experience',
            download: 'Download Full Resume',
            education: [
              {
                degree: 'Baccalaureate',
                period: '2017 - 2018',
                institution: 'LYCEE ABTIH',
                location: 'Ait Ourir',
                description: 'Life and Earth Science',
              },
              {
                degree: 'Diploma',
                period: '2019 - 2020',
                institution: 'ISTA NTIC SYBA',
                location: 'Marrakech',
                description: 'Specialized Technician in IT Development',
              },
              {
                degree: 'Certificate',
                period: '2021 - 2022',
                institution: 'ISTA NTIC SYBA',
                location: 'Marrakech',
                description: 'Qualifying Training in Python',
              },
              {
                degree: 'Baccalaureate',
                period: '2021 - 2022',
                institution: 'LYCEE ABTIH',
                location: 'Ait Ourir',
                description: 'Free Baccalaureate in Letters and Human Sciences',
              },
            ],
            experience: [
              {
                title: 'INTERN',
                period: '03/2020 - 05/2020',
                company: 'M.SAYSY company',
                location: 'Casablanca',
                responsibilities: ['Development and creation of a desktop stock management application'],
              },
              {
                title: 'STOCK MANAGER',
                period: '05/2020 - 10/2020',
                company: 'M.SAYSY company',
                location: 'Casablanca',
                responsibilities: ['Manage negative and positive stocks of raw materials', 'Receive and issue orders'],
              },
              {
                title: 'EMPLOYEE',
                period: '10/2024 - 12/2024',
                company: 'Notary.Teacher Kamal Boutaskiouine',
                location: 'Marrakech',
                responsibilities: [
                  'Creating contracts in Word',
                  'Saving contracts in Tawtik website and organizing files',
                  'Creating general lists of clients in Excel',
                  'Signing contracts with customers',
                ],
              },
            ],
          },
          projects: {
            title: 'Featured Projects',
            subtitle: 'A showcase of my recent work and personal projects that demonstrate my skills and passion for development',
            viewAll: 'View All Projects',
          },
          skills: {
            title: 'Skills & Technologies',
            subtitle: 'The tools and technologies I use to bring ideas to life',
          },
          contact: {
            title: "Let's Work Together",
            subtitle: "Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.",
            getInTouch: 'Get in Touch',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            birthday: 'Birthday',
            freelance: 'Freelance',
            freelanceValue: 'Available',
            softSkills: 'Soft skills',
            softSkillsValue: 'Dynamic - Serious - Responsible - Team spirit',
            formName: 'Name',
            formNamePlaceholder: 'Your name',
            formEmail: 'Email',
            formEmailPlaceholder: 'your.email@example.com',
            formMessage: 'Message',
            formMessagePlaceholder: 'Tell me about your project...',
            send: 'Send Message',
          },
          footer: {
            description: "Crafting digital experiences with passion and precision. Let's build something amazing together.",
            quickLinks: 'Quick Links',
            services: 'Services',
            servicesList: ['Web Development', 'Frontend Development', 'Backend Development', 'UI/UX Design', 'Consulting'],
            copyright: '© 2025 Abde Laziz Ouchouar. Made with',
            and: 'and',
            coffee: 'lots of coffee.',
            builtWith: 'Built with React & Tailwind CSS',
          },
          header: {
            home: 'Home',
            about: 'About',
            resume: 'Resume',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            portfolio: 'Portfolio',
          },
        },
      },
      ar: {
        translation: {
          hero: {
            name: 'عبد العزيز أشوار',
            greeting: 'مرحباً، أنا',
            title:
              'أنا مطور Full Stack شغوف ومتخصص في إنشاء تطبيقات ويب حديثة وقابلة للتطوير.',
            getInTouch: 'تواصل معي',
            downloadCV: 'تحميل السيرة الذاتية',
          },
          about: {
            title: 'عني',
            subtitle:
              'اسمي عبد العزيز، عمري 26 سنة، قادر على إنجاز المهمة التي ستسند إلي بفعالية. قدرتي على التكيف وروح الفريق ستجعلني عنصراً جيداً ضمن فريقكم.',
            journeyTitle: 'رحلتي',
            journeyP1:
              'لدي أكثر من عامين من الخبرة في تطوير الويب، وأنا متخصص في إنشاء تطبيقات ويب حديثة وقابلة للتطوير باستخدام React و TypeScript و Node.js. أنا شغوف بالكود النظيف وتجربة المستخدم ومواكبة أحدث التقنيات.',
            journeyP2:
              'أؤمن بقوة التعاون والتعلم المستمر. عندما لا أكتب الكود، يمكنك أن تجدني أساهم في مشاريع مفتوحة المصدر أو أستكشف أطر عمل وأدوات جديدة.',
            experience: 'الخبرة',
            experienceValue: '+2 سنوات',
            location: 'الموقع',
            locationValue: 'حي أزنتو، آيت أورير، مراكش، المغرب',
            traits: ['حل المشكلات', 'قيادة الفريق', 'التطوير السريع (Agile)', 'تصميم UI/UX'],
          },
          resume: {
            title: 'السيرة الذاتية',
            subtitle: 'خلفيتي التعليمية ومسيرتي المهنية في تطوير الويب',
            educationTitle: 'التعليم',
            experienceTitle: 'الخبرة المهنية',
            download: 'تحميل السيرة الذاتية كاملة',
            education: [
              {
                degree: 'بكالوريا',
                period: '2017 - 2018',
                institution: 'ثانوية أبطيح',
                location: 'آيت أورير',
                description: 'علوم الحياة والأرض',
              },
              {
                degree: 'دبلوم',
                period: '2019 - 2020',
                institution: 'ISTA NTIC SYBA',
                location: 'مراكش',
                description: 'تقني متخصص في تطوير تكنولوجيا المعلومات',
              },
              {
                degree: 'شهادة',
                period: '2021 - 2022',
                institution: 'ISTA NTIC SYBA',
                location: 'مراكش',
                description: 'تدريب تأهيلي في بايثون',
              },
              {
                degree: 'بكالوريا',
                period: '2021 - 2022',
                institution: 'ثانوية أبطيح',
                location: 'آيت أورير',
                description: 'بكالوريا حرة في الآداب والعلوم الإنسانية',
              },
            ],
            experience: [
              {
                title: 'متدرب',
                period: '03/2020 - 05/2020',
                company: 'شركة M.SAYSY',
                location: 'الدار البيضاء',
                responsibilities: ['تطوير وإنشاء تطبيق مكتبي لإدارة المخزون'],
              },
              {
                title: 'مدير المخزون',
                period: '05/2020 - 10/2020',
                company: 'شركة M.SAYSY',
                location: 'الدار البيضاء',
                responsibilities: ['إدارة المخزونات السالبة والموجبة للمواد الخام', 'استلام وإصدار الطلبات'],
              },
              {
                title: 'موظف',
                period: '10/2024 - 12/2024',
                company: 'موثق. أستاذ كمال بوتسكيوين',
                location: 'مراكش',
                responsibilities: [
                  'إنشاء العقود في Word',
                  'حفظ العقود في موقع توثيق وتنظيم الملفات',
                  'إنشاء قوائم عامة للعملاء في Excel',
                  'توقيع العقود مع العملاء',
                ],
              },
            ],
          },
          projects: {
            title: 'مشاريع مميزة',
            subtitle: 'عرض لأعمالي الأخيرة ومشاريعي الشخصية التي تظهر مهاراتي وشغفي بالتطوير',
            viewAll: 'عرض كل المشاريع',
          },
          skills: {
            title: 'المهارات والتقنيات',
            subtitle: 'الأدوات والتقنيات التي أستخدمها لتحويل الأفكار إلى واقع',
          },
          contact: {
            title: 'لنعمل معًا',
            subtitle: 'هل لديك مشروع في ذهنك؟ أحب أن أسمع عنه ونناقش كيف يمكننا تحويل أفكارك إلى واقع.',
            getInTouch: 'تواصل معي',
            phone: 'الهاتف',
            email: 'البريد الإلكتروني',
            address: 'العنوان',
            birthday: 'تاريخ الميلاد',
            freelance: 'العمل الحر',
            freelanceValue: 'متاح',
            softSkills: 'المهارات الشخصية',
            softSkillsValue: 'ديناميكي - جاد - مسؤول - روح الفريق',
            formName: 'الاسم',
            formNamePlaceholder: 'اسمك',
            formEmail: 'البريد الإلكتروني',
            formEmailPlaceholder: 'your.email@example.com',
            formMessage: 'الرسالة',
            formMessagePlaceholder: 'أخبرني عن مشروعك...',
            send: 'إرسال الرسالة',
          },
          footer: {
            description: 'صياغة تجارب رقمية بشغف ودقة. لنبني شيئًا مذهلاً معًا.',
            quickLinks: 'روابط سريعة',
            services: 'الخدمات',
            servicesList: ['تطوير الويب', 'تطوير الواجهة الأمامية', 'تطوير الواجهة الخلفية', 'تصميم UI/UX', 'استشارات'],
            copyright: '© 2025 عبد العزيز أشوار. صنع بـ',
            and: 'و',
            coffee: 'الكثير من القهوة.',
            builtWith: 'بني باستخدام React و Tailwind CSS',
          },
          header: {
            home: 'الرئيسية',
            about: 'عني',
            resume: 'السيرة الذاتية',
            projects: 'المشاريع',
            skills: 'المهارات',
            contact: 'التواصل',
            portfolio: 'ملفي الشخصي',
          },
        },
      },
      fr: {
        translation: {
          hero: {
            name: 'Abde Laziz Ouchouar',
            greeting: 'Bonjour, je suis',
            title:
              "Je suis un développeur Full Stack passionné, spécialisé dans la création d'applications web modernes et évolutives.",
            getInTouch: 'Me contacter',
            downloadCV: 'Télécharger le CV',
          },
          about: {
            title: 'À propos de moi',
            subtitle:
              "Je m'appelle Abde Laziz, j'ai 26 ans, je suis capable de mener à bien et efficacement la mission qui me sera confiée. Ma capacité d'adaptation et mon esprit d'équipe feront de moi un bon élément au sein de votre équipe.",
            journeyTitle: 'Mon parcours',
            journeyP1:
              "Avec plus de 2 ans d'expérience en développement web, je me spécialise dans la création d'applications web modernes et évolutives en utilisant React, TypeScript et Node.js. Je suis passionné par le code propre, l'expérience utilisateur et je reste à jour avec les dernières technologies.",
            journeyP2:
              "Je crois au pouvoir de la collaboration et de l'apprentissage continu. Quand je ne code pas, vous pouvez me trouver en train de contribuer à des projets open-source ou d'explorer de nouveaux frameworks et outils.",
            experience: 'Expérience',
            experienceValue: '2+ Ans',
            location: 'Lieu',
            locationValue: 'Quartier Azentou Ait Ourir Marrakech, Maroc',
            traits: ['Résolution de problèmes', "Leadership d'équipe", 'Développement Agile', 'Design UI/UX'],
          },
          resume: {
            title: 'CV',
            subtitle: 'Mon parcours éducatif et mon parcours professionnel en développement web',
            educationTitle: 'Éducation',
            experienceTitle: 'Expérience Professionnelle',
            download: 'Télécharger le CV complet',
            education: [
              {
                degree: 'Baccalauréat',
                period: '2017 - 2018',
                institution: 'LYCÉE ABTIH',
                location: 'Ait Ourir',
                description: 'Sciences de la Vie et de la Terre',
              },
              {
                degree: 'Diplôme',
                period: '2019 - 2020',
                institution: 'ISTA NTIC SYBA',
                location: 'Marrakech',
                description: 'Technicien Spécialisé en Développement Informatique',
              },
              {
                degree: 'Certificat',
                period: '2021 - 2022',
                institution: 'ISTA NTIC SYBA',
                location: 'Marrakech',
                description: 'Formation Qualifiante en Python',
              },
              {
                degree: 'Baccalauréat',
                period: '2021 - 2022',
                institution: 'LYCÉE ABTIH',
                location: 'Ait Ourir',
                description: 'Baccalauréat Libre en Lettres et Sciences Humaines',
              },
            ],
            experience: [
              {
                title: 'STAGIAIRE',
                period: '03/2020 - 05/2020',
                company: 'Société M.SAYSY',
                location: 'Casablanca',
                responsibilities: ["Développement et création d'une application de bureau pour la gestion des stocks"],
              },
              {
                title: 'GESTIONNAIRE DE STOCK',
                period: '05/2020 - 10/2020',
                company: 'Société M.SAYSY',
                location: 'Casablanca',
                responsibilities: ['Gérer les stocks négatifs et positifs de matières premières', 'Recevoir et émettre les commandes'],
              },
              {
                title: 'EMPLOYÉ',
                period: '10/2024 - 12/2024',
                company: 'Notaire.Maître Kamal Boutaskiouine',
                location: 'Marrakech',
                responsibilities: [
                  'Création de contrats sous Word',
                  'Sauvegarde des contrats sur le site Tawtik et organisation des dossiers',
                  'Création de listes générales de clients sous Excel',
                  'Signature des contrats avec les clients',
                ],
              },
            ],
          },
          projects: {
            title: 'Projets en vedette',
            subtitle: "Une vitrine de mes travaux récents et projets personnels qui démontrent mes compétences et ma passion pour le développement",
            viewAll: 'Voir tous les projets',
          },
          skills: {
            title: 'Compétences & Technologies',
            subtitle: 'Les outils et technologies que j’utilise pour donner vie aux idées',
          },
          contact: {
            title: 'Travaillons ensemble',
            subtitle: "Vous avez un projet en tête ? J'adorerais en entendre parler et discuter de la manière dont nous pouvons donner vie à vos idées.",
            getInTouch: 'Me contacter',
            phone: 'Téléphone',
            email: 'Email',
            address: 'Adresse',
            birthday: 'Date de naissance',
            freelance: 'Freelance',
            freelanceValue: 'Disponible',
            softSkills: 'Compétences générales',
            softSkillsValue: 'Dynamique - Sérieux - Responsable - Esprit d’équipe',
            formName: 'Nom',
            formNamePlaceholder: 'Votre nom',
            formEmail: 'Email',
            formEmailPlaceholder: 'votre.email@example.com',
            formMessage: 'Message',
            formMessagePlaceholder: 'Parlez-moi de votre projet...',
            send: 'Envoyer le message',
          },
          footer: {
            description: "Créer des expériences numériques avec passion et précision. Construisons quelque chose d'incroyable ensemble.",
            quickLinks: 'Liens rapides',
            services: 'Services',
            servicesList: ['Développement Web', 'Développement Frontend', 'Développement Backend', 'Design UI/UX', 'Conseil'],
            copyright: '© 2025 Abde Laziz Ouchouar. Fait avec',
            and: 'et',
            coffee: 'beaucoup de café.',
            builtWith: 'Construit avec React & Tailwind CSS',
          },
          header: {
            home: 'Accueil',
            about: 'À propos',
            resume: 'CV',
            projects: 'Projets',
            skills: 'Compétences',
            contact: 'Contact',
            portfolio: 'Portfolio',
          },
        },
      },
    },
  });

export default i18n;