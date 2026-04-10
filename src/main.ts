import './style.css';
import logo from './logo.svg';
import '@hybridxweb/copyright-x/dist/copyright-x';
import { setTheme } from '@thundrex/web-components';

const PROFILE = {
  name: 'Deepesh Padmanabhan Nair',
  avatar_url: 'https://avatars.githubusercontent.com/u/12994292?v=4',
  html_url: 'https://github.com/hybridx',
  location: 'Pune, India',
  twitter_username: '_deepeshnair',
  email: '',
  public_repos: 69,
  followers: 47,
  following: 80
};

const REPOS = [
  {
    name: 'WebScraper',
    description: 'A modern, full-featured web scraper built with Next.js and Supabase. Crawl directory listings, classify files, and search through media collections with a beautiful UI.',
    language: 'TypeScript',
    stargazers_count: 6,
    forks_count: 4,
    html_url: 'https://github.com/hybridx/WebScraper'
  },
  {
    name: 'WebSocket_RAT',
    description: 'Remote Access Trojan using websockets',
    language: 'JavaScript',
    stargazers_count: 5,
    forks_count: 1,
    html_url: 'https://github.com/hybridx/WebSocket_RAT'
  },
  {
    name: 'ai-slack-companion',
    description: 'This is an AI slackbot which you can talk to for FREEE',
    language: 'JavaScript',
    stargazers_count: 4,
    forks_count: 3,
    html_url: 'https://github.com/hybridx/ai-slack-companion'
  },
  {
    name: 'Whatsapp_bomb',
    description: 'To automatically send whatsapp messages in a loop through WhatsAppWeb using selenium',
    language: 'Python',
    stargazers_count: 2,
    forks_count: 1,
    html_url: 'https://github.com/hybridx/Whatsapp_bomb'
  },
  {
    name: 'REST-java-example',
    description: 'Web application with rest web services to add, update, get the data from database and integrated these services with UI application built using angularJS.',
    language: 'Java',
    stargazers_count: 2,
    forks_count: 0,
    html_url: 'https://github.com/hybridx/REST-java-example'
  },
  {
    name: 'CyBot',
    description: 'chatbot application with custom functions for slack api',
    language: 'JavaScript',
    stargazers_count: 2,
    forks_count: 0,
    html_url: 'https://github.com/hybridx/CyBot'
  }
];

function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  setTheme(newTheme);
  updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme: string) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
}

function animateOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}

