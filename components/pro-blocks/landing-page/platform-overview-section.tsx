"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { platformModules } from "@/lib/flexibench-content";
import { Network, Sparkles, Shield, Plug } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const iconMap: Record<string, typeof Network> = {
  Network,
  Sparkles,
  Shield,
  Plug,
};

export function PlatformOverviewSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative bg-background section-padding-y border-b overflow-hidden"
      aria-labelledby="platform-heading"
      id="platform"
    >
      {/* Very Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]" style={{
        backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div ref={sectionRef} className="container-padding-x container mx-auto relative z-10">
        {/* Section Header - Centered */}
        <div className={`mx-auto flex max-w-3xl flex-col items-center text-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 animate-slide-in-subtle' : 'opacity-0'}`}>
          <Tagline>Feature Modules</Tagline>
          <h2 id="platform-heading" className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">
            Built for{" "}
            <span className="text-primary">Enterprise Scale</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            Four core modules that work together to deliver model-ready data with quality, consistency, and governance.
          </p>
        </div>

        {/* Clean Grid Layout - Text-Focused Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {platformModules.map((module, index) => {
            const IconComponent = iconMap[module.icon] || Network;
            
            return (
              <div
                key={module.id}
                className={`group relative bg-background rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-md hover-lift ${isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-primary h-5 w-5 group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground leading-tight">
                    {module.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {module.whyItMatters}
                </p>
                
                {/* Key Capabilities */}
                <div className="flex flex-col gap-2 pt-4 border-t border-border/30">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Key Features</span>
                  <div className="flex flex-wrap gap-1.5">
                    {module.keyCapabilities.slice(0, 2).map((capability, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-foreground/70 bg-muted/50 px-2.5 py-1 rounded border border-border/50"
                      >
                        {capability.split(":")[0]}
                      </span>
                    ))}
                    {module.keyCapabilities.length > 2 && (
                      <span className="text-xs text-muted-foreground px-2.5 py-1">
                        +{module.keyCapabilities.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Outcome */}
                <div className="pt-4 mt-4 border-t border-border/30">
                  <p className="text-xs text-foreground/80 leading-relaxed">{module.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
