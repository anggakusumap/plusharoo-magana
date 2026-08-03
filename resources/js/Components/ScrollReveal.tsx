import { useRef, ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface ScrollRevealProps {
    children: ReactNode;
    variant?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'fadeIn';
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    threshold?: number | 'some' | 'all';
}

const variants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export default function ScrollReveal({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
    threshold = 'some',
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for child animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1,
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 'some' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger child item
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
