export const personalInfo = {
  name: "Guddy Thakur",
  role: "Full Stack Developer",
  bio: "Passionate full stack developer with 5+ years of experience in building modern web applications. I love turning complex problems into simple, beautiful and intuitive solutions.",
  location: "Noida,Sec-115,Uttar Pradesh, India,",
  email: "Guddy0004@gmail.com",
  phone: "+91 9310459187",
  socialLinks: {
    github: "https://github.com/guddy2005",
    linkedin: "https://linkedin.com/in/guddy-thakur-6598024b",

  }
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Includes user authentication, product management, cart functionality, and payment processing.",
    image: "https://i.imgur.com/1234567.jpg",
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features. Built with React, Firebase, and Material-UI.",
    image: "https://i.imgur.com/2345678.jpg",
    demoUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/johndoe/taskmanager",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    featured: true
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using machine learning models.",
    image: "https://i.imgur.com/3456789.jpg",
    demoUrl: "https://ai-image-gen.com",
    githubUrl: "https://github.com/johndoe/ai-image-gen",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    featured: true
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics with real-time data visualization and reporting features.",
    image: "https://i.imgur.com/4567890.jpg",
    demoUrl: "https://social-dashboard.com",
    githubUrl: "https://github.com/johndoe/social-dashboard",
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    featured: false
  }
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React/Next.js", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 }
    ]
  }
];

export const experience = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Leading development of enterprise-scale applications, mentoring junior developers, and implementing best practices for code quality and testing.",
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Led team of 5 developers in successful delivery of major project",
      "Implemented automated CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Boston, MA",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using modern web technologies and cloud infrastructure.",
    achievements: [
      "Built scalable microservices architecture serving 1M+ users",
      "Improved database query performance by 50%",
      "Implemented real-time features using WebSocket"
    ]
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Web Agency",
    location: "New York, NY",
    period: "2018 - 2019",
    description: "Specialized in creating responsive and interactive user interfaces for various client websites.",
    achievements: [
      "Developed mobile-first responsive designs",
      "Increased client satisfaction score by 35%",
      "Reduced bug reports by 40% through unit testing"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechStart",
    content: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    image: "https://i.imgur.com/random1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Innovation Labs",
    content: "Working with John was a great experience. He not only delivers technical excellence but also brings valuable insights to product development.",
    image: "https://i.imgur.com/random2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CEO at DesignPro",
    content: "John's ability to transform complex requirements into elegant solutions is remarkable. He's a valuable asset to any development team.",
    image: "https://i.imgur.com/random3.jpg"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    summary: "Learn how to leverage Next.js features to build performant and scalable web applications.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://i.imgur.com/blog1.jpg"
  },
  {
    id: 2,
    title: "Modern State Management in React Applications",
    summary: "Exploring different state management solutions in React and when to use them.",
    date: "2024-03-01",
    readTime: "10 min read",
    category: "React",
    image: "https://i.imgur.com/blog2.jpg"
  },
  {
    id: 3,
    title: "Optimizing Database Performance in Node.js",
    summary: "Best practices and techniques for optimizing database queries in Node.js applications.",
    date: "2024-02-15",
    readTime: "12 min read",
    category: "Backend",
    image: "https://i.imgur.com/blog3.jpg"
  }
];
