import { NavLink, Project, Tech } from "./type";


export const navLinks: NavLink[] = [
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const techData: Tech[] = [
    { name: "React", iconUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js", iconUrl: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Tailwind CSS", iconUrl: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "TypeScript", iconUrl: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "PostgreSQL", iconUrl: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "Prisma", iconUrl: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
    { name: "JavaScript", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" },
    { name: "Express.js", iconUrl: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "Node.js", iconUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
];

export const projectsData: Project[] = [
    {
        title: "Circle App",
        description: "A social media application designed to connect you with the world. Post your daily status, interact with content, and follow other users.",
        imageUrl: "/circle.png",
        tags: ["TypeScript", "Express.js", "React", "PostgreSQL"],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "DoRa",
        description: "An intuitive to-do list application that helps users create, manage, and track daily tasks, work, or personal activities with ease.",
        imageUrl: "/dora.png",
        tags: ["TypeScript", "Express.js", "React", "Prisma"],
        liveUrl: "#",
        sourceUrl: "#",
    },
];