# Flexibench Website Content Migration - Revised Plan

## Overview
Transform the existing MindSpace template into Flexibench website by replacing all content while maintaining the design system. **Key requirements:**
1. **Simple navbar** - Maximum 4-5 main items with dropdowns for sub-items
2. **Use ALL template components** - Every design component from template must be utilized
3. **Extraordinary UI** - Each component visually distinct with unique design variations

## Available Template Components to Utilize
1. **HeroSection2** - Hero with image and feature bullets
2. **LogoSection10** - Scrolling customer logos
3. **TestimonialsSection1** - Testimonial quotes with avatar
4. **BentoGrid6** - Asymmetric feature grid with images
5. **FeatureSection9** - 4-column icon-based feature grid
6. **StatsSection4** - Statistics/metrics cards
7. **PricingSection3** - Pricing cards (repurpose as CTA section)
8. **FaqSection2** - FAQ accordion (two columns)
9. **Footer1** - Footer navigation
10. **Accordion** (from UI library) - For expandable content
11. **NavigationMenu** (from UI library) - For dropdown navigation

## Simplified Navigation Structure
**File**: `components/pro-blocks/landing-page/lp-navbars/lp-navbar-1.tsx`

### Navbar Items (Maximum 5):
1. **Home** (simple link)
2. **Platform** (dropdown: Overview, Feature Modules, Internal Tools)
3. **Capabilities** (dropdown: Text, Image, Video, Audio)
4. **Use Cases** (simple link to /use-cases page)
5. **Resources** (simple link to /resources page)
6. **Get Started** (CTA button)

Hidden from main nav but accessible via footer:
- Why Flexibench (section on homepage)
- Quality & Governance (section on homepage)
- Customers (section on homepage)
- Contact (footer link)

## Homepage Structure (app/page.tsx)
Use ALL template components with visually distinct designs:

### Section 1: Hero
**Component**: Modified `HeroSection2`
- Title: "Flexibench — Enterprise Data Annotation Platform"
- Description: "Modern multimodal annotation platform for AI model training data with quality workflows and integrated tooling"
- Feature bullets: 3 key differentiators with Check icons
- CTA buttons: "Get Started" and "Learn More"
- Hero image: Annotation platform visualization
- **Design**: Keep existing asymmetric layout with bg-secondary

### Section 2: Customer Logos (Trust Signal)
**Component**: `LogoSection10`
- Scrolling logo wall
- Text: "Trusted by data-driven AI teams across industries"
- Customer placeholder logos (8 logos)
- **Design**: Keep existing infinite scroll animation

### Section 3: Why Flexibench
**Component**: Create new using `BentoGrid6` pattern but with different layout
- Headline: "Because High-Quality Data Is the Foundation of Every Successful AI Model"
- 5 narrative points as Bento grid cards:
  1. Annotation Is Not a Service, It Is the Data Engine
  2. Built From Experience, Not Assumption
  3. Quality First by Design
  4. Annotation That Adapts to the Problem
  5. From Annotation to Model Outcomes
- **Design**: Use BentoGrid6 but with 5 cards in asymmetric grid (2-1-2 layout)
- Each card has icon, title, and brief description
- Different background colors/opacities for visual distinction

### Section 4: Platform Overview (Expandable)
**Component**: Create new using `Accordion` component (from FAQ pattern)
- Headline: "The Enterprise Annotation Control Plane for Model-Ready Data"
- Subheading: Platform description
- 4 Accordion items for Feature Modules:
  1. Ontology & Taxonomy Management
  2. AI-Assisted Labeling
  3. Workflow & Quality Assurance
  4. APIs & Integrations
- Each accordion shows: Why it matters, Key capabilities, Outcome
- **Design**: Use two-column layout like FAQ but styled differently
- Left: Tagline + Headline + Description
- Right: Accordion with icons for each module
- Background: bg-background (alternating with previous section)

### Section 5: Capabilities Overview
**Component**: Modified `FeatureSection9` (4-column icon grid)
- Headline: "Multimodal annotation capabilities built for real-world model training"
- 4 cards: Text, Image, Video, Audio Annotation
- Each with icon, title, brief description, "Learn more" link
- **Design**: Keep 4-column grid but use different icons and styling
- Background: bg-secondary
- Icons: FileText, Image, Video, Music (from lucide-react)

