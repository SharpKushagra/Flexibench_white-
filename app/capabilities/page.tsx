import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { capabilities } from "@/lib/flexibench-content";
import { FileText, Image as ImageIcon, Video, Music, ArrowRight, Sparkles, Layers, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const iconMap: Record<string, typeof FileText> = {
  FileText,
  Image: ImageIcon,
  Video,
  Music,
};

// Unique images for each annotation type - closely related to content (Updated with working URLs)
const capabilityImages: Record<string, {
  hero: string;
  core: string;
  clients: string;
  why: string;
}> = {
  Text: {
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=900&fit=crop&q=90", // Language/text processing - NLP/AI
    core: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=90", // Text annotation interface - code/text
    clients: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90", // NLP/AI text models
    why: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=90", // Language understanding
  },
  Image: {
    hero: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=900&fit=crop&q=90", // Computer vision
    core: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=90", // Image segmentation
    clients: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90", // Visual AI models
    why: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&h=900&fit=crop&q=90", // Image recognition
  },
  Video: {
    hero: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1400&h=900&fit=crop&q=90", // Video analysis
    core: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90", // Video tracking/editing interface - data visualization
    clients: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90", // Temporal AI - data visualization/analysis dashboard
    why: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&h=900&fit=crop&q=90", // Video understanding
  },
  Audio: {
    hero: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1400&h=900&fit=crop&q=90", // Audio processing
    core: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=90", // Audio/sound analysis interface - data visualization/spectrum analyzer
    clients: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=90", // Voice AI - speech recognition/audio
    why: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&h=900&fit=crop&q=90", // Speech recognition
  },
};

const capabilityGradients: Record<string, string> = {
  Text: "from-blue-950 via-indigo-900 to-purple-900",
  Image: "from-purple-950 via-pink-900 to-rose-900",
  Video: "from-orange-950 via-red-900 to-amber-900",
  Audio: "from-green-950 via-emerald-900 to-teal-900",
};

export default function CapabilitiesPage() {
  return (
    <main>
      <LpNavbar1 />
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-950 via-indigo-900 to-blue-900 section-padding-y border-b overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-8 text-white">
              <div className="section-title-gap-lg flex flex-col">
                <Tagline variant="white" className="mb-4">Capabilities</Tagline>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Multimodal annotation capabilities built for{" "}
                  <span className="relative inline-block">
                    real-world
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>{" "}
                  model training
                </h1>
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Flexibench supports deep, configurable, and scalable annotation workflows across Text,
                  Image, Video, and Audio with tooling designed for quality, governance, and model-aligned outputs.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=900&fit=crop&q=80"
                    alt="Multimodal annotation capabilities showing text, image, video, and audio annotation interfaces"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Annotation Types - One After Another with Unique Designs */}
      {capabilities.map((capability, index) => {
        const IconComponent = iconMap[capability.icon] || FileText;
        const isEven = index % 2 === 0;
        const gradient = capabilityGradients[capability.type] || capabilityGradients.Text;
        
        return (
          <section
            key={capability.type}
            className={`relative bg-gradient-to-br ${gradient} section-padding-y border-b overflow-hidden`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="container-padding-x container mx-auto relative z-10">
              {/* Hero Section for Each Capability */}
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-8 text-white">
                  <div className="section-title-gap-lg flex flex-col">
                    <Tagline variant="white" className="mb-4">{capability.type} Annotation</Tagline>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                      {capability.type} Annotation for{" "}
                      <span className="relative inline-block">
                        {capability.type === "Text" ? "Language" : capability.type === "Image" ? "Vision" : capability.type === "Video" ? "Temporal" : "Audio"}
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 300 12" fill="none">
                          <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>{" "}
                      Models
                    </h2>
                    <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl">
                      {capability.whatItDoes}
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                    <AspectRatio ratio={16 / 10}>
                      <Image
                        src={capabilityImages[capability.type]?.hero || capabilityImages.Text.hero}
                        alt={`${capability.type} annotation interface and workflows`}
                        fill
                        priority={index === 0}
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}/80 via-transparent to-transparent`} />
                    </AspectRatio>
                  </div>
                </div>
              </div>

              {/* Content Section with Unique Design */}
              <div className="mt-20 flex flex-col gap-16">
                {/* Core Capabilities and What Clients Get - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="group relative bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-white/40 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="relative flex flex-col gap-6 p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 backdrop-blur-sm flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/30 shadow-xl">
                          <IconComponent className="text-white h-7 w-7" />
                        </div>
                        <h3 className="text-white text-2xl font-bold">Core Capabilities</h3>
                      </div>
                      <ul className="list-disc list-inside text-white/90 space-y-3 pl-4">
                        {capability.coreCapabilities.map((cap, idx) => (
                          <li key={idx} className="leading-relaxed">{cap}</li>
                        ))}
                      </ul>
                      
                      {/* Mini Image */}
                      <div className="relative h-40 rounded-xl overflow-hidden border-2 border-white/20 mt-6 group-hover:border-white/40 transition-colors">
                        <Image
                          src={capabilityImages[capability.type]?.core || capabilityImages.Text.core}
                          alt="Core capabilities visualization"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group relative bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-white/40 overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -ml-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="relative flex flex-col gap-6 p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 backdrop-blur-sm flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/30 shadow-xl">
                          <Sparkles className="text-white h-7 w-7" />
                        </div>
                        <h3 className="text-white text-2xl font-bold">What Clients Get</h3>
                      </div>
                      <p className="text-white/90 text-base leading-relaxed">{capability.whatClientsGet}</p>
                      
                      {/* Mini Image */}
                      <div className="relative h-40 rounded-xl overflow-hidden border-2 border-white/20 mt-6 group-hover:border-white/40 transition-colors">
                        <Image
                          src={capabilityImages[capability.type]?.clients || capabilityImages.Text.clients}
                          alt="Client benefits visualization"
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Why It Matters Section - Full Width with Large Image */}
                <Card className="group relative bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 p-0 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-white/40 overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-8 lg:p-12 flex flex-col gap-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 backdrop-blur-sm flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/30 shadow-xl">
                          <IconComponent className="text-white h-8 w-8" />
                        </div>
                        <h3 className="text-white text-3xl md:text-4xl font-bold">Why {capability.type} Annotation Matters</h3>
                      </div>
                      <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                        {capability.whyItMatters}
                      </p>
                    </div>
                    <div className="flex-1 relative h-64 lg:h-auto min-h-[400px]">
                      <Image
                        src={capabilityImages[capability.type]?.why || capabilityImages.Text.why}
                        alt="Why it matters visualization"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}/90 via-transparent to-transparent lg:bg-gradient-to-l`} />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        );
      })}

      {/* Platform-Wide Capabilities Section - Redesigned */}
      <section className="relative bg-gradient-to-br from-slate-50 via-background to-blue-50/30 section-padding-y border-b overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(45deg, transparent 30%, currentColor 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, currentColor 50%, transparent 70%)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center mb-20">
            <Tagline>Platform-Wide Capabilities</Tagline>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Capabilities That{" "}
              <span className="relative inline-block text-primary">
                Span All Modalities
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Powerful features that work seamlessly across Text, Image, Video, and Audio annotation workflows
            </p>
          </div>

          {/* Enhanced Capabilities Grid - Redesigned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {[
              { 
                title: "AI-Assisted Pre-Labeling", 
                desc: "Model suggestions speed up human review", 
                icon: Sparkles, 
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=90",
                color: "from-purple-500/10 to-purple-500/5",
              },
              { 
                title: "Configurable Annotator Workflows", 
                desc: "Tailor interfaces per task", 
                icon: Layers, 
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=90",
                color: "from-blue-500/10 to-blue-500/5",
              },
              { 
                title: "Dynamic Taxonomy Support", 
                desc: "Reuse ontologies across projects", 
                icon: CheckCircle, 
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=90",
                color: "from-green-500/10 to-green-500/5",
              },
              { 
                title: "Quality Control and Review Gates", 
                desc: "Multi-tier validation pipelines", 
                icon: CheckCircle, 
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=90",
                color: "from-orange-500/10 to-orange-500/5",
              },
              { 
                title: "Unified Data Management", 
                desc: "Consistent datasets for training and deployment", 
                icon: Layers, 
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=90",
                color: "from-indigo-500/10 to-indigo-500/5",
              },
            ].map((capability, index) => (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-background to-secondary/50 rounded-3xl border-2 border-border/60 p-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3 hover:border-primary/40 overflow-hidden"
              >
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Enhanced Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  {/* Icon Badge */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-background/95 backdrop-blur-md rounded-xl p-3 border-2 border-primary/30 shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <capability.icon className="text-primary h-7 w-7" />
                    </div>
                  </div>
                  {/* Number Badge */}
                  <div className="absolute top-5 right-5">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center border-2 border-white/30 shadow-lg">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="relative flex flex-col gap-5 p-8 bg-background/95">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${capability.color} flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300`}>
                      <capability.icon className="text-primary h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground text-xl font-bold leading-tight group-hover:text-primary transition-colors mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {capability.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature Badge */}
                  <div className="pt-4 mt-auto border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Platform Feature
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA Section - Redesigned */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl group">
              {/* Background Image with Better Overlay */}
              <AspectRatio ratio={21 / 9}>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=800&fit=crop&q=90"
                  alt="Get started with Flexibench capabilities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-indigo-600/40" />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 text-center px-6 py-12">
                    {/* Decorative Elements */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent max-w-32" />
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border-2 border-white/30">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent max-w-32" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                      Ready to Transform Your{" "}
                      <span className="relative inline-block">
                        Annotation Workflows?
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/40" viewBox="0 0 300 12" fill="none">
                          <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="3" />
                        </svg>
                      </span>
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                      Start building model-ready datasets with Flexibench's enterprise-grade annotation platform
                    </p>
                    
                    <Button asChild size="lg" className="text-base h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    
                    {/* Additional CTA Links */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                      <Link href="/platform" className="text-white/80 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors">
                        Learn More
                      </Link>
                      <span className="text-white/40">•</span>
                      <Link href="/use-cases" className="text-white/80 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors">
                        View Use Cases
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </main>
  );
}
