import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { InternalToolsSection } from "@/components/pro-blocks/landing-page/internal-tools-section";
import { Card, CardContent } from "@/components/ui/card";
import { internalTools } from "@/lib/flexibench-content";
import { Workflow, Mic, Users } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const iconMap: Record<string, typeof Workflow> = {
  Workflow,
  Mic,
  Users,
};

export default function InternalToolsPage() {
  return (
    <main>
      <LpNavbar1 />
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-950 via-orange-900 to-red-900 section-padding-y border-b overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-8 text-white">
              <div className="section-title-gap-lg flex flex-col">
                <Tagline variant="white" className="mb-4">Flexibench Ecosystem</Tagline>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Extend Annotation from{" "}
                  <span className="relative inline-block">
                    Tasks
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>{" "}
                  to Strategy
                </h1>
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Flexibench is bolstered by internal tools that extend its reach: DataBench for workflow
                  orchestration (with advanced modules like Phonex) and FlexiPod for outcome-driven execution.
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop&q=80"
                    alt="Flexibench ecosystem tools: DataBench, Phonex, and FlexiPod workflow orchestration"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/20 to-transparent" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalToolsSection />

      {/* Enhanced Phonex Section */}
      <section className="relative bg-gradient-to-b from-background via-secondary/20 to-background section-padding-y border-b overflow-hidden" id="phonex">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Column - Image */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=900&fit=crop&q=80"
                  alt="Phonex voice annotation engine showing audio waveforms and speech recognition interface"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </AspectRatio>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="section-title-gap-lg flex flex-col">
              <Tagline>Phonex</Tagline>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                Voice Annotation Engine{" "}
                <span className="text-primary">(Inside DataBench)</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {internalTools[1].description}
              </p>
            </div>

            <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative flex flex-col gap-6 p-0">
                <div>
                  <h3 className="text-foreground text-xl font-bold mb-3 flex items-center gap-3">
                    <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20">
                      <Mic className="text-primary h-5 w-5" />
                    </div>
                    Why It Matters
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{internalTools[1].whyItMatters}</p>
                </div>
                <div>
                  <h3 className="text-foreground text-xl font-bold mb-3">Phonex Capabilities</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {internalTools[1].capabilities.map((cap, idx) => (
                      <li key={idx} className="leading-relaxed">{cap}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                  <h4 className="font-bold text-foreground mb-2">Outcome:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cleaner audio training data, fewer iteration cycles to achieve stable ASR and voice
                    understanding models, and datasets that support voice-first AI with real robustness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced FlexiPod Section */}
      <section className="relative bg-gradient-to-b from-secondary/20 via-background to-secondary/20 section-padding-y border-b overflow-hidden" id="flexipod">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
          {/* Right Column - Image */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=900&fit=crop&q=80"
                  alt="FlexiPod cross-functional team collaboration showing annotation engineers, data scientists, and domain specialists"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </AspectRatio>
            </div>
          </div>
          
          {/* Left Column - Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="section-title-gap-lg flex flex-col">
              <Tagline>FlexiPod</Tagline>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                Cross-functional talent pods that take{" "}
                <span className="text-primary">full ownership</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {internalTools[2].description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative flex flex-col gap-4 p-0">
                  <h3 className="text-foreground text-xl font-bold flex items-center gap-3">
                    <div className="bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20">
                      <Users className="text-primary h-5 w-5" />
                    </div>
                    Why It Matters
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{internalTools[2].whyItMatters}</p>
                </CardContent>
              </Card>

              <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
                <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -ml-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative flex flex-col gap-4 p-0">
                  <h3 className="text-foreground text-xl font-bold mb-3">Pod Outcomes Include</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li className="leading-relaxed">Faster dataset delivery with agreed benchmarks</li>
                    <li className="leading-relaxed">Measurable quality lift across annotation milestones</li>
                    <li className="leading-relaxed">Embedded best practices and QA templates</li>
                    <li className="leading-relaxed">Seamless handoff into training and evaluation pipelines</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </main>
  );
}
