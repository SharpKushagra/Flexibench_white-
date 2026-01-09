import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ResourcesPage() {
  return (
    <>
      <LpNavbar1 />
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 section-padding-y border-b overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-8 text-white">
              <div className="section-title-gap-lg flex flex-col">
                <Tagline variant="white" className="mb-4">Resources</Tagline>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Learn. Explore.{" "}
                  <span className="relative inline-block">
                    Master
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>{" "}
                  Annotation
                </h1>
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Comprehensive content curated to accelerate your understanding of high-quality annotation
                  workflows, best practices, and real-world implementation strategies.
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=900&fit=crop&q=80"
                    alt="Learning resources and documentation for annotation workflows"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resources Grid */}
      <section className="relative bg-gradient-to-b from-background via-secondary/20 to-background section-padding-y border-b overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Blog */}
            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 gap-0 overflow-hidden rounded-2xl border-2 border-border/50 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop&q=80"
                  alt="Blog insights and thought leadership"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-primary/90 backdrop-blur-sm flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 shadow-lg">
                    <BookOpen className="text-white h-7 w-7" />
                  </div>
                </div>
              </div>
              
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-foreground text-2xl font-bold group-hover:text-primary transition-colors">Blog</h2>
                  <h3 className="text-muted-foreground font-semibold">
                    Insights, Strategies, and Thought Leadership
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dive into annotation insights from practitioners and experts. Our blog covers emerging
                  trends in data labeling, quality engineering, human-in-the-loop workflows, dataset
                  engineering, case study highlights, and real stories from teams building mission-critical
                  AI systems.
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Popular Topics:</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Best practices for multimodal annotation</li>
                    <li>Annotation and model alignment</li>
                    <li>Quality control frameworks</li>
                    <li>Workforce strategy in annotation</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-fit group-hover:border-primary group-hover:text-primary transition-colors">
                  <Link href="#">
                    Read the Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* White Papers */}
            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 gap-0 overflow-hidden rounded-2xl border-2 border-border/50 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&q=80"
                  alt="White papers on annotation engineering"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-primary/90 backdrop-blur-sm flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 shadow-lg">
                    <FileText className="text-white h-7 w-7" />
                  </div>
                </div>
              </div>
              
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-foreground text-2xl font-bold group-hover:text-primary transition-colors">White Papers</h2>
                  <h3 className="text-muted-foreground font-semibold">
                    Deep Dives into Annotation Engineering
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Download comprehensive white papers that explore complex annotation challenges and proven
                  solutions across industries. These documents synthesize best practices, benchmarks,
                  architectural patterns, and frameworks for enterprise annotation success.
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Featured Themes:</h4>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Enterprise Quality Frameworks</li>
                    <li>Annotation for Safety-Critical AI</li>
                    <li>Scaling Annotation Workflows</li>
                    <li>Ontology Governance Strategies</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-fit group-hover:border-primary group-hover:text-primary transition-colors">
                  <Link href="#">
                    View White Papers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Docs & Guides */}
            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 gap-0 overflow-hidden rounded-2xl border-2 border-border/50 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80"
                  alt="Technical documentation and guides"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-primary/90 backdrop-blur-sm flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 shadow-lg">
                    <GraduationCap className="text-white h-7 w-7" />
                  </div>
                </div>
              </div>
              
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-foreground text-2xl font-bold group-hover:text-primary transition-colors">
                    Docs & Guides
                  </h2>
                  <h3 className="text-muted-foreground font-semibold">
                    Technical Documentation and Implementation Guides
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive technical documentation to help you implement and optimize Flexibench in
                  your annotation workflows. Find API references, integration guides, best practices, and
                  step-by-step tutorials.
                </p>
                <Button asChild variant="outline" className="w-fit group-hover:border-primary group-hover:text-primary transition-colors">
                  <Link href="#">
                    View Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 gap-0 overflow-hidden rounded-2xl border-2 border-border/50 p-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-primary/30">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop&q=80"
                  alt="Best practices and proven strategies"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-primary/90 backdrop-blur-sm flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 shadow-lg">
                    <FileText className="text-white h-7 w-7" />
                  </div>
                </div>
              </div>
              
              <CardContent className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-3">
                  <h2 className="text-foreground text-2xl font-bold group-hover:text-primary transition-colors">Best Practices</h2>
                  <h3 className="text-muted-foreground font-semibold">
                    Proven Strategies from Industry Experts
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learn from real-world implementations and expert recommendations. Our best practices
                  guides cover annotation workflow design, quality assurance strategies, team organization,
                  and optimization techniques.
                </p>
                <Button asChild variant="outline" className="w-fit group-hover:border-primary group-hover:text-primary transition-colors">
                  <Link href="#">
                    Explore Best Practices
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer1 />
    </>
  );
}
