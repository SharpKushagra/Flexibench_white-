"use client";

import { FileText, Image as ImageIcon, Video, Music, ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { capabilities } from "@/lib/flexibench-content";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const iconMap: Record<string, typeof FileText> = {
  FileText,
  Image: ImageIcon,
  Video,
  Music,
};

export function CapabilitiesOverviewSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/3 rounded-full blur-3xl" />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/2 via-transparent to-amber-500/2" />
      </div>

      <div ref={sectionRef} className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        <div className={`mx-auto flex max-w-3xl flex-col items-center text-center gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 animate-slide-in-subtle' : 'opacity-0'}`}>
          <Tagline>Capabilities</Tagline>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Multimodal Annotation Built for{" "}
            <span className="text-primary">Real-World</span> Model Training
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Flexibench supports deep, configurable, and scalable annotation workflows across Text,
            Image, Video, and Audio with tooling designed for quality, governance, and model-aligned outputs.
          </p>
        </div>

        {/* Horizontal marquee-style scroll for capabilities tiles */}
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-stretch gap-6 py-2">
              {[...capabilities, ...capabilities].map((capability, index) => {
                const IconComponent = iconMap[capability.icon] || FileText;
                const colorClass = capabilityColors[index % capabilityColors.length];

                return (
                  <Card
                    key={`${capability.type}-${index}`}
                    className="group relative bg-gradient-to-br from-background to-secondary/40 border border-border/50 overflow-hidden rounded-2xl p-0 shadow-md hover:shadow-lg transition-all duration-500 flex-shrink-0 w-72 hover-lift"
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Image Header */}
                    <div className="relative h-40 overflow-hidden">
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
                      <div className="absolute top-3 left-3">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 border border-border/30 shadow group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-primary h-5 w-5 group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-5 flex flex-col gap-3">
                      <h3 className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
                        {capability.type} Annotation
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                        {capability.whatItDoes}
                      </p>
                      <Link
                        href={`/capabilities/${capability.type.toLowerCase()}`}
                        className="text-primary text-xs font-semibold hover:underline mt-1 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                      >
                        Learn more
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
