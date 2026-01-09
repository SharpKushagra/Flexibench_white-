"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Frequently asked questions about Flexibench
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Find answers to common questions about our annotation platform, capabilities, and how it
              can help your team. Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
              {/* General FAQ Section */}
              <div className="flex flex-col gap-2">
                {/* Section Title */}
                <h2 className="text-foreground text-lg font-semibold md:text-xl">
                  General
                </h2>
                {/* FAQ Accordion */}
                <Accordion
                  type="single"
                  collapsible
                  aria-label="General FAQ items"
                >
                  {/* FAQ Item 1 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      What makes Flexibench different from other annotation platforms?
                    </AccordionTrigger>
                    <AccordionContent>
                      Flexibench treats annotation as data engineering, not just task management. We
                      integrate deeply with training workflows, enforce consistent ontologies across
                      projects, support auditable quality pipelines, and provide feedback signals back
                      into model training. Our platform is built for enterprise-grade governance and
                      model-ready datasets.
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ Item 2 */}
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      What annotation modalities does Flexibench support?
                    </AccordionTrigger>
                    <AccordionContent>
                      Flexibench supports comprehensive annotation workflows across Text, Image, Video,
                      and Audio modalities. Each modality includes specialized tooling and workflows
                      designed for quality, governance, and model-aligned outputs. Our platform handles
                      everything from named entity extraction in text to temporal tracking in video.
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ Item 3 */}
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      How does AI-assisted labeling work?
                    </AccordionTrigger>
                    <AccordionContent>
                      Flexibench embeds model-driven pre-label suggestions into annotation workflows.
                      Models generate pre-labels for repetitive tasks with confidence scores that guide
                      human review priorities. Our active learning integration focuses labeling efforts
                      on high-impact data, reducing manual effort while maintaining human oversight for
                      quality.
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ Item 4 */}
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      What quality control features are available?
                    </AccordionTrigger>
                    <AccordionContent>
                      Flexibench includes multi-stage review pipelines, consensus scoring across
                      annotators, benchmark and gold standard comparisons, real-time quality monitoring
                      dashboards, and full auditability. Every label, edit, and review action is
                      tracked with metadata (who, when, how) for compliance and governance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Technical FAQ Section */}
              <div className="flex flex-col gap-2">
                {/* Section Title */}
                <h2 className="text-foreground text-lg font-semibold md:text-xl">
                  Technical
                </h2>
                {/* FAQ Accordion */}
                <Accordion
                  type="single"
                  collapsible
                  aria-label="Technical FAQ items"
                >
                  {/* FAQ Item 1 */}
                  <AccordionItem value="technical-1">
                    <AccordionTrigger className="text-left">
                      How do I integrate Flexibench with my ML training pipeline?
                    </AccordionTrigger>
                    <AccordionContent>
                      Flexibench provides REST APIs and Python SDK for seamless integration with your
                      ML workflows. You can import raw data, export annotated datasets with tags and
                      metadata, and integrate with TensorFlow, PyTorch, and ML orchestration systems.
                      Our APIs support batch operations and active learning loops for iterative model
                      development.
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ Item 2 */}
                  <AccordionItem value="technical-2">
                    <AccordionTrigger className="text-left">
                      Can I customize annotation workflows for my use case?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, Flexibench is designed to adapt to your specific annotation requirements.
                      You can configure multi-stage review workflows, define custom ontologies and
                      taxonomies with version control, set up task routing rules, and customize
                      annotator interfaces. The platform supports use case-specific configurations
                      rather than one-size-fits-all solutions.
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ Item 3 */}
                  <AccordionItem value="technical-3">
                    <AccordionTrigger className="text-left">
                      What is DataBench and how does it relate to Flexibench?
                    </AccordionTrigger>
                    <AccordionContent>
                      DataBench is a central workspace within the Flexibench ecosystem for building,
                      refining, and governing enterprise datasets. It provides unified dataset
                      repositories, workflow builders, labelset management, review dashboards, and
                      experiment integration. DataBench includes specialized modules like Phonex for
                      voice annotation.
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ Item 4 */}
                  <AccordionItem value="technical-4">
                    <AccordionTrigger className="text-left">
                      Does Flexibench support on-premise deployment?
                    </AccordionTrigger>
                    <AccordionContent>
                      Flexibench is available as a cloud platform with enterprise-grade security and
                      compliance features. For specific on-premise deployment requirements, please
                      contact our sales team to discuss custom deployment options tailored to your
                      security and compliance needs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