### Section 6: Internal Tools
**Component**: Create new using `BentoGrid6` pattern with different card arrangement
- Hero message: "Extend Annotation from Tasks to Strategy"
- 3 cards: DataBench, Phonex, FlexiPod
- Each card larger, more detailed with feature lists
- **Design**: Use 1-2 grid (one wide card, two smaller cards stacked)
- Background: bg-background

### Section 7: Stats/Metrics
**Component**: `StatsSection4`
- Metrics: 
  - "Datasets annotated" (5M+)
  - "Annotation quality score" (4.9/5)
  - "Time saved" (500K+ hours)
- **Design**: Keep existing 3-card horizontal layout
- Background: bg-secondary

### Section 8: Testimonial 1
**Component**: `TestimonialsSection1`
- Quote from Head of ML, Global Fintech
- **Design**: Keep existing dark blue background with white text

### Section 9: Use Cases Preview
**Component**: Create new using modified `FeatureSection9` but with 3 columns
- Headline: "Annotation Use Cases Across Industries"
- Showcase 3 featured use cases as cards
- Each card: Industry, Modality icon, Problem, "View Case" link
- **Design**: 3-column grid, cards with hover effects
- Background: bg-background

### Section 10: Quality & Governance
**Component**: Create new using `FeatureSection9` pattern but vertical layout
- Headline: "Annotation with Accountability — Built for Trust"
- 5 core principles displayed as icon cards in 2-3 grid
- Each with icon, title, description
- **Design**: Similar to FeatureSection9 but different grid (2 columns desktop, 1 mobile)
- Background: bg-secondary

### Section 11: Testimonial 2
**Component**: `TestimonialsSection1`
- Quote from Director of AI, Healthcare Platform
- **Design**: Keep existing dark blue background

### Section 12: Get Started CTA
**Component**: Repurpose `PricingSection3` structure but as CTA cards
- Headline: "Start Building Model-Ready Data Today"
- Two CTA cards side-by-side:
  1. "Talk to Sales" - Get tailored demo
  2. "Request a Demo" - Schedule walkthrough
- Each card has description and CTA button
- **Design**: Similar to pricing cards but styled as action cards
- Background: bg-background

### Section 13: FAQ
**Component**: `FaqSection2`
- FAQ content about Flexibench (platform, capabilities, quality, integration)
- Two accordion sections: General, Technical
- **Design**: Keep existing two-column layout
- Background: bg-secondary

### Section 14: Footer
**Component**: `Footer1`
- Updated navigation links
- Flexibench branding
- All page links organized by category
- Background: bg-background

## Additional Pages (Separate Routes)

### /platform (app/platform/page.tsx)
- Detailed platform overview
- Use BentoGrid6 for feature modules
- Use FeatureSection9 for key capabilities
- Use Accordion for detailed explanations

### /capabilities (app/capabilities/page.tsx)
- Overview page
- Links to individual capability pages

### /capabilities/[type] (app/capabilities/[type]/page.tsx)
- Dynamic route for Text, Image, Video, Audio
- Use BentoGrid6 for capabilities showcase
- Use StatsSection4 for capability metrics

### /internal-tools (app/internal-tools/page.tsx)
- Detailed DataBench section (BentoGrid6)
- Phonex subsection (FeatureSection9)
- FlexiPod section (modified FeatureSection9)
- TestimonialsSection1 for tool success stories

### /use-cases (app/use-cases/page.tsx)
- Industry Explorer with filters
- Use modified BentoGrid6 for use case cards
- Filter UI using Select components from UI library
- Search functionality
- 22 use cases in filterable grid

### /resources (app/resources/page.tsx)
- Use BentoGrid6 for resource categories (Blog, White Papers, Docs, Best Practices)
- Each card links to resource sections
- Use FeatureSection9 for resource highlights

### /contact (app/contact/page.tsx)
- Use HeroSection2 pattern for hero
- Contact form using Form components from UI library
- Two CTA sections (Talk to Sales, Request Demo) using PricingSection3 pattern

