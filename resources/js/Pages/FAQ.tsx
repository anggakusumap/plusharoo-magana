import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Badge } from '@/Components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"
import { motion } from 'framer-motion';
import ScrollReveal from '@/Components/ScrollReveal';
import GlowCard from '@/Components/GlowCard';
import SectionHeader from '@/Components/SectionHeader';
import ParticleBackground from '@/Components/ParticleBackground';
import { getAssetUrl } from '@/lib/utils';

export default function FAQ() {
    const faqs = [
        {
            question: "Are your plush toys safe for children?",
            answer: "Yes. Our plush toys are made from soft, certified rayon fabric and premium dacron filling. All joints and stitches are reinforced for security. However, adult supervision is always recommended for infants."
        },
        {
            question: "Are the batik patterns identical on every plush?",
            answer: "No, that is the beauty of our collection! Because we cut fabric from artisan-printed batik cloth, pattern placement will vary slightly. This ensures that every companion adopted is completely unique."
        },
        {
            question: "Do you accept custom plush orders?",
            answer: "Yes, absolutely! We love custom projects. Whether it's a specific animal character, customized batik colors, embroidery, or branding, contact us with your specifications and quantities."
        },
        {
            question: "How long does custom production take?",
            answer: "Our plush toys are made slowly. For custom and bulk orders, production takes approximately 3 months, depending on the complexity of the pattern and order volume."
        },
        {
            question: "Do you accept bulk or corporate orders?",
            answer: "Yes. We accept bulk orders for corporate gifts, event souvenirs, tourism retail, and custom packaging. Please reach out via our contact page to get a detailed catalog and quotation."
        },
        {
            question: "What materials do you use?",
            answer: "We use soft rayon fabric printed with traditional Indonesian batik patterns. Inside, we use premium high-density dacron filling for a durable, squishy, and huggable texture that retains its shape over time."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship worldwide. Shipping rates, shipping lines, and estimated delivery dates will be calculated based on the weight of the shipment and country of destination."
        }
    ];

    return (
        <PublicLayout>
            <Head title="Frequently Asked Questions - PlushAroo" />

            {/* Hero Header */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-hero py-24">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={getAssetUrl("/photo/plusharoo-1.jpg")} 
                        alt="FAQ backdrop" 
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
                        <Badge variant="glow" className="mb-4 border border-purple-200 bg-white/90 text-purple-600 shadow-sm">Help Center</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-plusharoo-primary mb-6 leading-tight">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h1>
                        <p className="text-lg text-plusharoo-text max-w-2xl mx-auto leading-relaxed">
                            Find answers to common questions about our plush toys, customizing, shipping, and bulk ordering.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white min-h-[60vh] relative overflow-hidden">
                <div className="container px-6 max-w-3xl mx-auto">
                    <SectionHeader
                        badge="F.A.Q."
                        title="Common Inquiries"
                        description="Clear, detailed answers about adoption, specifications, shipping, and corporate solutions."
                        className="mb-12"
                    />

                    <ScrollReveal variant="fadeUp">
                        <GlowCard className="border-purple-100 p-8 shadow-premium-lg bg-[#F8F7FC]" glowColor="rgba(167, 139, 250, 0.15)">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-100 last:border-0 pb-2">
                                        <AccordionTrigger className="text-base md:text-lg font-bold text-left text-plusharoo-primary hover:text-plusharoo-highlight transition-colors py-4 no-underline hover:no-underline">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-500 text-sm md:text-base leading-relaxed pt-1 pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </GlowCard>
                    </ScrollReveal>
                </div>
            </section>
        </PublicLayout>
    );
}
