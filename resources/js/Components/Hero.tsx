import { Button } from "@/Components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium">
                            <Heart className="w-4 h-4 fill-current" />
                            <span>Handcrafted with love & care</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Soft Hugs for <br />
                            <span className="text-primary relative inline-block">
                                Little Dreams
                                <svg className="absolute w-full h-3 bottom-2 left-0 -z-10 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                </svg>
                            </span>
                        </h1>
                        
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                            Discover our collection of premium, handmade plushies designed to be your child's forever companion. Safe, sustainable, and endlessly cuddly.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105">
                                Explore Collection
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/50">
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    {/* Hero Image / Illustration */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 bg-secondary/20 rounded-[3rem] p-8 md:p-12 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out-expo">
                            <div className="aspect-[4/5] bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                                <span className="text-[12rem] relative z-10 animate-float drop-shadow-xl">
                                    🧸
                                </span>
                                
                                {/* Floating elements */}
                                <div className="absolute top-10 right-10 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg animate-bounce-slow">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <div className="absolute bottom-20 left-10 p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg animate-bounce-slower">
                                    <span className="text-xl">❤️</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Blob behind */}
                        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 scale-110" />
                    </div>
                </div>
            </div>
        </section>
    );
}
