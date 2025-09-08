export interface Tech {
    name: string;
    iconUrl: string;
}

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    liveUrl?: string;
    sourceUrl?: string;
}

export interface NavLink {
    name: string;
    href: string;
}