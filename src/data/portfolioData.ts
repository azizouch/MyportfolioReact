import { Code, Database, Globe, Server, Smartphone } from 'lucide-react';

export const portfolioData = {
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, and payment processing.",
      technologies: ["PHP Symfony", "Twig", "CSS", "JavaScript", "SCSS", "HTML"],
      image: "/ecomdashboard2.png",
      githubUrl: "https://github.com/azizouch/EcomPro.git",
      liveUrl: "#"
    },
    {
      title: "E-Notary Manager",
      description: "A web app for notary offices to manage clients and contracts, track appointments, and generate reports, streamlining administrative tasks and improving workflow.",
      technologies: ["PHP Symfony", "Twig", "CSS", "JavaScript", "HTML"],
      image: "/notaryadmin.png",
      githubUrl: "https://github.com/azizouch/GestionClientNotaire.git",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce web application built with Django. Features include user authentication, product catalog, shopping cart, and order management.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      image: "/DjangoEcomFrontend.png",
      githubUrl: "https://github.com/azizouch/EcomPro-django.git",
      liveUrl: "#"
    },
    {
      title: "React Portfolio Website",
      description: "A modern single-page portfolio application built with React to showcase my projects, skills, and experience, This portfolio demonstrates my ability to work with modern frontend frameworks and build interactive, real-world applications.",
      technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "HTML"],
      image: "/ReactPortfolio.png",
      githubUrl: "https://github.com/azizouch/MyportfolioReact.git",
      liveUrl: "#"
    },
    {
      title: "Static Portfolio Website",
      description: "A clean and responsive static portfolio built with HTML, CSS, and JavaScript to showcase my projects, skills, and experience. This portfolio highlights my ability to create interactive, visually appealing, and user-friendly web pages without relying on a backend.",
      technologies: ["PHP", "CSS", "SCSS", "HTML", "JavaScript"],
      image: "/MyPortfolio3.png",
      githubUrl: "https://github.com/azizouch/MyWebSite.git",
      liveUrl: "#"
    },
    {
      title: "Static Portfolio Website",
      description: "A clean and responsive static portfolio built with HTML, CSS, and JavaScript to showcase my projects, skills, and experience. This portfolio highlights my ability to create interactive, visually appealing, and user-friendly web pages without relying on a backend.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "/MyPortfolio.png",
      githubUrl: "https://github.com/azizouch/MyPortfolio.git",
      liveUrl: "#"
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      icon: Globe,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "PHP, PHP Symfony", level: 90 },
        { name: "Python, Django", level: 85 },
        { name: "C#", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "java", level: 85 }
      ]
    },
    {
      name: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "SQLite", level: 80 },
        { name: "Supabase", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      name: "Tools & DevOps",
      icon: Code,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "VS Code", level: 75 },
        { name: "PyCharm", level: 85 },
        { name: "PhpStorm", level: 90 }
      ]
    }
  ]
};