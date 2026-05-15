// --- 1. Mobile Navigation Toggle ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle Nav on Burger Click
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// --- 2. Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- 3. Resume Download Simulation ---
function downloadResume() {
    // In a real scenario, this would link to a PDF file
    // e.g., window.location.href = 'resume.pdf';
    
    alert("Downloading Resume...\n(This is a demo. Replace the link in HTML with your actual PDF file path.)");
}

// --- 4. Skills Progress Bar Animation on Scroll ---
const progressBars = document.querySelectorAll('.progress');

const animateProgress = () => {
    progressBars.forEach(progressBar => {
        const barPosition = progressBar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (barPosition < screenPosition) {
            // Get the width percentage from the inline style
            const width = progressBar.style.width;
            progressBar.style.width = width;
        }
    });
};

// Use Intersection Observer for better performance
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = width;
            observer.unobserve(progressBar); // Only animate once
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => {
    observer.observe(bar);
});

// --- 5. Contact Form Handling ---
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    
    // Simulate sending state
    btn.innerText = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
        // Success state
        alert("Message Sent Successfully! I will get back to you soon.");
        contactForm.reset();
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
    }, 2000);
});

// --- 6. Navbar Background Change on Scroll ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.backgroundColor = 'var(--secondary-color)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
});