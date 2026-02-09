import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Badge } from '@/Components/ui/badge';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"

export default function FAQ() {
    const faqs = [
        {
            question: "Are your plush toys safe for children?",
            answer: "Yes. Our plush toys are made from soft rayon fabric and carefully finished. Adult supervision is recommended for infants."
        },
        {
            question: "Are the batik patterns the same on every plush?",
            answer: "Pattern placement may vary slightly, making each plush unique."
        },
        {
            question: "Do you accept custom plush orders?",
            answer: "Yes. Please contact us with your design idea, size, quantity, and timeline."
        },
        {
            question: "How long does production take?",
            answer: "Our plush toys are made to order. For bulk and custom orders, production takes approximately 3 months, depending on design complexity and quantity."
        },
        {
            question: "Do you accept bulk or corporate orders?",
            answer: "Yes. We accept bulk orders for events, corporate gifts, resale, souvenirs, and special projects."
        },
        {
            question: "What materials do you use?",
            answer: "We use soft rayon fabric with Indonesian batik-inspired prints and premium dacron filling for a gentle, huggable feel."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we offer international shipping upon request. Please contact us for shipping rates and estimated delivery times."
        }
    ];

    return (
        <PublicLayout>
            <Head title="Frequently Asked Questions - PlushAroo" />

            {/* Hero Header */}
            <section className="bg-primary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1559454403-b8fb87521bc7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="container relative z-10 px-6 text-center"
                >
                    <Badge variant="highlight" className="mb-4">Help Center</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Find answers to common questions about our plush toys, ordering, and shipping.
                    </p>
                </motion.div>
            </section>

            <section className="py-24 bg-background min-h-[60vh]">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-lg font-medium text-left text-foreground hover:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </section>
        </PublicLayout>
    );
}
