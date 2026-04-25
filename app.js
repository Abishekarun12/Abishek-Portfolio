/* ===========================
   app.js — Abishek Portfolio
   GSAP + ScrollTrigger powered
=========================== */

(function () {
    'use strict';

    // ─── GSAP Plugin ───────────────────────────────
    gsap.registerPlugin(ScrollTrigger);

    // ─── Custom Cursor ─────────────────────────────
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');

    if (window.matchMedia('(hover: hover)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0.1 });
        });

        gsap.ticker.add(() => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            gsap.set(cursorRing, { x: ringX, y: ringY });
        });
    }

    // ─── Theme Toggle ──────────────────────────────
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') body.classList.add('light-mode');

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    // ─── Hamburger Menu ────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });

    // ─── Active Nav on Scroll ──────────────────────
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // ─── Smooth Anchor Scroll ──────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ─── HERO ANIMATIONS ──────────────────────────
    const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTL
        .to('.hero-tag', { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
        .to('.hero-line', { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, '-=0.3')
        .to('.hero-role', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .to('.hero-stats', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .to('.hero-visual', { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
        .to('.scroll-indicator', { opacity: 1, duration: 0.6 }, '-=0.2');

    // ─── SCROLL REVEAL ────────────────────────────
    // Generic reveal-up
    gsap.utils.toArray('.reveal-up').forEach(el => {
        const delay = parseFloat(el.dataset.delay || 0);
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay,
            ease: 'power3.out'
        });
    });

    // reveal-left
    gsap.utils.toArray('.reveal-left').forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: 'power3.out'
        });
    });

    // reveal-right
    gsap.utils.toArray('.reveal-right').forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: 'power3.out'
        });
    });

    // ─── AI TOOL CARDS STAGGER ────────────────────
    gsap.from('.ai-tool-card', {
        scrollTrigger: {
            trigger: '.ai-tools-block',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        scale: 0.85,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });

    // ─── TIMELINE STAGGER ─────────────────────────
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.18,
        ease: 'power2.out'
    });

    // ─── SECTION TITLE PARALLAX ───────────────────
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power2.out'
        });
    });

    // ─── PROJECT CARDS STAGGER ─────────────────────
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out'
    });

    // ─── HERO CARD 3D TILT ─────────────────────────
    const heroCard = document.querySelector('.hero-card');
    if (heroCard && window.matchMedia('(hover: hover)').matches) {
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(heroCard, {
                rotateY: x * 12,
                rotateX: -y * 12,
                transformPerspective: 800,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        heroCard.addEventListener('mouseleave', () => {
            gsap.to(heroCard, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        });
    }

    // ─── CONTACT ITEMS STAGGER ─────────────────────
    gsap.from('.contact-row', {
        scrollTrigger: {
            trigger: '.contact-details',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // ─── MODAL LOGIC ──────────────────────────────
    const modalOverlay = document.getElementById('modalOverlay');
    const liveLink = document.getElementById('liveLink');
    let targetUrl = '';

    if (liveLink) {
        liveLink.addEventListener('click', (e) => {
            e.preventDefault();
            targetUrl = liveLink.href;
            modalOverlay.classList.add('open');
        });
    }

    window.closeModal = function () {
        modalOverlay.classList.remove('open');
    };

    window.proceedRedirect = function () {
        window.open(targetUrl, '_blank');
        closeModal();
    };

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // ─── FLOATING BADGES HOVER ────────────────────
    document.querySelectorAll('.floating-badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            gsap.to(badge, { scale: 1.1, duration: 0.3, ease: 'back.out(2)' });
        });
        badge.addEventListener('mouseleave', () => {
            gsap.to(badge, { scale: 1, duration: 0.3 });
        });
    });

    // ─── STAT COUNTER ──────────────────────────────
    function animateCounter(el, target) {
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current) + (el.dataset.suffix || '+');
        }, 35);
    }

    const statNums = document.querySelectorAll('.stat-num');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const val = parseInt(el.textContent.replace('+', ''));
                if (!isNaN(val)) animateCounter(el, val);
                statObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => statObserver.observe(el));

})();