import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

const socialLinks = [
    {
        name: "Github",
        href: "https://github.com/your-username",
        icon: <GithubIcon />,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/your-username",
        icon: <LinkedinIcon />,
    },
];

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-800 py-8 text-center text-sm text-gray-600 bg-slate-900">
            <p className="mb-4 text-white">
                © {new Date().getFullYear()} Coded with ❤️ by Aldito Sitompul
            </p>
            <div className="flex items-center justify-center gap-5">
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        aria-label={link.name}
                        target="_blank"
                        className="text-gray-400 transition-colors duration-300 hover:text-gray-800"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </footer>
    );
}