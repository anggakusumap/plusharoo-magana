import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Heart, Star, Sparkles, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/Components/ScrollReveal';
import AnimatedCounter from '@/Components/AnimatedCounter';
import GlowCard from '@/Components/GlowCard';
import SectionHeader from '@/Components/SectionHeader';
import ParticleBackground from '@/Components/ParticleBackground';
import { getAssetUrl } from '@/lib/utils';

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.85]);

    return (
        <PublicLayout>
            <Head title="PlushAroo - Handmade Plush Toys Made with Love" />

            {/* ═══════════════════════════════════════════════════
                HERO SECTION (Joyful Pastel Rainbow with Glass Text Box)
            ═══════════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
                {/* Parallax Background Image */}
                <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
                    <img
                        className="w-full h-[120%] object-cover opacity-35 select-none"
                        src={getAssetUrl('/photo/plusharoo-1.jpg')}
                        alt="Handmade Plush"
                    />
                </motion.div>

                {/* Soft, light gradient overlay (bright & light for kids) */}
                <motion.div
                    className="absolute inset-0 z-[1] bg-gradient-to-b from-white/95 via-white/80 to-[#FAF8F5]/90"
                    style={{ opacity: overlayOpacity }}
                />

                {/* Magical Particle Background */}
                <div className="z-[2]">
                    <ParticleBackground particleCount={50} color="rgba(167, 139, 250, 0.3)" />
                </div>

                {/* Whimsical Multi-color Floating Orbs */}
                <div className="orb orb-rose w-[550px] h-[550px] top-10 -left-40 animate-float opacity-30 z-[2]" />
                <div className="orb orb-purple w-[450px] h-[450px] bottom-10 -right-32 animate-float-slow opacity-25 z-[2]" />
                <div className="orb orb-yellow w-[380px] h-[380px] top-1/4 right-1/4 animate-float-delayed opacity-20 z-[2]" />
                <div className="orb orb-blue w-[400px] h-[400px] bottom-1/3 left-1/3 animate-float opacity-15 z-[2]" />

                {/* Grid overlay */}
                <div className="absolute inset-0 grid-overlay opacity-20 z-[2]" />

                {/* Whimsical Text Hero Section */}
                <div className="relative z-10 container max-w-4xl mx-auto px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-3xl mx-auto relative"
                    >
                        <Badge variant="glow" className="mb-6 text-sm px-5 py-2 border border-purple-200 bg-purple-50 text-purple-600 shadow-sm">
                            ✨ Handmade with care. Deeply loved.
                        </Badge>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-plusharoo-primary mb-6 leading-[1.1]">
                            Handcrafted Plush Toys{' '}
                            <br className="hidden sm:block" />
                            <span className="gradient-text">Made with Love.</span>
                        </h1>

                        <p className="text-lg text-plusharoo-text max-w-2xl mx-auto mb-8 leading-relaxed">
                            Plusharoo creates handmade batik-inspired rayon plush toys that feel gentle, warm, and meaningful — sewed slowly by creative mothers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="xl" variant="glow" className="font-semibold shadow-lg shadow-plusharoo-highlight/25 bg-gradient-to-r from-pink-500 to-purple-500 border-none hover:scale-105 transition-transform" asChild>
                                <Link href={route('products.index')}>Shop Collection <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="xl"
                                className="bg-white/95 border-purple-200 text-purple-700 hover:bg-purple-50/50 hover:text-purple-900"
                                asChild
                            >
                                <Link href={route('about')}>Our Story</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-6 h-10 rounded-full border-2 border-purple-300/40 flex items-start justify-center p-2"
                        >
                            <div className="w-1.5 h-2 bg-purple-500 rounded-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                STATS BAR
            ═══════════════════════════════════════════════════ */}
            <section className="relative z-20 pt-12 pb-8 bg-white">
                <div className="container px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            { value: 15, suffix: '+', label: 'Artisans Empowered', color: 'text-pink-500' },
                            { value: 2000, suffix: '+', label: 'Hugs Delivered', color: 'text-purple-500' },
                            { value: 100, suffix: '%', label: 'Handmade with Care', color: 'text-amber-500' },
                            { value: 15, suffix: '+', label: 'Cute Characters', color: 'text-blue-500' },
                        ].map((stat, i) => (
                            <ScrollReveal key={stat.label} delay={i * 0.1}>
                                <div className="glass-light rounded-3xl p-6 text-center shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-slate-100/60">
                                    <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                INTRODUCTION SECTION (Warm Peach/Yellow Backdrop)
            ═══════════════════════════════════════════════════ */}
            <section className="section-padding bg-[#FFFBF2] relative overflow-hidden border-y border-amber-100/50">
                <div className="container px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <ScrollReveal variant="fadeLeft">
                            <div className="relative">
                                <div className="absolute inset-4 bg-amber-200/20 rounded-3xl transform rotate-3" />
                                <img
                                    src={getAssetUrl('/photo/plusharoo-1.jpg')}
                                    alt="A hug meant to stay"
                                    className="relative rounded-3xl shadow-premium-lg w-full object-cover h-[450px] md:h-[500px]"
                                />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal variant="fadeRight">
                            <div className="space-y-6">
                                <Badge variant="glow" className="bg-amber-100 text-amber-700 border-amber-200">A Hug Meant to Stay</Badge>
                                <h2 className="text-3xl md:text-4xl font-bold text-plusharoo-primary tracking-tight">
                                    Crafted Sustainably, Sewed Intentionaly.
                                </h2>
                                <p className="text-plusharoo-text text-lg leading-relaxed">
                                    Made from soft rayon fabric with Indonesian batik-inspired prints, our plush toys are designed as thoughtful gifts, collectible pieces, and comforting companions for all ages.
                                </p>
                                <p className="text-plusharoo-text text-lg leading-relaxed">
                                    Each plush is handmade by mothers. Every stitch is slow and intentional — carrying patience, care, and love.
                                </p>

                                <div className="pt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { text: "Handmade by Mothers", color: "bg-pink-100 text-pink-500" },
                                            { text: "Soft Rayon Fabric", color: "bg-purple-100 text-purple-500" },
                                            { text: "Premium Dacron Filling", color: "bg-amber-100 text-amber-500" },
                                            { text: "Safe for All Ages", color: "bg-blue-100 text-blue-500" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`p-2.5 rounded-2xl flex-shrink-0 ${item.color}`}>
                                                    <Heart className="w-5 h-5 fill-current" />
                                                </div>
                                                <span className="font-semibold text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                WHY CHOOSE US (Multi-color Pastel Blocks)
            ═══════════════════════════════════════════════════ */}
            <section className="section-padding bg-[#FFF5F6] relative overflow-hidden border-b border-rose-100/50">
                <div className="absolute inset-0 bg-gradient-mesh-light" />
                <div className="container px-6 relative z-10">
                    <SectionHeader
                        badge="Why Choose Us"
                        title="Why Choose Plusharoo?"
                        description="We believe in creating more than just toys. We create companions that carry story, community empowerment, and safety."
                    />

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: User,
                                title: "Handmade by Mothers",
                                desc: "Empowering women who understand softness, patience, and care in every single stitch.",
                                glow: "rgba(236, 72, 153, 0.15)",
                                border: "hover:border-pink-300",
                                iconBg: "bg-pink-100 text-pink-500"
                            },
                            {
                                icon: Sparkles,
                                title: "Artistic Detail",
                                desc: "Custom designs with Indonesian batik-inspired prints for a beautiful, unique touch.",
                                glow: "rgba(167, 139, 250, 0.15)",
                                border: "hover:border-purple-300",
                                iconBg: "bg-purple-100 text-purple-500"
                            },
                            {
                                icon: ShieldCheck,
                                title: "Safe & Comfortable",
                                desc: "Extra soft, light, and thoughtfully made using child-safe materials and premium filling.",
                                glow: "rgba(253, 224, 71, 0.15)",
                                border: "hover:border-amber-300",
                                iconBg: "bg-amber-100 text-amber-500"
                            }
                        ].map((feature, i) => (
                            <StaggerItem key={feature.title}>
                                <GlowCard className={`h-full border border-slate-100 ${feature.border}`} glowColor={feature.glow}>
                                    <div className="p-8 text-center flex flex-col h-full items-center">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.iconBg}`}>
                                            <feature.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-plusharoo-primary mb-3">{feature.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </GlowCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                TESTIMONIALS (Soft Whimsical Lavender/Mint Grid)
            ═══════════════════════════════════════════════════ */}
            <section className="section-padding bg-[#F6F5FA]">
                <div className="container px-6">
                    <SectionHeader
                        badge="Testimonials"
                        title="Loved by Our Customers"
                        description="Hear from families and collectors who have welcomed our plush companions into their homes."
                    />

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                quote: "The softest plush I've ever felt! My daughter won't let go of it. Beautiful batik pattern too.",
                                author: "Dewi Sartika",
                                role: "Happy Mom",
                                color: "from-pink-400 to-rose-400",
                                border: "hover:border-pink-200"
                            },
                            {
                                quote: "Ordered for corporate gifts and everyone loved them. Professional service and beautiful packaging.",
                                author: "Made Putra",
                                role: "Business Owner",
                                color: "from-purple-400 to-indigo-400",
                                border: "hover:border-purple-200"
                            },
                            {
                                quote: "Love that each plush is unique with its batik pattern. Supporting local artisans feels great!",
                                author: "Kadek Arini",
                                role: "Collector",
                                color: "from-amber-400 to-orange-400",
                                border: "hover:border-amber-200"
                            }
                        ].map((testimonial) => (
                            <StaggerItem key={testimonial.author}>
                                <GlowCard className={`h-full border border-slate-100 ${testimonial.border}`}>
                                    <div className="p-6 flex flex-col h-full justify-between">
                                        <div>
                                            <div className="flex gap-1 text-amber-400 mb-4">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                            </div>
                                            <p className="text-slate-600 italic mb-6 leading-relaxed text-sm">"{testimonial.quote}"</p>
                                        </div>
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                                                {testimonial.author[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-plusharoo-primary text-sm">{testimonial.author}</h4>
                                                <p className="text-xs text-slate-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                CTA SECTION (Colorful Magical Pastel Sunset)
            ═══════════════════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-r from-[#FFE5EC] via-[#F0E6FF] to-[#FFF8E6] border-t border-rose-100/50">
                <div className="orb orb-rose w-[400px] h-[400px] top-0 left-1/4 animate-float opacity-30" />
                <div className="orb orb-purple w-[300px] h-[300px] bottom-0 right-1/4 animate-float-delayed opacity-25" />
                <div className="orb orb-yellow w-[250px] h-[250px] top-1/3 right-12 animate-float opacity-20" />
                <div className="absolute inset-0 grid-overlay opacity-15" />

                <div className="container px-6 relative z-10 text-center max-w-4xl mx-auto">
                    <ScrollReveal>
                        <Badge variant="glow" className="mb-6 border border-purple-200/50 bg-white/95 text-purple-600 shadow-sm">Ready to adopt a companion?</Badge>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-plusharoo-primary mb-6 tracking-tight leading-tight">
                            Ready to bring home<br />a heartwarming hug?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg text-plusharoo-text mb-10 max-w-2xl mx-auto leading-relaxed">
                            Discover our unique collection of handcrafted animal companions. Each one is made slowly, with patience, care, and a mother's touch.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="xl" variant="glow" className="shadow-2xl shadow-purple-500/20 bg-gradient-to-r from-pink-500 to-purple-500 border-none hover:scale-105 transition-transform font-bold" asChild>
                                <Link href={route('products.index')}>Explore Collection <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PublicLayout>
    );
}
