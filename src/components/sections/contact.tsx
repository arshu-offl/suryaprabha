"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Looking to elevate your brand's digital presence? Let's connect and discuss how we can achieve your marketing goals."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 font-light">
                  I'm currently open to new opportunities, freelance projects, and collaborations.
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  <a href="mailto:suryaprabha802@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</p>
                      <p className="font-medium">suryaprabha802@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+91" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Phone</p>
                      <p className="font-medium">+91 9123456789</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-foreground group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Location</p>
                      <p className="font-medium">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border flex gap-4">
                <a
                  href="https://www.linkedin.com/in/suryaprabha-s-ab03812bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (UI only for mockup) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="glass-card p-8 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="button" size="lg" className="w-full gap-2 group mt-2">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
