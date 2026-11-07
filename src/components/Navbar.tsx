"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "@/context/ThemeContext";

const menuItems = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-[#f7f5f2]/85 backdrop-blur-xl dark:border-gray-800/80 dark:bg-[#111214]/85">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="#top"
          onClick={closeMobileMenu}
          aria-label="Aishwarya Gajmer, home"
          className="shrink-0"
        >
          <Image
            src="/newlogoaish.png"
            alt="Aishwarya Gajmer"
            width={152}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-primary dark:text-gray-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/Aishwarya%20resume.pdf"
            download
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Download resume
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full border border-gray-200 p-2.5 text-gray-600 transition hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="rounded-full border border-gray-200 p-2 text-gray-700 transition hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200 md:hidden"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-200/70 bg-[#f7f5f2] px-5 pb-5 pt-3 dark:border-gray-800 dark:bg-[#111214] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-primary/5 hover:text-primary dark:text-gray-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <Link
                href="/Aishwarya%20resume.pdf"
                download
                onClick={closeMobileMenu}
                className="flex-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Download resume
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="rounded-full border border-gray-200 p-2.5 text-gray-600 dark:border-gray-700 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-4 w-4" />
                ) : (
                  <MoonIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
