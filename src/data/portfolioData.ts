/**
 * =========================================================================
 * AKASH 777 — CENTRALIZED PORTFOLIO CONFIGURATION
 * =========================================================================
 * Customize personal info, social links, Discord servers, programming languages,
 * and projects directly in this file.
 */

export interface PersonalInfo {
  name: string;
  tagline: string;
  professions: string[];
  location: string;
  homeCountry: string;
  specialty: string;
  status: string;
  discordUsername: string;
  avatarUrl: string;
  bio: string;
  interests: string[];
}

export interface SocialLinks {
  whatsapp: string;
  facebook: string;
  instagram: string;
  discordUsername: string;
}

export interface DiscordServer {
  id: string;
  name: string;
  inviteUrl: string;
  description: string;
  tag: string;
  isPlaceholder?: boolean;
}

export interface ProgrammingLanguage {
  name: string;
  category: 'core' | 'web' | 'systems' | 'data' | 'mobile';
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  isPlaceholder: boolean;
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  featured?: boolean;
}

export const portfolioConfig = {
  // 1. Personal Information (No Company Name as requested)
  personal: {
    name: "AKASH 777",
    tagline: "FULL-STACK DEVELOPER | PROGRAMMER | CONTENT CREATOR",
    professions: [
      "Developer",
      "Programmer",
      "Software Developer",
      "Web Developer",
      "Content Creator",
      "Technology Enthusiast"
    ],
    location: "Saudi Arabia",
    homeCountry: "Bangladesh",
    specialty: "Full-Stack Development & Cyber Experiences",
    status: "Available for High-Impact Projects",
    discordUsername: "akash_islam.777",
    avatarUrl: "/akash_profile.jpg",
    bio: "Hello, I’m Akash 777. I’m a passionate developer and technology enthusiast who loves programming, software development, gaming, and building creative digital experiences.",
    interests: [
      "Programming",
      "Gaming",
      "Technology",
      "Software Development"
    ]
  } as PersonalInfo,

  // 2. Exact Social Media Links
  socials: {
    whatsapp: "https://wa.me/message/CQ5X4Q5J3T2YH1",
    facebook: "https://www.facebook.com/share/1HzmfjC9tz/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/akash_777_1_2?stkn=MTUxZXJmbXZ0dGp0eQ%3D%3D&utm_source=qr",
    discordUsername: "akash_islam.777"
  } as SocialLinks,

  // 3. Discord Communities
  discordServers: [
    {
      id: "server-1",
      name: "DEVELOPER ZONE",
      inviteUrl: "https://discord.gg/xqG3J7CezZ",
      description: "My Discord community for developers, gaming, applications, and technology.",
      tag: "Main Official Community",
      isPlaceholder: false
    },
    {
      id: "server-2",
      name: "MY SECOND SERVER",
      inviteUrl: "https://discord.gg/placeholder-server-2",
      description: "My second Discord community for exclusive collaborations, tech chats, and updates.",
      tag: "Secondary Community",
      isPlaceholder: true
    }
  ] as DiscordServer[],

  // 4. Programming Languages (Editable List)
  languages: [
    {
      name: "JavaScript",
      category: "web",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    {
      name: "TypeScript",
      category: "web",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6"
    },
    {
      name: "Python",
      category: "core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    {
      name: "C",
      category: "systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      color: "#A8B9CC"
    },
    {
      name: "C++",
      category: "systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C"
    },
    {
      name: "C#",
      category: "systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      color: "#239120"
    },
    {
      name: "Java",
      category: "core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#007396"
    },
    {
      name: "HTML5",
      category: "web",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      category: "web",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    {
      name: "PHP",
      category: "web",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777BB4"
    },
    {
      name: "SQL",
      category: "data",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1"
    },
    {
      name: "Go",
      category: "systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      color: "#00ADD8"
    },
    {
      name: "Rust",
      category: "systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
      color: "#DEA584"
    },
    {
      name: "Kotlin",
      category: "mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      color: "#7F52FF"
    },
    {
      name: "Swift",
      category: "mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      color: "#F05138"
    },
    {
      name: "Ruby",
      category: "core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      color: "#CC342D"
    },
    {
      name: "Dart",
      category: "mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      color: "#0175C2"
    },
    {
      name: "Lua",
      category: "core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
      color: "#000080"
    },
    {
      name: "Assembly",
      category: "systems",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
      color: "#6E4C13"
    }
  ] as ProgrammingLanguage[],

  // 5. Projects Showcase
  projects: [
    {
      id: "ai-assistant",
      title: "Personal AI Assistant",
      category: "Artificial Intelligence",
      description: "Next-generation intelligent virtual companion with natural language understanding, automated workflows, and smart task management.",
      technologies: ["Python", "Machine Learning", "FastAPI", "WebSockets"],
      isPlaceholder: true,
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "discord-bot",
      title: "Advanced Discord Bot",
      category: "Automation & Bots",
      description: "Feature-packed community bot offering moderation tools, custom mini-games, leveling system, music streaming, and role management.",
      technologies: ["JavaScript", "Node.js", "Discord.js", "MongoDB"],
      isPlaceholder: true,
      githubUrl: "https://github.com",
      demoUrl: "https://discord.gg/xqG3J7CezZ",
      image: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=800&auto=format&fit=crop&q=80",
      featured: true
    },
    {
      id: "gaming-tools",
      title: "Gaming Utility Tools",
      category: "Gaming & Desktop",
      description: "Performance booster suite, macro configurations, latency monitoring, and custom overlay utilities designed for competitive gamers.",
      technologies: ["C++", "C#", ".NET", "DirectX API"],
      isPlaceholder: true,
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
      featured: false
    },
    {
      id: "web-development",
      title: "Modern Web Experiences",
      category: "Web Applications",
      description: "Ultra-responsive, visually captivating web portals with futuristic animations, glassmorphism design, and frictionless UX.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      isPlaceholder: true,
      githubUrl: "https://github.com",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
      featured: true
    }
  ] as Project[]
};
