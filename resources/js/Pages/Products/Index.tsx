import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/Components/ScrollReveal';
import GlowCard from '@/Components/GlowCard';
import SectionHeader from '@/Components/SectionHeader';
import ParticleBackground from '@/Components/ParticleBackground';
import { getAssetUrl } from '@/lib/utils';

// Product Data Type
type Product = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    material: string[];
    size: string;
    tags: string[];
    emoji: string;
    color: string;
    src: string;
};

// Mock Data based on user input (Now all updated with correct photos)
const products: Product[] = [
    {
        id: 'lumi-dream-owl',
        name: 'Lumi Dream Owl',
        emoji: '🦉',
        color: 'bg-amber-100/40',
        tagline: 'Wise & Wonderful',
        description: 'A soft, cuddly plush toy inspired by warmth, love, and creativity. Lumi Owl is a handcrafted plush toy made with love and care by skilled hands of creative mothers.',
        material: ['Soft Rayon Fabric', 'High-density fiberfill (dacron)'],
        size: 'Height 29 cm x Width 27 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/lumi-dream-owl.jpg'
    },
    {
        id: 'lumi-piggy',
        name: 'Lumi Piggy',
        emoji: '🐷',
        color: 'bg-pink-100/40',
        tagline: 'Charming & Affectionate',
        description: 'Lumi Piggy is a lovingly handcrafted plush toy, created by the skilled hands of creative mothers and inspired by children’s love for playful animal companions.',
        material: ['Soft Rayon Fabric', 'High-density fiberfill (dacron)'],
        size: 'Height 13 cm x Width 22 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/lumi-piggy.jpg'
    },
    {
        id: 'giri-giraffe',
        name: 'Giri the Gentle Giraffe',
        emoji: '🦒',
        color: 'bg-yellow-100/40',
        tagline: 'Curiosity & Warmth',
        description: 'Giri features a soft touch, calming presence, and a timeless handmade character. Perfect as a cuddle companion, decorative accent, or meaningful gift.',
        material: ['Soft Rayon Fabric', 'Premium high-density dacron'],
        size: 'Height 35 cm x Width 26 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/giri-giraffe.jpg'
    },
    {
        id: 'dori-dolphin',
        name: 'Dori Bliss Dolphin',
        emoji: '🐬',
        color: 'bg-blue-100/40',
        tagline: 'Gentle Waves',
        description: 'Dori Dolphin is a delicately handcrafted plush toy designed to capture the calm and joy of the ocean. Offers a soothing touch and charming presence.',
        material: ['Soft Rayon Fabric', 'High-density fiberfill (dacron)'],
        size: 'Height 8 cm x Width 15 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/dori-dolphin.jpg'
    },
    {
        id: 'bimo-bear',
        name: 'Bimo Bear',
        emoji: '🧸',
        color: 'bg-amber-200/20',
        tagline: 'Warmth & Love',
        description: 'Bimo Bear is a handcrafted plush toy created with heart and imagination. Soft, huggable, and timeless, bringing warmth to playtime.',
        material: ['Soft Rayon Fabric', 'Premium high-density dacron'],
        size: 'Height 45 cm x Width 14cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/bimo-bear.jpg'
    },
    {
        id: 'moozi-cow',
        name: 'Moozi Cow',
        emoji: '🐮',
        color: 'bg-slate-100/50',
        tagline: 'Warmth & Care',
        description: 'Moozi Cow reflects comfort, joy, and heartfelt creativity. Offers a cozy touch and charming character—perfect for cuddling.',
        material: ['Soft Rayon Fabric', 'High-density premium dacron'],
        size: 'Height 17 cm x Width 35 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/moozi-cow.jpg'
    },
    {
        id: 'pinko-pup',
        name: 'Pinko Pup',
        emoji: '🐶',
        color: 'bg-rose-100/40',
        tagline: 'Hugs & Happy Moments',
        description: 'Pinko Pup is a soft, handcrafted plush dog designed to bring warmth and joy. With its gentle pink tone and cuddly shape.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 31 cm x Width 21 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade'],
        src: '/photo/pinko-pup.jpg'
    },
    {
        id: 'kiko-kangaroo',
        name: 'Kiko the Batik Kangaroo',
        emoji: '🦘',
        color: 'bg-orange-100/40',
        tagline: 'Culture & Warmth',
        description: 'Kiko Kangaroo is a handcrafted plush toy made from beautiful batik fabric, bringing together traditional patterns and a soft, lovable design.',
        material: ['Soft Batik Fabric', 'Premium dacron'],
        size: 'Height 31 cm x Width 21 cm',
        tags: ['Batik Plush', 'Cultural'],
        src: '/photo/kiko-kangaroo.jpg'
    },
    {
        id: 'kara-kangaroo',
        name: 'Kara the Endek Kangaroo',
        emoji: '🦘',
        color: 'bg-orange-100/40',
        tagline: 'Culture & Warmth',
        description: 'Kara Kangaroo is a handcrafted plush toy made from beautiful batik fabric, bringing together traditional patterns and a soft, lovable design.',
        material: ['Soft Batik Fabric', 'Premium dacron'],
        size: 'Height 31 cm x Width 21 cm',
        tags: ['Batik Plush', 'Cultural'],
        src: '/photo/kara-kangaroo.jpg'
    },
    {
        id: 'tala-pangolin',
        name: 'Tala the Pangolin',
        emoji: '🦎',
        color: 'bg-stone-100/50',
        tagline: 'Unique & Patterned',
        description: 'Inspired by the gentle and rare pangolin. Features beautifully patterned fabric that reflects warmth, creativity, and cultural character.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 12 cm x Length 37 cm',
        tags: ['Cultural-Inspired', 'Rare Animals'],
        src: '/photo/tala-pangolin.jpg'
    },
    {
        id: 'ruby-chicken',
        name: 'Ruby the Cozy Chicken',
        emoji: '🐔',
        color: 'bg-red-100/30',
        tagline: 'Cheerful Charm',
        description: 'Ruby Chicken is a handcrafted plush toy designed to bring joy, comfort, and a touch of playful warmth. Soft, cuddly, and full of character.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 28 cm x Width 35 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/ruby-chicken.jpg'
    },
    {
        id: 'momo-monkey',
        name: 'Momo the Monkey',
        emoji: '🐒',
        color: 'bg-amber-100/40',
        tagline: 'Playful & Soft',
        description: 'Momo the Monkey is a handcrafted plush toy designed to bring joy, comfort, and playful warmth. Perfect for hugs and playtime.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 35 cm x Width 30 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/momo-monkey.jpg'
    },
    {
        id: 'lumi-pink-kitty',
        name: 'Lumi Pink Kitty',
        emoji: '🐱',
        color: 'bg-pink-100/40',
        tagline: 'Soft & Sweet',
        description: 'Lumi Pink Kitty is a handcrafted plush toy designed to bring warmth, comfort, and joy. Soft pink cat plush carrying a gentle charm.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 16 cm x Width 28 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/lumi-pink-kitty.jpg'
    },
    {
        id: 'lumi-octo',
        name: 'Lumi Octo',
        emoji: '🐙',
        color: 'bg-purple-100/40',
        tagline: 'Soft Hugs from the Sea',
        description: 'Lumi Octo is a handcrafted octopus plush designed to bring comfort, joy, and a touch of ocean charm.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 37 cm x Width 41 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/lumi-octo.jpg'
    },
    {
        id: 'bluppy-dog',
        name: 'Bluppy Dog',
        emoji: '🐶',
        color: 'bg-blue-100/40',
        tagline: 'Comfort & Joy',
        description: 'Bluppy Dog is a handcrafted plush toy designed to bring warmth, softness, and happiness. Gentle blue tone and cuddly form.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 17 cm x Width 31 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/bluppy-dog.jpg'
    },
    {
        id: 'elly-elephant',
        name: 'Elly Blue Elephant',
        emoji: '🐘',
        color: 'bg-blue-100/40',
        tagline: 'Playful Charm',
        description: 'Elly Elephant is a handcrafted plush toy designed to bring comfort and joy. Charming blue-and-white patterned fabric.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 18 cm x Width 34 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/elly-elephant.jpg'
    },
    {
        id: 'bloo-hippo',
        name: 'Bloo the Happy Hippo',
        emoji: '🦛',
        color: 'bg-blue-100/50',
        tagline: 'Playful Moments',
        description: 'Bloo the Hippo is a handcrafted plush toy designed to bring joy, warmth, and a sense of calm. Soft to the touch and comforting to hug.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 13 cm x Width 39 cm',
        tags: ['Animal Toys', 'Plush Toys'],
        src: '/photo/bloo-hippo.jpg'
    }
];

