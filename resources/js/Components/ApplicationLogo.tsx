import { Heart } from 'lucide-react';
import { SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
    className?: string;
}

export default function ApplicationLogo({ className = '', ...props }: Props) {
    return (
        <Heart 
            className={`text-primary ${className}`} 
            fill="currentColor"
            {...props}
        />
    );
}
