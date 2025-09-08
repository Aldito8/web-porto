import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-lg">
            <nav className="container mx-auto flex max-w-7xl items-center justify-between py-5 px-6 lg:px-0">
                <div className="text-2xl font-bold">
                    <Link href="#home">&lt;ADPS/&gt;</Link>
                </div>
                <ul className="hidden space-x-6 font-semibold md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href} className="transition hover:text-green-400">
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}