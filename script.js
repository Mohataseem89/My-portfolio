/* ============================================================
   PORTFOLIO — Main JavaScript
   Handles all interactivity, scroll animations, observers,
   form handling, parallax, tilt effects, and counter animations.
   No external libraries required.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ----------------------------------------------------------
     1. NAVBAR SCROLL EFFECT
     Adds a .scrolled class when page is scrolled past 100px
     so CSS can apply a solid/blurred background.
  ---------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  /* ----------------------------------------------------------
     2. SMOOTH SCROLL FOR NAV LINKS
     All anchor links that point to an ID smoothly scroll
     to their target. Also closes mobile menu on click.
  ---------------------------------------------------------- */
  const smoothScrollLinks = document.querySelectorAll('.nav-links a, a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile menu after clicking a link
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  /* ----------------------------------------------------------
     3. HAMBURGER MENU
     Toggles .active on .nav-links for mobile menu.
     Closes menu when clicking outside of it.
  ---------------------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        navLinksContainer.classList.contains('active') &&
        !navLinksContainer.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navLinksContainer.classList.remove('active');
      }
    });
  }

  /* ----------------------------------------------------------
     4. ACTIVE NAV LINK TRACKING
     Highlights the nav link corresponding to the section
     currently in the viewport as the user scrolls.
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const highlightActiveNav = () => {
    const scrollPos = window.scrollY + 200; // offset for better UX

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navItems.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  /* ----------------------------------------------------------
     5. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
     Observes all .animate-on-scroll elements and adds
     .animated class when they enter the viewport.
     Supports data-delay for staggered timing.
  ---------------------------------------------------------- */
  const scrollAnimObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay');

          if (delay) {
            el.style.animationDelay = delay;
          }

          el.classList.add('animated');
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    scrollAnimObserver.observe(el);
  });

  /* ----------------------------------------------------------
     6. LANDING PAGE ANIMATION SEQUENCE
     Orchestrates a timed entry animation for hero elements.
     Elements start invisible via JS, then classes trigger
     CSS keyframes in sequence.
  ---------------------------------------------------------- */
  const heroElements = {
    logo: document.querySelector('.hero-logo'),
    name: document.querySelector('.hero-name'),
    designations: document.querySelector('.hero-designations'),
    intro: document.querySelector('.hero-intro'),
    ctaButtons: document.querySelectorAll('.cta-buttons > *'),
    socialIcons: document.querySelectorAll('.social-icons > *'),
  };

  // Set initial hidden state for landing elements
  const landingEls = [
    heroElements.logo,
    heroElements.name,
    heroElements.designations,
    heroElements.intro,
  ].filter(Boolean);

  landingEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  heroElements.ctaButtons.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  heroElements.socialIcons.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  /**
   * Helper — adds animation classes and removes the inline
   * hidden styles so CSS transitions / keyframes take over.
   */
  const animateElement = (el, animationClass) => {
    if (!el) return;
    el.classList.add('animated', animationClass);
    // Let CSS handle the rest; remove inline overrides
    el.style.opacity = '';
    el.style.transform = '';
  };

  // Timed sequence
  setTimeout(() => animateElement(heroElements.logo, 'fade-up'), 0);
  setTimeout(() => animateElement(heroElements.name, 'fade-up'), 200);
  setTimeout(() => animateElement(heroElements.designations, 'fade-up'), 500);
  setTimeout(() => animateElement(heroElements.intro, 'fade-up'), 800);

  // CTA buttons — stagger 150ms each, starting at 1200ms
  setTimeout(() => {
    heroElements.ctaButtons.forEach((btn, i) => {
      setTimeout(() => animateElement(btn, 'fade-up'), i * 150);
    });
  }, 1200);

  // Social icons — stagger 200ms each, starting at 1600ms
  setTimeout(() => {
    heroElements.socialIcons.forEach((icon, i) => {
      setTimeout(() => animateElement(icon, 'bounce-in'), i * 200);
    });
  }, 1600);

  /* ----------------------------------------------------------
     7. PROGRESS BARS (Skills Section)
     Fills progress bars and counts up the percentage text
     when the #skills section scrolls into view.
  ---------------------------------------------------------- */
  let skillsAnimated = false;

  const skillsSection = document.querySelector('#skills');

  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !skillsAnimated) {
            skillsAnimated = true;

            const bars = document.querySelectorAll('.progress-bar-fill');

            setTimeout(() => {
              bars.forEach((bar) => {
                const percentage = parseInt(bar.getAttribute('data-percentage'), 10);
                if (isNaN(percentage)) return;

                // Animate bar width
                bar.style.width = percentage + '%';

                // Find sibling percentage text and animate count
                const percentText =
                  bar.parentElement &&
                  bar.parentElement.parentElement &&
                  bar.parentElement.parentElement.querySelector('.skill-percentage');

                if (percentText) {
                  animateCounter(percentText, 0, percentage, 1200, '%');
                }
              });
            }, 300);

            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    skillsObserver.observe(skillsSection);
  }

  /**
   * Generic counter animation using requestAnimationFrame.
   * @param {HTMLElement} el   — Element whose textContent is updated
   * @param {number} start    — Starting value
   * @param {number} end      — Target value
   * @param {number} duration — Animation duration in ms
   * @param {string} suffix   — Optional suffix (e.g. '%' or '+')
   */
  function animateCounter(el, start, end, duration, suffix = '') {
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuad for smooth deceleration
      const easedProgress = progress * (2 - progress);
      const current = Math.floor(start + (end - start) * easedProgress);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = end + suffix;
      }
    };

    requestAnimationFrame(step);
  }

  /* ----------------------------------------------------------
     8. STAT COUNTERS (Achievements Section)
     Counts up each .stat-number from 0 to its data-count
     value with an easeOutQuad curve over 2000ms.
  ---------------------------------------------------------- */
  let statsAnimated = false;

  const statsContainer = document.querySelector('.stats-counters');

  if (statsContainer) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;

            const statNumbers = document.querySelectorAll('.stat-number');

            statNumbers.forEach((el) => {
              const target = parseInt(el.getAttribute('data-count'), 10);
              if (isNaN(target)) return;

              // Check if original text contains '+'
              const originalText = el.textContent.trim();
              const hasPlus = originalText.includes('+');
              const suffix = hasPlus ? '+' : '';

              animateCounter(el, 0, target, 2000, suffix);
            });

            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    statsObserver.observe(statsContainer);
  }

  /* ----------------------------------------------------------
     9. CONTACT FORM HANDLING
     Constructs a mailto URL from form fields and opens it.
     Shows a brief success notification that fades out.
  ---------------------------------------------------------- */
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('[name="name"]')?.value || '';
      const email = contactForm.querySelector('[name="email"]')?.value || '';
      const subject = contactForm.querySelector('[name="subject"]')?.value || '';
      const message = contactForm.querySelector('[name="message"]')?.value || '';

      const mailtoUrl =
        'mailto:mohataseem89@gmail.com' +
        '?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(
          'From: ' + name + '\nEmail: ' + email + '\n\n' + message
        );

      window.location.href = mailtoUrl;

      // Show success notification
      showNotification('Message prepared! Your email client should open shortly.');
    });
  }

  /**
   * Creates and displays a brief notification toast.
   * Auto-fades and removes itself after 3 seconds.
   */
  function showNotification(text) {
    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.textContent = text;

    // Inline styles for the toast (self-contained, no CSS dependency)
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: '#fff',
      padding: '14px 28px',
      borderRadius: '12px',
      fontSize: '0.95rem',
      fontWeight: '500',
      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.35)',
      zIndex: '10000',
      opacity: '0',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      pointerEvents: 'none',
    });

    document.body.appendChild(notification);

    // Fade in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(-50%) translateY(-10px)';
    });

    // Fade out and remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(() => notification.remove(), 400);
    }, 3000);
  }

  /* ----------------------------------------------------------
     10. CERTIFICATION CARD TILT (Mouse Follow)
     Applies a subtle 3D tilt to .cert-card elements based
     on cursor position relative to the card center.
  ---------------------------------------------------------- */
  const certCards = document.querySelectorAll('.cert-card');

  certCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Normalized offset from center (−1 to 1)
      const offsetX = (e.clientX - cardCenterX) / (rect.width / 2);
      const offsetY = (e.clientY - cardCenterY) / (rect.height / 2);

      const maxRotation = 4; // degrees
      const rotateY = offsetX * maxRotation;   // horizontal tilt
      const rotateX = -offsetY * maxRotation;  // vertical tilt (inverted)

      card.style.transform =
        `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
      card.style.transition = 'transform 0.5s ease';
    });
  });

  /* ----------------------------------------------------------
     11. SCROLL TO TOP BUTTON
     Shows a button when user scrolls past 500px.
     Clicking it smoothly scrolls back to the top.
  ---------------------------------------------------------- */
  let scrollTopBtn = document.querySelector('.scroll-top');

  // Create the button if it doesn't exist in the DOM
  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.innerHTML = '&#8679;'; // upward arrow
    Object.assign(scrollTopBtn.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: 'none',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: '#fff',
      fontSize: '1.4rem',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
      opacity: '0',
      visibility: 'hidden',
      transition: 'opacity 0.4s ease, visibility 0.4s ease, transform 0.3s ease',
      zIndex: '9999',
    });
    document.body.appendChild(scrollTopBtn);
  }

  const handleScrollTopVisibility = () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.classList.remove('visible');
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  };

  window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Hover effect for scroll-top button
  scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
  });
  scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
  });

  /* ----------------------------------------------------------
     12. EXPERIENCE CARD CURTAIN ANIMATION
     Animates .exp-dark-panel with a curtain-open effect,
     then staggers in bullet points when the card enters view.
  ---------------------------------------------------------- */
  const experienceCards = document.querySelectorAll('.experience-card');

  if (experienceCards.length) {
    const expObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;

            // Trigger curtain animation on dark panel
            const darkPanel = card.querySelector('.exp-dark-panel');
            if (darkPanel) {
              darkPanel.classList.add('animated');
            }

            // After curtain opens, stagger-animate bullet points
            setTimeout(() => {
              const bullets = card.querySelectorAll('li, .exp-bullet');
              bullets.forEach((bullet, i) => {
                setTimeout(() => {
                  bullet.classList.add('animated', 'fade-up');
                }, i * 100);
              });
            }, 500);

            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    experienceCards.forEach((card) => expObserver.observe(card));
  }

  /* ----------------------------------------------------------
     13. PARALLAX ON LANDING
     Subtle vertical parallax and opacity fade on the hero
     content as the user scrolls down. Only active while
     the viewport is within the hero area.
  ---------------------------------------------------------- */
  const heroContent = document.querySelector('.hero-content');

  const handleParallax = () => {
    if (!heroContent) return;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY < windowHeight) {
      const translateY = scrollY * 0.3;
      const opacity = 1 - (scrollY / windowHeight) * 0.5;

      heroContent.style.transform = `translateY(${translateY}px)`;
      heroContent.style.opacity = Math.max(opacity, 0);
    }
  };

  window.addEventListener('scroll', handleParallax, { passive: true });

  /* ----------------------------------------------------------
     14. FORM FIELD SEQUENTIAL ANIMATION
     When #contact scrolls into view, each .form-underline
     animates its width to 100% in sequence, followed by
     a gentle pulse on the submit button.
  ---------------------------------------------------------- */
  const contactSection = document.querySelector('#contact');

  if (contactSection) {
    let contactAnimated = false;

    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !contactAnimated) {
            contactAnimated = true;

            const underlines = contactSection.querySelectorAll('.form-underline');
            underlines.forEach((line, i) => {
              setTimeout(() => {
                line.classList.add('active');
                line.style.width = '100%';
              }, i * 200);
            });

            // After all underlines finish, pulse the send button
            const totalDelay = underlines.length * 200 + 300;
            setTimeout(() => {
              const sendBtn = contactSection.querySelector('.btn-send');
              if (sendBtn) {
                sendBtn.style.animation = 'gentlePulse 0.8s ease';
                // Remove animation after it completes so it can re-trigger if needed
                sendBtn.addEventListener(
                  'animationend',
                  () => {
                    sendBtn.style.animation = '';
                  },
                  { once: true }
                );
              }
            }, totalDelay);

            contactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    contactObserver.observe(contactSection);
  }

  /* ----------------------------------------------------------
     INITIAL CALLS
     Run handlers once on load so state is correct before
     any scroll event fires.
  ---------------------------------------------------------- */
  handleNavbarScroll();
  highlightActiveNav();
  handleScrollTopVisibility();
});
