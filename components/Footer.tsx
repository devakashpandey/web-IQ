import Link from "next/link";
import { Sparkles, MessageSquare } from "lucide-react";

const TwitterIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Footer() {
  const footerGroups = [
    {
      title: "Product",
      links: [
        { name: "AI Builder", href: "#" },
        { name: "Visual Editor", href: "#" },
        { name: "Self-healing Code", href: "#" },
        { name: "One-Click Deploy", href: "#" },
        { name: "Templates", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Community Discussions", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Brand Kit", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0c] px-6 pt-16 pb-12 md:px-12 md:pt-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] rounded-full bg-accent-blue/5 glow-blur pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 lg:gap-12 pb-16 border-b border-white/5">
          {/* Logo & Pitch */}
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 shadow-[0_0_15px_rgba(0,153,255,0.15)] group-hover:border-accent-blue/30 transition-colors duration-300">
                <Sparkles className="h-4.5 w-4.5 text-accent-blue animate-pulse" />
              </div>
              <span className="font-geist text-2xl font-black tracking-[-0.04em] text-white">
                web<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-accent-blue">IQ</span>
              </span>
            </Link>
            <p className="max-w-[280px] font-sans text-[13.5px] font-medium leading-relaxed text-zinc-400 tracking-[-0.01em]">
              The agentic canvas that codes and deploys premium React applications from simple prompts.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-accent-blue/30 hover:shadow-[0_0_15px_rgba(0,153,255,0.2)]">
                <TwitterIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-accent-blue/30 hover:shadow-[0_0_15px_rgba(0,153,255,0.2)]">
                <GithubIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-accent-blue/30 hover:shadow-[0_0_15px_rgba(0,153,255,0.2)]">
                <LinkedinIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] text-zinc-400 border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-accent-blue/30 hover:shadow-[0_0_15px_rgba(0,153,255,0.2)]">
                <MessageSquare className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="font-sans text-[11px] font-black uppercase tracking-[0.12em] text-white">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-sans text-[13.5px] font-bold text-zinc-400 transition-all duration-200 hover:text-white hover:translate-x-0.5 inline-block tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-6 pt-2 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] font-semibold text-zinc-400 tracking-tight">
            © {new Date().getFullYear()} webIQ Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="#"
              className="font-sans text-[12px] font-bold text-zinc-400 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="font-sans text-[12px] font-bold text-zinc-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-[12px] font-bold text-zinc-400 transition-colors hover:text-white"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
