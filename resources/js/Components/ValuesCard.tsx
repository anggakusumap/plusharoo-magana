import { Card, CardContent } from "@/Components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ValuesCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export default function ValuesCard({ title, description, icon: Icon, className }: ValuesCardProps) {
    return (
        <Card className={cn("border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-secondary/30", className)}>
            <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-primary">
                    <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
