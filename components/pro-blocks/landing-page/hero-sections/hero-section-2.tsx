"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";
import Link from "next/link";

export function HeroSection2() {
  return (
    <section
      className="relative bg-gradient-to-br from-background via-secondary/30 to-background section-padding-y overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-padding-x container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20 lg:items-center">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-8 lg:gap-10">
            {/* Tagline */}
            <Tagline className="w-fit">Enterprise Annotation Platform</Tagline>
            
            {/* Main Heading */}
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Build Model-Ready Data with{" "}
              <span className="text-primary relative">
                Precision & Quality
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                  viewBox="0 0 400 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 150 6 200 8C250 10 350 8 398 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
              Modern multimodal annotation platform for AI model training data with
              quality workflows, AI-assisted labeling, and enterprise-grade governance
            </p>

            {/* Feature List with Enhanced Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 rounded-lg p-2 mt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Multimodal Support</p>
                  <p className="text-muted-foreground text-xs">Text, Image, Video, Audio</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 rounded-lg p-2 mt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">AI-Assisted Labeling</p>
                  <p className="text-muted-foreground text-xs">Quality workflows built-in</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 rounded-lg p-2 mt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Enterprise Governance</p>
                  <p className="text-muted-foreground text-xs">Full auditability & compliance</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <div className="bg-primary/10 rounded-lg p-2 mt-0.5">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">API-First Design</p>
                  <p className="text-muted-foreground text-xs">Seamless ML pipeline integration</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base px-8">
                <Link href="#platform">
                  Explore Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Enhanced Visual with Image */}
          <div className="w-full flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=900&fit=crop&q=80"
                  alt="Enterprise data annotation platform dashboard showing annotation workflows, quality metrics, and AI-assisted labeling interface"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-lg">
                    <p className="text-sm font-semibold text-foreground mb-1">Platform Dashboard</p>
                    <p className="text-xs text-muted-foreground">Real-time annotation workflows & quality metrics</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
