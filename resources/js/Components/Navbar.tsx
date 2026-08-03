import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Button } from '@/Components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home', routeName: 'home' },
    { href: '/products', label: 'Collection', routeName: 'products.index' },
    { href: '/about', label: 'About', routeName: 'about' },
    { href: '/faq', label: 'FAQ', routeName: 'faq' },
    { href: '/contact', label: 'Contact', routeName: 'contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${
                    scrolled
                        ? 'bg-white/90 backdrop-blur-xl border-b border-rose-100/50 shadow-sm py-2'
                        : 'bg-transparent py-4'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="shrink-0 flex items-center group">
                            <span className="text-2xl font-bold tracking-tight text-plusharoo-primary group-hover:text-plusharoo-highlight transition-colors duration-300">
                                PlushAroo
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-1">
                            {navItems.map((item) => {
                                const isActive = route().current(item.routeName);
                                return (
                                    <Link
                                        key={item.routeName}
                                        href={item.href}
                                        className={`
                                            relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl
                                            transition-all duration-200 ease-out
                                            ${isActive 
                                                ? 'text-plusharoo-highlight bg-rose-50/85' 
                                                : 'text-plusharoo-text hover:text-plusharoo-highlight hover:bg-rose-50/40'
                                            }
                                        `}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-plusharoo-highlight shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                                        )}
                                    </Link>
                                );
                            })}
                            <div className="ml-6">
                                <Button
                                    variant="highlight"
                                    size="sm"
                                    className="rounded-full px-5 shadow-md shadow-plusharoo-highlight/15 hover:shadow-plusharoo-highlight/25 transition-all duration-300"
                                    asChild
                                >
                                    <Link href={route('products.index')}>
                                        Shop Now <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden relative z-50 p-2 rounded-xl text-plusharoo-primary hover:bg-rose-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full-Screen Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center min-h-screen px-8">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                                }}
                                className="space-y-2 text-center w-full max-w-sm"
                            >
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.routeName}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`block py-4 text-2xl font-semibold transition-colors rounded-2xl px-6 ${
                                                route().current(item.routeName)
                                                    ? 'text-plusharoo-highlight bg-rose-50'
                                                    : 'text-plusharoo-text hover:text-plusharoo-highlight hover:bg-rose-50/50'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    className="pt-6"
                                >
                                    <Button
                                        variant="highlight"
                                        size="xl"
                                        className="w-full shadow-lg shadow-plusharoo-highlight/20"
                                        asChild
                                    >
                                        <Link href={route('products.index')} onClick={() => setMobileOpen(false)}>
                                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
