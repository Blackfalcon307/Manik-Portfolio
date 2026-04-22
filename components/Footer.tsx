import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A1A] py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-[#555555] text-sm font-mono">© {year} Manik Sood</p>

        {/* Center */}
        <p className="text-[#444444] text-xs font-mono">
          Built with Next.js & deployed on Vercel
        </p>

        {/* Right - Social icons */}
        <div className="flex items-center gap-3">
          {[
            {
              icon: Github,
              href: "https://github.com/Blackfalcon307",
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
              className="w-8 h-8 flex items-center justify-center border border-[#1F1F1F] rounded-full text-[#555555] hover:text-[#00C2FF] hover:border-[#333] transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
