"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiSparkles, HiCode, HiDatabase, HiCube, HiDeviceMobile, HiCog } from 'react-icons/hi';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { config } from '@/config';

const getLevelPercentage = (level) => {
    switch (level) {
        case 'Expert': return 95;
        case 'Advanced': return 85;
        case 'Intermediate': return 70;
        case 'Beginner': return 50;
        default: return 75;
    }
};

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const SkillCard = ({ skill, bgClass }) => {
    const levelPercentage = getLevelPercentage(skill.level);
    const gradientClass = {
        'bg-blue-500/10': 'from-blue-500/80 to-blue-500',
        'bg-emerald-500/10': 'from-emerald-500/80 to-emerald-500',
        'bg-orange-500/10': 'from-orange-500/80 to-orange-500',
        'bg-purple-500/10': 'from-purple-500/80 to-purple-500',
        'bg-cyan-500/10': 'from-cyan-500/80 to-cyan-500',
        'bg-green-500/10': 'from-green-500/80 to-green-500',
        'bg-pink-500/10': 'from-pink-500/80 to-pink-500',
        'bg-indigo-500/10': 'from-indigo-500/80 to-indigo-500',
        'bg-amber-500/10': 'from-amber-500/80 to-amber-500'
    }[bgClass] || 'from-primary/80 to-primary';

    return (
        <motion.div
            variants={itemAnimation}
            className="relative flex flex-col h-full group"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <div className="relative h-full p-4 rounded-xl border border-zinc-800/50
                          hover:border-zinc-700/50 transition-all duration-300
                          bg-gradient-to-br from-zinc-900/50 to-zinc-800/30
                          hover:from-zinc-800/50 hover:to-zinc-700/30
                          backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-medium text-primary/90 group-hover:text-primary transition-colors">
                        {skill.name}
                    </h3>
                    {skill.hot && (
                        <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 border-none px-2 py-0 text-xs animate-pulse">
                            <HiSparkles className="w-3 h-3 mr-1" />
                            Hot
                        </Badge>
                    )}
                </div>

                <div className="h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${levelPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={cn("h-full bg-gradient-to-r rounded-full shadow-lg", gradientClass)}
                    />
                </div>

                <div className="mt-2 flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium text-primary">{skill.level}</span>
                </div>
            </div>
        </motion.div>
    );
};

const CategorySection = ({ category }) => (
    <motion.div 
        className="space-y-6"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-zinc-900/30 to-zinc-800/20 border border-zinc-800/30 backdrop-blur-sm">
            <div className={cn("p-2.5 rounded-xl shadow-lg", category.bgClass)}>
                <div className={cn("w-5 h-5", category.iconClass)}>
                    {category.icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} bgClass={category.bgClass} />
            ))}
        </div>
    </motion.div>
);

const SkillsSection = () => {
    const skills = config.skills;

    return (
        <section className="py-24" id="skills">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <HiChip className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Skills & Technologies
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Mobile Development Expertise
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A comprehensive overview of my technical expertise in Flutter development,
                                mobile app architecture, and cross-platform solutions.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        className="space-y-16"
                    >
                        {skills.map((category, index) => (
                            <CategorySection key={index} category={category} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;