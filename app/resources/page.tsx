"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "Blog",
      subtitle: "Insights, Strategies, and Thought Leadership",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop&q=80",
      description: "Dive into annotation insights from practitioners and experts. Our blog covers emerging trends in data labeling, quality engineering, human-in-the-loop workflows, dataset engineering, case study highlights, and real stories from teams building mission-critical AI systems.",
      topics: [
        "Best practices for multimodal annotation",
        "Annotation and model alignment",
        "Quality control frameworks",
        "Workforce strategy in annotation",
      ],
      color: "from-blue-500/20 via-blue-600/10 to-indigo-500/20",
      gradient: "from-blue-500/10 to-blue-500/5",
      buttonText: "Read the Blog",
    },
    {
      id: 2,
      title: "White Papers",
      subtitle: "Deep Dives into Annotation Engineering",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&q=80",
      description: "Download comprehensive white papers that explore complex annotation challenges and proven solutions across industries. These documents synthesize best practices, benchmarks, architectural patterns, and frameworks for enterprise annotation success.",
      topics: [
        "Enterprise Quality Frameworks",
        "Annotation for Safety-Critical AI",
        "Scaling Annotation Workflows",
        "Ontology Governance Strategies",
      ],
      color: "from-emerald-500/20 via-teal-600/10 to-cyan-500/20",
      gradient: "from-emerald-500/10 to-emerald-500/5",
      buttonText: "View White Papers",
    },
    {
      id: 3,
      title: "Docs & Guides",
      subtitle: "Technical Documentation and Implementation Guides",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80",
      description: "Comprehensive technical documentation to help you implement and optimize Flexibench in your annotation workflows. Find API references, integration guides, best practices, and step-by-step tutorials.",
      topics: [],
      color: "from-purple-500/20 via-pink-600/10 to-rose-500/20",
      gradient: "from-purple-500/10 to-purple-500/5",
      buttonText: "View Documentation",
    },
    {
      id: 4,
      title: "Best Practices",
      subtitle: "Proven Strategies from Industry Experts",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop&q=80",
      description: "Learn from real-world implementations and expert recommendations. Our best practices guides cover annotation workflow design, quality assurance strategies, team organization, and optimization techniques.",
      topics: [],
      color: "from-orange-500/20 via-amber-600/10 to-yellow-500/20",
      gradient: "from-orange-500/10 to-orange-500/5",
      buttonText: "Explore Best Practices",
    },
  ];

  return (
    <>
      <LpNavbar1 />
      
      {/* Enhanced Hero Section with Animations */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 section-padding-y border-b overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent animate-pulse" />
          <div className="absolute top-2/4 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-8 text-white animate-fade-in-up">
              <div className="section-title-gap-lg flex flex-col">
                <Tagline variant="white" className="mb-4">Resources</Tagline>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
                  Learn. Explore.{" "}
                  <span className="relative inline-block">
                    Master
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>{" "}
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    Annotation
                  </span>
                </h1>
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl font-medium">
                  Comprehensive content curated to accelerate your understanding of high-quality annotation
                  workflows, best practices, and real-world implementation strategies.
                </p>
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  <span className="text-sm font-semibold text-white">Expert Insights</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-semibold text-white">Best Practices</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4 text-teal-300" />
                  <span className="text-sm font-semibold text-white">Technical Guides</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 group">
                {/* Decorative Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=900&fit=crop&q=80"
                    alt="Learning resources and documentation for annotation workflows"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resources Grid with Animations */}
      <section className="relative bg-gradient-to-b from-background via-secondary/30 to-background section-padding-y border-b overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 resources-grid">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              const animationDelay = index * 150;
              
              return (
                <Card
                  key={resource.id}
                  className="group relative bg-gradient-to-br from-background to-secondary/50 gap-0 overflow-hidden rounded-3xl border-2 border-border/50 p-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-3 hover:border-primary/40 animate-fade-in-up"
                  style={{
                    animationDelay: `${animationDelay}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Animated Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${resource.color} rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${resource.color} rounded-full blur-2xl -ml-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{ animationDelay: '0.2s' }} />
                  
                  {/* Enhanced Image Header */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon Badge with Enhanced Design */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-background/95 backdrop-blur-md flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/30 shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="text-primary h-8 w-8" />
                      </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30 shadow-lg">
                        <span className="text-xs font-bold text-white">Explore</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="flex flex-col gap-6 p-8 relative">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-foreground text-3xl font-bold group-hover:text-primary transition-colors">
                        {resource.title}
                      </h2>
                      <h3 className="text-muted-foreground font-semibold text-base">
                        {resource.subtitle}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.description}
                    </p>
                    
                    {resource.topics.length > 0 && (
                      <div className="pt-4 border-t border-border/30">
                        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Popular Topics:
                        </h4>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {resource.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-start gap-3 text-muted-foreground text-sm group-hover:text-foreground transition-colors"
                            >
                              <span className="text-primary mt-1.5">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button
                      asChild
                      className="w-fit bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 mt-2"
                    >
                      <Link href="#">
                        {resource.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer1 />
      
      {/* Enhanced Animation Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        
        .resources-grid {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
