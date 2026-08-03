@php
    $uri = request()->path();
    $metaTitle = "PlushAroo - Handcrafted Plush Toys & Dolls";
    $metaDescription = "Soft companions handcrafted with love and care by mothers in Bali. Discover our unique collection of Batik-inspired plush toys, dolls, and custom creations.";
    
    if (str_contains($uri, 'about')) {
        $metaTitle = "About Us - PlushAroo";
        $metaDescription = "Learn about the PlushAroo story, our mission to empower Balinese mothers through ethical crafting, and our quality-certified plush toys.";
    } elseif (str_contains($uri, 'contact')) {
        $metaTitle = "Contact Us - PlushAroo";
        $metaDescription = "Get in touch with PlushAroo. We are open for inquiries, custom handmade orders, and collaborations in Bali.";
    } elseif (str_contains($uri, 'faq')) {
        $metaTitle = "Frequently Asked Questions - PlushAroo";
        $metaDescription = "Find answers about our materials, international shipping, custom orders, and child safety certifications.";
    } elseif (str_contains($uri, 'products') || str_contains($uri, 'collection')) {
        $metaTitle = "Our Collection - PlushAroo";
        $metaDescription = "Browse our high-quality handcrafted dolls and plush toys. Elephants, giraffes, hippo, and more, each featuring beautiful batik details.";
    }
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Primary Meta Tags -->
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta name="description" content="{{ $metaDescription }}">

        <!-- Open Graph / Facebook / WhatsApp -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="{{ $metaTitle }}">
        <meta property="og:description" content="{{ $metaDescription }}">
        <meta property="og:image" content="{{ asset('photo/meta-preview.jpg') }}">
        <meta property="og:image:width" content="800">
        <meta property="og:image:height" content="600">
        <meta property="og:image:type" content="image/jpeg">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="{{ $metaTitle }}">
        <meta property="twitter:description" content="{{ $metaDescription }}">
        <meta property="twitter:image" content="{{ asset('photo/meta-preview.jpg') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
