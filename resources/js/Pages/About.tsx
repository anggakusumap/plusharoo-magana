import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { motion } from 'framer-motion';
import { Heart, Hand, Sparkles, Award, Target, Briefcase, ShieldCheck, CheckCircle } from 'lucide-react';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Separator } from '@/Components/ui/separator';

export default function About() {
    const certifications = [
        {
            title: "Safe Materials",
            desc: "All materials are tested and certified safe for children and sensitive individuals.",
            icon: ShieldCheck
        },
        {
            title: "Handmade Quality",
            desc: "Each plush is handcrafted with care by skilled artisans.",
            icon: Hand
        },
        {
            title: "Ethical Production",
            desc: "Fair wages and ethical working conditions for all our craftswomen.",
            icon: CheckCircle
        }
    ];

    return (
        <PublicLayout>
            <Head title="About Us - PlushAroo" />

            {/* Hero Header */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516641396056-0ce60a85184e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container relative z-10 px-6 text-center"
                >
                    <Badge variant="highlight" className="mb-4">Who We Are</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Handcrafted with Heart,<br/>Made for Hugs</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        PlushAroo is a handmade plush brand under PT. Magana Dana Mahanta, creating soft companions with love and care.
                    </p>
                </motion.div>
            </section>

            <section className="bg-background py-24">
                <div className="container px-6 max-w-5xl mx-auto">
                    
                    {/* Our Story */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516641396056-0ce60a85184e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg max-w-xs hidden md:block border border-border">
                                <p className="text-primary font-bold text-lg">"Each piece is made slowly, embracing the beauty of human hands."</p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every PlushAroo plush begins with hands that know love. Mothers carefully sew each plush, stitch by stitch, with the same tenderness they give their children. That care can be felt in every finished piece.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                By combining soft rayon fabric with Indonesian batik prints, we bring together comfort and cultural heritage.
                            </p>
                            <p className="text-xl font-medium text-primary italic">
                                This is not just a plush toy. This is a hug made by a mother.
                            </p>
                        </motion.div>
                    </div>

                    {/* Vision */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-accent/30 rounded-3xl p-8 md:p-16 mb-24 border border-accent"
                    >
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                "To become a trusted global brand for handmade plush toys — creating soft, safe, and customizable designs that bring comfort, emotional connection, and lasting value."
                            </p>
                        </div>
                    </motion.div>

                    {/* Our Values */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we create.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Care",
                                    desc: "Every PlushAroo plush is handmade using soft rayon fabric, premium dacron filling, and ethical craftsmanship.",
                                    icon: Heart
                                },
                                {
                                    title: "Craftsmanship",
                                    desc: "Attention in every stitch. We do not mass-produce. Each piece is made slowly.",
                                    icon: Hand
                                },
                                {
                                    title: "Creativity",
                                    desc: "We believe in imagination and the power of play to bring joy to children everywhere.",
                                    icon: Sparkles
                                }
                            ].map((value, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-card border border-border p-8 rounded-2xl shadow-sm text-center"
                                >
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-16" />

                    {/* Certifications Section */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <Badge variant="secondary" className="mb-3">Quality Assurance</Badge>
                            <h2 className="text-3xl font-bold text-foreground mb-4">Our Certifications & Standards</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">We maintain the highest standards for safety, quality, and ethics.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                                <cert.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground text-sm">{cert.desc}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Company Overview */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-muted/50 rounded-2xl p-8 border border-border"
                    >
                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" /> Company Overview
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                            <div>
                                <strong className="block text-foreground mb-1">Brand Name</strong>
                                PlushAroo
                            </div>
                            <div>
                                <strong className="block text-foreground mb-1">Parent Company</strong>
                                PT. Magana Dana Mahanta
                            </div>
                            <div>
                                <strong className="block text-foreground mb-1">NIB (Business License)</strong>
                                2701220023611
                            </div>
                            <div>
                                <strong className="block text-foreground mb-1">Location</strong>
                                Denpasar, Bali, Indonesia
                            </div>
                            <div>
                                <strong className="block text-foreground mb-1">Specialty</strong>
                                Handmade Plush Toys with Batik-Inspired Designs
                            </div>
                            <div>
                                <strong className="block text-foreground mb-1">Production</strong>
                                Made to Order / Custom Orders Available
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </PublicLayout>
    );
}
