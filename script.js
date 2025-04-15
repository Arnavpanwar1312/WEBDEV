 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const navLinks = document.querySelector('.nav-links');

 if (mobileMenuBtn) {
     mobileMenuBtn.addEventListener('click', () => {
         navLinks.classList.toggle('active');
         
         // Toggle icon
         const icon = mobileMenuBtn.querySelector('i');
         if (icon.classList.contains('fa-bars')) {
             icon.classList.remove('fa-bars');
             icon.classList.add('fa-times');
         } else {
             icon.classList.remove('fa-times');
             icon.classList.add('fa-bars');
         }
     });
 }

 // Close mobile menu when clicking on a link
 const navLinksItems = document.querySelectorAll('.nav-links a');
 navLinksItems.forEach(item => {
     item.addEventListener('click', () => {
         if (navLinks.classList.contains('active')) {
             navLinks.classList.remove('active');
             const icon = mobileMenuBtn.querySelector('i');
             if (icon) {
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
             }
         }
     });
 });

 // Intersection Observer for revealing sections
 const sections = document.querySelectorAll('.section');
 
 const sectionObserver = new IntersectionObserver(
     (entries, observer) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('appear');
                 observer.unobserve(entry.target);
             }
         });
     }, 
     {
         root: null,
         threshold: 0.1,
         rootMargin: '-50px'
     }
 );
 
 sections.forEach(section => {
     sectionObserver.observe(section);
 });
 
 // Animate hero typing effect
 document.addEventListener('DOMContentLoaded', function() {
     // Hero title typewriter effect
     const heroTitle = document.querySelector('.hero-title');
     const originalText = heroTitle.textContent;
     const cursor = document.querySelector('.typing-cursor');
     
     // Clear text content initially
     heroTitle.textContent = '';
     
     let i = 0;
     const typeWriterEffect = function() {
         if (i < originalText.length) {
             heroTitle.textContent += originalText.charAt(i);
             i++;
             setTimeout(typeWriterEffect, 100);
         } else {
             // Add animation to the cursor after typing is done
             cursor.style.animation = 'blink 1s step-end infinite';
         }
     };
     
     // Start the typewriter effect after a small delay
     setTimeout(typeWriterEffect, 500);
     
     // Add hover animations to skill icons
     const skillIcons = document.querySelectorAll('.skill-icon');
     skillIcons.forEach(icon => {
         icon.addEventListener('mouseenter', function() {
             this.style.animation = 'bounce 0.5s ease infinite';
         });
         
         icon.addEventListener('mouseleave', function() {
             this.style.animation = '';
         });
     });
     
     // Form input animation
     const formInputs = document.querySelectorAll('.contact-input, .contact-textarea');
     formInputs.forEach(input => {
         input.addEventListener('focus', function() {
             this.parentElement.classList.add('focused');
         });
         
         input.addEventListener('blur', function() {
             if (this.value === '') {
                 this.parentElement.classList.remove('focused');
             }
         });
     });
     
     // Add subtle animation to project cards on hover
     const projectCards = document.querySelectorAll('.project-card');
     projectCards.forEach(card => {
         card.addEventListener('mouseenter', function() {
             this.style.animation = 'pulse 2s ease infinite';
         });
         
         card.addEventListener('mouseleave', function() {
             this.style.animation = '';
         });
     });
     
     // Adding staggered animation to project tags
     document.querySelectorAll('.project-tags').forEach(tagContainer => {
         const tags = tagContainer.querySelectorAll('.project-tag');
         tags.forEach((tag, index) => {
             tag.style.transitionDelay = `${0.1 * index}s`;
         });
     });
 });
 
 // Contact form submission
 const contactForm = document.getElementById('contact-form');
 if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         
         // Simple animation to show successful submission
         const submitBtn = document.querySelector('.contact-submit');
         submitBtn.textContent = 'Message Sent!';
         submitBtn.style.backgroundColor = '#28a745';
         
         // Reset form
         setTimeout(() => {
             contactForm.reset();
             submitBtn.textContent = 'Send Message';
             submitBtn.style.backgroundColor = '#0066CC';
         }, 3000);
     });
 }
 