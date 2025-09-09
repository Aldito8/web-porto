import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/lib/data";

export function Projects() {
    return (
        <section id="projects" className="py-20 text-center bg-slate-900">
            <div className="container mx-auto max-w-7xl px-6 lg:px-0">
                <h2 className="mb-16 text-4xl font-bold text-gray-200">Projects</h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}