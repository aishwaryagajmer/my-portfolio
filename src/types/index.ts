export interface Project {
    title: string,
    description: string;
    tag?: string;
    role?: string;
    technologies?: string[];
    githubLink?: string;
    demoLink: string;
    demoLinkLabel?: string;
    caseStudyLink?: string;
    image: string;
    featured?: boolean;
}

export interface Blog {
        title: string,
        excerpt: string,
        date: string,
        readTime: string,
        slug: string,
}