// List of products that have portrait aspect ratio photos
const PORTRAIT_PRODUCTS = [
    'lumi-dream-owl',
    'lumi-piggy',
    'giri-giraffe',
    'bimo-bear',
    'moozi-cow',
    'kiko-kangaroo',
    'momo-monkey',
    'lumi-pink-kitty',
    'lumi-octo',
    'bloo-hippo'
];

// Helper to map color to glow and border settings
function getGlowAndBorder(colorClass: string) {
    const c = colorClass.toLowerCase();
    if (c.includes('pink') || c.includes('rose') || c.includes('red')) {
        return { glow: 'rgba(244, 63, 94, 0.2)', border: 'hover:border-pink-300' };
    }
    if (c.includes('yellow') || c.includes('amber') || c.includes('orange')) {
        return { glow: 'rgba(245, 158, 11, 0.2)', border: 'hover:border-amber-300' };
    }
    if (c.includes('blue')) {
        return { glow: 'rgba(56, 189, 248, 0.2)', border: 'hover:border-blue-300' };
    }
    if (c.includes('purple')) {
        return { glow: 'rgba(167, 139, 250, 0.2)', border: 'hover:border-purple-300' };
    }
    return { glow: 'rgba(244, 63, 94, 0.15)', border: 'hover:border-rose-300' };
}

