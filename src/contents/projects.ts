import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'Food',
        description: 'A prototype for a food delivery app or web.',
        demoLink: 'https://www.figma.com/design/GBaIOseelPEUgCJ3XVVUt7/Patient-food?node-id=0-1&t=Qm4sLATVrQhDwFsN-1',
        demoLinkLabel: 'View Figma Prototype',
        image: '/projects/food.png',
      },
      {
        title: 'Note App',
        description: 'A full-stack note app built with React.js, Express js, Node js, MongoDB, Tailwind CSS.',
        technologies: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB'],
        githubLink: 'https://github.com/aishwaryagajmer',
        demoLink: 'https://note-app-frontend-lac.vercel.app/',
        image: '/projects/note-app.png',
      },
      {
        title: 'LMS System',
        description: 'A full-stack note app built with React.js, Express js, Node js, MongoDB, Tailwind CSS.',
        technologies: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB',"SadCNUI","RTK Query"],
        githubLink: 'https://github.com/aishwaryagajmer',
        demoLink: 'https://lms-system-frontend-orcin.vercel.app/',
        image: '/projects/lms-system.png',
      }
  
  ];