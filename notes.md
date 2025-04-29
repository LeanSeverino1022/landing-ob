```

## Implementation Notes

### JavaScript Functionality

The provided code includes several interactive elements:

1. **Mobile Menu Toggle**: Shows/hides the navigation menu on mobile devices
2. **FAQ Accordion**: Expands/collapses FAQ answers when questions are clicked
3. **Testimonial Slider**: Horizontal scrolling testimonials with navigation controls

### Replacing Placeholder Images

Replace all placeholder images (`/api/placeholder/{width}/{height}`) with actual assets:

1. Create high-quality images for each section at the specified dimensions
2. Ensure all images are optimized for web (compressed without quality loss)
3. Use WebP format where possible for better performance
4. Add proper alt text for accessibility

### Customization Guidelines

#### Colors
You can easily adjust the color scheme by modifying the CSS variables in the `:root` selector at the top of the stylesheet:

```css
:root {
--primary: #3498db;      /* Main blue - change this for primary branding */
--primary-light: #5dade2; /* Adjust this to be ~15% lighter than primary */
--primary-dark: #2980b9;  /* Adjust this to be ~15% darker than primary */
--accent: #fe7b48;       /* CTA color - should contrast with primary */
/* other variables... */
}
```

#### Typography
The design uses Inter (Google Fonts) as the primary font. To change this:

1. Update the Google Fonts import link in the# EmpowerMedAI Website - Developer Implementation Guide

## Project Overview

This document contains all the necessary code and assets information to implement the EmpowerMedAI landing page, a modern web application for OBGYN board preparation. The design follows contemporary web standards with a clean, professional aesthetic inspired by modern SaaS platforms like Asana.

## Design Specifications

### Color Palette
```css
--primary: #3498db;        /* Main blue */
--primary-light: #5dade2;  /* Light blue for accents */
--primary-dark: #2980b9;   /* Dark blue for hover states */
--secondary: #f9f9fb;      /* Light background */
--accent: #fe7b48;         /* Orange for CTAs */
--accent-light: #ff9d7a;   /* Light orange for hover */
--text: #2b2738;           /* Dark text */
--text-light: #6c6684;     /* Secondary text */
--text-lighter: #a3a0b0;   /* Tertiary text */
--white: #ffffff;          /* White */
--gray-100: #f5f5f8;       /* Lightest gray */
--gray-200: #e6e6ec;       /* Light gray */
--gray-300: #d1d0d8;       /* Medium gray */
--success: #00c796;        /* Green for success states */
```

### Typography
- Primary Font: Inter (Google Fonts)
- Font Weights: 300, 400, 500, 600, 700
- Base Font Size: 16px
- Line Height: 1.6

### Spacing
- Consistent 8-point grid system
- Section Padding: 6rem 0
- Container Max Width: 1200px

### Shadow System
```css
--shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 10px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 25px rgba(43, 39, 56, 0.1);
```

### Border Radius
```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 24px;
```

## Asset Requirements

### Images
For development, you can use placeholder images from `/api/placeholder/{width}/{height}`, but these should be replaced with actual assets for production:

1. **Logo Icon**: Medical/brain icon (Font Awesome: `fa-brain`)
2. **Hero Image**: Platform interface screenshot (600x400px)
3. **Partner Logos**: 3x medical association logos (120x30px each)
4. **Mockup Image**: Platform UI mockup (800x450px)
5. **Benefits Image**: Physician using platform (500x350px)
6. **Testimonial Avatars**: 4x physician headshots (50x50px each)
7. **CTA Background**: Subtle medical pattern/image (800x400px)

### Icons
The design uses Font Awesome 6 icons throughout. Key icons include:
- `fa-brain` (logo)
- `fa-check` (confirmation)
- `fa-clock` (time-saving)
- `fa-comments` (practice)
- `fa-certificate` (expert)
- `fa-clipboard-check` (assessment)
- `fa-file-medical` (medical content)
- `fa-piggy-bank` (savings)
- `fa-user-graduate` (residents)
- `fa-stethoscope` (physicians)
- `fa-check-circle` (feature lists)
- `fa-chevron-down` (accordions)
- Social media icons for footer

## Complete HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EmpowerMedAI - AI-Powered OBGYN Board Preparation</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
<style>
  :root {
    --primary: #3498db;
    --primary-light: #5dade2;
    --primary-dark: #2980b9;
    --secondary: #f9f9fb;
    --accent: #fe7b48;
    --accent-light: #ff9d7a;
    --text: #2b2738;
    --text-light: #6c6684;
    --text-lighter: #a3a0b0;
    --white: #ffffff;
    --gray-100: #f5f5f8;
    --gray-200: #e6e6ec;
    --gray-300: #d1d0d8;
    --success: #00c796;
    --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 25px rgba(43, 39, 56, 0.1);
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 24px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--white);
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4, h5 {
    color: var(--text);
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 700;
  }
  
  h1 {
    font-size: 3.5rem;
    letter-spacing: -1px;
  }
  
  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.5px;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
  
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.25rem;
    color: var(--text-light);
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary);
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    border-radius: var(--radius-md);
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .btn::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 0.8s;
  }
  
  .btn:active::after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: one0s;
  }
  
  .btn-cta {
    background-color: var(--accent);
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
  
  .btn-cta:hover {
    background-color: var(--accent-light);
  }
  
  .btn-secondary {
    background-color: var(--white);
    color: var(--text);
    border: 1px solid var(--gray-200);
  }
  
  .btn-secondary:hover {
    background-color: var(--gray-100);
  }
  
  .btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  .btn-icon {
    display: inline-flex;
    align-items: center;
  }
  
  .btn-icon i {
    margin-right: 0.5rem;
  }
  
  header {
    background-color: var(--white);
    position: fixed;
    width: 100%;
    z-index: 100;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--gray-200);
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .logo {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary);
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  .logo span {
    color: var(--text);
  }
  
  .logo-icon {
    margin-right: 0.5rem;
    color: var(--primary);
  }
  
  nav ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  
  nav ul li {
    margin-left: 2rem;
  }
  
  nav ul li a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    transition: color 0.3s ease;
    font-size: 0.95rem;
  }
  
  nav ul li a:hover {
    color: var(--primary);
  }
  
  .nav-cta {
    margin-left: 1rem;
  }
  
  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text);
  }
  
  section {
    padding: 6rem 0;
  }
  
  .hero {
    background-color: var(--white);
    padding: 10rem 0 6rem;
    position: relative;
    overflow: hidden;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(140deg, var(--primary-light) 0%, transparent 50%);
    opacity: 0.05;
    transform: translateX(30%) rotate(-10deg);
    z-index: 0;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero h1 {
    margin-bottom: 1.5rem;
    position: relative;
  }
  
  .hero h1::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    height: 4px;
    width: 80px;
    background-color: var(--primary);
    border-radius: 2px;
  }
  
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-light);
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  
  .hero-image {
    position: relative;
    z-index: 1;
  }
  
  .hero-image img {
    width: 100%;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
  }
  
  .floating-card {
    position: absolute;
    background-color: var(--white);
    border-radius: var(--radius-md);
    padding: 1.5rem;
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    max-width: 260px;
  }
  
  .float-1 {
    bottom: 5%;
    left: -5%;
  }
  
  .float-2 {
    top: 10%;
    right: -5%;
  }
  
  .float-icon {
    background-color: var(--primary-light);
    color: var(--white);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  
  .float-content h5 {
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }
  
  .float-content p {
    margin-bottom: 0;
    font-size: 0.85rem;
    color: var(--text-lighter);
  }
  
  .partner-logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .partner-logo {
    opacity: 0.5;
    transition: opacity 0.3s ease;
    height: 30px;
  }
  
  .partner-logo:hover {
    opacity: 0.7;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
  }
  
  .subtitle {
    display: inline-block;
    background-color: var(--primary-light);
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.35rem 1rem;
    border-radius: 50px;
    margin-bottom: 1rem;
  }
  
  .text-center {
    text-align: center;
  }
  
  .features {
    background-color: var(--secondary);
  }
  
  .features-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .feature-card {
    background-color: var(--white);
    border-radius: var(--radius-md);
    padding: 2.5rem;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    background-color: var(--primary-light);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  .how-it-works {
    background-color: var(--white);
  }
  
  .steps-container {
    display: flex;
    position: relative;
    margin-bottom: 4rem;
  }
  
  .steps-container::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: var(--gray-200);
    z-index: 1;
  }
  
  .step {
    text-align: center;
    position: relative;
    z-index: 2;
    flex: 1;
  }
  
  .step-number {
    width: 80px;
    height: 80px;
    background-color: var(--white);
    color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .step:hover .step-number {
    background-color: var(--primary);
    color: var(--white);
    transform: scale(1.1);
  }
  
  .step-content {
    max-width: 250px;
    margin: 0 auto;
  }
  
  .mockup-container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
  
  .mockup {
    max-width: 800px;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--gray-200);
  }
  
  .mockup img {
    width: 100%;
    display: block;
  }
  
  .benefits {
    background-color: var(--secondary);
  }
  
  .benefits-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    align-items: center;
  }
  
  .benefits-content h2 {
    margin-bottom: 2rem;
  }
  
  .benefit-list {
    list-style: none;
  }
  
  .benefit-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
  
  .benefit-icon {
    width: 36px;
    height: 36px;
    background-color: var(--primary-light);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .benefit-text h4 {
    margin-bottom: 0.5rem;
  }
  
  .benefit-text p {
    margin-bottom: 0;
  }
  
  .benefits-image {
    position: relative;
  }
  
  .benefits-image img {
    width: 100%;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
  }
  
  .testimonials {
    background-color: var(--white);
  }
  
  .testimonials-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 2rem;
    padding: 1rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .testimonials-slider::-webkit-scrollbar {
    display: none;
  }
  
  .testimonial-card {
    min-width: 350px;
    max-width: 350px;
    background-color: var(--white);
    border-radius: var(--radius-md);
    padding: 2rem;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--gray-200);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .testimonial-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .testimonial-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
    object-fit: cover;
  }
  
  .testimonial-info h5 {
    margin-bottom: 0.25rem;
  }
  
  .testimonial-info p {
    margin-bottom: 0;
    font-size: 0.85rem;
    color: var(--text-lighter);
  }
  
  .testimonial-content {
    flex-grow: 1;
    position: relative;
  }
  
  .testimonial-content p {
    font-style: italic;
    position: relative;
    padding-left: 1.5rem;
  }
  
  .testimonial-content p::before {
    content: '"';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 3rem;
    line-height: 1;
    color: var(--primary-light);
    opacity: 0.3;
  }
  
  .slider-controls {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;
  }
  
  .slider-btn {
    width: 40px;
    height: 40px;
    background-color: var(--white);
    color: var(--text);
    border: 1px solid var(--gray-200);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .slider-btn:hover {
    background-color: var(--primary);
    color: var(--white);
    border-color: var(--primary);
  }
  
  .slider-dots {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: center;
  }
  
  .slider-dot {
    width: 8px;
    height: 8px;
    background-color: var(--gray-300);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .slider-dot.active {
    background-color: var(--primary);
    transform: scale(1.2);
  }
  
  .pricing {
    background-color: var(--secondary);
  }
  
  .pricing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  
  .pricing-toggle-label {
    font-weight: 500;
    cursor: pointer;
  }
  
  .pricing-toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    margin: 0 1rem;
  }
  
  .pricing-toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--primary);
    border-radius: 34px;
    transition: all 0.4s ease;
  }
  
  .pricing-toggle-slider::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: var(--white);
    border-radius: 50%;
    transition: all 0.4s ease;
  }
  
  .pricing-toggle-checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .pricing-toggle-checkbox:checked + .pricing-toggle-slider::before {
    transform: translateX(30px);
  }
  
  .pricing-toggle-discount {
    background-color: var(--accent);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 50px;
    margin-left: 0.5rem;
  }
  
  .pricing-plans {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  .pricing-plan {
    background-color: var(--white);
    border-radius: var(--radius-md);
    padding: 3rem;
    box-shadow: var(--shadow-md);
    max-width: 350px;
    width: 100%;
    transition: all 0.3s ease;
    border: 1px solid var(--gray-200);
  }
  
  .pricing-plan.popular {
    transform: scale(1.05);
    border: 2px solid var(--primary);
    position: relative;
  }
  
  .pricing-plan.popular::before {
    content: 'Most Popular';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary);
    color: var(--white);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    white-space: nowrap;
  }
  
  .pricing-plan:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .pricing-plan.popular:hover {
    transform: scale(1.05) translateY(-5px);
  }
  
  .pricing-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--gray-200);
  }
  
  .pricing-name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .pricing-price {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.5rem;
  }
  
  .pricing-price span {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--text-light);
  }
  
  .pricing-duration {
    color: var(--text-light);
    font-size: 0.95rem;
  }
  
  .pricing-features {
    list-style: none;
    margin-bottom: 2rem;
  }
  
  .pricing-features li {
    padding: 0.75rem 0;
    color: var(--text-light);
    display: flex;
    align-items: center;
  }
  
  .pricing-features li i {
    color: var(--success);
    margin-right: 0.75rem;
  }
  
  .pricing-footer {
    text-align: center;
  }
  
  .faq {
    background-color: var(--white);
  }
  
  .faq-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .faq-item {
    background-color: var(--white);
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    border: 1px solid var(--gray-200);
  }
  
  .faq-question {
    padding: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .faq-question:hover {
    color: var(--primary);
  }
  
  .faq-arrow {
    transition: transform 0.3s ease;
  }
  
  .faq-item.active .faq-arrow {
    transform: rotate(180deg);
  }
  
  .faq-answer {
    padding: 0 1.5rem 1.5rem;
  }
  
  .cta {
    background-color: var(--primary);
    color: var(--white);
    position: relative;
    overflow: hidden;
  }
  
  .cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/api/placeholder/800/400');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
  
  .cta-container {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .cta h2,
  .cta p {
    color: var(--white);
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .btn-white {
    background-color: var(--white);
    color: var(--primary);
  }
/*   
  .btn-white:hover {
    background-color: rgba(255, 255, 255, 0 */


    /* THE EXTRA HTMLß */

    -grid {
      display: grid;
      grid-template-columns: 1.5fr repeat(3, 1fr);
      gap: 4rem;
      margin-bottom: 4rem;
    }
    
    .footer-col h5 {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }
    
    .footer-about p {
      margin-bottom: 1.5rem;
    }
    
    .footer-social {
      display: flex;
      gap: 1rem;
    }
    
    .social-icon {
      width: 36px;
      height: 36px;
      background-color: var(--white);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease;
    }
    
    .social-icon:hover {
      background-color: var(--primary);
      color: var(--white);
    }
    
    .footer-links {
      list-style: none;
    }
    
    .footer-links li {
      margin-bottom: 0.75rem;
    }
    
    .footer-links a {
      text-decoration: none;
      color: var(--text-light);
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: var(--primary);
    }
    
    .footer-contact li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
      color: var(--text-light);
    }
    
    .footer-contact i {
      margin-right: 1rem;
      color: var(--primary);
    }
    
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid var(--gray-200);
    }
    
    .footer-copyright {
      color: var(--text-light);
      font-size: 0.9rem;
    }
    
    .footer-legal {
      display: flex;
      gap: 2rem;
    }
    
    .footer-legal a {
      text-decoration: none;
      color: var(--text-light);
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }
    
    <!-- .footer -->