"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Search, 
  Megaphone, 
  Share2, 
  PenTool, 
  Mail, 
  LineChart, 
  MonitorSmartphone, 
  Palette 
} from "lucide-react";

const skills = [
  { name: "SEO Optimization", icon: <Search className="w-5 h-5" />, category: "Growth" },
  { name: "PPC Advertising", icon: <Megaphone className="w-5 h-5" />, category: "Growth" },
  { name: "Social Media Strategy", icon: <Share2 className="w-5 h-5" />, category: "Growth" },
  { name: "Content Marketing", icon: <PenTool className="w-5 h-5" />, category: "Creative" },
  { name: "Email Marketing (Brevo)", icon: <Mail className="w-5 h-5" />, category: "Growth" },
  { name: "Web Analytics", icon: <LineChart className="w-5 h-5" />, category: "Technical" },
  { name: "CMS (WordPress/Wix)", icon: <MonitorSmartphone className="w-5 h-5" />, category: "Technical" },
  { name: "UI/UX & Design (Canva)", icon: <Palette className="w-5 h-5" />, category: "Creative" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-accent/30 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="Core Capabilities" 
          subtitle="A versatile toolkit designed to attract, engage, and convert audiences across multiple digital touchpoints."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto"
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex flex-col items-center text-center justify-center gap-4 rounded-2xl group cursor-default"
            >
              <div className="p-4 rounded-full bg-background border border-primary/10 group-hover:border-primary/40 group-hover:text-primary transition-all duration-300 text-muted-foreground shadow-sm">
                {skill.icon}
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm">{skill.name}</h4>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mt-1 block font-semibold">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
