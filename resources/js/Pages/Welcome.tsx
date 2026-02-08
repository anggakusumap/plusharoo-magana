import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import Hero from '@/Components/Hero';
import SectionHeader from '@/Components/SectionHeader';
import ProductCard from '@/Components/ProductCard';
import ValuesCard from '@/Components/ValuesCard';
import { Card, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from "@/Components/ui/input"; // We might need to create this if shadcn didnt add it
import { Textarea } from "@/Components/ui/textarea"; // We might need to create this
import { Sparkles, Star, Heart, Hand } from 'lucide-react';

// Mock Data
const products = [
    { name: 'Lumi Dream Owl', emoji: '🦉', tagline: 'Wise & Wonderful' },
    { name: 'Lumi Piggy', emoji: '🐷', tagline: 'Soft & Snuggly' },
    { name: 'Giri the Giraffe', emoji: '🦒', tagline: 'Gentle Giant' },
    { name: 'Dori Bliss Dolphin', emoji: '🐬', tagline: 'Ocean Dreamer' },
    { name: 'Bimo Bear', emoji: '🧸', tagline: 'Classic Comfort' },
    { name: 'Moozi Cow', emoji: '🐮', tagline: 'Farm Friend' },
    { name: 'Pinko Pup', emoji: '🐶', tagline: 'Playful Pal' },
    { name: 'Kiko Kangaroo', emoji: '🦘', tagline: 'Batik Beauty' },
    { name: 'Ruby Chicken', emoji: '🐔', tagline: 'Cozy Clucker' },
    { name: 'Lumi Pink Kitty', emoji: '🐱', tagline: 'Purr-fect Friend' },
    { name: 'Lumi Octo', emoji: '🐙', tagline: 'Eight Hugs in One' },
    { name: 'Bluppy Dog', emoji: '🐶', tagline: 'Loyal Companion' },
];

const values = [
    { title: 'Creativity', description: 'Imaginative designs that spark joy and storytelling.', icon: Sparkles },
    { title: 'Quality', description: 'Premium materials built to last a lifetime of hugs.', icon: Star },
    { title: 'Care', description: 'Safe, non-toxic, and crafted with child safety first.', icon: Heart },
    { title: 'Handmade', description: 'Touch of human warmth in every stitch.', icon: Hand },
];

export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Welcome to PlushAroo" />

            {/* Hero Section */}
            <Hero />

            {/* Collection Section */}
            <section id="collection" className="py-24 bg-white/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader 
                        title="Meet the Family" 
                        subtitle="Each PlushAroo friend has their own personality and story to tell. Who will you take home today?"
                    />
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-accent/20 skew-y-3 origin-top-left scale-110" />
                
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="relative">
                                <div className="aspect-video bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center rotate-2">
                                    <span className="text-6xl">🧵🪡 ❤️</span>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <SectionHeader 
                                title="Our Story" 
                                subtitle="Born from the hands of creative mothers."
                                centered={false}
                                className="mb-6"
                            />
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                PlushAroo started as a small dream in a living room, where scraps of fabric were turned into treasured friends. 
                                We believe in the power of a soft hug and the magic of handmade craftsmanship.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every PlushAroo is made with intention—gentle on the planet, safe for your littlest ones, and designed to become part of your family's story.
                            </p>
                            <Button variant="outline" className="mt-4 rounded-full">
                                Read More About Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="values" className="py-24 bg-secondary/20">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader 
                        title="Crafted with Values" 
                        subtitle="What makes a PlushAroo special goes beyond just being soft."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <ValuesCard key={index} {...value} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Card className="border-none shadow-2xl bg-secondary/30 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1 p-10 bg-primary text-primary-foreground flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-4">Let's create something warm together</h3>
                                <p className="text-primary-foreground/80 mb-8">
                                    Have a question, a custom request, or just want to say hi? We'd love to hear from you.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            ✉️
                                        </div>
                                        <span>hello@plusharoo.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            📍
                                        </div>
                                        <span>Jakarta, Indonesia</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1 p-10 bg-white">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input 
                                            type="text" 
                                            id="name"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="hello@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <textarea 
                                            id="message" 
                                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Tell us about your dream plushy..."
                                            rows={4}
                                        />
                                    </div>
                                    <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </PublicLayout>
    );
}
