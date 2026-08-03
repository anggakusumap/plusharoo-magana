import { PropsWithChildren } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { WhatsAppButton } from '@/Components/WhatsAppButton';

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans text-plusharoo-text overflow-x-hidden w-full relative">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
