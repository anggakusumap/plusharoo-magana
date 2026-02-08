export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border mt-20 py-12">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">PlushAroo™</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Handcrafted with love, bringing warmth and joy to every hug. 
                    Sustainable, soft, and safe for all ages.
                </p>
                
                <div className="flex justify-center gap-6 mb-8">
                    {/* Social icons or links could go here */}
                </div>

                <div className="text-sm text-muted-foreground/80">
                    <p>© {new Date().getFullYear()} PlushAroo. All rights reserved.</p>
                    <p className="mt-1">A brand under PT Magana Danamahanta</p>
                </div>
            </div>
        </footer>
    );
}
