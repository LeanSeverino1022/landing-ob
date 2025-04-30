document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle with dropdown functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', () => {
        // Toggle navigation visibility
        mainNav.classList.toggle('hidden');
        // Toggle menu/close icons
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        // Add dropdown effect
        if (!mainNav.classList.contains('hidden')) {
          mainNav.classList.add('dropdown-active');
        } else {
          mainNav.classList.remove('dropdown-active');
        }
      });
    }
  
    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      if (question) {
        question.addEventListener('click', () => {
          // Check if this item is already active
          const isActive = item.classList.contains('active');
          
          // Close all FAQ items
          faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
          });
          
          // If the clicked item wasn't active, open it
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  
    // Testimonial slider functionality
    const slider = document.getElementById('testimonials-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    
    function updateSlider() {
      if (!slider) return;
      
      const cards = slider.querySelectorAll('.testimonial-card');
      if (cards.length === 0) return;
      
      const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);
      
      slider.scrollTo({
        left: cardWidth * currentSlide,
        behavior: 'smooth'
      });
      
      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    
    // Add click handlers for slider buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const cards = slider.querySelectorAll('.testimonial-card');
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        updateSlider();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const cards = slider.querySelectorAll('.testimonial-card');
        currentSlide = (currentSlide + 1) % cards.length;
        updateSlider();
      });
    }
    
    // Add click handlers for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (mainNav && !mainNav.classList.contains('hidden') && window.innerWidth < 768) {
            mainNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            mainNav.classList.remove('dropdown-active');
          }
        }
      });
    });
    
    // Handle scroll events for header transparency
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    function updateHeader() {
      if (window.scrollY > 50) {
        header.classList.add('shadow-sm');
      } else {
        header.classList.remove('shadow-sm');
      }
      
      lastScrollY = window.scrollY;
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initialize on load
  });