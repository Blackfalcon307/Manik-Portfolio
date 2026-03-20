"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { GraduationCap, BookOpen, BookMarked } from "lucide-react";
import StatCard from "./ui/StatCard";
import SectionLabel from "./ui/SectionLabel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const education = [
  {
    icon: GraduationCap,
    degree: "B.E. Computer Science & Engineering",
    school: "Chandigarh University",
    period: "2022 – 2026",
    grade: "CGPA: 6.93",
    color: "#00C2FF",
  },
  {
    icon: BookOpen,
    degree: "Intermediate (12th Grade)",
    school: "Bharti Vidyapeeth Public School",
    period: "2020 – 2022",
    grade: "68.8%",
    color: "#818CF8",
  },
  {
    icon: BookMarked,
    degree: "Matriculation (10th Grade)",
    school: "Mount Carmel School",
    period: "2018 – 2020",
    grade: "70.3%",
    color: "#34D399",
  },
];

const stats = [
  { value: 3, suffix: "+", label: "Cloud Projects" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 2026, suffix: "", label: "Graduating" },
  { value: "AWS", suffix: "", label: "Certified", isString: true },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel label="/ ABOUT ME" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-6 mb-8"
            >
              I speak Python,
              <br />
              <span className="text-[#A1A1AA]">think in data,</span>
              <br />
              build on the cloud.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#A1A1AA] text-lg leading-relaxed mb-4"
            >
              I&apos;m a B.E. CSE student at Chandigarh University with a
              passion for turning raw, messy data into clean, actionable
              insights. Whether it&apos;s spinning up AWS infrastructure or
              building ML pipelines, I love solving problems at the intersection
              of data and cloud.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#A1A1AA] text-lg leading-relaxed mb-12"
            >
              With hands-on experience in Python, AWS services, and computer
              vision, I build systems that are not just functional—but scalable,
              efficient, and ready for the real world.
            </motion.p>

            {/* Education Timeline */}
            <motion.div variants={stagger} className="space-y-5">
              {education.map((edu, i) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-4 p-4 rounded-xl border border-[#222222] hover:border-[#333333] transition-colors bg-[#111111]/50"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${edu.color}15` }}
                    >
                      <Icon size={18} style={{ color: edu.color }} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {edu.degree}
                      </p>
                      <p className="text-[#A1A1AA] text-xs mt-0.5">
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-[#555555] font-mono">
                          {edu.period}
                        </span>
                        <span
                          className="text-xs font-mono font-semibold"
                          style={{ color: edu.color }}
                        >
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4 lg:sticky lg:top-24"
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isString={stat.isString}
                  isInView={isInView}
                />
              </motion.div>
            ))}

            {/* Extra visual card */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 p-6 rounded-2xl border border-[#222222] bg-[#111111] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/5 rounded-full blur-2xl" />
              <p className="text-xs text-[#555555] uppercase tracking-widest font-mono mb-3">
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS Architecture",
                  "Data Analytics",
                  "ML / Computer Vision",
                  "Python",
                  "Cloud Security",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-[#00C2FF]/30 text-[#00C2FF] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[#A1A1AA] text-sm mt-4 leading-relaxed">
                Building cloud-native solutions and data pipelines while
                pursuing my B.E. at Chandigarh University.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
