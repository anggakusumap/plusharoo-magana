import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { motion } from 'framer-motion';
import { Heart, Hand, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <PublicLayout>
            <Head title="About Us" />

            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#4A4A4A] mb-6">Handcrafted Plush Toys Made with Heart</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Plusharoo is a handmade plush brand under CV. Magana Dana Mahanta.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                                {/* Placeholder image */}
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516641396056-0ce60a85184e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                                <p className="text-primary font-bold text-lg">"Each piece is made slowly, embracing the beauty of human hands."</p>
                            </div>
                        </motion.div>
                        
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#4A4A4A]">Our Story</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Every Plusharoo plush begins with hands that know love. Mothers carefully sew each plush, stitch by stitch, with the same tenderness they give their children. That care can be felt in every finished piece.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                By combining soft rayon fabric with Indonesian batik prints, we bring together comfort and cultural heritage.
                            </p>
                            <p className="text-xl font-medium text-primary italic">
                                This is not just a plush toy. This is a hug made by a mother.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#FDF6F0] rounded-3xl p-8 md:p-16 mb-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-8">Our Vision</h2>
                            <p className="text-2xl font-light text-muted-foreground">
                                "To become a trusted global brand for handmade plush toys — creating soft, safe, and customizable designs that bring comfort, emotional connection, and lasting value."
                            </p>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#4A4A4A] text-center mb-12">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Care",
                                    desc: "Every Plusharoo plush is handmade using soft rayon fabric, premium dacron filling, and ethical craftsmanship.",
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
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm text-center"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-[#4A4A4A]">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
