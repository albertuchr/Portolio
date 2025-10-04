document.addEventListener('DOMContentLoaded', () => {

    // ===== Inisialisasi Animasi Partikel =====
    particlesJS('particles-js', {
        "particles": { "number": { "value": 60, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 140, "line_opacity": 1 }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });

    // ===== Animasi Navbar Saat Scroll =====
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
        if (lastScrollY < window.scrollY && window.scrollY > 100) { navbar.classList.add('hidden'); } else { navbar.classList.remove('hidden'); }
        lastScrollY = window.scrollY;
    });

    // ===== Animasi Hero Section Saat Scroll =====
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if (scrollPos < window.innerHeight) { heroContent.style.opacity = 1 - Math.min(1, scrollPos / 500); }
    });

    // ===== Animasi Scroll Reveal (Typing vs Slide) =====
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('typing-reveal') && !entry.target.classList.contains('typing-done')) {
                    entry.target.classList.add('animated');
                    entry.target.classList.add('typing-done');
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });
    revealElements.forEach(el => { revealObserver.observe(el); });
    
    // ===== Kursor Kustom =====
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', (event) => {
            follower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) scale(2.5)`;
            follower.style.backgroundColor = 'var(--primary-color)';
            follower.style.opacity = '0.3';
        });
        link.addEventListener('mouseleave', (event) => {
            follower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) scale(1)`;
            follower.style.backgroundColor = 'transparent';
            follower.style.opacity = '1';
        });
    });
    
    // ===== Inisialisasi Slick Carousel =====
    $('.certification-carousel').slick({
        centerMode: true, centerPadding: '60px', slidesToShow: 3, infinite: true, speed: 500, autoplay: true, autoplaySpeed: 2500, arrows: true, dots: false,
        responsive: [ { breakpoint: 1024, settings: { slidesToShow: 1, centerPadding: '100px' } }, { breakpoint: 600, settings: { slidesToShow: 1, centerPadding: '40px' } } ]
    });

    // ===== Logika untuk Navbar Burger Responsif =====
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navMenuLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navMenuLinks.forEach((link, index) => {
            if (link.style.animation) { link.style.animation = ''; } 
            else { link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; }
        });
        burger.classList.toggle('toggle');
    });
});