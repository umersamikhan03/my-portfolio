"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(2024); // Default year to prevent hydration mismatch

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-6 border-t border-secondary/20 flex items-center justify-center"
        >
            <div className="text-center">
                <div className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
                    <span>© {currentYear} {config.developer.name}</span>
                    <span>•</span>
                    <span>All rights reserved</span>
                    <span>•</span>
                    <span>Made with {config.developer.name}</span>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
