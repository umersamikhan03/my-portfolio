"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { containerAnimation } from './Animations';

export const ProjectsList = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <>
            <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                className="space-y-4"
            >
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={index}
                        onClick={() => handleProjectClick(project)}
                    />
                ))}
            </motion.div>
            
            <ProjectDetailsModal
                project={selectedProject}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </>
    );
};