import { Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, Globe, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-bold mb-6 tracking-tight text-primary">PlushAroo</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed opacity-90">
                            Handcrafted plush toys made with love. Bringing warmth, comfort, and joy to every hug. 
                            Sustainable, soft, and safe for all ages.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href={route('home')} className="hover:text-primary transition-colors duration-200 block py-1">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={route('products.index')} className="hover:text-primary transition-colors duration-200 block py-1">
                                    Collection
                                </Link>
                            </li>
                            <li>
                                <Link href={route('about')} className="hover:text-primary transition-colors duration-200 block py-1">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={route('contact')} className="hover:text-primary transition-colors duration-200 block py-1">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors duration-200 block py-1">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors duration-200 block py-1">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors duration-200 block py-1">
                                    Return Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary">Get in Touch</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MessageCircle className="h-4 w-4 mt-1 text-primary opacity-80" />
                                <div>
                                    <span className="block opacity-80">WhatsApp</span>
                                    <a href="https://wa.me/628123456789" className="hover:text-primary transition-colors duration-200">
                                        +62 812-3456-7890
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-1 text-primary opacity-80" />
                                <div>
                                    <span className="block opacity-80">Email</span>
                                    <a href="mailto:hello@plusharoo.com" className="hover:text-primary transition-colors duration-200">
                                        hello@plusharoo.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Instagram className="h-4 w-4 mt-1 text-primary opacity-80" />
                                <div>
                                    <span className="block opacity-80">Instagram</span>
                                    <a href="https://instagram.com/plusharoo.id" className="hover:text-primary transition-colors duration-200">
                                        @plusharoo.id
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-16 border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} PlushAroo. All rights reserved.</p>
                    <p>A brand under PT Magana Danamahanta • Made with ❤️ in Indonesia</p>
                </div>
            </div>
        </footer>
    );
}
