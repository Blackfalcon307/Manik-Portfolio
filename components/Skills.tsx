"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const skillCategories = [
  {
    label: "Languages",
    color: "#00C2FF",
    skills: ["Python", "Java", "SQL"],
  },
  {
    label: "Libraries & Frameworks",
    color: "#A78BFA",
    skills: ["NumPy", "Pandas", "OpenCV"],
  },
  {
    label: "Cloud & AWS Services",
    color: "#60A5FA",
    skills: ["EC2", "CloudWatch", "S3", "IAM", "Lambda", "Bedrock"],
  },
  {
    label: "Databases & Tools",
    color: "#F59E0B",
    skills: ["MySQL", "Excel", "Git", "VS Code"],
  },
  {
    label: "Concepts",
    color: "#34D399",
    skills: [
      "Data Analysis",
      "Data Cleaning",
      "Visualization",
      "Statistical Modeling",
      "Computer Vision",
    ],
  },
];

const softSkills = [
  "Team Leadership",
  "Flexibility",
  "Team Management",
  "Decision Making",
  "Problem Solving",
];

const interests = [
  { emoji: "🎵", label: "Music" },
  { emoji: "🚲", label: "Cycling" },
  { emoji: "♟", label: "Chess" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-28 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="/ TECHNICAL SKILLS" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black mt-4"
          >
            My Stack
          </motion.h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[#222222] bg-[#111111] hover:border-[#333333] transition-colors"
            >
              <p
                className="text-xs uppercase tracking-widest font-mono font-semibold mb-4"
                style={{ color: cat.color }}
              >
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full border text-white font-mono transition-all duration-200 hover:scale-105 cursor-default"
                    style={{
                      borderColor: `${cat.color}30`,
                      backgroundColor: `${cat.color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#1A1A1A] mb-16" />

        {/* Soft skills */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-[#555555] font-mono mb-6"
          >
            Interpersonal Skills
          </motion.p>
          <motion.div variants={stagger} className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="text-sm px-5 py-2.5 rounded-full border border-[#2A2A2A] text-[#A1A1AA] hover:border-[#444] hover:text-white transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Interests */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-[#555555] font-mono mb-6"
          >
            Outside of Code
          </motion.p>
          <motion.div variants={stagger} className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#222222] bg-[#111111] text-sm text-[#A1A1AA] hover:border-[#333] hover:text-white transition-all cursor-default"
              >
                <span className="text-base">{item.emoji}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
