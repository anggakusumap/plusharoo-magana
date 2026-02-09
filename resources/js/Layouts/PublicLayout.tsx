import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react"; // Or standard anchor tags if not using Inertia routing for anchors
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { cn } from "@/lib/utils";
import Footer from "@/Components/Footer";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: route("home") },
        { name: "Collection", href: route("products.index") },
        { name: "About", href: route("about") },
        { name: "FAQ", href: route("faq") },
        { name: "Contact", href: route("contact") },
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            {/* Navbar */}
            <nav
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-300",
                    scrolled
                        ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/40 py-3"
                        : "bg-transparent py-5",
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold tracking-tight text-primary group-hover:text-primary/90 transition-colors">
                            PlushAroo
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) & Mobile Menu Trigger */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Button
                                size="sm"
                                className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-soft"
                            >
                                Shop Now
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden text-foreground"
                                >
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] sm:w-[400px]"
                            >
                                <div className="flex flex-col gap-6 mt-10">
                                    <Link
                                        href="/"
                                        className="text-2xl font-bold text-primary mb-4"
                                    >
                                        PlushAroo
                                    </Link>
                                    <div className="flex flex-col gap-4">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50 pb-2"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <Button
                                        className="w-full mt-4 rounded-full"
                                        size="lg"
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-20 md:pt-24 min-h-screen">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