function initTypingAnimation() {
  const texts = ['Platform Engineer', 'Infrastructure Builder', 'Systems Thinker', 'DevConf India Organizer'];
  const el = document.querySelector('.typing-text');
  if (!el) return;
  let ti = 0, ci = 0, deleting = false;

  function type() {
    const cur = texts[ti];
    if (deleting) { el!.textContent = cur.substring(0, --ci); }
    else { el!.textContent = cur.substring(0, ++ci); }
    if (!deleting && ci === cur.length) setTimeout(() => (deleting = true), 2000);
    else if (deleting && ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    setTimeout(type, deleting ? 50 : 100);
  }
  type();
}

function hexToRgb(h: string) {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (h.length !== 6) return '100,108,255';
  return `${Number.parseInt(h.substring(0, 2), 16)},${Number.parseInt(h.substring(2, 4), 16)},${Number.parseInt(h.substring(4, 6), 16)}`;
}

function initParticleEffect() {
  if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  Object.assign(canvas.style, { position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '1' });
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];
  let animId: number, lastTime = 0;
  const interval = 1000 / 30;

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  function make() {
    return { x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.4 + 0.1 };
  }
  function init() { particles = Array.from({ length: Math.min(25, Math.floor(window.innerWidth / 60)) }, make); }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rgb = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--tx-primary').trim());
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${p.opacity})`; ctx.fill();
    }
    for (let i = 0; i < particles.length - 1; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d2 = dx * dx + dy * dy;
        if (d2 < 8100) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${rgb},${0.08 * (1 - d2 / 8100)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
  }

  function animate(t: number) {
    animId = requestAnimationFrame(animate);
    if (t - lastTime < interval) return;
    lastTime = t - ((t - lastTime) % interval);
    draw();
  }

  resize(); init(); animId = requestAnimationFrame(animate);
  let rt: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (window.innerWidth < 768) { cancelAnimationFrame(animId); canvas.remove(); return; } resize(); init(); }, 200);
  }, { passive: true });
}

function initTimelineAnimations() {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.3 }
  );
  document.querySelectorAll('.timeline-item').forEach((item) => observer.observe(item));
}

function initPageTransitions() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const href = (a as HTMLAnchorElement).getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        const offset = document.querySelector('header')?.offsetHeight || 80;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    menu.classList.toggle('flex', !isOpen);
    toggle.innerHTML = isOpen
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  });
}

function initAccessibilityEnhancements() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
    const pc = document.getElementById('particle-canvas');
    if (pc) pc.style.display = 'none';
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Tab') document.body.classList.add('keyboard-navigation'); });
  document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-navigation'));
  const skip = document.createElement('a');
  skip.href = '#hero'; skip.className = 'skip-link'; skip.textContent = 'Skip to main content';
  document.body.insertBefore(skip, document.body.firstChild);
}

function renderSkillCategory(title: string, skills: Array<{ icon: string; name: string; progress: number }>) {
  return `
    <tx-card>
      <h3 slot="header" class="text-tx-primary font-semibold text-lg m-0">${title}</h3>
      <div class="flex flex-col gap-3">
        ${skills.map(s => `
          <div class="flex items-center gap-3 p-3 rounded-tx bg-tx-surface-alt hover:translate-x-1 transition-transform">
            <div class="w-10 h-10 rounded-tx bg-tx-primary/10 border border-tx-primary/20 flex items-center justify-center text-tx-primary font-bold text-sm shrink-0">${s.icon}</div>
            <span class="font-medium flex-1">${s.name}</span>
            <tx-progress value="${s.progress}" show-value size="sm" color="primary" class="w-20 sm:w-[120px] shrink-0"></tx-progress>
          </div>
        `).join('')}
      </div>
    </tx-card>
  `;
}

function renderCard(icon: string, title: string, description: string, badges: string[], accent: string) {
  return `
    <tx-card accent="${accent}" interactive>
      <div class="w-14 h-14 rounded-tx-lg bg-tx-primary/10 border border-tx-primary/20 flex items-center justify-center text-tx-primary mb-4 shadow-tx-sm">${icon}</div>
      <h3 class="text-tx-text text-xl font-semibold mb-2">${title}</h3>
      <p class="text-tx-text-secondary leading-relaxed mb-4">${description}</p>
      <div class="flex flex-wrap gap-2">
        ${badges.map(b => `<tx-badge color="primary">${b}</tx-badge>`).join('')}
      </div>
    </tx-card>
  `;
}

function renderProjectCard(repo: any) {
  return `
    <tx-card accent="primary" interactive>
      <h3 slot="header" class="text-tx-text text-xl font-semibold m-0">${repo.name}</h3>
      <p class="text-tx-text-secondary leading-relaxed mb-4">${repo.description || 'No description available'}</p>
      <div class="mb-3">
        <tx-badge color="primary">${repo.language || 'Various'}</tx-badge>
      </div>
      <div class="flex gap-4 items-center p-3 bg-tx-surface-alt rounded-tx border border-tx-border mb-4">
        <span class="flex items-center gap-1 text-sm text-tx-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${repo.stargazers_count}
        </span>
        <span class="flex items-center gap-1 text-sm text-tx-text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          ${repo.forks_count}
        </span>
      </div>
      <div slot="footer">
        <a href="${repo.html_url}" target="_blank" class="no-underline">
          <tx-button variant="primary" size="sm">View Project</tx-button>
        </a>
      </div>
    </tx-card>
  `;
}

async function renderPortfolio() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  setTheme(theme);

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="font-tx bg-tx-bg text-tx-text transition-colors duration-300">

      <!-- Header -->
      <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-tx-sm transition-colors duration-300" style="background-color:var(--header-bg)">
        <div class="w-full mx-auto flex justify-between items-center px-4 md:px-8 py-3">
          <a href="/" class="bg-white rounded-[20px] px-4 inline-flex items-center">
            <img src="${logo}" class="h-12 hover:scale-110 transition-transform" alt="Hybridx logo" width="104" height="26" />
          </a>
          <div class="flex items-center gap-3">
            <nav id="desktop-nav" class="hidden md:flex items-center gap-6">
              <a href="#about" class="nav-link text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">About</a>
              <a href="#homelab" class="nav-link text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Infrastructure</a>
              <a href="#ai-experiments" class="nav-link text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">AI & Experiments</a>
              <a href="#experience" class="nav-link text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Experience</a>
              <a href="#projects" class="nav-link text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Projects</a>
              <a href="#contact" class="nav-link text-tx-text font-medium hover:text-tx-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-tx-primary after:transition-all hover:after:w-full">Contact</a>
            </nav>
            <button id="theme-toggle" class="p-2 rounded-full border-none cursor-pointer bg-transparent text-tx-text hover:bg-tx-surface-alt hover:scale-110 hover:rotate-15 transition-all" aria-label="Toggle theme"></button>
            <button id="menu-toggle" class="p-2 rounded-full border-none cursor-pointer bg-transparent text-tx-text hover:bg-tx-surface-alt transition-all md:hidden" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
        <nav id="mobile-menu" class="mobile-menu hidden md:hidden">
          <a href="#about" class="mobile-nav-link">About</a>
          <a href="#homelab" class="mobile-nav-link">Infrastructure</a>
          <a href="#ai-experiments" class="mobile-nav-link">AI & Experiments</a>
          <a href="#experience" class="mobile-nav-link">Experience</a>
          <a href="#projects" class="mobile-nav-link">Projects</a>
          <a href="#contact" class="mobile-nav-link">Contact</a>
        </nav>
      </header>

      <!-- Hero -->
      <section id="hero" class="min-h-screen flex items-center pt-24 px-4 md:px-8">
        <div class="max-w-[1200px] mx-auto w-full flex items-center justify-between gap-8 lg:gap-16 max-lg:flex-col max-lg:text-center">
          <div class="flex-1 text-left max-lg:text-center">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Hi, I'm <span class="text-tx-primary">${PROFILE.name}</span></h1>
            <p class="text-lg sm:text-xl text-tx-text-secondary mb-4 flex items-center gap-1 max-lg:justify-center">
              <span class="typing-text">Software Engineer</span>
              <span class="cursor-blink text-tx-primary font-bold">|</span>
            </p>
            <p class="text-base text-tx-text-secondary mb-6">
              <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="text-tx-primary font-medium hover:text-tx-accent transition-colors inline-flex items-center gap-1 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                181094.xyz
              </a>
            </p>
            <div class="flex gap-3 max-sm:flex-col max-lg:justify-center">
              <a href="#projects" class="no-underline"><tx-button variant="primary" size="lg">View My Work</tx-button></a>
              <a href="#contact" class="no-underline"><tx-button variant="ghost" size="lg">Get in Touch</tx-button></a>
            </div>
          </div>
          <div class="flex-1 flex justify-center">
            <img src="${PROFILE.avatar_url}" class="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-tx-primary shadow-tx-lg bg-tx-surface" alt="Profile picture" width="300" height="300" fetchpriority="high" style="animation:float 6s ease-in-out infinite" />
          </div>
        </div>
        <div class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 max-sm:hidden">
          <div class="mouse"><div class="wheel"></div></div>
          <div class="arrow flex flex-col items-center gap-1"><span></span><span></span><span></span></div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- About -->
      <section id="about" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">About Me</h2>
          <div class="flex gap-8 lg:gap-16 text-left max-lg:flex-col">
            <div class="flex-1">
              <p class="text-xl leading-relaxed mb-6">I build backend systems, infrastructure tooling, and practical AI integrations. Based in ${PROFILE.location || 'Earth'}.</p>
              <p class="text-tx-text-secondary leading-relaxed mb-4">My work centers on platform engineering—designing systems that are understandable, repairable, and observable. I run production-like infrastructure at home, experiment with LLM-based tooling (MCP servers, NL→SQL), and help organize DevConf India.</p>
              <p class="text-tx-text-secondary leading-relaxed mb-6">I prefer Podman over Docker, run my own Proxmox lab with proper backups and DNS, and believe good systems should explain themselves. No buzzwords, no exaggeration—just honest engineering.</p>
              <div class="flex gap-3 mt-6">
                <a href="${PROFILE.html_url}" target="_blank" class="w-10 h-10 rounded-full bg-tx-surface flex items-center justify-center text-tx-text hover:bg-tx-primary hover:text-white hover:-translate-y-1 transition-all shadow-tx-xs" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                ${PROFILE.twitter_username ? `<a href="https://twitter.com/${PROFILE.twitter_username}" target="_blank" class="w-10 h-10 rounded-full bg-tx-surface flex items-center justify-center text-tx-text hover:bg-tx-primary hover:text-white hover:-translate-y-1 transition-all shadow-tx-xs" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>` : ''}
              </div>
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                <tx-card compact accent="primary">
                  <div class="text-center py-2">
                    <span class="block text-4xl font-bold text-tx-primary mb-1">${PROFILE.public_repos}</span>
                    <span class="text-sm text-tx-text-muted">Repositories</span>
                  </div>
                </tx-card>
                <tx-card compact accent="primary">
                  <div class="text-center py-2">
                    <span class="block text-4xl font-bold text-tx-primary mb-1">${PROFILE.followers}</span>
                    <span class="text-sm text-tx-text-muted">Followers</span>
                  </div>
                </tx-card>
                <tx-card compact accent="primary">
                  <div class="text-center py-2">
                    <span class="block text-4xl font-bold text-tx-primary mb-1">${PROFILE.following}</span>
                    <span class="text-sm text-tx-text-muted">Following</span>
                  </div>
                </tx-card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Skills -->
      <section id="skills" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8 bg-tx-surface-alt">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Skills & Technologies</h2>
          <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 text-left">
            ${renderSkillCategory('Languages', [
              { icon: 'JS', name: 'JavaScript', progress: 90 },
              { icon: 'TS', name: 'TypeScript', progress: 85 },
              { icon: 'Py', name: 'Python', progress: 88 },
              { icon: 'Go', name: 'Go', progress: 75 },
            ])}
            ${renderSkillCategory('Backend & APIs', [
              { icon: 'FA', name: 'FastAPI', progress: 92 },
              { icon: 'PG', name: 'PostgreSQL', progress: 88 },
              { icon: 'MG', name: 'MongoDB', progress: 80 },
              { icon: 'MC', name: 'MCP Servers', progress: 85 },
            ])}
            ${renderSkillCategory('Infrastructure & Platform', [
              { icon: 'PM', name: 'Podman', progress: 90 },
              { icon: 'PX', name: 'Proxmox VE', progress: 85 },
              { icon: 'LX', name: 'Linux', progress: 92 },
              { icon: 'NT', name: 'DNS/TLS/Net', progress: 80 },
            ])}
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Homelab -->
      <section id="homelab" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Homelab & Infrastructure</h2>
          <div class="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <p class="text-xl leading-relaxed mb-4">Production-like infrastructure at home</p>
            <p class="text-tx-text-secondary leading-relaxed">My Proxmox lab runs services the way real infrastructure does: proper backups, automated recovery, reverse proxies with TLS, custom DDNS, and monitoring.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-8 md:mb-12">
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
              'Proxmox VE Cluster', 'Multi-node setup with high availability, automated backups, and ZFS storage pools.',
              ['Proxmox VE', 'Clustering'], 'primary'
            )}
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
              'Containers & Services', 'Podman-first deployment with systemd integration, rootless containers, databases, APIs, and reverse proxies.',
              ['Podman', 'systemd', 'PostgreSQL'], 'primary'
            )}
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
              'Backups & Recovery', 'Automated backup strategies, failure recovery, and monitoring. Systems designed to be restored, not rebuilt.',
              ['Backups', 'Monitoring', 'Automation'], 'primary'
            )}
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
              'DNS & Networking', 'Custom DDNS, reverse proxy with automatic TLS, domain management, and network segmentation.',
              ['DDNS', 'TLS'], 'primary'
            )}
          </div>
          <tx-card flat>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">Proxmox</span><span class="text-sm text-tx-text-muted">Hypervisor</span>
              </div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">Podman</span><span class="text-sm text-tx-text-muted">Containers</span>
              </div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">PostgreSQL</span><span class="text-sm text-tx-text-muted">Primary DB</span>
              </div>
              <div class="text-center p-4 rounded-tx bg-tx-surface-alt border border-tx-border hover:border-tx-primary/40 transition-colors">
                <svg class="mx-auto mb-2 text-tx-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span class="block text-lg font-bold text-tx-primary mb-0.5">Custom DDNS</span><span class="text-sm text-tx-text-muted">DNS Management</span>
              </div>
            </div>
          </tx-card>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- AI & Experiments -->
      <section id="ai-experiments" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8 bg-tx-surface-alt">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">AI & Experiments</h2>
          <div class="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <p class="text-xl leading-relaxed mb-4">Practical AI integration, not hype</p>
            <p class="text-tx-text-secondary leading-relaxed">I experiment with LLM-based systems that solve real problems: natural language to SQL, MCP servers for tool integration, vector search with pgvector, and schema-aware APIs.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
              'Natural Language → SQL', 'LLM-powered query generation. Schema-aware, read-only by design, with explain plans and safety checks.',
              ['PostgreSQL', 'FastAPI', 'LLMs'], 'primary'
            )}
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
              'MCP Servers', 'Model Context Protocol servers using FastAPI. Exposes schemas, file systems, and tools to LLMs in a structured way.',
              ['MCP', 'FastAPI', 'Tools'], 'primary'
            )}
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
              'Vector Search & Embeddings', 'pgvector for similarity search over text, code, and documentation. Experimenting with RAG and semantic search.',
              ['pgvector', 'Embeddings', 'RAG'], 'primary'
            )}
            ${renderCard(
              `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
              'POCs & Internal Demos', 'Working prototypes for schema exposure APIs, tool-based LLM interactions, and AI integration patterns.',
              ['FastAPI', 'Design', 'Systems'], 'primary'
            )}
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Experience -->
      <section id="experience" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Experience & Journey</h2>
          <div class="max-w-4xl mx-auto py-8">
            <div class="timeline">
              ${[
                { title: 'DevConf India Organizer', company: 'Community Leadership', date: '2024 - Present',
                  desc: 'Core organizing member for DevConf India 2025 & 2026 (~2000 attendees). Focus on operational readiness, crowd control systems, communication tooling.',
                  tags: ['Event Ops', 'Leadership', 'Coordination', 'Community'], color: 'primary',
                  icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" stroke-width="2"/>` },
                { title: 'Platform & Backend Engineering', company: 'Various Roles', date: '2020 - Present',
                  desc: 'Building backend systems, infrastructure tooling, and developer platforms. API design, database architecture, containerization with Podman.',
                  tags: ['FastAPI', 'PostgreSQL', 'Podman', 'Python', 'Linux'], color: 'primary',
                  icon: `<rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="currentColor" stroke-width="2"/>` },
                { title: 'AI Experiments & MCP Development', company: 'Personal R&D', date: '2023 - Ongoing',
                  desc: 'Built MCP-compatible servers, NL→SQL systems, and vector search prototypes. Focus on practical integration patterns.',
                  tags: ['MCP', 'FastAPI', 'pgvector', 'LLMs'], color: 'primary',
                  icon: `<path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.93" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.93" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2"/><line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" stroke-width="2"/><path d="M9 18h6" stroke="currentColor" stroke-width="2"/><path d="M9 14h6" stroke="currentColor" stroke-width="2"/>` },
                { title: 'Proxmox Lab & Self-Hosting', company: 'Infrastructure Learning', date: '2021 - Ongoing',
                  desc: 'Built production-like infrastructure at home: Proxmox virtualization, Podman containers, custom DDNS, automated backups.',
                  tags: ['Proxmox VE', 'Podman', 'DDNS', 'Backups'], color: 'primary',
                  icon: `<rect x="2" y="2" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="2" y="14" width="20" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" stroke-width="2"/><line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" stroke-width="2"/>` },
              ].map(item => `
                <div class="timeline-item">
                  <div class="timeline-marker">
                    <div class="w-12 h-12 rounded-full bg-tx-primary flex items-center justify-center text-white shadow-tx-md border-4 border-tx-bg hover:scale-110 transition-transform">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>
                    </div>
                  </div>
                  <div class="timeline-content-wrapper w-[45%]">
                    <tx-card interactive>
                      <div class="mb-3">
                        <h3 class="text-lg font-semibold text-tx-text mb-1">${item.title}</h3>
                        <div class="text-tx-primary font-medium text-base mb-1">${item.company}</div>
                        <div class="text-sm text-tx-text-muted uppercase tracking-wider">${item.date}</div>
                      </div>
                      <p class="text-tx-text-secondary leading-relaxed mb-3">${item.desc}</p>
                      <div class="flex flex-wrap gap-2">
                        ${item.tags.map(t => `<tx-badge color="${item.color}">${t}</tx-badge>`).join('')}
                      </div>
                    </tx-card>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Projects -->
      <section id="projects" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8 bg-tx-surface-alt">
        <div class="max-w-[1200px] mx-auto w-full fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 relative inline-block w-full after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Selected Projects</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
            ${REPOS.map(r => renderProjectCard(r)).join('')}
          </div>
          <div class="text-center mt-12">
            <a href="${PROFILE.html_url}?tab=repositories" target="_blank" class="no-underline">
              <tx-button variant="ghost" size="lg">View All Projects</tx-button>
            </a>
          </div>
        </div>
      </section>

      <tx-divider spacing="lg"></tx-divider>

      <!-- Contact -->
      <section id="contact" class="min-h-screen flex items-center py-12 md:py-20 px-4 md:px-8">
        <div class="max-w-3xl mx-auto w-full text-center fade-in">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-tx-primary">Get in Touch</h2>
          <p class="text-xl leading-relaxed mb-4">Interested in collaborating?</p>
          <p class="text-tx-text-secondary leading-relaxed mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          <div class="flex gap-4 justify-center max-sm:flex-col">
            <a href="https://calendly.com/hybridx" target="_blank" class="no-underline">
              <tx-button variant="primary" size="lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0.5rem;vertical-align:middle"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                Schedule a Meeting
              </tx-button>
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 mt-8 text-center">
        <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="text-tx-primary font-medium text-lg hover:text-tx-accent transition-colors no-underline">181094.xyz</a>
        <div class="mt-4"><copyright-x /></div>
      </footer>
    </div>
  `;

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  updateThemeToggleIcon(document.documentElement.getAttribute('data-theme') || 'dark');
  initMobileMenu();
  initPageTransitions();
  animateOnScroll();
  initTypingAnimation();
  initParticleEffect();
  initTimelineAnimations();
  initAccessibilityEnhancements();

  window.addEventListener('error', (e) => console.error('Portfolio Error:', e.error));
  window.addEventListener('unhandledrejection', (e) => console.error('Unhandled Promise Rejection:', e.reason));
}

renderPortfolio();
