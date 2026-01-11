"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const brands = [
  { name: "Krutrim", id: "krutrim", color: "from-purple-500 to-indigo-600" },
  { name: "Databricks", id: "databricks", color: "from-orange-500 to-red-600" },
  { name: "Intel", id: "intel", color: "from-blue-500 to-cyan-600" },
  { name: "Samsung", id: "samsung", color: "from-gray-800 to-gray-900" },
  { name: "NVIDIA", id: "nvidia", color: "from-green-500 to-emerald-600" },
  { name: "IBM", id: "ibm", color: "from-blue-600 to-blue-800" },
];

export function LogoSection10() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 dark:from-indigo-950 dark:via-purple-950 dark:to-violet-950 border-b py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '64px 64px'
        }} />
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container-padding-x container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          {/* Enhanced Header */}
          <div className="section-title-gap-lg flex max-w-2xl flex-col items-center text-center opacity-0 animate-fade-in-up">
            <Tagline variant="ghost" className="mb-2">Trusted by industry leaders</Tagline>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Powering data-driven AI teams across industries
            </h2>
          </div>

          {/* Premium Brands Marquee */}
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <div className="animate-infinite-scroll flex w-max items-center gap-20 py-8">
                {[...brands, ...brands, ...brands].map((brand, index) => {
                  const uniqueKey = `brand-${brand.id}-${index}`;
                  return (
                    <div
                      key={uniqueKey}
                      className="flex-shrink-0 group relative"
                    >
                      {/* Brand Container with Gradient Border */}
                      <div className="relative px-10 py-6 rounded-2xl bg-gradient-to-br from-background to-secondary/50 border border-border/50 shadow-lg backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                        {/* Gradient Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                        
                        {/* Brand Name */}
                        <div className="relative">
                          <div className="text-foreground/70 group-hover:text-foreground transition-colors duration-300 font-bold text-xl md:text-2xl tracking-tight">
                            {brand.name}
                          </div>
                          {/* Underline Effect */}
                          <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${brand.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-33.333%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          will-change: transform;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
