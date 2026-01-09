"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsSection1Props {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  avatarSrc?: string;
}

export default function TestimonialsSection1({
  quote = "Flexibench finally gave us consistent labels we can trust for our models. The quality control workflows alone were a game-changer.",
  authorName = "Head of ML",
  authorRole = "Global Fintech",
  avatarSrc = "/placeholder-user.jpg",
}: TestimonialsSection1Props) {
  return (
    <section
      className="relative container-padding-x section-padding-y flex flex-col items-center border-b overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/30"
      aria-labelledby="testimonial-title"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10">
        {/* Quote Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30">
          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>

        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-foreground"
        >
          &quot;{quote}&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-5">
          {/* Author Avatar */}
          <Avatar className="h-16 w-16 rounded-2xl ring-4 ring-primary/20 shadow-lg md:h-20 md:w-20">
            <AvatarImage src={avatarSrc} alt={authorName} />
          </Avatar>

          {/* Author Details */}
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-lg font-bold text-foreground">
              {authorName}
            </span>
            <span className="text-sm text-muted-foreground font-medium">{authorRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
