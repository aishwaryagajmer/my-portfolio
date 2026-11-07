"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBehance,
  FaDraftingCompass,
  FaGithub,
  FaLayerGroup,
  FaPalette,
  FaPlayCircle,
  FaSearch,
  FaLinkedin,
} from "react-icons/fa";
import { RiCss3Fill, RiHtml5Fill } from "react-icons/ri";
import { SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/aishwaryagajmer", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/basant-bhatt-3058a7292/",
    icon: FaLinkedin,
  },
  { label: "Behance", href: "https://www.behance.net/aishwaryagajmer", icon: FaBehance },
];

const skills = [
  { name: "Figma", icon: SiFigma },
  { name: "Wireframing", icon: FaDraftingCompass },
  { name: "Prototyping", icon: FaPlayCircle },
  { name: "Auto Layout", icon: FaLayerGroup },
  { name: "UI Design", icon: FaPalette },
  { name: "UX Research", icon: FaSearch },
  { name: "HTML", icon: RiHtml5Fill },
  { name: "CSS", icon: RiCss3Fill },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-7xl scroll-my-5 px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20"
    >
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm dark:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to creative opportunities
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Aishwarya Gajmer</span>
          </h1>
          <p className="mt-4 text-2xl font-medium text-gray-700 dark:text-gray-200 sm:text-3xl">
            UI/UX Designer
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 lg:mx-0">
            I&apos;m a passionate UI/UX Designer who enjoys creating modern,
            intuitive, and visually engaging digital experiences. I focus on
            designing user-friendly web and mobile interfaces that combine
            creativity, functionality, and usability. With a keen eye for detail
            and a love for thoughtful design, I aim to transform ideas into
            meaningful and seamless digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Explore my work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-white/5 dark:text-gray-100"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-gray-200 bg-white/70 p-3 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-white/5 dark:text-gray-200"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
            <span className="ml-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
              Find me online
            </span>
          </div>

          <div className="mt-10 rounded-[2rem] border border-gray-700/70 bg-[#0d1117] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">
              Tools &amp; Skills I work with
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {skills.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#151b22] px-4 py-2.5 text-sm font-medium text-gray-100 shadow-sm"
                >
                  <Icon className="text-base text-[#ff4d7d]" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-amber-200/50 to-transparent blur-2xl dark:from-primary/20 dark:via-amber-800/20" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-2xl shadow-gray-900/10 dark:border-gray-700 dark:bg-gray-900">
            <Image
              src="/aish.png"
              alt="Aishwarya Gajmer"
              width={640}
              height={720}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              priority
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/85 p-4 shadow-lg backdrop-blur-md dark:border-gray-700/70 dark:bg-gray-950/80">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Thoughtful design, made useful.
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                Bringing ideas to life, one interface at a time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
