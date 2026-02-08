import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-primary/30 mt-6 rounded-full", centered && "mx-auto")} />
        </div>
    );
}
