"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
  return (
    <footer
      className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 section-padding-y border-t border-slate-800 overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage" className="group">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <Logo className="[&_span]:text-white" />
            </div>
          </Link>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#why-flexibench"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Why Flexibench
            </Link>
            <Link
              href="/platform"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Platform
            </Link>
            <Link
              href="/capabilities"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Capabilities
            </Link>
            <Link
              href="/internal-tools"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Internal Tools
            </Link>
            <Link
              href="/use-cases"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Use Cases
            </Link>
            <Link
              href="#quality-governance"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Quality & Governance
            </Link>
            <Link
              href="/resources"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator className="bg-slate-800" role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-8 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-slate-400 text-center lg:text-left">
            © {new Date().getFullYear()} Flexibench. All rights reserved.
          </p>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            <Link
              href="#"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
