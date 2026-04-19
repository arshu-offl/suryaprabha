"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Target, Lightbulb, BarChart3 } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Strategy First",
      description: "I build comprehensive, multi-channel marketing strategies that align directly with overarching business goals."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Creative Execution",
      description: "From engaging copywriting to visually striking creatives using Canva, I ensure the brand narrative is cohesive."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Data-Driven ROI",
      description: "Leveraging Google Analytics and continuous A/B testing to optimize campaigns and maximize return on ad spend."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="I blend analytical thinking with creative storytelling to build digital experiences that convert."
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light"
          >
            <p>
              Based in Chennai, I'm a results-driven <strong className="font-medium text-foreground">Digital Marketing Executive</strong> with a deep passion for scaling brands. I specialize in bridging the gap between brand identity and digital performance.
            </p>
            <p>
              My expertise spans across SEO, Pay-Per-Click advertising, and robust social media strategies. Having managed multi-channel campaigns on Google Ads, Meta Ads, and LinkedIn, I know what it takes to generate high-quality leads and nurture them into loyal customers.
            </p>
            <p>
              Beyond the metrics, I hold a strong foundation in <strong className="font-medium text-foreground">UI/UX principles</strong>. I believe that driving traffic is only half the battle; delivering an exceptional, seamless customer experience is what ultimately drives conversions and retention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex gap-4 items-start group hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
