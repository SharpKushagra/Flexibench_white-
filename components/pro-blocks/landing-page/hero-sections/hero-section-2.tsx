"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import Image from "next/image";
import Link from "next/link";

export function HeroSection2() {
  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20 pt-20 pb-24 overflow-hidden border-b"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Background Elements with Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
          <div className="absolute top-2/4 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-500" />
        </div>
      </div>

      <div className="container-padding-x container mx-auto relative z-10 pt-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-start pt-0">

          {/* Left Column - Enhanced with Better Spacing */}
          <div className="flex flex-1 flex-col gap-6 lg:gap-8 w-full pt-0">
            {/* Tagline with Badge Style */}
            <div className="inline-flex items-center gap-2 w-fit">
              <Tagline className="mb-0">Enterprise Annotation Platform</Tagline>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">AI-Powered</span>
              </div>
            </div>
            
            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Build{" "}
                <span className="relative inline-block">
                  Model-Ready
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-primary/30"
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
                </span>{" "}
                Data with{" "}
                <span className="relative inline-block text-primary bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Precision & Quality
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-indigo-500/50 rounded-full blur-sm" />
                </span>
              </h1>
            </div>
            
            {/* Description with Enhanced Styling */}
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium">
              Modern multimodal annotation platform for AI model training data with
              quality workflows, AI-assisted labeling, and enterprise-grade governance
            </p>

            {/* Enhanced Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-background/80 to-secondary/40 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-xl p-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base mb-1.5 text-foreground">Multimodal Support</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Text, Image, Video, Audio annotation in one platform</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-4 w-4 text-primary/40" />
                </div>
              </div>

              <div className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-background/80 to-secondary/40 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-xl p-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base mb-1.5 text-foreground">AI-Assisted Labeling</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">80% faster with quality workflows built-in</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="h-4 w-4 text-primary/40" />
                </div>
              </div>

              <div className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-background/80 to-secondary/40 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary/20 to-indigo-500/10 rounded-xl p-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base mb-1.5 text-foreground">Enterprise Governance</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Full auditability, compliance & quality control</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-4 w-4 text-primary/40" />
                </div>
              </div>

              <div className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-background/80 to-secondary/40 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-xl p-3 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base mb-1.5 text-foreground">API-First Design</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Seamless ML pipeline integration & automation</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="h-4 w-4 text-primary/40" />
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Better Positioning */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 py-6 h-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="text-base px-8 py-6 h-auto border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/#platform">
                  Explore Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-blue-600 border-2 border-background" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-background" />
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 border-2 border-background" />
                </div>
                <span className="font-medium">Trusted by 500+ teams</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual with Better Design */}
          <div className="w-full flex-1 relative lg:max-w-2xl">
            {/* Animated Zigzag Stairs Path - Positioned at Top Right */}
            <div className="absolute top-0 right-0 z-30 hidden lg:block" style={{ width: '450px', height: '280px', pointerEvents: 'none' }}>
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 500 380" 
                className="absolute inset-0"
                style={{ overflow: 'visible' }}
              >
                {/* Zigzag Staircase Path - Thicker and More Prominent */}
                <path
                  d="M 30 320 L 160 320 L 160 240 L 260 240 L 260 160 L 360 160 L 360 80 L 460 80"
                  stroke="url(#stairGradient)"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="animate-path-draw"
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(251, 146, 60, 0.5))',
                  }}
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="stairGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(251, 146, 60)" stopOpacity="1" />
                    <stop offset="50%" stopColor="rgb(239, 68, 68)" stopOpacity="1" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="1" />
                  </linearGradient>
                  
                  {/* Glow Filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Animated Points Along Path */}
                {[0, 0.2, 0.4, 0.6, 0.8, 1].map((offset, i) => (
                  <circle
                    key={i}
                    r="10"
                    fill="rgb(251, 146, 60)"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.25}s`,
                      filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.8))',
                    }}
                  >
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      path="M 30 320 L 160 320 L 160 240 L 260 240 L 260 160 L 360 160 L 360 80 L 460 80"
                      keyPoints={offset}
                      keyTimes={offset}
                    />
                  </circle>
                ))}
              </svg>
              
              {/* Enhanced Glow Effects */}
              <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-orange-500/40 via-red-500/30 to-blue-500/40 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-[500px] h-40 bg-gradient-to-r from-orange-500/25 via-red-500/25 to-blue-500/25 rounded-full blur-2xl" />
            </div>
            
            {/* Main Image Container with Enhanced Effects - Positioned below animation */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-border/50 group" style={{ marginTop: '280px' }}>
              {/* Decorative Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <AspectRatio ratio={16 / 12}>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=1050&fit=crop&q=90"
                  alt="Enterprise data annotation platform dashboard showing annotation workflows, quality metrics, and AI-assisted labeling interface"
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent dark:from-slate-950/95 dark:via-slate-950/60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10" />
                
                {/* Floating Stats Cards */}
                <div className="absolute top-6 left-6 right-6 flex gap-3">
                  <div className="bg-background/95 backdrop-blur-md rounded-xl p-4 border border-border/50 shadow-xl flex-1 group-hover:scale-105 transition-transform">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Active Projects</p>
                    </div>
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                  </div>
                  <div className="bg-background/95 backdrop-blur-md rounded-xl p-4 border border-border/50 shadow-xl flex-1 group-hover:scale-105 transition-transform delay-75">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Annotations</p>
                    </div>
                    <p className="text-2xl font-bold text-foreground">2.4M</p>
                  </div>
                </div>
                
                {/* Bottom Info Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/95 backdrop-blur-md rounded-xl p-5 border border-border/50 shadow-xl group-hover:shadow-2xl transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-lg p-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Platform Dashboard</p>
                        <p className="text-xs text-muted-foreground">Real-time annotation workflows & quality metrics</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-xs text-muted-foreground">99.9% Uptime</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-xs text-muted-foreground">Enterprise Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            
            {/* Enhanced Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-3xl blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-purple-500/15 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            
            {/* Quick Setup Process and Efficiency Badge - Positioned After Image */}
            <div className="flex flex-col gap-4 mt-8 lg:flex-row lg:items-start lg:justify-end">
            {/* Quick Setup Process Card */}
            <div className="relative bg-background/95 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-xl w-full lg:w-auto lg:min-w-[280px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Quick Setup Process
                </h3>
                {[
                  { step: "1", label: "Connect Data Sources", status: "completed" },
                  { step: "2", label: "Configure Workflows", status: "active" },
                  { step: "3", label: "Start Annotation", status: "pending" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 relative">
                    {/* Connection Line */}
                    {index < 2 && (
                      <div className="absolute left-[13px] top-8 w-0.5 h-8 bg-border">
                        <div className={`absolute top-0 left-0 w-full h-full bg-primary transition-all duration-1000 ${
                          item.status === "completed" ? "animate-pulse" : ""
                        }`} style={{
                          height: item.status === "completed" ? "100%" : item.status === "active" ? "50%" : "0%",
                          transitionDelay: `${index * 500}ms`
                        }} />
                      </div>
                    )}
                    {/* Step Number */}
                    <div className={`relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                      item.status === "completed" 
                        ? "bg-primary text-white shadow-lg shadow-primary/50" 
                        : item.status === "active"
                        ? "bg-primary/20 text-primary border-2 border-primary animate-pulse"
                        : "bg-secondary text-muted-foreground border-2 border-border"
                    }`}>
                      {item.status === "completed" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        item.step
                      )}
                    </div>
                    {/* Step Label */}
                    <div className="flex-1">
                      <p className={`text-sm font-medium transition-colors ${
                        item.status === "completed" 
                          ? "text-foreground" 
                          : item.status === "active"
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}>
                        {item.label}
                      </p>
                      {item.status === "active" && (
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                          <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-75" />
                          <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-150" />
                          <span className="text-xs text-muted-foreground ml-2">Processing...</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating Indicator */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-ping" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
            </div>
            
            {/* +40% Efficiency Badge */}
            <div className="bg-background border-2 border-primary/30 rounded-2xl p-4 shadow-xl backdrop-blur-sm w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-foreground">+40% Efficiency</p>
                  <p className="text-xs text-muted-foreground">AI-Powered</p>
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
