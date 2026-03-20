"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    number: "01",
    title: "Cloud Resource Monitoring System",
    tag: "AWS · Python · DevOps",
    badge: "Cloud",
    badgeColor: "#60A5FA",
    description:
      "Real-time EC2 CPU monitoring system using AWS CloudWatch APIs with IAM-based auth and threshold alerting. Handles publish delays and optimized metric query windows for efficient resource management.",
    tech: ["Python", "AWS EC2", "CloudWatch", "IAM"],
    github: "https://github.com/maniksood365",
    live: null,
    visual: "cloud",
  },
  {
    number: "02",
    title: "BingWatch — Movie Trailer Discovery",
    tag: "React · API Integration · UI/UX",
    badge: "Web App",
    badgeColor: "#A78BFA",
    description:
      "Highly interactive movie streaming interface with real-time exploration of 5,000+ movies, advanced filtering by genre, ratings, and popularity — with millisecond response times.",
    tech: ["React", "REST API", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/maniksood365",
    live: "https://bingwatch.vercel.app",
    visual: "web",
  },
  {
    number: "03",
    title: "Smart Attendance System",
    tag: "Python · Computer Vision · ML",
    badge: "AI/ML",
    badgeColor: "#34D399",
    description:
      "Real-time facial recognition attendance system using OpenCV. Detects, encodes, and matches faces from live webcam input, then auto-logs to structured storage with timestamp accuracy.",
    tech: ["Python", "OpenCV", "NumPy", "Face Recognition"],
    github: "https://github.com/maniksood365",
    live: null,
    visual: "ml",
  },
];

const VisualPlaceholder = ({ type }: { type: string }) => {
  if (type === "cloud") {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0A0A0A]">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #60A5FA 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative flex flex-col items-center gap-3 p-4">
          <div className="bg-[#60A5FA]/20 border border-[#60A5FA]/30 rounded-xl p-3 text-center">
            <div className="text-[#60A5FA] font-mono text-xs">EC2 Instance</div>
            <div className="text-white text-sm font-bold mt-1">CPU: 67%</div>
            <div className="w-24 h-1.5 bg-[#222] rounded mt-1.5">
              <div className="h-full w-[67%] bg-[#60A5FA] rounded" />
            </div>
          </div>
          <div className="w-px h-4 bg-[#60A5FA]/40" />
          <div className="bg-[#111] border border-[#333] rounded-lg px-3 py-2 text-xs font-mono text-[#60A5FA]">
            CloudWatch → Alert ✓
          </div>
        </div>
      </div>
    );
  }
  if (type === "web") {
    return (
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a0d3c] to-[#0A0A0A]">
        <div className="w-full max-w-[220px] rounded-lg border border-[#333] overflow-hidden mx-4">
          <div className="bg-[#1a1a2e] px-3 py-2 flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#FF5F5F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28CA41]" />
          </div>
          <div className="bg-[#111] p-3 space-y-2">
            <div className="h-2 bg-[#A78BFA]/40 rounded w-3/4" />
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-8 bg-[#1a1a2e] rounded border border-[#333]/50" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0d3c1a] to-[#0A0A0A]">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-2 border-[#34D399]/40 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-[#34D399]/60 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#34D399]/80" />
          </div>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#34D399]"
              style={{
                transform: `rotate(${deg}deg) translateX(40px)`,
              }}
            />
          ))}
        </div>
        <div className="mt-3 text-center">
          <span className="text-xs font-mono text-[#34D399]">Face Detected ✓</span>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-28 lg:py-36 px-6 lg:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="/ SELECTED PROJECTS" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4"
          >
            Things I&apos;ve built
          </motion.h2>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.005,
                borderColor: "rgba(0,194,255,0.4)",
              }}
              className="group relative bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,194,255,0.06)]"
            >
              <div className="grid md:grid-cols-[1fr,300px] min-h-[280px]">
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-black text-[#1E1E1E] leading-none select-none font-mono group-hover:text-[#222222] transition-colors">
                          {project.number}
                        </span>
                        <div>
                          <span
                            className="text-xs font-mono px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: `${project.badgeColor}15`,
                              color: project.badgeColor,
                              border: `1px solid ${project.badgeColor}30`,
                            }}
                          >
                            {project.badge}
                          </span>
                          <p className="text-[#555555] text-xs mt-1.5 font-mono">
                            {project.tag}
                          </p>
                        </div>
                      </div>
                      <span className="text-[#333333] group-hover:text-[#00C2FF] transition-colors text-xl mt-1">
                        →
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 max-w-lg">
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-[#2A2A2A] text-[#A1A1AA] font-mono hover:border-[#444] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#A1A1AA] border border-[#2A2A2A] px-4 py-2 rounded-full hover:border-[#444] hover:text-white transition-all duration-200"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#00C2FF] border border-[#00C2FF]/30 px-4 py-2 rounded-full hover:border-[#00C2FF]/60 hover:bg-[#00C2FF]/5 transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                        Live Site
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className="hidden md:block border-l border-[#1A1A1A] min-h-[280px]">
                  <VisualPlaceholder type={project.visual} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
