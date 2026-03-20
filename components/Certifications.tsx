"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const certifications = [
  {
    number: "01",
    name: "Cloud Computing",
    issuer: "NPTEL",
    year: "2024",
    description:
      "Covered designing scalable, reliable, and cost-effective cloud solutions — including architecture patterns, distributed systems, and optimization strategies.",
    color: "#60A5FA",
    tags: ["Cloud Architecture", "Scalability", "Distributed Systems"],
    logo: "☁️",
  },
  {
    number: "02",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    description:
      "Comprehensive AWS fundamentals: EC2, S3, IAM, Lambda, cloud security best practices, and cost architecture for building production-grade cloud infrastructure.",
    color: "#F97316",
    tags: ["EC2", "S3", "IAM", "Lambda", "Security"],
    logo: "󰸏",
  },
  {
    number: "03",
    name: "Internet of Things (IoT)",
    issuer: "SWAYAM NPTEL",
    year: "2024",
    description:
      "Explored IoT fundamentals, device connectivity protocols, sensor networks, and cloud-enabled IoT architectures for real-world deployments.",
    color: "#34D399",
    tags: ["IoT Protocols", "Device Networks", "Cloud IoT"],
    logo: "🔌",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="py-28 lg:py-36 px-6 lg:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="/ CERTIFICATIONS" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4"
          >
            Verified Skills
          </motion.h2>
        </motion.div>

        {/* Cert cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                borderColor: cert.color + "60",
              }}
              className="group relative p-6 rounded-2xl border border-[#222222] bg-[#111111] overflow-hidden transition-all duration-300 flex flex-col"
              style={{
                boxShadow: "none",
              }}
            >
              {/* Gradient top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }}
              />

              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: `${cert.color}08` }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  {cert.logo}
                </div>
                <span className="text-4xl font-black font-mono text-[#1A1A1A] group-hover:text-[#222] transition-colors">
                  {cert.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p
                  className="text-xs uppercase tracking-widest font-mono font-semibold mb-1"
                  style={{ color: cert.color }}
                >
                  {cert.issuer} · {cert.year}
                </p>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {cert.name}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-mono"
                      style={{
                        backgroundColor: `${cert.color}10`,
                        color: cert.color,
                        border: `1px solid ${cert.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View button */}
              <button className="flex items-center gap-2 text-xs text-[#555555] hover:text-white border border-[#222] hover:border-[#444] px-4 py-2 rounded-full transition-all duration-200 w-fit font-mono group/btn">
                <ExternalLink size={12} />
                View Certificate
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
