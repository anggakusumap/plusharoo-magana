import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { ShoppingBag } from "lucide-react";

interface Product {
    name: string;
    emoji: string;
    tagline: string;
    price?: string;
}

interface ProductCardProps {
    product: Product;
    className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
    return (
        <Card 
            className={cn(
                "group overflow-hidden border-border/50 bg-white/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl",
                className
            )}
        >
            <div className="aspect-square bg-secondary/30 relative flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                    {product.emoji}
                </span>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                    {product.tagline}
                </p>
            </CardContent>
            
            <CardFooter className="p-6 pt-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Button variant="outline" size="sm" className="rounded-full text-xs gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
                    <ShoppingBag className="w-3 h-3" />
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}
