
import { techData } from "@/lib/data";
import TechnologySlider from "../TechnologySlider";

export function TechStack() {
    const sliderItems = techData.map(tech => ({
        nametech: tech.name,
        icon: tech.iconUrl,
    }));

    return (
        <section id="tech-stack" className="py-20 text-center">
            <h2 className="mb-20 text-3xl font-bold">Tech Stack</h2>
            <div className="relative mx-auto max-w-7xl">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
                <TechnologySlider items={sliderItems} />
            </div>
        </section>
    );
}