"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { whyFlexibenchPoints } from "@/lib/flexibench-content";
import { Database, Lightbulb, Award, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, typeof Database> = {
  Database,
  Lightbulb,
  Award,
  Settings,
  ArrowRight,
};

export function WhyFlexibenchSection() {
  return (
    <section className="relative bg-background section-padding-y border-b overflow-hidden" id="why-flexibench">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        {/* Section Title with Enhanced Design */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-6">
          <Tagline>Why Flexibench</Tagline>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
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
          <Card className="group relative bg-gradient-to-br from-secondary/80 via-secondary/40 to-background gap-0 overflow-hidden rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2 lg:row-span-2 hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            <CardContent className="relative flex flex-col gap-6 p-0 h-full">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 shadow-lg">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[0].icon];
                    return IconComponent ? <IconComponent className="text-primary h-7 w-7" /> : null;
                  })()}
                </div>
                <div className="flex-1 min-h-[120px] rounded-lg overflow-hidden border border-border/30 relative group/image">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80"
                    alt="Data engineering and AI model training infrastructure"
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-500"
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

          <Card className="group relative bg-gradient-to-br from-background via-secondary/40 to-secondary/80 gap-0 overflow-hidden rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2 lg:row-span-2 hover:scale-[1.02]">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mb-16 group-hover:bg-primary/10 transition-colors" />
            <CardContent className="relative flex flex-col gap-6 p-0 h-full">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 shadow-lg">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[1].icon];
                    return IconComponent ? <IconComponent className="text-primary h-7 w-7" /> : null;
                  })()}
                </div>
                <div className="flex-1 min-h-[120px] rounded-lg overflow-hidden border border-border/30 relative group/image">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80"
                    alt="Team collaboration and AI development workspace"
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-500"
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
          <Card className="group relative bg-gradient-to-b from-primary/10 via-primary/5 to-secondary/30 gap-0 overflow-hidden rounded-2xl border-2 border-primary/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 lg:col-span-1 lg:row-span-3 hover:border-primary/40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="relative flex flex-col gap-6 p-0 h-full justify-center items-center text-center">
              <div className="bg-gradient-to-br from-primary/30 to-primary/10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/30 shadow-lg mb-4">
                {(() => {
                  const IconComponent = iconMap[whyFlexibenchPoints[2].icon];
                  return IconComponent ? <IconComponent className="text-primary h-10 w-10" /> : null;
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
          <Card className="group relative bg-gradient-to-br from-secondary/60 to-background gap-0 overflow-hidden rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -mr-12 -mt-12" />
            <CardContent className="relative flex flex-row gap-6 p-0">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[3].icon];
                    return IconComponent ? <IconComponent className="text-primary h-8 w-8" /> : null;
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

          <Card className="group relative bg-gradient-to-br from-background to-secondary/60 gap-0 overflow-hidden rounded-2xl border border-border/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-2 hover:scale-[1.01]">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -ml-12 -mb-12" />
            <CardContent className="relative flex flex-row gap-6 p-0">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/20">
                  {(() => {
                    const IconComponent = iconMap[whyFlexibenchPoints[4].icon];
                    return IconComponent ? <IconComponent className="text-primary h-8 w-8" /> : null;
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
