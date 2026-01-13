"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { whyFlexibenchPoints } from "@/lib/flexibench-content";
import { Database, Lightbulb, Award, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const iconMap: Record<string, typeof Database> = {
  Database,
  Lightbulb,
  Award,
  Settings,
  ArrowRight,
};

export function WhyFlexibenchSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50/80 to-violet-50/60 dark:from-blue-950 dark:via-indigo-950/80 dark:to-violet-950/60 section-padding-y border-b overflow-hidden" id="why-flexibench">
      {/* Vibrant Background Pattern with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/25 via-indigo-400/20 to-violet-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-violet-400/20 via-purple-400/15 to-indigo-400/12 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1.5px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 right-0 h-40">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-400/15 via-blue-400/8 to-transparent animate-wave" />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-400/12 via-indigo-400/6 to-transparent animate-wave" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div ref={sectionRef} className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        {/* Section Title with Enhanced Design */}
        <div className={`mx-auto flex max-w-4xl flex-col items-center text-center gap-6 transition-all duration-[2500ms] ease-out ${isVisible ? 'opacity-100 animate-slide-in-subtle' : 'opacity-0'}`}>
          <Tagline>Why Flexibench</Tagline>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            High-Quality Data Is the{" "}
            <span className="relative inline-block">
              Foundation
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary/30" viewBox="0 0 200 8" fill="none">
                <path d="M0 4 Q50 0, 100 4 T200 4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>{" "}
            of Every Successful AI Model
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Most annotation tools treat labeling as a task. We treat it as data engineering because the
            right labels determine whether a model succeeds, fails, or never gets deployed.
          </p>
        </div>

        {/* Enhanced Bento Grid - 2-1-2 Layout with Images */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-5 lg:grid-rows-3">
          {/* Row 1: Two cards spanning 2 columns each with image placeholders */}
          <Card className={`group relative bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 dark:from-slate-900 dark:via-blue-950/60 dark:to-indigo-950/40 gap-0 overflow-hidden rounded-2xl border-2 border-blue-200/50 dark:border-blue-800/50 p-8 shadow-xl hover:shadow-2xl hover:border-blue-300/70 dark:hover:border-blue-700/70 transition-all duration-[3000ms] ease-out lg:col-span-2 lg:row-span-2  hover-lift ${isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-500/15 rounded-full blur-2xl -mr-16 -mt-16  transition-transform duration-[3000ms] ease-out" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-400/10 rounded-full blur-xl animate-pulse-slow" />
            <CardContent className="relative flex flex-col gap-6 p-0 h-full">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-blue-400/30 shadow-lg   transition-all duration-[2500ms] ease-out">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[0].icon];
                    return IconComponent ? <IconComponent className="text-primary h-7 w-7  transition-transform duration-[2500ms] ease-out" /> : null;
                  })()}
                </div>
                <div className="flex-1 min-h-[120px] rounded-lg overflow-hidden border border-border/30 relative group/image">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80"
                    alt="Data engineering and AI model training infrastructure"
                    fill
                    className="object-cover  transition-transform duration-[2500ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-foreground font-semibold bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-center">Data Engine Architecture</p>
                  </div>
                </div>
              </div>
              <h3 className="text-foreground text-2xl font-bold leading-tight">
                {whyFlexibenchPoints[0].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {whyFlexibenchPoints[0].description}
              </p>
            </CardContent>
          </Card>

          <Card className={`group relative bg-gradient-to-br from-indigo-50/60 via-violet-50/40 to-white dark:from-indigo-950/60 dark:via-violet-950/40 dark:to-slate-900 gap-0 overflow-hidden rounded-2xl border-2 border-indigo-200/50 dark:border-indigo-800/50 p-8 shadow-xl hover:shadow-2xl hover:border-indigo-300/70 dark:hover:border-indigo-700/70 transition-all duration-[3000ms] ease-out lg:col-span-2 lg:row-span-2  hover-lift ${isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-400/20 to-violet-500/15 rounded-full blur-2xl -ml-16 -mb-16  transition-transform duration-[3000ms] ease-out" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            <CardContent className="relative flex flex-col gap-6 p-0 h-full">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-indigo-500/30 to-violet-500/20 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-indigo-400/30 shadow-lg   transition-all duration-[2500ms] ease-out">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[1].icon];
                    return IconComponent ? <IconComponent className="text-indigo-600 dark:text-indigo-400 h-7 w-7" /> : null;
                  })()}
                </div>
                <div className="flex-1 min-h-[120px] rounded-lg overflow-hidden border border-border/30 relative group/image">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
                    alt="Team collaboration and AI development workspace"
                    fill
                    className="object-cover  transition-transform duration-[2500ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-foreground font-semibold bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-center">Built From Experience</p>
                  </div>
                </div>
              </div>
              <h3 className="text-foreground text-2xl font-bold leading-tight">
                {whyFlexibenchPoints[1].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {whyFlexibenchPoints[1].description}
              </p>
            </CardContent>
          </Card>

          {/* Center card spanning 1 column, 3 rows - Featured */}
          <Card className={`group relative bg-gradient-to-b from-violet-100 via-purple-50 to-indigo-100 dark:from-violet-950 dark:via-purple-950 dark:to-indigo-950 gap-0 overflow-hidden rounded-2xl border-2 border-violet-300/60 dark:border-violet-700/60 p-8 shadow-2xl hover:shadow-violet-500/25 dark:hover:shadow-violet-900/50 transition-all duration-[3000ms] ease-out lg:col-span-1 lg:row-span-3 hover:border-violet-400 dark:hover:border-violet-600 hover-lift  ${isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-violet-400/10 via-purple-400/15 to-indigo-400/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow" />
            <CardContent className="relative flex flex-col gap-6 p-0 h-full justify-center items-center text-center">
              <div className="bg-gradient-to-br from-violet-500/40 to-purple-500/30 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-violet-400/40 shadow-xl mb-4   transition-all duration-[3000ms] ease-out">
                {(() => {
                  const IconComponent = iconMap[whyFlexibenchPoints[2].icon];
                  return IconComponent ? <IconComponent className="text-violet-700 dark:text-violet-300 h-10 w-10" /> : null;
                })()}
              </div>
              <div className="w-full h-32 rounded-xl bg-background/60 backdrop-blur-sm border border-border/40 flex items-center justify-center mb-4">
                <Award className="h-12 w-12 text-primary/40" />
              </div>
              <h3 className="text-foreground text-xl font-bold leading-tight">
                {whyFlexibenchPoints[2].title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {whyFlexibenchPoints[2].description}
              </p>
            </CardContent>
          </Card>

          {/* Row 3: Two cards spanning 2 columns each */}
          <Card className={`group relative bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 dark:from-slate-900 dark:via-blue-950/40 dark:to-indigo-950/30 gap-0 overflow-hidden rounded-2xl border-2 border-blue-200/50 dark:border-blue-800/50 p-8 shadow-xl hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-[3000ms] ease-out lg:col-span-2  hover-lift ${isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-indigo-400/10 rounded-full blur-xl -mr-12 -mt-12  transition-transform duration-[3000ms] ease-out" />
            <CardContent className="relative flex flex-row gap-6 p-0">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-blue-400/30   transition-all duration-[2500ms] ease-out">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[3].icon];
                    return IconComponent ? <IconComponent className="text-blue-600 dark:text-blue-400 h-8 w-8" /> : null;
                  })()}
                </div>
                <div className="mt-4 w-20 h-20 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 flex items-center justify-center">
                  <Settings className="h-10 w-10 text-primary/40" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-foreground text-xl font-bold mb-3">
                  {whyFlexibenchPoints[3].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {whyFlexibenchPoints[3].description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={`group relative bg-gradient-to-br from-indigo-50/40 via-violet-50/30 to-white dark:from-indigo-950/40 dark:via-violet-950/30 dark:to-slate-900 gap-0 overflow-hidden rounded-2xl border-2 border-indigo-200/50 dark:border-indigo-800/50 p-8 shadow-xl hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-[3000ms] ease-out lg:col-span-2  hover-lift ${isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-400/15 to-violet-400/10 rounded-full blur-xl -ml-12 -mb-12  transition-transform duration-[3000ms] ease-out" />
            <CardContent className="relative flex flex-row gap-6 p-0">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-indigo-500/30 to-violet-500/20 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-indigo-400/30   transition-all duration-[2500ms] ease-out">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[4].icon];
                    return IconComponent ? <IconComponent className="text-indigo-600 dark:text-indigo-400 h-8 w-8" /> : null;
                  })()}
                </div>
                <div className="mt-4 w-20 h-20 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30 flex items-center justify-center">
                  <ArrowRight className="h-10 w-10 text-primary/40" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-foreground text-xl font-bold mb-3">
                  {whyFlexibenchPoints[4].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {whyFlexibenchPoints[4].description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
