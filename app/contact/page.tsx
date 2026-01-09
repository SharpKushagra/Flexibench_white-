"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function ContactFormContent({
  formType,
  setFormType,
}: {
  formType: "sales" | "demo";
  setFormType: (type: "sales" | "demo") => void;
}) {
  return (
    <section className="relative bg-gradient-to-b from-background via-secondary/20 to-background section-padding-y border-b overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="container-padding-x container mx-auto relative z-10 flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Contact Form */}
        <div className="flex-1">
          <div className="flex gap-4 mb-6">
            <Button
              variant={formType === "sales" ? "default" : "outline"}
              onClick={() => setFormType("sales")}
              className="flex-1 transition-all duration-300"
            >
              Talk to Sales
            </Button>
            <Button
              variant={formType === "demo" ? "default" : "outline"}
              onClick={() => setFormType("demo")}
              className="flex-1 transition-all duration-300"
            >
              Request Demo
            </Button>
          </div>

          <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative flex flex-col gap-6 p-0">
              <div>
                <h2 className="text-foreground text-2xl font-bold mb-2">
                  {formType === "sales" ? "Talk to Sales" : "Request a Demo"}
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {formType === "sales"
                    ? "Get a tailored demo and learn how Flexibench can fit your annotation needs."
                    : "Choose a time and let us walk you through the platform."}
                </p>
              </div>

              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="h-12" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-sm font-semibold">Company</Label>
                  <Input id="company" placeholder="Company Name" className="h-12" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    placeholder={
                      formType === "sales"
                        ? "Tell us about your annotation needs..."
                        : "What would you like to see in the demo?"
                    }
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="text-base h-12">
                  {formType === "sales" ? "Contact Sales" : "Schedule Demo"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col gap-6 lg:w-96">
          <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30 hover:scale-105">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative flex flex-col gap-6 p-0">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-primary h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg">Email Us</h3>
                  <p className="text-muted-foreground text-sm">sales@flexibench.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-background to-secondary/40 rounded-2xl border-2 border-border/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30 hover:scale-105">
            <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -ml-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative flex flex-col gap-6 p-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="text-primary h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-lg">Schedule a Call</h3>
                  <p className="text-muted-foreground text-sm">
                    Book a time that works for you
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full h-12 group-hover:border-primary group-hover:text-primary transition-colors">
                <Link href="#">
                  View Calendar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const initialFormType = searchParams?.get("type") === "sales" ? "sales" : "demo";
  const [formType, setFormType] = useState<"sales" | "demo">(initialFormType);

  return (
    <>
      <LpNavbar1 />
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-950 via-emerald-900 to-teal-900 section-padding-y border-b overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container-padding-x container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 flex flex-col gap-8 text-white">
              <div className="section-title-gap-lg flex flex-col">
                <Tagline variant="white" className="mb-4">Contact</Tagline>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Start Building{" "}
                  <span className="relative inline-block">
                    Model-Ready Data
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8 Q75 4, 150 8 T298 8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>{" "}
                  Today
                </h1>
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Whether you want a demo, a consultation, or onboarding support, our team is ready to help
                  you succeed with Flexibench.
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop&q=80"
                    alt="Contact our team for Flexibench consultation and demo"
                    fill
                    priority
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent" />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormContent formType={formType} setFormType={setFormType} />
      <Footer1 />
    </>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      }>
        <ContactPageContent />
      </Suspense>
    </main>
  );
}
