"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="mx-auto max-w-7xl scroll-my-5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-3 text-center text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
      >
        Selected <span className="text-primary">work</span>
      </motion.h2>
      <p className="mx-auto mb-12 max-w-xl text-center leading-7 text-gray-600 dark:text-gray-400">
        A selection of digital experiences shaped by thoughtful design and a
        love for the details.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 gap-7 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            whileHover={{ scale: 1.015 }}
            key={project.title}
            className={`group overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white shadow-lg shadow-gray-900/5 transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 ${
              project.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
            }`}
          >
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} project`}
              className={`relative block overflow-hidden ${
                project.featured
                  ? "min-h-[360px] bg-gradient-to-br from-amber-100 via-yellow-200 to-orange-100 dark:from-amber-950 dark:via-yellow-900 dark:to-orange-950 md:col-start-2 md:row-start-1 md:min-h-[440px]"
                  : "aspect-video"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`transition-transform duration-500 ${
                  project.featured
                    ? "object-contain p-6 sm:p-10"
                    : "object-cover group-hover:scale-105"
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>

            <div
              className={`${
                project.featured
                  ? "flex flex-col justify-center gap-5 p-7 sm:p-9 lg:p-12 md:col-start-1 md:row-start-1"
                  : "p-6"
              }`}
            >
              {project.featured && (
                <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Featured project
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </Link>
                )}

                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {project.demoLinkLabel ?? "Live Demo"}
                  </span>
                </Link>

                {project.caseStudyLink && (
                  <Link
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-primary dark:text-gray-300"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span className="text-sm font-medium">View Case Study</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
