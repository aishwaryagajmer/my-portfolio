"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/80 bg-white/60 dark:border-gray-800 dark:bg-gray-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-12">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="#top" aria-label="Back to top">
            <Image
              src="/newlogoaish.png"
              alt="Aishwarya Gajmer"
              width={138}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()} Aishwarya Gajmer. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { label: "GitHub", href: "https://github.com/aishwaryagajmer", icon: FaGithub },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/basant-bhatt-3058a7292/",
              icon: FaLinkedin,
            },
            { label: "Behance", href: "https://www.behance.net/aishwaryagajmer", icon: FaBehance },
          ].map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-gray-200 p-2.5 text-gray-600 transition hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-300"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