export default function Index() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const showPrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev === null ? null : (prev === 0 ? products.length - 1 : prev - 1)));
    };

    const showNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev === null ? null : (prev === products.length - 1 ? 0 : prev + 1)));
    };

    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    return (
        <PublicLayout>
            <Head title="Our Collection" />
            
            {/* Hero Header */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-hero py-24">
                {/* Parallax Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={getAssetUrl('/photo/plusharoo-1.jpg')} 
                        alt="Collection background" 
                        className="w-full h-full object-cover opacity-35 select-none"
                    />
                </div>
                
                {/* Soft light gradient overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/95 via-white/80 to-[#FFFDFD]" />

                {/* Particle Background */}
                <div className="z-[2]">
                    <ParticleBackground particleCount={30} color="rgba(167, 139, 250, 0.25)" />
                </div>

                {/* Floating Orbs */}
                <div className="orb orb-rose w-[350px] h-[350px] top-10 left-10 opacity-20 z-[2]" />
                <div className="orb orb-accent w-[250px] h-[250px] bottom-10 right-10 opacity-15 z-[2]" />
                <div className="orb orb-purple w-[200px] h-[200px] top-1/3 right-1/3 opacity-15 z-[2]" />

                <div className="absolute inset-0 grid-overlay opacity-20 z-[2]" />

                <div className="container relative z-10 px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-3xl mx-auto relative"
                    >
                        <Badge variant="glow" className="mb-4 border border-purple-200 bg-white/90 text-purple-600 shadow-sm">Artisan Dolls</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-plusharoo-primary mb-6 leading-tight">
                            Our Animal <span className="gradient-text">Plush Family</span>
                        </h1>
                        <p className="text-lg text-plusharoo-text max-w-2xl mx-auto leading-relaxed">
                            Handcrafted animal companions sewed slowly and intentionally by creative mothers in Bali.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-6 max-w-7xl mx-auto">
                    <SectionHeader
                        badge="Adoption Center"
                        title="Meet the Companions"
                        description="Explore our slow-made plush collection. Each holds unique traditional print mappings, details, and warmth."
                        className="mb-16"
                    />

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => {
                            const config = getGlowAndBorder(product.color);
                            const isPortrait = PORTRAIT_PRODUCTS.includes(product.id);
                            return (
                                <StaggerItem key={product.id}>
                                    <GlowCard className={`overflow-hidden h-full flex flex-col hover:shadow-premium-hover border-slate-100 bg-white ${config.border}`} glowColor={config.glow}>
                                        <div 
                                            onClick={() => setLightboxIndex(index)}
                                            className={`w-full flex items-center justify-center ${product.color} relative overflow-hidden group cursor-pointer ${isPortrait ? 'aspect-[2/3]' : 'aspect-[3/2]'}`}
                                        >
                                            <img 
                                                src={getAssetUrl(product.src)} 
                                                alt={product.name} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-white/95 text-plusharoo-primary backdrop-blur-sm shadow-sm border-slate-200/40 font-bold">
                                                    {product.emoji} {product.tags[0]}
                                                </Badge>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 flex-grow flex flex-col justify-between">
                                            <div>
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold text-plusharoo-primary">{product.name}</h3>
                                                    <span className="text-sm font-semibold text-plusharoo-highlight tracking-wide mt-1 block">{product.tagline}</span>
                                                </div>
                                                
                                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                    {product.description}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="space-y-2.5 text-xs text-slate-500 pt-4 border-t border-slate-100 mb-6">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-semibold text-slate-400 uppercase tracking-wider">Size Dimensions</span>
                                                        <span className="text-slate-700 font-medium">{product.size}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-semibold text-slate-400 uppercase tracking-wider">Shell Material</span>
                                                        <span className="text-slate-700 font-medium">{product.material[0]}</span>
                                                    </div>
                                                </div>
                                                
                                                <Button className="w-full shadow-sm hover:shadow-md border-rose-200 hover:border-rose-300 text-plusharoo-primary hover:text-plusharoo-highlight" variant="outline" asChild>
                                                    <a href={`https://wa.me/6281234567890?text=Hello%20PlushAroo,%20I%20would%20love%20to%20adopt%20the%20companion%20${encodeURIComponent(product.name)}!`} target="_blank" rel="noopener noreferrer">
                                                        <Heart className="w-4 h-4 mr-2 text-plusharoo-highlight fill-current animate-pulse-glow" /> Adopt Me
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </GlowCard>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>

                    {/* Custom Banner (Bright Sunset Rainbow Gradient) */}
                    <ScrollReveal variant="fadeUp" className="mt-20">
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF5F6] via-[#FAF5FF] to-[#FEFDF0] py-16 px-8 md:px-16 text-center border border-rose-100/50">
                            <div className="orb orb-rose w-[300px] h-[300px] -top-24 -left-24 opacity-25 pointer-events-none" />
                            <div className="orb orb-warm w-[200px] h-[200px] -bottom-16 -right-16 opacity-20 pointer-events-none" />
                            <div className="orb orb-purple w-[250px] h-[250px] top-12 right-12 opacity-15 pointer-events-none" />
                            <div className="absolute inset-0 grid-overlay opacity-15" />

                            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                                <Badge variant="glow" className="border-purple-200 bg-white/95 text-purple-600 shadow-sm">Customization</Badge>
                                <h2 className="text-2xl md:text-4xl font-bold text-plusharoo-primary tracking-tight">Looking for something personal?</h2>
                                <p className="text-plusharoo-text leading-relaxed text-sm md:text-base">
                                    We offer custom handcrafting services: custom animal designs, curated batik patterns, branding embroidery, and flexible corporate souvenirs.
                                </p>
                                <div className="pt-4">
                                    <Button size="lg" variant="glow" className="shadow-lg shadow-purple-500/20 bg-gradient-to-r from-pink-500 to-purple-500 border-none font-bold" asChild>
                                        <a href="https://wa.me/6281234567890?text=Hello%20PlushAroo,%20I'm%20interested%20in%20requesting%20a%20custom%20plush%20design!" target="_blank" rel="noopener noreferrer">
                                            Request Custom Design
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div 
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md select-none transition-all duration-300"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Close button */}
                    <button 
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation buttons */}
                    <button 
                        onClick={showPrev}
                        className="absolute left-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        aria-label="Previous photo"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={showNext}
                        className="absolute right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        aria-label="Next photo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image frame */}
                    <div 
                        className="max-w-[90vw] max-h-[70vh] flex items-center justify-center relative p-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={getAssetUrl(products[lightboxIndex].src)} 
                            alt={products[lightboxIndex].name} 
                            className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
                        />
                    </div>

                    {/* Image details */}
                    <div 
                        className="text-center mt-6 text-white max-w-xl px-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                            <span>{products[lightboxIndex].emoji}</span>
                            <span>{products[lightboxIndex].name}</span>
                        </h3>
                        <p className="text-rose-300 font-semibold text-sm mt-1">{products[lightboxIndex].tagline}</p>
                        <p className="text-gray-400 text-xs md:text-sm mt-3 line-clamp-2 leading-relaxed">{products[lightboxIndex].description}</p>
                    </div>
                </div>
            )}
        </PublicLayout>
    );
}
