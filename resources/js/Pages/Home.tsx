import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Heart, Star, Sparkles, User, ShieldCheck } from 'lucide-react';
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
            <Head title="Home" />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FDF6F0]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10" />
                     {/* Placeholder for Hero Image - would be a nice plushy photo */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559454403-b8fb87521bc7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 animate-pulse-slow" />
                </div>

                <div className="container relative z-20 px-4 md:px-6 text-center md:text-left">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight text-[#4A4A4A] mb-6">
                            Softly handmade. <br />
                            <span className="text-primary">Deeply loved.</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                            Plusharoo creates handmade batik-inspired rayon plush toys that feel gentle, warm, and meaningful.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href={route('products.index')}>
                                <Button size="lg" className="rounded-full px-8 text-lg h-12">
                                    Shop Collection
                                </Button>
                            </Link>
                            <Link href={route('about')}>
                                <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-12 bg-white/50 backdrop-blur-sm">
                                    Our Story
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                                <img src="https://images.unsplash.com/photo-1555443442-4f3b25f48b96?q=80&w=1000&auto=format&fit=crop" alt="Handmade Plush" className="object-cover w-full h-full" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FDF6F0] rounded-full -z-10" />
                        </motion.div>
                        
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">
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
                                            <span className="font-medium text-[#4A4A4A]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-[#FDF6F0]">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A] mb-4">Why Choose Plusharoo?</h2>
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
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <card.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#4A4A4A]">{card.title}</h3>
                                <p className="text-muted-foreground">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
