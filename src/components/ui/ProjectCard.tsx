import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "./Icons";
import { Project } from "@/lib/type";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, imageUrl, tags, liveUrl, sourceUrl } = project;

    return (
        <div className="group overflow-hidden rounded-xl border border-gray-300 bg-white text-left shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={`${title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="mb-4 text-gray-600">{description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    {liveUrl && (
                        <Link href={liveUrl} target="_blank" className="flex items-center gap-2 font-semibold text-green-600 hover:underline">
                            <LinkIcon /> Live Demo
                        </Link>
                    )}
                    {sourceUrl && (
                        <Link href={sourceUrl} target="_blank" className="flex items-center gap-2 font-semibold text-gray-700 hover:underline">
                            <GithubIcon /> Source Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}