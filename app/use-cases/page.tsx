"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { useCases, industries, modalities } from "@/lib/flexibench-content";
import { FileText, Image as ImageIcon, Video, Music, Search, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

const modalityIcons: Record<string, typeof FileText> = {
  Text: FileText,
  Image: ImageIcon,
  Video: Video,
  Audio: Music,
};

export default function UseCasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All Industries");
  const [selectedModality, setSelectedModality] = useState<string>("All Modalities");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUseCases = useMemo(() => {
    return useCases.filter((useCase) => {
      const matchesIndustry =
        selectedIndustry === "All Industries" || useCase.industry === selectedIndustry;
      const matchesModality =
        selectedModality === "All Modalities" || useCase.modality === selectedModality;
      const matchesSearch =
        searchQuery === "" ||
        useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        useCase.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        useCase.industry.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesIndustry && matchesModality && matchesSearch;
    });
  }, [selectedIndustry, selectedModality, searchQuery]);

  return (
    <main>
      <LpNavbar1 />
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-950 via-rose-900 to-red-900 section-padding-y border-b overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-8 text-white">
              <div className="section-title-gap-lg flex flex-col">
                <Tagline variant="white" className="mb-4">Use Cases</Tagline>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Explore Annotation Use Cases{" "}
                  <span className="relative inline-block">
                    Across Industries
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </h1>
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Filter by industry and data type to find relevant annotation workflows that solve real
                  enterprise challenges.
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=900&fit=crop&q=80"
                    alt="Use cases across industries showing various annotation workflows"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-950/80 via-pink-950/20 to-transparent" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters and Grid Section */}
      <section className="relative bg-gradient-to-b from-background via-secondary/20 to-background section-padding-y border-b overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12">
          {/* Enhanced Filters */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4 p-6 bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 shadow-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedModality} onValueChange={setSelectedModality}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Modality" />
              </SelectTrigger>
              <SelectContent>
                {modalities.map((modality) => (
                  <SelectItem key={modality} value={modality}>
                    {modality}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="text-sm font-semibold text-muted-foreground mb-4">
            Showing {filteredUseCases.length} of {useCases.length} use cases
          </div>

          {/* Enhanced Use Case Cards Grid */}
          {filteredUseCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 use-cases-grid">
            {filteredUseCases.map((useCase, index) => {
              const IconComponent = modalityIcons[useCase.modality] || FileText;
              const industryColors: Record<string, string> = {
                "Healthcare & Life Sciences": "from-red-500/10 to-red-500/5",
                "Automotive & Mobility": "from-blue-500/10 to-blue-500/5",
                "Retail & E-commerce": "from-purple-500/10 to-purple-500/5",
                "Financial Services": "from-green-500/10 to-green-500/5",
                "Manufacturing & Robotics": "from-yellow-500/10 to-yellow-500/5",
                "Media, Entertainment & Gaming": "from-pink-500/10 to-pink-500/5",
                "Telecom & Customer Experience": "from-orange-500/10 to-orange-500/5",
                "Public Sector & Defense": "from-gray-500/10 to-gray-500/5",
                "Logistics & Supply Chain": "from-cyan-500/10 to-cyan-500/5",
                "Cross-Industry": "from-indigo-500/10 to-indigo-500/5",
              };
              const colorClass = industryColors[useCase.industry] || "from-primary/10 to-primary/5";
              
              // Unique images for each use case - Fixed with proper, unique URLs
              const useCaseImages: Record<number, string> = {
                1: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop&q=80", // Clinical notes - Medical documents
                2: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop&q=80", // Radiology - Brain scan
                3: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop&q=80", // Telehealth - Doctor with laptop
                4: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop&q=80", // Pedestrian tracking - AV Safety (Autonomous vehicle/pedestrian)
                5: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop&q=80", // Road signs - Traffic signs
                6: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=400&fit=crop&q=80", // Product attributes - E-commerce products
                7: "https://images.unsplash.com/photo-1555529908-3fe01d75e42c?w=800&h=400&fit=crop&q=80", // Shelf analytics - Retail store shelves
                8: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&q=80", // Contract - Legal contract documents (UNIQUE)
                9: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&q=80", // KYC - Identity verification/passport documents (UNIQUE)
                10: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop&q=80", // PCB - Circuit board
                11: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&q=80", // Safety - Manufacturing safety
                12: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop&q=80", // Sports - Basketball
                13: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=800&h=400&fit=crop&q=80", // Gaming - Video games
                14: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&q=80", // Support - Customer support
                15: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop&q=80", // Call center - Phone support
                16: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop&q=80", // Satellite - Earth from space
                17: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&q=80", // Surveillance - Security camera
                18: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop&q=80", // Package - Shipping packages
                19: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop&q=80", // Conveyor - Factory conveyor belt
                20: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80", // LLM - AI/Neural network
                21: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80", // Multilingual - Translation
              };
              
              const imageUrl = useCaseImages[useCase.id] || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&q=80";
              
              // Enhanced animation: alternating rows with better timing
              const rowIndex = Math.floor(index / 3);
              const isEvenRow = rowIndex % 2 === 0;
              const columnIndex = index % 3;
              
              // Animation direction: even rows slide from right, odd rows from left
              const animationClass = isEvenRow ? 'animate-slide-in-right' : 'animate-slide-in-left';
              const animationDelay = columnIndex * 100; // Staggered delay based on column
              
              return (
                <Card
                  key={useCase.id}
                  className={`group relative bg-gradient-to-br from-background to-secondary/40 gap-0 overflow-hidden rounded-2xl border-2 border-border/50 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/30 ${animationClass}`}
                  style={{
                    animationDelay: `${animationDelay}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={`${useCase.industry} use case: ${useCase.title}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 border border-border/30 shadow-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-foreground bg-primary/90 backdrop-blur-sm px-2 py-1 rounded">
                          {useCase.industry.split(" ")[0]}
                        </span>
                        <span className="text-xs text-foreground/80">•</span>
                        <span className="text-xs font-medium text-foreground bg-background/90 backdrop-blur-sm px-2 py-1 rounded">
                          {useCase.modality}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="relative flex flex-col gap-4 p-6">
                    <h3 className="text-foreground text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Problem:
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{useCase.problem}</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-auto border-t border-border/30">
                      <Link href={`/use-cases/${useCase.id}`} className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Full Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-secondary/50 rounded-2xl p-12 border border-border/50">
                <p className="text-muted-foreground text-lg">
                  No use cases found matching your filters. Try adjusting your search criteria.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer1 />
      
      {/* Enhanced Animation Styles */}
      <style jsx global>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(80px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-80px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        
        .animate-slide-in-left {
          animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        
        /* Don't apply fade-in to grid, cards handle their own animations */
        .use-cases-grid {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
