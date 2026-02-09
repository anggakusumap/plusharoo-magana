import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
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
        }
    ];

    return (
        <PublicLayout>
            <Head title="Frequently Asked Questions" />

            <section className="py-24 bg-white min-h-[60vh]">
                <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#4A4A4A] mb-8 text-center">Frequently Asked Questions</h1>
                    
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-medium text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </PublicLayout>
    );
}
