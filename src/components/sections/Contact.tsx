"use client";

import { motion } from "framer-motion";

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export function Contact() {
    return (
        <section id="contact" className="w-full py-24 bg-slate-900 text-white">
            <div className="container mx-auto max-w-4xl px-6 text-center lg:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
                        Let&apos;s build something great together!
                    </h2>
                    <p className="mb-8 max-w-xl mx-auto text-lg leading-relaxed text-slate-300">
                        Feel free to reach out if you&apos;re looking for a developer, have a
                        question, or just want to connect.
                    </p>
                    <a
                        href="mailto:alditositompul198@gmail.com"
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <MailIcon />
                        alditositompul198@gmail.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
