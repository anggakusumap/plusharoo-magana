import { ReactNode, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export default function GlowCard({
    children,
    className = '',
    glowColor = 'rgba(244, 63, 94, 0.15)',
}: GlowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            className={cn(
                'relative rounded-2xl bg-white border border-slate-200/80 overflow-hidden transition-all duration-300',
                'hover:shadow-premium-hover hover:-translate-y-1',
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Mouse-tracking glow */}
            {isHovered && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
                    }}
                />
            )}
            {/* Gradient border on hover */}
            <div
                className={cn(
                    'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none',
                    isHovered && 'opacity-100'
                )}
                style={{
                    padding: '1px',
                    background: 'linear-gradient(135deg, #F43F5E, #FB7185, transparent, transparent)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
