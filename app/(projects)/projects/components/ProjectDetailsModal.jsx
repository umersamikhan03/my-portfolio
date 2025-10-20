"use client"
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaExternalLinkAlt, FaGooglePlay, FaGithub } from 'react-icons/fa';

export const ProjectDetailsModal = ({ project, open, onOpenChange }) => {
    if (!project) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary flex items-center justify-between pr-8">
                        {project.title}
                        {project.category && (
                            <span className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                {project.category}
                            </span>
                        )}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Project Image */}
                    <div className="relative rounded-lg overflow-hidden border border-border">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-contain w-full max-h-[500px]"
                        />
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-primary">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-primary">About the Project</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    {(project.playStore || project.demo || project.github) && (
                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                            {project.playStore && (
                                <Button
                                    className="bg-green-600 hover:bg-green-700"
                                    asChild
                                >
                                    <a
                                        href={project.playStore}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <FaGooglePlay className="w-4 h-4" />
                                        View on Play Store
                                    </a>
                                </Button>
                            )}
                            {project.demo && (
                                <Button asChild>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        Live Demo
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                    </a>
                                </Button>
                            )}
                            {project.github && (
                                <Button
                                    variant="outline"
                                    asChild
                                >
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        View Code
                                    </a>
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