## Content Data Structure
**New**: `lib/flexibench-content.ts`
- Centralized content constants
- Use cases data (all 22 with metadata)
- Platform features data
- Capabilities data
- Testimonials data
- Industry and modality filters

## Visual Design Principles

### Background Alternation
- Hero: bg-secondary
- Section 2 (Logos): bg-background
- Section 3 (Why): bg-secondary
- Section 4 (Platform): bg-background
- Section 5 (Capabilities): bg-secondary
- Continue alternating for visual rhythm

### Component Variations
Each component type gets unique styling:
- **BentoGrid variations**: Different grid layouts (2-1-2, 1-2, 3-column, etc.)
- **FeatureSection variations**: 2-column, 3-column, 4-column, vertical
- **Card styling**: Different border radius, shadows, backgrounds per section
- **Icons**: Different icon sets per section (lucide-react)
- **Colors**: Vary primary color usage, muted backgrounds

### Typography Hierarchy
- Use Tagline component consistently
- Heading sizes: heading-xl (hero), heading-lg (sections)
- Maintain text-muted-foreground for descriptions
- Use font-semibold for card titles

## File Changes Summary

### Modified Files
- `app/layout.tsx` - Update metadata to Flexibench
- `app/page.tsx` - Complete homepage restructure
- `components/pro-blocks/landing-page/lp-navbars/lp-navbar-1.tsx` - Simplified nav with dropdowns
- `components/pro-blocks/landing-page/hero-sections/hero-section-2.tsx` - Flexibench hero content
- `components/pro-blocks/landing-page/footers/footer-1.tsx` - Updated footer
- `components/pro-blocks/logo.tsx` - Flexibench branding

### New Components (Homepage Sections)
- `components/pro-blocks/landing-page/why-flexibench-section.tsx` (uses BentoGrid pattern)
- `components/pro-blocks/landing-page/platform-overview-section.tsx` (uses Accordion pattern)
- `components/pro-blocks/landing-page/internal-tools-section.tsx` (uses BentoGrid pattern)
- `components/pro-blocks/landing-page/capabilities-overview-section.tsx` (uses FeatureSection pattern)
- `components/pro-blocks/landing-page/use-cases-preview-section.tsx` (uses FeatureSection pattern)
- `components/pro-blocks/landing-page/quality-governance-section.tsx` (uses FeatureSection pattern)
- `components/pro-blocks/landing-page/get-started-cta-section.tsx` (uses PricingSection pattern)

### New Pages
- `app/platform/page.tsx`
- `app/capabilities/page.tsx`
- `app/capabilities/[type]/page.tsx`
- `app/internal-tools/page.tsx`
- `app/use-cases/page.tsx`
- `app/resources/page.tsx`
- `app/contact/page.tsx`

### New Utilities
- `lib/flexibench-content.ts` - All content constants

## Implementation Checklist

### Phase 1: Core Setup
- [ ] Update branding (logo, metadata, favicon)
- [ ] Simplify navbar with dropdowns
- [ ] Create content data file

### Phase 2: Homepage Sections
- [ ] Hero section (update HeroSection2)
- [ ] Customer logos (update LogoSection10)
- [ ] Why Flexibench (new BentoGrid variation)
- [ ] Platform Overview (new Accordion section)
- [ ] Capabilities Overview (update FeatureSection9)
- [ ] Internal Tools (new BentoGrid variation)
- [ ] Stats (update StatsSection4)
- [ ] Testimonials (update TestimonialsSection1 x2)
- [ ] Use Cases Preview (new FeatureSection variation)
- [ ] Quality & Governance (new FeatureSection variation)
- [ ] Get Started CTA (repurpose PricingSection3)
- [ ] FAQ (update FaqSection2)
- [ ] Footer (update Footer1)

### Phase 3: Additional Pages
- [ ] Platform page
- [ ] Capabilities pages
- [ ] Internal Tools page
- [ ] Use Cases page with filters
- [ ] Resources page
- [ ] Contact page

### Phase 4: Polish
- [ ] Ensure all sections visually distinct
- [ ] Verify responsive design
- [ ] Test navigation and links
- [ ] Optimize images and assets
- [ ] Final content review
