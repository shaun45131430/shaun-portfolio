// script.js

// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // Duration of animations
    easing: 'ease-in-out', // Easing function
    once: true, // Animation should happen only once
});

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const target = document.querySelector(this.getAttribute('href')); // Get target element
        window.scrollTo({
            top: target.offsetTop - 50, // Scroll to target position
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

// Fade-in effect for sections using Intersection Observer API
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class to trigger fade-in
            observer.unobserve(entry.target); // Stop observing this section
        }
    });
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});