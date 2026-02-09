import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Mail, MessageCircle, Instagram, MapPin, Send } from 'lucide-react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Demo submission
        alert("Thank you for your message! This is a demo submission.");
        reset();
    };

    return (
        <PublicLayout>
            <Head title="Contact Us - PlushAroo" />

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
                    <Badge variant="highlight" className="mb-4">Get in Touch</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">We'd Love to Hear From You</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        For product inquiries, wholesale orders, or custom plush projects, please reach out to us.
                    </p>
                </motion.div>
            </section>

            <section className="bg-background py-24 min-h-screen">
                <div className="container px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        
                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <MessageCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                                        <p className="text-muted-foreground text-sm">+62 812-3456-7890</p>
                                        <p className="text-muted-foreground text-xs mt-1">Fast response for orders</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Email</h3>
                                        <p className="text-muted-foreground text-sm">hello@plusharoo.com</p>
                                        <p className="text-muted-foreground text-xs mt-1">We reply within 24 hours</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="pt-6 flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <Instagram className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Instagram</h3>
                                        <p className="text-muted-foreground text-sm">@plusharoo.id</p>
                                        <p className="text-muted-foreground text-xs mt-1">Follow for updates & new drops</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Shipping Info */}
                            <div className="bg-accent/30 p-6 rounded-2xl border border-accent">
                                <h3 className="text-lg font-bold text-foreground mb-4">📦 Shipping Information</h3>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    <li className="flex gap-2">
                                        <span>🚚</span> We offer domestic and international shipping.
                                    </li>
                                    <li className="flex gap-2">
                                        <span>📦</span> Methods include National courier, Instant/Same Day.
                                    </li>
                                    <li className="flex gap-2">
                                        <span>🌍</span> International shipping available upon request.
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="shadow-lg border-border h-fit">
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                    <CardDescription>We'd love to hear from you. Fill out the form below.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={submit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input 
                                                    id="name" 
                                                    placeholder="Your name" 
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input 
                                                    id="email" 
                                                    type="email" 
                                                    placeholder="your@email.com" 
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input 
                                                id="subject" 
                                                placeholder="Custom Order, Wholesale, etc." 
                                                value={data.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea 
                                                id="message" 
                                                placeholder="Tell us about your requirements..." 
                                                className="min-h-[120px]"
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" className="w-full rounded-full" size="lg" disabled={processing}>
                                            <Send className="w-4 h-4 mr-2" /> Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
