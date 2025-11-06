
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Mobile scrole menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

if(mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        if(mobileMenuBtn) {
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        }
    });
});

// Menu tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tabBtns.forEach(b => b.classList.remove('active'));
        
        this.classList.add('active');
    });
});

// Gallery filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        this.reset();
    });
}

const reservationForm = document.getElementById('reservation-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your reservation request has been received. We will confirm shortly.');
        this.reset();
    });
}

// Initialize when the page loads
window.addEventListener('DOMContentLoaded', function() {
    
    if (window.scrollY > 100) {
        document.getElementById('header').classList.add('scrolled');
    }
    
    
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});