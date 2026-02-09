import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Heart, Star, Sparkles, User, ShieldCheck, ArrowRight, Package, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    return (
        <PublicLayout>
            <Head title="PlushAroo - Handmade Plush Toys Made with Love" />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70 z-10" />
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559454403-b8fb87521bc7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                </div>

                <div className="container relative z-20 px-4 md:px-6 text-center md:text-left pt-20">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeInUp}>
                            <Badge variant="highlight" className="mb-6">Handcrafted with Love</Badge>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Softly handmade. <br />
                            <span className="text-white/90">Deeply loved.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                            Plusharoo creates handmade batik-inspired rayon plush toys that feel gentle, warm, and meaningful.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href={route('products.index')}>
                                <Button size="lg" className="rounded-full px-8 text-lg h-12 bg-white text-primary hover:bg-white/90">
                                    Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href={route('about')}>
                                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                                    Our Story
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-95" />
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1555443442-4f3b25f48b96?q=80&w=1000&auto=format&fit=crop" alt="Handmade Plush" className="object-cover w-full h-full" />
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground">
                                A Hug Meant to Stay
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                                Made from soft rayon fabric with Indonesian batik–inspired prints, our plush toys are designed as thoughtful gifts, collectible pieces, and comforting companions for all ages.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                                Each plush is handmade by mothers. Every stitch is slow and intentional — carrying patience, care, and love.
                            </motion.p>
                            
                            <motion.div variants={fadeInUp} className="pt-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Handmade with care",
                                        "Soft rayon fabric",
                                        "Premium dacron filling",
                                        "Safe for all ages"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                                                <Heart className="w-4 h-4" />
                                            </div>
                                            <span className="font-medium text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-accent/30 border-y border-accent">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Plusharoo?</h2>
                        <p className="text-lg text-muted-foreground">
                            We believe in creating more than just toys. We create companions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: User,
                                title: "Handmade by Mothers",
                                desc: "Empowering women who understand softness, patience, and care."
                            },
                            {
                                icon: Sparkles,
                                title: "Artistic Detail",
                                desc: "Custom designs with batik-inspired prints for a unique touch."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Safe & Comfortable",
                                desc: "Extra soft, light, and thoughtfully made for special needs."
                            }
                        ].map((card, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-border text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                                    <card.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>
                                <p className="text-muted-foreground">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Loved by Our Customers</h2>
                        <p className="text-muted-foreground">What people say about PlushAroo</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                quote: "The softest plush I've ever felt! My daughter won't let go of it. Beautiful batik pattern too.",
                                author: "Dewi Sartika",
                                role: "Happy Mom"
                            },
                            {
                                quote: "Ordered for corporate gifts and everyone loved them. Professional service and beautiful packaging.",
                                author: "Made Putra",
                                role: "Business Owner"
                            },
                            {
                                quote: "Love that each plush is unique with its batik pattern. Supporting local artisans feels great!",
                                author: "Kadek Arini",
                                role: "Collector"
                            }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full border-border">
                                    <CardContent className="pt-6">
                                        <div className="flex gap-1 text-primary mb-4">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                        </div>
                                        <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                                {testimonial.author[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-sm">{testimonial.author}</h4>
                                                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-primary text-white text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container px-6 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to bring home a hug?</h2>
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Discover our collection of handcrafted plush toys. Each one made with love, patience, and a mother's touch.
                    </p>
                    <Link href={route('products.index')}>
                        <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90 shadow-2xl">
                            Explore Collection
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </PublicLayout>
    );
}
