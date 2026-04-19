"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "SEO Visibility & Organic Traffic Scale",
    category: "SEO & Content",
    problem: "A B2B consulting firm struggled with stagnant organic traffic and low domain authority, relying heavily on expensive paid ads.",
    strategy: "Implemented a robust content silo architecture, targeted long-tail commercial keywords, and launched a targeted outreach campaign for high-authority backlinks.",
    execution: "Optimized 40+ existing pages for search intent, published 15 long-form pillar articles, and resolved technical SEO bottlenecks (Core Web Vitals).",
    result: "180% increase in organic traffic in 6 months, and 5 primary keywords ranking on Page 1 of Google, significantly reducing blended CPA.",
    metrics: ["+180% Organic Traffic", "Page 1 Rankings", "Lower CPA"],
    color: "from-blue-500/20 to-cyan-400/20"
  },
  {
    title: "Omnichannel Lead Generation Funnel",
    category: "PPC & CRO",
    problem: "A local service business was experiencing high cost-per-lead (CPL) and low quality leads from their existing Facebook Ads.",
    strategy: "Shifted from generic broad targeting to hyper-local lookalike audiences, paired with a dedicated, high-converting landing page built on Wix.",
    execution: "Created A/B tested ad creatives using Canva, implemented a multi-step form to qualify leads, and set up a Brevo automated email nurture sequence.",
    result: "Decreased CPL by 45%, while improving lead-to-appointment conversion rate from 12% to 28%.",
    metrics: ["-45% CPL", "2.3x Conversion Rate", "Automated Nurture"],
    color: "from-primary/20 to-rose-400/20"
  },
  {
    title: "Brand Revamp & Social Media Growth",
    category: "Social Media Marketing",
    problem: "A lifestyle brand had a fragmented social presence, inconsistent posting schedule, and declining engagement rates.",
    strategy: "Developed a cohesive brand narrative, introduced short-form video (Reels) as the primary format, and leveraged user-generated content.",
    execution: "Managed the daily content calendar, ran targeted Instagram follower campaigns, and proactively engaged with niche communities.",
    result: "Grew Instagram following by 5,000+ targeted users, tripled average engagement per post, and directly generated inbound inquiries.",
    metrics: ["+5k Followers", "3x Engagement", "Direct Inbound Sales"],
    color: "from-emerald-500/20 to-teal-400/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-accent/30 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="Featured Case Studies" 
          subtitle="Real problems, strategic solutions, and measurable impact."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card Header Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md p-2 rounded-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-6">{project.title}</h3>
                
                <div className="space-y-4 mb-8 flex-1 text-sm font-light text-muted-foreground">
                  <div>
                    <strong className="text-foreground font-medium block mb-1">Challenge:</strong>
                    {project.problem}
                  </div>
                  <div>
                    <strong className="text-foreground font-medium block mb-1">Strategy & Execution:</strong>
                    {project.strategy} {project.execution}
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border">
                  <strong className="text-foreground font-medium block mb-3 text-sm">Key Results:</strong>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="w-3 h-3" />
                        {metric}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 font-medium">
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
