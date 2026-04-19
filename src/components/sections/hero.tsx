"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const [isHoveringArea, setIsHoveringArea] = useState(false);
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">


        {/* Spotlight following cursor */}
        <motion.div
          animate={{
            x: mousePos.x - 200,
            y: mousePos.y - 200,
            opacity: isHoveringArea ? 1 : 0,
            scale: isHoveringArea ? 1 : 0.8,
            backgroundColor: "rgba(212, 163, 115, 0.5)",
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
          className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none z-0"
        />
      </div>

      <div className="container px-4 mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative z-20 cursor-default"
            onMouseEnter={() => setIsHoveringArea(true)}
            onMouseLeave={() => setIsHoveringArea(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className={`inline-block mb-4 px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium tracking-wide transition-colors duration-300 ${isHoveringArea ? 'text-black dark:text-black border-black/20' : 'text-primary'}`}
            >
              Digital Marketing Executive
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span
                className={`transition-colors duration-300 relative z-20 ${isHoveringArea ? 'text-black dark:text-black drop-shadow-sm' : ''}`}
              >
                Hi, I'm{" "}
              </span>
              <motion.span
                className="text-gradient relative inline-block cursor-default z-20 pb-4 pr-2"
                onMouseEnter={() => setIsHoveringName(true)}
                onMouseLeave={() => setIsHoveringName(false)}
                animate={{
                  textShadow: isHoveringName ? "0px 0px 10px rgba(212, 163, 115, 0.3)" : "0px 0px 0px rgba(212, 163, 115, 0)"
                }}
                transition={{ duration: 0.3 }}
              >
                Suryaprabha
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light leading-relaxed relative z-20 transition-colors duration-300 ${isHoveringArea ? 'text-black dark:text-black font-normal' : 'text-muted-foreground'}`}
            >
              Driving Growth Through Data, Creativity & Strategy. Elevating brands with SEO, PPC, and impactful storytelling.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}
