"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';
import Link from 'next/link';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';

const ProjectCarousel = () => {
  const projects = config.projects.slice(0, 6); // Show first 6 projects

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-16 w-full"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-primary">Featured Projects</h3>
        <Link 
          href="/projects"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          View All
          <HiExternalLink className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <Link href="/projects">
                <div className="relative overflow-hidden rounded-xl bg-secondary/5 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={256}
                      height={192}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-primary group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlays for scroll indication */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;
