import { ReactNode } from 'react';
import { Badge } from '@/Components/ui/badge';
import ScrollReveal from '@/Components/ScrollReveal';

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    align?: 'center' | 'left';
    dark?: boolean;
    className?: string;
    titleExtra?: ReactNode;
}

export default function SectionHeader({
    badge,
    title,
    description,
    align = 'center',
    dark = false,
    className = '',
    titleExtra,
}: SectionHeaderProps) {
    return (
        <div
            className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl mb-16 ${className}`}
        >
            {badge && (
                <ScrollReveal delay={0}>
                    <Badge
                        variant={dark ? 'highlight' : 'secondary'}
                        className={`mb-4 ${!dark ? 'text-plusharoo-primary bg-plusharoo-highlight/10 border-plusharoo-highlight/20' : ''}`}
                    >
                        {badge}
                    </Badge>
                </ScrollReveal>
            )}
            <ScrollReveal delay={0.1}>
                <h2
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
                        dark ? 'text-white' : 'text-plusharoo-primary'
                    }`}
                >
                    {title}
                    {titleExtra}
                </h2>
            </ScrollReveal>
            {description && (
                <ScrollReveal delay={0.2}>
                    <p
                        className={`mt-4 text-lg leading-relaxed ${
                            dark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                    >
                        {description}
                    </p>
                </ScrollReveal>
            )}
        </div>
    );
}
