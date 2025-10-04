"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export function Hero() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-900"
        >
            <div className="z-20 flex max-w-5xl flex-col items-center gap-12 p-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="group relative"
                >
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-75 blur-md transition duration-500 group-hover:opacity-100 animate-pulse group-hover:animate-none"></div>
                    <Image
                        src="/Foto Latar Putih.jpg"
                        alt="Aldito's Profile Picture"
                        width={192}
                        height={192}
                        className="relative h-40 w-40 rounded-full object-cover shadow-2xl md:h-48 md:w-48"
                        priority
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                        Aldito Sitompul
                    </h1>
                    <TypeAnimation
                        sequence={[
                            "Full-Stack Developer",
                            2000
                        ]}
                        wrapper="h2"
                        speed={50}
                        className="text-2xl font-semibold text-cyan-400 md:text-3xl"
                        repeat={Infinity}
                    />
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                        I build efficient and innovative web solutions, passionate about creating apps that solve problems and enhance user experience.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-4 flex flex-col gap-4 sm:flex-row"
                >
                    <Link
                        href="mailto:alditositompul198@gmail.com"
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <FiMail /> Contact Me
                    </Link>
                    <a
                        href="/AlditoSitompul_CV.pdf"
                        download
                        className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white shadow-lg ring-1 ring-slate-700 transition-all duration-300 hover:scale-105 hover:bg-slate-700"
                    >
                        <FiDownload /> Download CV
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-8 flex gap-6"
                >
                    <a
                        href="https://github.com/Aldito8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition-colors hover:text-cyan-400"
                    >
                        <FiGithub size={28} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aldito-dwi-putra-sitompul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition-colors hover:text-cyan-400"
                    >
                        <FiLinkedin size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
