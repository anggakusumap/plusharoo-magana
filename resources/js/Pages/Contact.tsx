import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { Badge } from '@/Components/ui/badge';
import { Mail, MessageCircle, Instagram, Send, Package, Truck, Globe } from 'lucide-react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/Components/ScrollReveal';
import GlowCard from '@/Components/GlowCard';
import SectionHeader from '@/Components/SectionHeader';
import ParticleBackground from '@/Components/ParticleBackground';
import { getAssetUrl } from '@/lib/utils';

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        alert("Thank you for your message! This is a demo submission.");
        reset();
    };

    return (
        <PublicLayout>
            <Head title="Contact Us - PlushAroo" />

            {/* Hero Header (Light and Cuddly Whimsical Gradient with Glass Text Box) */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-hero py-24">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={getAssetUrl("/photo/plusharoo-1.jpg")} 
                        alt="Contact backdrop" 
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
                        <Badge variant="glow" className="mb-4 border border-purple-200 bg-white/90 text-purple-600 shadow-sm">Get in Touch</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-plusharoo-primary mb-6 leading-tight">
                            We'd Love to <span className="gradient-text">Hear From You</span>
                        </h1>
                        <p className="text-lg text-plusharoo-text max-w-2xl mx-auto leading-relaxed">
                            For product inquiries, wholesale orders, or custom plush projects, please reach out to us.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white py-24 min-h-screen">
                <div className="container px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <SectionHeader
                                badge="Connect"
                                title="Let's Chat"
                                description="Choose your preferred channel to get in touch. We respond as quickly as possible."
                                align="left"
                                className="mb-10"
                            />

                            <StaggerContainer className="space-y-4">
                                {[
                                    {
                                        icon: MessageCircle,
                                        title: "WhatsApp",
                                        value: "+62 812-3456-7890",
                                        desc: "Fast response for orders & product customization",
                                        link: "https://wa.me/6281234567890",
                                        color: "text-[#25D366]",
                                        border: "hover:border-[#25D366]/40",
                                        glow: "rgba(37, 211, 102, 0.12)"
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email Address",
                                        value: "hello@plusharoo.com",
                                        desc: "Best for custom project briefs and corporate inquiries",
                                        link: "mailto:hello@plusharoo.com",
                                        color: "text-rose-500",
                                        border: "hover:border-rose-300",
                                        glow: "rgba(244, 63, 94, 0.12)"
                                    },
                                    {
                                        icon: Instagram,
                                        title: "Instagram",
                                        value: "@plusharoo.id",
                                        desc: "Follow for regular updates, behind the scenes, and new drops",
                                        link: "https://instagram.com/plusharoo.id",
                                        color: "text-purple-500",
                                        border: "hover:border-purple-300",
                                        glow: "rgba(167, 139, 250, 0.12)"
                                    }
                                ].map((item, idx) => (
                                    <StaggerItem key={idx}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                                            <GlowCard className={`bg-slate-50/50 hover:bg-white border-slate-200/50 transition-all duration-300 ${item.border}`} glowColor={item.glow}>
                                                <div className="p-6 flex items-start gap-4">
                                                    <div className={`p-3 bg-white shadow-sm rounded-xl border border-slate-100 group-hover:scale-105 transition-transform duration-300 ${item.color}`}>
                                                        <item.icon className="h-6 w-6" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">{item.title}</span>
                                                        <h4 className="text-lg font-bold text-plusharoo-primary group-hover:text-plusharoo-highlight transition-colors mb-1">{item.value}</h4>
                                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </GlowCard>
                                        </a>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* Shipping Info (Warm Peach Mesh box) */}
                            <ScrollReveal variant="fadeUp" className="pt-6">
                                <GlowCard className="bg-[#FFF8F0] border-amber-100 hover:border-amber-300" glowColor="rgba(245, 158, 11, 0.15)">
                                    <div className="p-8">
                                        <h3 className="text-lg font-bold text-amber-900 mb-5 flex items-center gap-2">
                                            <Package className="h-5 w-5 text-amber-600" /> Shipping Information
                                        </h3>
                                        <ul className="space-y-3 text-slate-600 text-sm">
                                            <li className="flex gap-3 items-start">
                                                <Truck className="h-5 w-5 text-amber-600 flex-shrink-0" />
                                                <span>We support domestic and international shipping using reliable standard/expedited couriers.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <Package className="h-5 w-5 text-amber-600 flex-shrink-0" />
                                                <span>Standard delivery, instant same-day delivery, and vacuum-sealed cargo logistics options.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <Globe className="h-5 w-5 text-amber-600 flex-shrink-0" />
                                                <span>Worldwide delivery is available. Customs clearance and documents are handled directly.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </GlowCard>
                            </ScrollReveal>
                        </div>

                        {/* Contact Form */}
                        <ScrollReveal variant="fadeRight">
                            <GlowCard className="shadow-premium-lg border-rose-100 bg-[#FFF5F6]" glowColor="rgba(244, 63, 94, 0.15)">
                                <div className="p-8 md:p-10">
                                    <h3 className="text-2xl font-bold text-plusharoo-primary mb-2">Send us a Message</h3>
                                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                        Fill out the form below and our design team will reply within 24 hours.
                                    </p>
                                    
                                    <form onSubmit={submit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name</Label>
                                                <Input 
                                                    id="name" 
                                                    placeholder="Your name" 
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    className="rounded-xl border-slate-200 bg-white focus:border-plusharoo-highlight focus:ring-plusharoo-highlight"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address</Label>
                                                <Input 
                                                    id="email" 
                                                    type="email" 
                                                    placeholder="your@email.com" 
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className="rounded-xl border-slate-200 bg-white focus:border-plusharoo-highlight focus:ring-plusharoo-highlight"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-slate-700 font-semibold">Subject</Label>
                                            <Input 
                                                id="subject" 
                                                placeholder="Custom Order, Wholesale, Souvenirs..." 
                                                value={data.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                className="rounded-xl border-slate-200 bg-white focus:border-plusharoo-highlight focus:ring-plusharoo-highlight"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-slate-700 font-semibold">Message</Label>
                                            <Textarea 
                                                id="message" 
                                                placeholder="Briefly describe your design ideas, quantities, custom fabrics, or target dates..." 
                                                className="min-h-[140px] rounded-xl border-slate-200 bg-white focus:border-plusharoo-highlight focus:ring-plusharoo-highlight"
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" variant="glow" size="lg" className="w-full shadow-lg shadow-plusharoo-highlight/25 bg-gradient-to-r from-pink-500 to-purple-500 border-none hover:scale-[1.02] transition-transform font-bold" disabled={processing}>
                                            <Send className="w-4 h-4 mr-2" /> Send Message
                                        </Button>
                                    </form>
                                </div>
                            </GlowCard>
                        </ScrollReveal>

                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
