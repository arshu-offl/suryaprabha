"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Digital Marketing Executive",
    company: "White Coat Consulting Services",
    location: "Chennai",
    date: "Oct 2024 - Mar 2025",
    highlights: [
      "Orchestrated full-funnel SEO strategies (on-page, technical, off-page) driving significant uplifts in organic search visibility and traffic.",
      "Managed precision-targeted paid search and social campaigns across Google Ads and Meta, optimizing CPC and maximizing conversion rates.",
      "Spearheaded B2B LinkedIn marketing initiatives, optimizing profiles and content to capture high-value professional leads.",
      "Designed and executed data-backed email marketing flows via Brevo, segmenting audiences to substantially increase open and click-through rates.",
      "Maintained and optimized WordPress and Wix CMS sites, ensuring pristine SEO adherence and flawless mobile responsiveness."
    ]
  },
  {
    role: "Freelance Digital Marketing Executive",
    company: "Hairchoppers Salon",
    location: "Remote / Chennai",
    date: "Oct 2023 - May 2024",
    highlights: [
      "Directed end-to-end social media strategies on Facebook and Instagram, transforming engagement metrics and fueling inbound lead generation.",
      "Produced compelling visual content (reels, posters) and compelling copy aligned with seasonal promotional calendars.",
      "Leveraged social media insights to iteratively optimize content performance, expanding reach and lead conversion efficiency.",
      "Acted as the primary community manager, nurturing prospects through DMs and comments to build brand loyalty and drive foot traffic."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Professional Journey"
          subtitle="A track record of leveraging data and creativity to drive measurable business outcomes."
        />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2 z-10 hidden md:block" />

                  {/* Content Container */}
                  <div className={`md:w-1/2 flex flex-col ${isEven ? 'md:pl-12' : 'md:pr-12 md:items-end md:text-right'}`}>
                    <div className="glass-card p-8 rounded-2xl w-full hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <h4 className="text-lg text-primary font-medium mt-1 mb-4">{exp.company}</h4>

                      <div className={`flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6 ${isEven ? '' : 'md:justify-end'}`}>
                        <div className="flex items-center gap-1.5 bg-accent/50 px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.date}
                        </div>
                        <div className="flex items-center gap-1.5 bg-accent/50 px-3 py-1 rounded-full">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className={`space-y-3 text-sm text-muted-foreground leading-relaxed ${isEven ? '' : 'md:text-right'}`}>
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className={`flex gap-3 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
