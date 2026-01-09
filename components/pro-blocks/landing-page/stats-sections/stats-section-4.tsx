"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/50 via-background to-secondary/30 section-padding-y border-b overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-padding-x container mx-auto relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6">
            <Tagline>Impact</Tagline>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Trusted by Data-Driven Teams{" "}
              <span className="text-primary">Worldwide</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Flexibench enables organizations to produce higher fidelity datasets, more consistent
              models, and faster iteration cycles ensuring annotation is a force multiplier, not a bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-12 -mt-12" />
              <CardContent className="relative flex flex-col gap-4 p-0">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-3 w-fit">
                  <h3 className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wide">
                    Datasets Annotated
                  </h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground text-5xl md:text-6xl font-bold">
                    5M+
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enterprise datasets processed across industries with enterprise-grade quality workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-secondary/40 via-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl -mr-12 -mt-12" />
              <CardContent className="relative flex flex-col gap-4 p-0">
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-3 w-fit">
                  <h3 className="text-green-600 dark:text-green-400 font-bold text-sm uppercase tracking-wide">
                    Quality Score
                  </h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground text-5xl md:text-6xl font-bold">
                    4.9
                  </span>
                  <span className="text-muted-foreground text-2xl font-semibold">/5</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Average annotation quality score across all projects with multi-tier review pipelines.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-12 -mt-12" />
              <CardContent className="relative flex flex-col gap-4 p-0">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-xl p-3 w-fit">
                  <h3 className="text-purple-600 dark:text-purple-400 font-bold text-sm uppercase tracking-wide">
                    Time Saved
                  </h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground text-5xl md:text-6xl font-bold">
                    500K+
                  </span>
                  <span className="text-muted-foreground text-lg font-semibold">hours</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Manual annotation hours saved through AI-assisted labeling and automated workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
