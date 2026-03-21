"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, Eye } from "lucide-react";
import Image from "next/image";

const roles = [
  "Data Analyst",
  "Cloud Engineer",
  "Python Developer",
  "AWS Specialist",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  // Typewriter effect using refs to avoid cascading setState inside effects
  const tick = useCallback(() => {
    const role = roles[roleIndex.current];
    if (!isDeleting.current) {
      if (charIndex.current < role.length) {
        charIndex.current += 1;
        setDisplayText(role.slice(0, charIndex.current));
      } else {
        // Pause then start deleting
        setTimeout(() => {
          isDeleting.current = true;
        }, 2000);
        return 2100; // delay next tick
      }
    } else {
      if (charIndex.current > 0) {
        charIndex.current -= 1;
        setDisplayText(role.slice(0, charIndex.current));
      } else {
        isDeleting.current = false;
        roleIndex.current = (roleIndex.current + 1) % roles.length;
      }
    }
    return isDeleting.current ? 45 : 80;
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const loop = () => {
      const delay = tick();
      timeoutId = setTimeout(loop, delay ?? 80);
    };
    timeoutId = setTimeout(loop, 800);
    return () => clearTimeout(timeoutId);
  }, [tick]);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden grid-bg"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C2FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00C2FF]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Two-column layout on large screens */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Left: Text content ─────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#A1A1AA] text-sm uppercase tracking-[0.3em] mb-4 font-mono"
            >
              Hey, I&apos;m
            </motion.p>

            {/* Main name */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3rem,10vw,7rem)] font-black leading-none tracking-tight text-white mb-4"
            >
              MANIK
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#A1A1AA]">
                SOOD
              </span>
            </motion.h1>

            {/* Typewriter subheadline */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center lg:justify-start gap-1 mb-6 h-10"
            >
              <span className="text-[#00C2FF] text-xl md:text-2xl font-semibold font-mono">
                {displayText}
              </span>
              <span className="typewriter-cursor text-[#00C2FF] text-xl md:text-2xl font-light">
                |
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#A1A1AA] text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              B.E. CSE student at Chandigarh University. I turn raw data into
              decisions and build scalable cloud systems on AWS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={() => handleScroll("#projects")}
                id="hero-cta-view-work"
                className="group flex items-center gap-2 bg-[#00C2FF] hover:bg-[#00A8DC] text-[#0A0A0A] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,194,255,0.35)] hover:scale-[1.02] text-sm"
              >
                <Eye size={16} />
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download
                id="hero-cta-resume"
                className="group flex items-center gap-2 border border-[#333333] hover:border-[#00C2FF] text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#00C2FF]/5 text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/maniksood365",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/manik-sood-702b31249/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:maniksood365@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-[#222222] rounded-full text-[#A1A1AA] hover:text-[#00C2FF] hover:border-[#00C2FF]/50 hover:bg-[#00C2FF]/5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Portrait image ────────────────── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#00C2FF]/10 blur-2xl scale-110 pointer-events-none" />

            {/* Rotating dashed border */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00C2FF]/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-[#222222]" />

              {/* Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-[#00C2FF]/30">
                <Image
                  src="/images/portfolio.png"
                  alt="Manik Sood"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#111111] border border-[#222222] rounded-full px-3 py-1.5 whitespace-nowrap shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs text-[#A1A1AA]">Open to Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#A1A1AA] hover:text-[#00C2FF] transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="bounce-down" />
      </motion.button>
    </section>
  );
}
