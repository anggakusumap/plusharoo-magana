import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Target, Briefcase, ShieldCheck, CheckCircle } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Separator } from '@/Components/ui/separator';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/Components/ScrollReveal';
import GlowCard from '@/Components/GlowCard';
import SectionHeader from '@/Components/SectionHeader';
import ParticleBackground from '@/Components/ParticleBackground';
import { getAssetUrl } from '@/lib/utils';

export default function About() {
    const certifications = [
        {
            title: "Safe Materials",
            desc: "All materials are tested and certified safe for children and sensitive individuals.",
            icon: ShieldCheck,
            glow: "rgba(56, 189, 248, 0.15)", // Blue glow
            bg: "bg-blue-100 text-blue-500",
            border: "hover:border-blue-300"
        },
        {
            title: "Handmade Quality",
            desc: "Each plush is handcrafted with slow care and meticulous stitching by creative mothers.",
            icon: Heart,
            glow: "rgba(244, 63, 94, 0.15)", // Rose glow
            bg: "bg-pink-100 text-pink-500",
            border: "hover:border-pink-300"
        },
        {
            title: "Ethical Production",
            desc: "Empowering Balinese mothers through fair wages, respectful environment, and flexible hours.",
            icon: CheckCircle,
            glow: "rgba(167, 139, 250, 0.15)", // Lavender glow
            bg: "bg-purple-100 text-purple-500",
            border: "hover:border-purple-300"
        }
    ];

    return (
        <PublicLayout>
            <Head title="About Us - PlushAroo" />

            {/* Hero Header (Bright and Cuddly Whimsical Gradient with Glass Text Box) */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-hero py-24">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={getAssetUrl("/photo/plusharoo-1.jpg")} 
                        alt="Handmade workshop" 
                        className="w-full h-full object-cover opacity-35 select-none"
                    />
                </div>
                
                {/* Soft light gradient overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/95 via-white/80 to-[#FFFDFD]" />

                {/* Particle Background */}
                <div className="z-[2]">
                    <ParticleBackground particleCount={30} color="rgba(167, 139, 250, 0.25)" />
                </div>

                {/* Whimsical Orbs */}
                <div className="orb orb-rose w-[350px] h-[350px] top-10 left-10 opacity-25 z-[2]" />
                <div className="orb orb-purple w-[250px] h-[250px] bottom-10 right-10 opacity-20 z-[2]" />
                <div className="orb orb-yellow w-[200px] h-[200px] top-1/3 right-1/3 opacity-15 z-[2]" />

                <div className="absolute inset-0 grid-overlay opacity-20 z-[2]" />

                <div className="container relative z-10 px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-3xl mx-auto relative"
                    >
                        <Badge variant="glow" className="mb-4 border border-purple-200 bg-white/90 text-purple-600 shadow-sm">Who We Are</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-plusharoo-primary mb-6 leading-tight">
                            Handcrafted with Heart,<br/>
                            <span className="gradient-text">Made for Warm Hugs</span>
                        </h1>
                        <p className="text-lg text-plusharoo-text max-w-2xl mx-auto leading-relaxed">
                            PlushAroo is a handmade plush brand under PT. Magana Dana Mahanta, creating soft companions with patience, heritage, and genuine care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: Our Story (Soft Whimsical Lavender/Mint) */}
            <section className="bg-[#F6F5FA] py-24 relative overflow-hidden border-b border-purple-100/50">
                <div className="container px-6 max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <ScrollReveal variant="fadeLeft" className="relative">
                            <div className="absolute inset-4 bg-purple-200/20 rounded-3xl transform rotate-3" />
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-lg">
                                <img 
                                    src={getAssetUrl("/photo/lumi-dream-owl.jpg")} 
                                    alt="Sewing plush toys" 
                                    className="object-cover w-full h-full" 
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-premium-lg max-w-xs hidden md:block border border-purple-100/50">
                                <p className="text-purple-600 font-bold text-base leading-relaxed">
                                    "Each piece is made slowly, embracing the beauty of human hands."
                                </p>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal variant="fadeRight" className="space-y-6">
                            <Badge variant="glow" className="bg-purple-100 text-purple-700 border-purple-200">Our Story</Badge>
                            <h2 className="text-3xl font-bold text-plusharoo-primary tracking-tight">How Plusharoo Began</h2>
                            <p className="text-plusharoo-text text-lg leading-relaxed">
                                Every PlushAroo plush begins with hands that know love. Mothers carefully sew each plush, stitch by stitch, with the same tenderness they give their children. That care can be felt in every finished piece.
                            </p>
                            <p className="text-plusharoo-text text-lg leading-relaxed">
                                By combining soft rayon fabric with Indonesian batik prints, we bring together comfort and cultural heritage in a gentle design.
                            </p>
                            <p className="text-xl font-semibold text-plusharoo-highlight italic">
                                This is not just a plush toy. This is a hug made by a mother.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Section 2: Vision & Values (Alternating Pastel Blocks) */}
            <section className="bg-white py-24 relative overflow-hidden">
                <div className="container px-6 max-w-5xl mx-auto">
                    {/* Vision */}
                    <ScrollReveal variant="scaleUp" className="mb-28">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-16 border border-orange-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-200/20 rounded-full filter blur-3xl pointer-events-none" />
                            <div className="max-w-3xl mx-auto text-center relative z-10">
                                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-plusharoo-primary mb-6 tracking-tight">Our Vision</h2>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium font-serif">
                                    "To become a trusted global brand for handmade plush toys — creating soft, safe, and customizable designs that bring comfort, emotional connection, and lasting value."
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Our Values */}
                    <div className="mb-28">
                        <SectionHeader
                            badge="Core Values"
                            title="The Principles That Guide Us"
                            description="Every companion we deliver is built upon safety, community support, and custom heritage."
                        />

                        <StaggerContainer className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Care",
                                    desc: "Every PlushAroo plush is handmade using soft rayon fabric, premium dacron filling, and ethical craftsmanship.",
                                    icon: Heart,
                                    glow: "rgba(244, 63, 94, 0.15)", // Pink
                                    bg: "bg-pink-100 text-pink-500",
                                    border: "hover:border-pink-300"
                                },
                                {
                                    title: "Craftsmanship",
                                    desc: "Attention in every stitch. We do not mass-produce. Each piece is made slowly with slow-living intent.",
                                    icon: Sparkles,
                                    glow: "rgba(167, 139, 250, 0.15)", // Lavender
                                    bg: "bg-purple-100 text-purple-500",
                                    border: "hover:border-purple-300"
                                },
                                {
                                    title: "Creativity",
                                    desc: "We believe in imagination and the power of play to bring joy and cultural appreciation to children.",
                                    icon: Sparkles,
                                    glow: "rgba(253, 224, 71, 0.15)", // Yellow
                                    bg: "bg-amber-100 text-amber-500",
                                    border: "hover:border-amber-300"
                                }
                            ].map((value, i) => (
                                <StaggerItem key={i}>
                                    <GlowCard className={`h-full border border-slate-100 ${value.border}`} glowColor={value.glow}>
                                        <div className="p-8 text-center flex flex-col items-center h-full">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.bg}`}>
                                                <value.icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-plusharoo-primary">{value.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
                                        </div>
                                    </GlowCard>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <Separator className="my-16 opacity-50" />

                    {/* Certifications Section */}
                    <div className="mb-28">
                        <SectionHeader
                            badge="Quality Assurance"
                            title="Our Certifications & Standards"
                            description="We maintain the highest standards for safety, material quality, and ethics."
                        />

                        <StaggerContainer className="grid md:grid-cols-3 gap-6">
                            {certifications.map((cert, i) => (
                                <StaggerItem key={i}>
                                    <GlowCard className={`h-full border border-slate-100 ${cert.border}`} glowColor={cert.glow}>
                                        <div className="p-6">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cert.bg}`}>
                                                <cert.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-plusharoo-primary mb-2">{cert.title}</h3>
                                            <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
                                        </div>
                                    </GlowCard>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Company Overview (Mint green light box) */}
                    <ScrollReveal variant="fadeUp">
                        <GlowCard className="bg-[#F0FDF4] border-emerald-100 hover:border-emerald-300 hover:shadow-premium" glowColor="rgba(52, 211, 153, 0.15)">
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-plusharoo-primary mb-6 flex items-center gap-3">
                                    <Briefcase className="h-6 w-6 text-emerald-600" /> Company Overview
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                                    {[
                                        { label: "Brand Name", value: "PlushAroo" },
                                        { label: "Parent Company", value: "PT. Magana Dana Mahanta" },
                                        { label: "NIB (Business License)", value: "2701220023611" },
                                        { label: "Location", value: "Denpasar, Bali, Indonesia" },
                                        { label: "Specialty", value: "Handmade Plush Toys with Batik-Inspired Designs" },
                                        { label: "Production", value: "Made to Order / Custom Orders Available" }
                                    ].map((item, i) => (
                                        <div key={i} className="border-b border-emerald-200/40 pb-3 last:border-0 md:last:border-b">
                                            <span className="block text-xs font-semibold text-emerald-700/60 uppercase tracking-wider mb-1">{item.label}</span>
                                            <span className="text-plusharoo-primary font-bold text-base">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlowCard>
                    </ScrollReveal>

                </div>
            </section>
        </PublicLayout>
    );
}
