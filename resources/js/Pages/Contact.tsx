import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Card, CardContent } from '@/Components/ui/card';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <PublicLayout>
            <Head title="Contact Us" />

            <section className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl font-bold text-[#4A4A4A] mb-4">We would love to hear from you.</h1>
                        <p className="text-lg text-muted-foreground">
                            For product inquiries, wholesale orders, or custom plush projects, please contact us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <Card>
                                <CardContent className="p-8 space-y-6">
                                    <h3 className="text-xl font-bold text-[#4A4A4A]">Get in Touch</h3>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                                            <p className="text-lg font-semibold text-[#4A4A4A]">+62 812-3456-7890</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Email</p>
                                            <p className="text-lg font-semibold text-[#4A4A4A]">hello@plusharoo.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                            <Instagram className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Instagram</p>
                                            <p className="text-lg font-semibold text-[#4A4A4A]">@plusharoo.id</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="bg-[#FDF6F0] p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-[#4A4A4A] mb-4">Shipping Information</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span>🚚</span> We offer domestic and international shipping.
                                    </li>
                                    <li className="flex gap-2">
                                        <span>📦</span> Methods include National courier, Instant/Same Day (selected areas).
                                    </li>
                                    <li className="flex gap-2">
                                        <span>🌍</span> International shipping available upon request.
                                    </li>
                                </ul>
                                <p className="mt-4 text-sm text-muted-foreground italic">
                                    *Shipping costs depend on product size, weight, destination, and selected method.
                                </p>
                            </div>
                        </div>

                        <Card>
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="your@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" placeholder="Custom Order, Wholesale, etc." />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="Tell us what you need..." className="min-h-[120px]" />
                                    </div>
                                    <Button className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
