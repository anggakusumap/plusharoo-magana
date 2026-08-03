import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Plus Jakarta Sans', 'Outfit', 'Playfair Display', 'serif'],
            },
            borderRadius: {
                lg: 'var(--radius, 0.5rem)',
                md: 'calc(var(--radius, 0.5rem) - 2px)',
                sm: 'calc(var(--radius, 0.5rem) - 4px)',
                '2xl': '1rem',
                '3xl': '1.25rem',
            },
            colors: {
                border: 'hsl(var(--border, 356 30% 93%))',
                input: 'hsl(var(--input, 356 30% 93%))',
                ring: 'hsl(var(--ring, 356 65% 65%))',
                background: 'hsl(var(--background, 356 30% 99%))',
                foreground: 'hsl(var(--foreground, 356 20% 25%))',
                primary: {
                    DEFAULT: 'hsl(var(--primary, 356 65% 65%))',
                    foreground: 'hsl(var(--primary-foreground, 0 0% 100%))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary, 40 30% 96%))',
                    foreground: 'hsl(var(--secondary-foreground, 356 20% 25%))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive, 0 84.2% 60.2%))',
                    foreground: 'hsl(var(--destructive-foreground, 210 40% 98%))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted, 356 20% 94%))',
                    foreground: 'hsl(var(--muted-foreground, 356 10% 45%))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent, 356 60% 96%))',
                    foreground: 'hsl(var(--accent-foreground, 356 75% 55%))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
                    foreground: 'hsl(var(--popover-foreground, 356 20% 25%))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card, 0 0% 100%))',
                    foreground: 'hsl(var(--card-foreground, 356 20% 25%))',
                },
                plusharoo: {
                    primary: '#5C4343',          // Warm friendly cocoa
                    highlight: '#F43F5E',        // Rose
                    accent: '#FDA4AF',           // Soft pink
                    surface: '#FFF1F2',          // Pastel pink tint
                    dark: '#FFF5F5',             // Pastel cream
                    text: '#6B5A5A',             // Warm slate text
                    warm: '#FED7AA',             // Pastel peach
                    lavender: '#F3E8FF',         // Whimsical purple
                    yellow: '#FEF9C3',           // Joyful yellow
                    mint: '#DCFCE7',             // Sweet mint green
                    blue: '#E0F2FE',             // Ocean baby blue
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-down': 'slideDown 0.5s ease-out forwards',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out 2s infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 2s infinite',
                'gradient-shift': 'gradientShift 8s ease infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'marquee': 'marquee 30s linear infinite',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(244, 63, 94, 0.15)' },
                    '100%': { boxShadow: '0 0 40px rgba(244, 63, 94, 0.3), 0 0 80px rgba(251, 113, 133, 0.15)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },

    plugins: [forms, animate],
};
