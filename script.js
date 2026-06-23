/* =============================================
   CSS ACADEMY — MAIN JAVASCRIPT
   ============================================= */

'use strict';

// ---- NAVBAR: scroll effect + mobile toggle ----
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu  = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ---- ACTIVE NAV LINK on scroll ----
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });

// ---- SCROLL ANIMATIONS ----
function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  const animatables = [
    '.feature-card',
    '.program-card',
    '.why-card',
    '.event-card',
    '.gallery-item',
    '.venue-info',
    '.venue-map',
    '.contact-card',
    '.enquiry-form-card',
    '.about-text',
    '.about-features',
    '.section-header',
  ];

  animatables.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('animate-in');
      observer.observe(el);
    });
  });
}

// ---- TABS: Events (Upcoming / Past) ----
function initTabs() {
  const tabBtns    = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetEl = document.getElementById(target);
      if (targetEl) targetEl.classList.add('active');
    });
  });
}

// ---- COUNTER ANIMATION: Hero stats ----
function animateCounters() {
  const numbers = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.textContent.trim();
        const numMatch = raw.match(/\d+/);
        if (numMatch) {
          const target  = parseInt(numMatch[0], 10);
          const suffix  = raw.replace(/[\d,]/g, '');
          let current   = 0;
          const step    = Math.ceil(target / 50);
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(interval);
          }, 30);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  numbers.forEach(n => observer.observe(n));
}

// ---- HERO PARTICLES ----
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(201, 162, 39, ${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: particle-drift ${Math.random() * 12 + 8}s ease-in-out infinite;
      animation-delay: -${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }

  // Inject particle animation keyframe dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-drift {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      33%       { transform: translateY(-30px) translateX(15px); opacity: 0.7; }
      66%       { transform: translateY(-15px) translateX(-20px); opacity: 0.5; }
    }
    #particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }

    /* Active nav highlight */
    .nav-link.active { color: var(--gold) !important; }
  `;
  document.head.appendChild(style);
}

// ---- WHATSAPP ENQUIRY FORM ----
function sendWhatsApp() {
  const name    = (document.getElementById('fname')?.value || '').trim();
  const phone   = (document.getElementById('fphone')?.value || '').trim();
  const age     = (document.getElementById('fage')?.value || '').trim();
  const program = (document.getElementById('fprogram')?.value || '').trim();
  const message = (document.getElementById('fmessage')?.value || '').trim();

  if (!name || !phone) {
    alert('Please enter your name and phone number before submitting.');
    return;
  }

  const lines = [
    '🏟️ *CSS Academy Enquiry*',
    '─────────────────────',
    `👤 *Name:* ${name}`,
    `📱 *Phone:* ${phone}`,
    age     ? `🎂 *Player Age:* ${age}` : null,
    program ? `⚽ *Program:* ${program}` : null,
    message ? `💬 *Message:* ${message}` : null,
    '─────────────────────',
    'Sent from cssacademy.in website',
  ].filter(Boolean).join('\n');

  const encoded = encodeURIComponent(lines);
  window.open(`https://wa.me/919361115939?text=${encoded}`, '_blank');
}

// Expose to global scope (called from inline onclick in HTML)
window.sendWhatsApp = sendWhatsApp;

// ---- SMOOTH ANCHOR SCROLL with navbar offset ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight + 16;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- GALLERY LIGHTBOX (simple) ----
function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-img');
      if (!img) return;
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;
        display:flex;align-items:center;justify-content:center;cursor:zoom-out;
        padding:2rem;animation:fadeIn 0.2s ease;
      `;
      const clone = img.cloneNode();
      clone.style.cssText = `max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;`;
      overlay.appendChild(clone);
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);

      const fs = document.createElement('style');
      fs.textContent = '@keyframes fadeIn{from{opacity:0}to{opacity:1}}';
      document.head.appendChild(fs);
    });
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  revealOnScroll();
  initTabs();
  animateCounters();
  initLightbox();
  setActiveNav();
});
