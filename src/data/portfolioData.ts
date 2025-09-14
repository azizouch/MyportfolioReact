import { Code, Database, Globe, Smartphone } from 'lucide-react';

export const portfolioData = {
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/ecomdashboard2.png",
      githubUrl: "https://github.com/azizouch/EcomPro.git",
      liveUrl: "#"
    },
    {
      title: "E-Notary Manager",
      description: "A web application designed for notary offices to efficiently manage clients and their contracts. The platform allows users to store client information, track contracts, schedule appointments, and generate reports. It streamlines administrative tasks, ensures data accuracy, and improves overall workflow within the notary office.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Express"],
      image: "/notaryadmin.png",
      githubUrl: "https://github.com/azizouch/GestionClientNotaire.git",
      liveUrl: "#"
    },
    {
      title: "Social Media App",
      description: "A social media platform with user profiles, post sharing, real-time messaging, and content moderation features.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "/ecomdashboard2.png",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Static Portfolio Website",
      description: "This project is my personal portfolio website, designed and developed to showcase my skills, projects, and experience as a web developer. The goal of this portfolio is to provide a professional online presence and an interactive way for potential employers, clients, or collaborators to explore my work.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "/MyPortfolio.png",
      githubUrl: "https://github.com/azizouch/MyPortfolio.git",
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
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for tracking website performance, user behavior, and conversion metrics with real-time data.",
      technologies: ["Angular", "D3.js", "Python", "Docker", "AWS"],
      image: "/ecomdashboard2.png",
      githubUrl: "#",
      liveUrl: "#"
    }
  ],
  skillCategories: [
    {
      name: "Frontend",
      icon: Globe,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      name: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      name: "Tools",
      icon: Code,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 }
      ]
    },
    {
      name: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS", level: 65 },
        { name: "Android", level: 65 }
      ]
    }
  ]
};