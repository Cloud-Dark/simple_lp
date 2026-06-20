document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 1. THEME TOGGLE (LIGHT / DARK MODE)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyEl = document.body;

    // Check system preference or stored theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        bodyEl.classList.remove('light-mode');
        bodyEl.classList.add('dark-mode');
    } else {
        bodyEl.classList.remove('dark-mode');
        bodyEl.classList.add('light-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (bodyEl.classList.contains('light-mode')) {
            bodyEl.classList.remove('light-mode');
            bodyEl.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            bodyEl.classList.remove('dark-mode');
            bodyEl.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // 2. STICKY NAVBAR & SCROLL LINKS ACTIVE STATE
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        // Sticky class toggle
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlight
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // accounting for nav height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once initially

    // 3. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navbar.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // 4. HERO DYNAMIC SLIDER
    const slides = document.querySelectorAll('#hero-slider .slide');
    const sliderIndicators = document.querySelectorAll('#hero-slider .indicator');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 6000; // 6 seconds

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        sliderIndicators.forEach(ind => ind.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        sliderIndicators[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };

    const startSlideTimer = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    };

    if (nextSlideBtn && prevSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            nextSlide();
            startSlideTimer();
        });

        prevSlideBtn.addEventListener('click', () => {
            prevSlide();
            startSlideTimer();
        });
    }

    sliderIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            startSlideTimer();
        });
    });

    // Init Slider Timer
    startSlideTimer();

    // 5. ANIMATED STATS COUNTER
    const statsSection = document.querySelector('.about-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out quad function
                const easeProgress = progress * (2 - progress);
                const currentVal = Math.floor(easeProgress * target);

                stat.textContent = currentVal;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target; // Ensure exact final value
                }
            };

            requestAnimationFrame(updateCount);
        });
    };

    // Intersection Observer for Stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                animateCounters();
                countersAnimated = true;
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // 6. TESTIMONIALS SLIDER
    const testiTrack = document.getElementById('testimonial-track');
    const testiCards = document.querySelectorAll('.testimonial-card');
    const testiIndicators = document.querySelectorAll('#testi-indicators .testi-indicator');
    const testiPrevBtn = document.getElementById('testi-prev');
    const testiNextBtn = document.getElementById('testi-next');

    let currentTesti = 0;

    const showTestimonial = (index) => {
        testiIndicators.forEach(ind => ind.classList.remove('active'));

        currentTesti = (index + testiCards.length) % testiCards.length;
        testiTrack.style.transform = `translateX(-${currentTesti * 100}%)`;
        testiIndicators[currentTesti].classList.add('active');
    };

    if (testiNextBtn && testiPrevBtn) {
        testiNextBtn.addEventListener('click', () => {
            showTestimonial(currentTesti + 1);
        });

        testiPrevBtn.addEventListener('click', () => {
            showTestimonial(currentTesti - 1);
        });
    }

    testiIndicators.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // 7. FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const panel = item.querySelector('.faq-panel');

        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            
            // Close other open FAQ panels
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherTrigger = otherItem.querySelector('.faq-trigger');
                    const otherPanel = otherItem.querySelector('.faq-panel');
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    otherPanel.style.maxHeight = null;
                }
            });

            // Toggle active panel
            if (isExpanded) {
                trigger.setAttribute('aria-expanded', 'false');
                panel.style.maxHeight = null;
            } else {
                trigger.setAttribute('aria-expanded', 'true');
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Recalculate FAQ panel heights on resize if they are open
    window.addEventListener('resize', () => {
        faqItems.forEach(item => {
            const trigger = item.querySelector('.faq-trigger');
            const panel = item.querySelector('.faq-panel');
            if (trigger.getAttribute('aria-expanded') === 'true') {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // 8. CONTACT FORM VALIDATION & MOCK SUBMIT
    const contactForm = document.getElementById('contact-form');
    const successPopup = document.getElementById('success-popup');
    const popupCloseBtn = document.getElementById('popup-close-btn');

    // Validation patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (inputEl, errorEl, condition) => {
        const formGroup = inputEl.closest('.form-group');
        if (condition) {
            formGroup.classList.remove('has-error');
            return true;
        } else {
            formGroup.classList.add('has-error');
            return false;
        }
    };

    // Real-time input cleaning / validation triggers
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const group = input.closest('.form-group');
                group.classList.remove('has-error'); // remove error indicator on keystroke
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const serviceInput = document.getElementById('service');
            const messageInput = document.getElementById('message');

            const isNameValid = validateField(nameInput, null, nameInput.value.trim().length > 0);
            const isEmailValid = validateField(emailInput, null, emailRegex.test(emailInput.value.trim()));
            const isServiceValid = validateField(serviceInput, null, serviceInput.value !== "");
            const isMsgValid = validateField(messageInput, null, messageInput.value.trim().length > 0);

            if (isNameValid && isEmailValid && isServiceValid && isMsgValid) {
                // Mock form sending state
                const submitBtn = document.getElementById('submit-btn');
                const originalBtnContent = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Mengirim...</span> <i data-lucide="loader-2" class="btn-icon animate-spin"></i>`;
                
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons({ attrs: { class: 'btn-icon animate-spin' } });
                }

                // Simulate API call
                setTimeout(() => {
                    // Show success state
                    successPopup.classList.add('show');
                    
                    // Reset Form
                    contactForm.reset();
                    
                    // Restore button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }, 1500);
            }
        });
    }

    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', () => {
            successPopup.classList.remove('show');
        });
    }

    // 9. SCROLL ANIMATION OBSERVER
    const animScrollElements = document.querySelectorAll('.animate-on-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                scrollObserver.unobserve(entry.target); // Stop observing once triggered
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animScrollElements.forEach(el => {
        scrollObserver.observe(el);
    });
});
