import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { motion } from 'framer-motion';

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
};

// Mock Data based on user input
const products: Product[] = [
    {
        id: 'lumi-dream-owl',
        name: 'Lumi Dream Owl',
        emoji: '🦉',
        color: 'bg-amber-100',
        tagline: 'Wise & Wonderful',
        description: 'A soft, cuddly plush toy inspired by warmth, love, and creativity. Lumi Owl is a handcrafted plush toy made with love and care by skilled hands of creative mothers.',
        material: ['Soft Rayon Fabric', 'High-density fiberfill (dacron)'],
        size: 'Height 29 cm x Width 27 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'lumi-piggy',
        name: 'Lumi Piggy',
        emoji: '🐷',
        color: 'bg-pink-100',
        tagline: 'Charming & Affectionate',
        description: 'Lumi Piggy is a lovingly handcrafted plush toy, created by the skilled hands of creative mothers and inspired by children’s love for playful animal companions.',
        material: ['Soft Rayon Fabric', 'High-density fiberfill (dacron)'],
        size: 'Height 13 cm x Width 22 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'giri-giraffe',
        name: 'Giri the Gentle Giraffe',
        emoji: '🦒',
        color: 'bg-yellow-100',
        tagline: 'Curiosity & Warmth',
        description: 'Giri features a soft touch, calming presence, and a timeless handmade character. Perfect as a cuddle companion, decorative accent, or meaningful gift.',
        material: ['Soft Rayon Fabric', 'Premium high-density dacron'],
        size: 'Height 35 cm x Width 26 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'dori-dolphin',
        name: 'Dori Bliss Dolphin',
        emoji: '🐬',
        color: 'bg-blue-100',
        tagline: 'Gentle Waves',
        description: 'Dori Dolphin is a delicately handcrafted plush toy designed to capture the calm and joy of the ocean. Offers a soothing touch and charming presence.',
        material: ['Soft Rayon Fabric', 'High-density fiberfill (dacron)'],
        size: 'Height 8 cm x Width 15 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'bimo-bear',
        name: 'Bimo Bear',
        emoji: '🧸',
        color: 'bg-brown-100',
        tagline: 'Warmth & Love',
        description: 'Bimo Bear is a handcrafted plush toy created with heart and imagination. Soft, huggable, and timeless, bringing warmth to playtime.',
        material: ['Soft Rayon Fabric', 'Premium high-density dacron'],
        size: 'Height 45 cm x Width 14cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'moozi-cow',
        name: 'Moozi Cow',
        emoji: '🐮',
        color: 'bg-slate-100',
        tagline: 'Warmth & Care',
        description: 'Moozi Cow reflects comfort, joy, and heartfelt creativity. Offers a cozy touch and charming character—perfect for cuddling.',
        material: ['Soft Rayon Fabric', 'High-density premium dacron'],
        size: 'Height 17 cm x Width 35 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'pinko-pup',
        name: 'Pinko Pup',
        emoji: '🐶',
        color: 'bg-rose-100',
        tagline: 'Hugs & Happy Moments',
        description: 'Pinko Pup is a soft, handcrafted plush dog designed to bring warmth and joy. With its gentle pink tone and cuddly shape.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 31 cm x Width 21 cm',
        tags: ['Animal Toys', 'Plush Toys', 'Handmade']
    },
    {
        id: 'kiko-kangaroo',
        name: 'Kiko the Batik Kangaroo',
        emoji: '🦘',
        color: 'bg-orange-100',
        tagline: 'Culture & Warmth',
        description: 'Kiko Kangaroo is a handcrafted plush toy made from beautiful batik fabric, bringing together traditional patterns and a soft, lovable design.',
        material: ['Soft Batik Fabric', 'Premium dacron'],
        size: 'Height 31 cm x Width 21 cm',
        tags: ['Batik Plush', 'Cultural']
    },
    {
        id: 'tala-pangolin',
        name: 'Tala the Pangolin',
        emoji: '🦎',
        color: 'bg-stone-100',
        tagline: 'Unique & Patterned',
        description: 'Inspired by the gentle and rare pangolin. Features beautifully patterned fabric that reflects warmth, creativity, and cultural character.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 12 cm x Length 37 cm',
        tags: ['Cultural-Inspired', 'Rare Animals']
    },
    {
        id: 'ruby-chicken',
        name: 'Ruby the Cozy Chicken',
        emoji: '🐔',
        color: 'bg-red-100',
        tagline: 'Cheerful Charm',
        description: 'Ruby Chicken is a handcrafted plush toy designed to bring joy, comfort, and a touch of playful warmth. Soft, cuddly, and full of character.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 28 cm x Width 35 cm',
        tags: ['Animal Toys', 'Plush Toys']
    },
    {
        id: 'momo-monkey',
        name: 'Momo the Monkey',
        emoji: '🐒',
        color: 'bg-amber-100',
        tagline: 'Playful & Soft',
        description: 'Momo the Monkey is a handcrafted plush toy designed to bring joy, comfort, and playful warmth. Perfect for hugs and playtime.',
        material: ['Soft Rayon Fabric', 'Premium dacron'],
        size: 'Height 35 cm x Width 30 cm',
        tags: ['Animal Toys', 'Plush Toys']
    },
    {
         id: 'lumi-pink-kitty',
         name: 'Lumi Pink Kitty',
         emoji: '🐱',
         color: 'bg-pink-100',
         tagline: 'Soft & Sweet',
         description: 'Lumi Pink Kitty is a handcrafted plush toy designed to bring warmth, comfort, and joy. Soft pink cat plush carrying a gentle charm.',
         material: ['Soft Rayon Fabric', 'Premium dacron'],
         size: 'Height 16 cm x Width 28 cm',
         tags: ['Animal Toys', 'Plush Toys']
    },
     {
         id: 'lumi-octo',
         name: 'Lumi Octo',
         emoji: '🐙',
         color: 'bg-purple-100',
         tagline: 'Soft Hugs from the Sea',
         description: 'Lumi Octo is a handcrafted octopus plush designed to bring comfort, joy, and a touch of ocean charm.',
         material: ['Soft Rayon Fabric', 'Premium dacron'],
         size: 'Height 37 cm x Width 41 cm',
         tags: ['Animal Toys', 'Plush Toys']
    },
    {
         id: 'bluppy-dog',
         name: 'Bluppy Dog',
         emoji: '🐶',
         color: 'bg-blue-100',
         tagline: 'Comfort & Joy',
         description: 'Bluppy Dog is a handcrafted plush toy designed to bring warmth, softness, and happiness. Gentle blue tone and cuddly form.',
         material: ['Soft Rayon Fabric', 'Premium dacron'],
         size: 'Height 17 cm x Width 31 cm',
         tags: ['Animal Toys', 'Plush Toys']
    },
    {
         id: 'elly-elephant',
         name: 'Elly Blue Elephant',
         emoji: '🐘',
         color: 'bg-blue-100',
         tagline: 'Playful Charm',
         description: 'Elly Elephant is a handcrafted plush toy designed to bring comfort and joy. Charming blue-and-white patterned fabric.',
         material: ['Soft Rayon Fabric', 'Premium dacron'],
         size: 'Height 18 cm x Width 34 cm',
         tags: ['Animal Toys', 'Plush Toys']
    },
    {
         id: 'bloo-hippo',
         name: 'Bloo the Happy Hippo',
         emoji: '🦛',
         color: 'bg-blue-200',
         tagline: 'Playful Moments',
         description: 'Bloo the Hippo is a handcrafted plush toy designed to bring joy, warmth, and a sense of calm. Soft to the touch and comforting to hug.',
         material: ['Soft Rayon Fabric', 'Premium dacron'],
         size: 'Height 13 cm x Width 39 cm',
         tags: ['Animal Toys', 'Plush Toys']
    }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Index() {
    return (
        <PublicLayout>
            <Head title="Our Collection" />
            
            <section className="py-12 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-[#4A4A4A] mb-4">Our Family</h1>
                        <p className="text-lg text-muted-foreground">
                            Product Animal Plush. Designed to feel timeless, gentle, and comforting.
                        </p>
                    </div>

                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {products.map((product) => (
                            <motion.div key={product.id} variants={item}>
                                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-none bg-white shadow-sm ring-1 ring-slate-100">
                                    <div className={`aspect-[4/3] flex items-center justify-center ${product.color} relative group`}>
                                        <div className="text-9xl transition-transform duration-500 group-hover:scale-110 drop-shadow-sm">
                                            {product.emoji}
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                    </div>
                                    
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-xl font-bold text-[#4A4A4A]">{product.name}</CardTitle>
                                                <CardDescription className="text-primary font-medium mt-1">{product.tagline}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    
                                    <CardContent className="flex-grow space-y-4">
                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {product.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {product.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="space-y-2 text-xs text-muted-foreground pt-2 border-t border-slate-100">
                                            <div className="flex justify-between">
                                                <span className="font-semibold">Size:</span>
                                                <span>{product.size}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-semibold">Material:</span>
                                                <span>{product.material[0]}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    
                                    <CardFooter className="pt-0">
                                        <Button className="w-full rounded-full" variant="secondary">
                                            Adopt Me
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-16 bg-secondary/30 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl font-bold mb-4">Looking for something personal?</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We offer Custom Plush Services, including custom animal designs, batik print customization, and bulk orders for events.
                        </p>
                        <Button size="lg" className="rounded-full px-8">
                            Request Custom Design
                        </Button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
