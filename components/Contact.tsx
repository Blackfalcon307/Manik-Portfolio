"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C2FF]/3 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="/ CONTACT" center />
          </motion.div>

          {/* Big heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(3rem,10vw,7rem)] font-black leading-tight mt-6 mb-6 tracking-tight"
          >
            Let&apos;s work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#0080FF]">
              together.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#A1A1AA] text-lg mb-4 max-w-xl mx-auto leading-relaxed"
          >
            Open to internships, freelance data projects, and collaborations.
          </motion.p>

          {/* Availability badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-[#A1A1AA] border border-[#2A2A2A] bg-[#111111] px-4 py-1.5 rounded-full">
              Available for Summer Internship 2025
            </span>
          </motion.div>

          {/* Primary email CTA */}
          <motion.div variants={fadeUp} className="mb-8">
            <a
              href="mailto:maniksood365@gmail.com"
              id="contact-email-cta"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group inline-flex items-center gap-3 bg-[#111111] border border-[#222222] hover:border-[#00C2FF]/50 hover:bg-[#00C2FF]/5 px-8 py-5 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,194,255,0.15)]"
            >
              <Mail size={22} className="text-[#00C2FF]" />
              maniksood365@gmail.com
              <ArrowUpRight
                size={18}
                className={`text-[#00C2FF] transition-transform duration-300 ${hovered ? "translate-x-1 -translate-y-1" : ""}`}
              />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/manik-sood-702b31249/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              className="flex items-center gap-2 text-sm text-[#A1A1AA] border border-[#2A2A2A] px-5 py-2.5 rounded-full hover:border-[#444] hover:text-white transition-all duration-200"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Blackfalcon307"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
              className="flex items-center gap-2 text-sm text-[#A1A1AA] border border-[#2A2A2A] px-5 py-2.5 rounded-full hover:border-[#444] hover:text-white transition-all duration-200"
            >
              <Github size={15} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
