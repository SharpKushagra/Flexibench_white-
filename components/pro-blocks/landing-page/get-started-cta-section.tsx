"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GetStartedCtaSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-secondary/60 via-background to-secondary/40 section-padding-y border-b overflow-hidden"
      aria-labelledby="get-started-section-title"
      id="get-started"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container-padding-x container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          {/* Section Header */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6">
            <Tagline>Get Started</Tagline>
            <h2
              id="get-started-section-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Start Building{" "}
              <span className="text-primary relative">
                Model-Ready Data
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 300 12">
                  <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>{" "}
              Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you want a demo, a consultation, or onboarding support, our team is ready to help
              you succeed with Flexibench.
            </p>
          </div>

          {/* Enhanced Two-Column Side-by-Side CTA Cards */}
          <div className="flex w-full flex-col items-center gap-6 md:max-w-4xl md:flex-row md:gap-8">
            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 w-full hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <CardContent className="relative flex flex-col gap-8 p-0">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-4 w-fit border border-blue-500/20">
                  <h3 className="text-foreground text-2xl font-bold mb-2">
                    Talk to Sales
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    Get a tailored demo and learn how Flexibench can fit your annotation needs.
                  </p>
                </div>
                <Button asChild size="lg" className="w-full text-base">
                  <Link href="/contact?type=sales">
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/40 rounded-2xl border-2 border-primary/30 p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 flex-1 w-full hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16" />
              <CardContent className="relative flex flex-col gap-8 p-0">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl p-4 w-fit border border-primary/30">
                  <h3 className="text-primary text-2xl font-bold mb-2">
                    Request a Demo
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    Choose a time and let us walk you through the platform.
                  </p>
                </div>
                <Button variant="default" asChild size="lg" className="w-full text-base bg-primary hover:bg-primary/90">
                  <Link href="/contact?type=demo">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
