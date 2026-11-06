"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [sendingMessage, setSendingMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendingMessage("Sending...");
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "12b115f5-23a9-4ec0-93e9-30a08de5ef89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSendingMessage("");
      setIsSuccess(true);
      setResult("Message sent successfully!");
      form.reset();
    } else {
      setSendingMessage("");
      setIsSuccess(false);
      setResult("Something went wrong. Try again.");
    }
  };

  useEffect(() => {
    if (!result) return;

    const timer = setTimeout(() => {
      setResult("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [result]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="mx-auto max-w-7xl scroll-my-5 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-3 text-center text-3xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
      >
        Let&apos;s create something <span className="text-primary">great</span>
      </motion.h2>
      <p className="mx-auto mb-12 max-w-xl text-center leading-7 text-gray-600 dark:text-gray-400">
        Have a project in mind or just want to say hello? I&apos;d love to hear
        from you.
      </p>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* LEFT SIDE CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h2 className="mb-3 text-2xl font-semibold">Get in touch</h2>
            <p className="leading-7 text-gray-600 dark:text-gray-400">
              Tell me a little about what you&apos;re working on, and I&apos;ll
              get back to you as soon as I can.
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
            <span className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaEnvelope className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold">Email</h3>
              <Link
                href="mailto:gajmeraishwarya@gmail.com"
                className="break-all text-gray-600 transition hover:text-primary dark:text-gray-300"
              >
                gajmeraishwarya@gmail.com
              </Link>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
            <span className="rounded-xl bg-primary/10 p-3 text-primary">
              <FaPhone className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <Link
                href="tel:+9779803649303"
                className="text-gray-600 transition hover:text-primary dark:text-gray-300"
              >
                9803649303
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="rounded-[1.75rem] border border-gray-200/80 bg-white p-6 shadow-xl shadow-gray-900/5 dark:border-gray-700 dark:bg-gray-900 sm:p-8"
        >
          <form onSubmit={onSubmit} className="space-y-3.5">
            {/* NAME */}
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                required
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                required
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <motion.textarea
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                required
                id="contact-message"
                rows={4}
                name="message"
                placeholder="Enter your message"
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              ></motion.textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              type="submit"
              disabled={Boolean(sendingMessage)}
              className="w-full rounded-full bg-primary py-3 font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70"
            >
              {sendingMessage || "Send message"}
            </motion.button>

            {/* RESULT */}
            {isSuccess ? (
              <p
                aria-live="polite"
                className="mt-2 text-center text-sm text-green-600"
              >
                {result}
              </p>
            ) : (
              <p
                aria-live="polite"
                className="mt-2 text-center text-sm text-red-500"
              >
                {result || sendingMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
