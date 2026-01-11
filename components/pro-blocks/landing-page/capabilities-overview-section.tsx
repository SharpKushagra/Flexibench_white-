"use client";

import { FileText, Image as ImageIcon, Video, Music, ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { capabilities } from "@/lib/flexibench-content";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, typeof FileText> = {
  FileText,
  Image: ImageIcon,
  Video,
  Music,
};

export function CapabilitiesOverviewSection() {
  const capabilityColors = [
    "from-blue-500/10 to-blue-500/5",
    "from-purple-500/10 to-purple-500/5",
    "from-orange-500/10 to-orange-500/5",
    "from-green-500/10 to-green-500/5",
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 section-padding-y border-b overflow-hidden"
      id="capabilities"
    >
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/10 rounded-full blur-3xl" />
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-amber-500/5" />
      </div>

      <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6">
          <Tagline>Capabilities</Tagline>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Multimodal Annotation Built for{" "}
            <span className="text-primary">Real-World</span> Model Training
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Flexibench supports deep, configurable, and scalable annotation workflows across Text,
            Image, Video, and Audio with tooling designed for quality, governance, and model-aligned outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const IconComponent = iconMap[capability.icon] || FileText;
            const animationDelay = index * 100;
            const isEven = index % 2 === 0;
            return (
              <Card
                key={capability.type}
                className={`group relative bg-gradient-to-br from-background to-secondary/40 border-2 border-border/50 overflow-hidden rounded-2xl p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/30 opacity-0 ${isEven ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
                style={{ animationDelay: `${animationDelay}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capabilityColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Enhanced Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      capability.type === "Text" 
                        ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80"
                        : capability.type === "Image"
                        ? "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&q=80"
                        : capability.type === "Video"
                        ? "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&h=400&fit=crop&q=80"
                        : "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=400&fit=crop&q=80"
                    }
                    alt={`${capability.type} annotation interface`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 border border-border/30 shadow-lg">
                      <IconComponent className="text-primary h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="relative p-6 flex flex-col gap-4">
                {/* Icon with Enhanced Design - Smaller now */}
                <div className="relative">
                  <div className={`bg-gradient-to-br from-primary/20 to-primary/5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40`}>
                    <IconComponent className="text-primary h-6 w-6 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-foreground font-bold text-xl group-hover:text-primary transition-colors">
                      {capability.type} Annotation
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {capability.whatItDoes}
                    </p>
                    <Link
                      href={`/capabilities/${capability.type.toLowerCase()}`}
                      className="text-primary text-sm font-semibold hover:underline mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
