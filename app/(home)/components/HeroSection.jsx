/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiDeviceMobile } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-8 relative"
        >
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
          >
            <HiDeviceMobile className="w-5 h-5" />
            <span className="text-sm font-medium">Flutter Mobile Developer</span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemAnimation}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <img
                src="/projects/my-image.png"
                alt="Umer Bin Sami"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                variants={textAnimation}
                className="block text-primary mb-2"
              >
                Hi, I'm {config.developer.name}
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-white/60 text-2xl md:text-4xl"
              >
                I build mobile applications
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            I'm a Flutter mobile app developer with 3+ years of experience building scalable, 
            user-focused mobile applications. I specialize in cross-platform development, 
            IoT integration, and creating exceptional user experiences.
          </motion.p>

          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            <Link href={"/projects"}>
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold"
              >
                View Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
        
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default HeroSection;