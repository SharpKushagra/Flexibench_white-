"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { platformModules } from "@/lib/flexibench-content";
import { Network, Sparkles, Shield, Plug } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, typeof Network> = {
  Network,
  Sparkles,
  Shield,
  Plug,
};

export function PlatformOverviewSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-indigo-950/40 section-padding-y border-b overflow-hidden"
      aria-labelledby="platform-heading"
      id="platform"
    >
      {/* Unique Background Pattern - Tech/Network Theme */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(45deg, transparent 30%, currentColor 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, currentColor 50%, transparent 70%)`,
        backgroundSize: '60px 60px'
      }} />
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container-padding-x container mx-auto relative z-10">
        {/* Section Header - Centered */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6 mb-16">
          <Tagline>Feature Modules</Tagline>
          <h2 id="platform-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Built for{" "}
            <span className="relative inline-block text-primary">
              Enterprise Scale
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 300 12" fill="none">
                <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Four core modules that work together to deliver model-ready data with quality, consistency, and governance.
          </p>
        </div>

        {/* Enhanced Grid Layout - Tech-Focused Design with Numbered Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting Line Decoration */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
          
          {platformModules.map((module, index) => {
            const IconComponent = iconMap[module.icon] || Network;
            const moduleImages = [
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80", // Ontology
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80", // AI-Assisted
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80", // Workflow
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80", // APIs
            ];
            
            return (
              <div
                key={module.id}
                className="group relative bg-background/95 backdrop-blur-sm rounded-3xl border border-white/10 p-0 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/40 overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-xl border-4 border-background">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Large Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={moduleImages[index] || moduleImages[0]}
                    alt={module.title}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-background/95 backdrop-blur-md rounded-2xl p-4 border-2 border-primary/30 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  {/* Module Number in Image */}
                  <div className="absolute bottom-6 left-6">
                    <div className="text-white/20 font-black text-6xl leading-none">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                </div>
                
                <div className="relative flex flex-col gap-5 p-8 bg-background/95">
                  {/* Icon Container - Smaller, secondary */}
                  <div className="bg-gradient-to-br from-primary/15 to-primary/5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors">
                    <IconComponent className="text-primary h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {module.whyItMatters}
                    </p>
                  </div>
                  
                  {/* Key Capabilities - Enhanced Design */}
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Key Features</span>
                    <div className="flex flex-wrap gap-2">
                      {module.keyCapabilities.slice(0, 2).map((capability, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-foreground/80 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors"
                        >
                          {capability.split(":")[0]}
                        </span>
                      ))}
                      {module.keyCapabilities.length > 2 && (
                        <span className="text-xs font-medium text-muted-foreground px-3 py-1.5">
                          +{module.keyCapabilities.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Outcome - Highlighted */}
                  <div className="pt-4 mt-auto border-t-2 border-primary/20 bg-primary/5 rounded-xl p-4 -mx-4 -mb-4">
                    <p className="text-xs font-semibold text-foreground leading-relaxed">{module.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Large Visual Element Below All Modules */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl border-2 border-border/50 overflow-hidden shadow-2xl group">
            <div className="aspect-[16/9] relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop&q=90"
                alt="Enterprise platform architecture showing integrated modules, workflows, and data pipelines"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-background/95 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/30 to-primary/10 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/30">
                      <Network className="h-9 w-9 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">Unified Platform Architecture</h3>
                      <p className="text-sm text-muted-foreground">All modules integrated seamlessly for enterprise-scale annotation workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
