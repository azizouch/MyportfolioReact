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
      title: "Task Management App",
      description: "A web application designed for notary offices to efficiently manage clients and their contracts. The platform allows users to store client information, track contracts, schedule appointments, and generate reports. It streamlines administrative tasks, ensures data accuracy, and improves overall workflow within the notary office.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Express"],
      image: "/notaryadmin.png",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design for all devices.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS Grid"],
      image: "/ecomdashboard2.png",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A custom portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      image: "/ecomdashboard2.png",
      githubUrl: "#",
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