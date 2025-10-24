import './style.css';
import logo from './logo.svg';
import '@hybridxweb/copyright-x/dist/copyright-x';

// Fetch GitHub data and render portfolio
async function fetchGitHubData() {
  const username = 'hybridx';
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}
async function fetchGitHubRepos() {
  const username = 'hybridx';
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&fork=false`
  );
  const repos = await response.json();
  return repos;
}

function toggleTheme() {
  const themeDropdownContainer = document.getElementById(
    'theme-dropdown-container'
  );
  if (themeDropdownContainer) {
    // Toggle the dropdown visibility
    if (themeDropdownContainer.style.display === 'block') {
      themeDropdownContainer.style.display = 'none';
    } else {
      themeDropdownContainer.style.display = 'block';
    }
  }
}

function changeTheme(theme: string) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update theme toggle button icon based on theme
  updateThemeToggleIcon(theme);

  // Close dropdown after selection
  const themeDropdownContainer = document.getElementById(
    'theme-dropdown-container'
  );
  if (themeDropdownContainer) {
    themeDropdownContainer.style.display = 'none';
  }
}

function updateThemeToggleIcon(theme: string) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Clear existing icon
  themeToggle.innerHTML = '';

  // Set appropriate icon based on theme
  if (theme === 'dark') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  } else {
    // light theme
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const defaultTheme = 'dark';
  const theme = savedTheme || defaultTheme;

  document.documentElement.setAttribute('data-theme', theme);

  // Initialize theme toggle icon
  updateThemeToggleIcon(theme);

  // Ensure dropdown is hidden initially
  const themeDropdownContainer = document.getElementById(
    'theme-dropdown-container'
  );
  if (themeDropdownContainer) {
    themeDropdownContainer.style.display = 'none';
  }
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function initTypingAnimation() {
  const typingTexts = [
    'Software Engineer',
    'DevOps Enthusiast',
    'Homelab Explorer',
    'Open Source Contributor',
  ];

  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
      if (typingElement)
        typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      if (typingElement)
        typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

function initParticleEffect() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }> = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }
  }

  function updateParticles() {
    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }

  function drawParticles() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 108, 255, ${particle.opacity})`;
      ctx.fill();
    });

    // Draw connections
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach((otherParticle) => {
        if (!ctx) return;
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
        );

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(100, 108, 255, ${
            0.1 * (1 - distance / 100)
          })`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
  }

  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
}

function initSkillProgressBars() {
  const skillItems = document.querySelectorAll('.skill-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(
            '.skill-progress'
          ) as HTMLElement;
          if (progressBar) {
            const progress = progressBar.getAttribute('data-progress');
            if (progress) {
              setTimeout(() => {
                progressBar.style.width = progress + '%';
              }, 200);
            }
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  skillItems.forEach((item) => {
    observer.observe(item);
  });
}

function initTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
}

function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const portfolio = document.querySelector('.portfolio');
  const loadingMessages = [
    'Loading amazing content...',
    'Fetching GitHub data...',
    'Initializing animations...',
    'Almost ready...',
    'Welcome!',
  ];

  let messageIndex = 0;
  const loadingMessage = document.querySelector('.loading-message');

  // Cycle through loading messages
  const messageInterval = setInterval(() => {
    if (messageIndex < loadingMessages.length - 1) {
      messageIndex++;
      if (loadingMessage) {
        loadingMessage.textContent = loadingMessages[messageIndex];
      }
    }
  }, 800);

  // Hide loading screen after content is ready
  setTimeout(() => {
    clearInterval(messageInterval);

    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }

    if (portfolio) {
      portfolio.classList.add('loaded');
    }

    // Remove loading screen from DOM after animation
    setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.remove();
      }
    }, 800);
  }, 3000);
}

function initPageTransitions() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (!href) return;

      const target = document.querySelector(href);
      if (target) {
        const headerHeight =
          document.querySelector('header')?.offsetHeight || 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // Add scroll-based header opacity with debouncing
  const header = document.querySelector('header');
  if (header) {
    let ticking = false;

    const updateHeaderOpacity = () => {
      const scrolled = window.scrollY;
      const opacity = Math.min(0.95, 0.7 + (scrolled / 300) * 0.25);
      header.style.background = `rgba(${getComputedStyle(
        document.documentElement
      )
        .getPropertyValue('--header-bg')
        .replace(/[^\d,]/g, '')}, ${opacity})`;
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(updateHeaderOpacity);
          ticking = true;
        }
      },
      { passive: true }
    );
  }
}

function initPerformanceOptimizations() {
  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  // Preload critical resources
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.as = 'font';
  preloadLink.crossOrigin = 'anonymous';
  document.head.appendChild(preloadLink);

  // Connection optimization
  const preconnectGitHub = document.createElement('link');
  preconnectGitHub.rel = 'preconnect';
  preconnectGitHub.href = 'https://api.github.com';
  document.head.appendChild(preconnectGitHub);
}

function initAccessibilityEnhancements() {
  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');

    // Disable particle effects for users who prefer reduced motion
    const particleCanvas = document.getElementById('particle-canvas');
    if (particleCanvas) {
      particleCanvas.style.display = 'none';
    }
  }

  // Enhanced keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });

  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#hero';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  skipLink.setAttribute('aria-label', 'Skip to main content');
  document.body.insertBefore(skipLink, document.body.firstChild);
}

function initErrorBoundaries() {
  // Global error handler
  window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);

    // Graceful degradation for critical features
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }

    const portfolio = document.querySelector('.portfolio');
    if (portfolio) {
      portfolio.classList.add('loaded');
    }
  });

  // Promise rejection handler
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
  });
}

function initPerformanceMonitoring() {
  // Performance timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;

      if (perfData) {
        const metrics = {
          dns: perfData.domainLookupEnd - perfData.domainLookupStart,
          tcp: perfData.connectEnd - perfData.connectStart,
          request: perfData.responseStart - perfData.requestStart,
          response: perfData.responseEnd - perfData.responseStart,
          domLoading: perfData.domContentLoadedEventEnd - perfData.fetchStart,
          domComplete: perfData.loadEventEnd - perfData.fetchStart,
        };

        console.log('Performance Metrics:', metrics);
      }
    }, 0);
  });
}

async function renderPortfolio() {
  const githubData = await fetchGitHubData();
  const repos = await fetchGitHubRepos();

  initTheme();

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div id="loading-screen" class="loading-screen">
      <div class="loading-container">
        <div class="loading-logo">
          <img src="${logo}" alt="Logo" class="loading-logo-img" />
        </div>
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <div class="loading-text">
          <span class="loading-message">Loading amazing content...</span>
          <div class="loading-progress">
            <div class="loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="cursor"></div>
      
      <header>
        <div class="header-container">
          <div class="logo-container">
            <a href="/">
              <img src="${logo}" class="logo" alt="Hybridx logo" />
            </a>
          </div>
          <nav>
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#homelab" class="nav-link">Homelab</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
            <div>
            <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
            </div>
           
          </nav>
        </div>
      </header>
      <div id="theme-dropdown-container" class="theme-dropdown-container">
        <div id="theme-dropdown" class="theme-dropdown">
          <button class="theme-option" onclick="changeTheme('dark')">Dark</button>
          <button class="theme-option" onclick="changeTheme('light')">Light</button>
        </div>
      </div>
      <section id="hero" class="full-height">
        <div class="hero-content fade-in">
          <div class="hero-text">
            <h1 class="hero-title">Hi, I'm <span class="highlight">${
              githubData.name || 'Hybridx'
            }</span></h1>
            <p class="hero-tagline">
              <span class="typing-text">Software Engineer</span>
              <span class="cursor-blink">|</span>
            </p>
            <p class="hero-domain">
              <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="domain-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 0.3rem;">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                181094.xyz
              </a>
            </p>
            <div class="hero-cta">
              <a href="#projects" class="primary-button">View My Work</a>
              <a href="#contact" class="secondary-button">Get in Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="${
              githubData.avatar_url
            }" class="profile-img" alt="Profile picture" />
          </div>
        </div>
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section id="about" class="full-height">
        <div class="section-container fade-in">
          <h2 class="section-title">About Me</h2>
          <div class="about-content">
            <div class="about-text">
              <p class="large-text">Software developer based in ${
                githubData.location || 'Earth'
              } with a passion for building innovative solutions.</p>
              <p>I have ${
                githubData.public_repos
              } public repositories on GitHub and love contributing to open source. My work focuses on creating elegant, efficient, and user-friendly applications.</p>
              <div class="social-links">
                <a href="${
                  githubData.html_url
                }" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                ${
                  githubData.twitter_username
                    ? `<a href="https://twitter.com/${githubData.twitter_username}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>`
                    : ''
                }
              </div>
            </div>
            <div class="stats-container">
              <div class="stats">
                <div class="stat-item">
                  <span class="stat-number">${githubData.public_repos}</span>
                  <span class="stat-label">Repositories</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${githubData.followers}</span>
                  <span class="stat-label">Followers</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${githubData.following}</span>
                  <span class="stat-label">Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div class="section-container fade-in">
          <h2 class="section-title">Skills & Technologies</h2>
          <div class="skills-content">
            <div class="skills-categories">
              <div class="skill-category" data-category="languages">
                <h3 class="category-title">Languages</h3>
                <div class="skill-items">
                  <div class="skill-item" data-skill="javascript">
                    <div class="skill-icon">JS</div>
                    <span class="skill-name">JavaScript</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="90"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="typescript">
                    <div class="skill-icon">TS</div>
                    <span class="skill-name">TypeScript</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="85"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="python">
                    <div class="skill-icon">🐍</div>
                    <span class="skill-name">Python</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="88"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="go">
                    <div class="skill-icon">Go</div>
                    <span class="skill-name">Go</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="75"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category" data-category="frameworks">
                <h3 class="category-title">Frameworks & Libraries</h3>
                <div class="skill-items">
                  <div class="skill-item" data-skill="react">
                    <div class="skill-icon">⚛️</div>
                    <span class="skill-name">React</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="92"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="nodejs">
                    <div class="skill-icon">📗</div>
                    <span class="skill-name">Node.js</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="87"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="vite">
                    <div class="skill-icon">⚡</div>
                    <span class="skill-name">Vite</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="80"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="express">
                    <div class="skill-icon">🚀</div>
                    <span class="skill-name">Express</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="85"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category" data-category="devops">
                <h3 class="category-title">DevOps & Infrastructure</h3>
                <div class="skill-items">
                  <div class="skill-item" data-skill="docker">
                    <div class="skill-icon">🐳</div>
                    <span class="skill-name">Docker</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="85"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="kubernetes">
                    <div class="skill-icon">☸️</div>
                    <span class="skill-name">Kubernetes</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="75"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="git">
                    <div class="skill-icon">📋</div>
                    <span class="skill-name">Git</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="95"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="linux">
                    <div class="skill-icon">🐧</div>
                    <span class="skill-name">Linux</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="88"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="homelab">
        <div class="section-container fade-in">
          <h2 class="section-title">Homelab & Infrastructure</h2>
          <div class="homelab-content">
            <div class="homelab-intro">
              <p class="large-text">Experimenting with virtualization and self-hosted infrastructure</p>
              <p>I've been diving deep into homelab projects, exploring Proxmox VE for virtualization, container orchestration, and building resilient infrastructure setups. This hands-on experience has given me insights into enterprise-level infrastructure management and modern DevOps practices.</p>
            </div>

            <div class="homelab-grid">
              <div class="homelab-card proxmox-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="8" fill="none"/>
                    <text x="50" y="58" text-anchor="middle" font-size="20" font-weight="bold">PVE</text>
                  </svg>
                </div>
                <h3>Proxmox VE Cluster</h3>
                <p>Multi-node Proxmox Virtual Environment setup with high availability, automated backups, and ZFS storage pools</p>
                <div class="homelab-tech">
                  <span class="tech-badge">Proxmox VE</span>
                  <span class="tech-badge">ZFS</span>
                  <span class="tech-badge">Clustering</span>
                </div>
              </div>

              <div class="homelab-card container-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15 11.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.5-2.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1ZM23 15.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-2-6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-6 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-7 6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm2-4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z"/>
                  </svg>
                </div>
                <h3>Container Orchestration</h3>
                <p>Docker Swarm and Kubernetes labs running various services including monitoring, CI/CD, and development environments</p>
                <div class="homelab-tech">
                  <span class="tech-badge">Docker</span>
                  <span class="tech-badge">K8s</span>
                  <span class="tech-badge">Swarm</span>
                </div>
              </div>

              <div class="homelab-card monitoring-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <h3>Monitoring & Observability</h3>
                <p>Comprehensive monitoring stack with Prometheus, Grafana, and ELK stack for logs and performance metrics</p>
                <div class="homelab-tech">
                  <span class="tech-badge">Prometheus</span>
                  <span class="tech-badge">Grafana</span>
                  <span class="tech-badge">ELK Stack</span>
                </div>
              </div>

              <div class="homelab-card network-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Network & Security</h3>
                <p>VLANs, firewall rules, VPN setup, and network segmentation experiments for learning enterprise networking</p>
                <div class="homelab-tech">
                  <span class="tech-badge">VLANs</span>
                  <span class="tech-badge">pfSense</span>
                  <span class="tech-badge">WireGuard</span>
                </div>
              </div>
            </div>

            <div class="homelab-stats">
              <div class="stat-group">
                <div class="homelab-stat">
                  <span class="stat-number">12+</span>
                  <span class="stat-label">Virtual Machines</span>
                </div>
                <div class="homelab-stat">
                  <span class="stat-number">25+</span>
                  <span class="stat-label">Docker Containers</span>
                </div>
                <div class="homelab-stat">
                  <span class="stat-number">5+</span>
                  <span class="stat-label">Self-hosted Services</span>
                </div>
                <div class="homelab-stat">
                  <span class="stat-number">99.9%</span>
                  <span class="stat-label">Uptime Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div class="section-container fade-in">
          <h2 class="section-title">Experience & Journey</h2>
          <div class="timeline-container">
            <div class="timeline">
              <div class="timeline-item" data-aos="fade-right">
                <div class="timeline-marker">
                  <div class="timeline-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">Software Engineer</h3>
                    <div class="timeline-company">RedHat</div>
                    <div class="timeline-date">2022 - Present</div>
                  </div>
                  <div class="timeline-description">
                    <p>Contributing to open-source enterprise solutions, working on containerization technologies, and implementing DevOps practices for scalable infrastructure.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">Kubernetes</span>
                      <span class="skill-tag">OpenShift</span>
                      <span class="skill-tag">Go</span>
                      <span class="skill-tag">Python</span>
                      <span class="skill-tag">CI/CD</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item" data-aos="fade-left">
                <div class="timeline-marker">
                  <div class="timeline-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15 11.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">Full Stack Developer</h3>
                    <div class="timeline-company">Previous Company</div>
                    <div class="timeline-date">2020 - 2022</div>
                  </div>
                  <div class="timeline-description">
                    <p>Developed modern web applications using React and Node.js, implemented responsive designs, and optimized application performance.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">React</span>
                      <span class="skill-tag">Node.js</span>
                      <span class="skill-tag">TypeScript</span>
                      <span class="skill-tag">MongoDB</span>
                      <span class="skill-tag">AWS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item" data-aos="fade-right">
                <div class="timeline-marker">
                  <div class="timeline-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">Computer Science Education</h3>
                    <div class="timeline-company">University</div>
                    <div class="timeline-date">2018 - 2022</div>
                  </div>
                  <div class="timeline-description">
                    <p>Focused on software engineering, algorithms, and distributed systems. Participated in hackathons and open-source contributions.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">Data Structures</span>
                      <span class="skill-tag">Algorithms</span>
                      <span class="skill-tag">System Design</span>
                      <span class="skill-tag">Databases</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item" data-aos="fade-left">
                <div class="timeline-marker">
                  <div class="timeline-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">Started Homelab Journey</h3>
                    <div class="timeline-company">Personal Project</div>
                    <div class="timeline-date">2023 - Ongoing</div>
                  </div>
                  <div class="timeline-description">
                    <p>Began experimenting with self-hosted infrastructure, virtualization technologies, and enterprise-grade homelab setups using Proxmox VE.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">Proxmox VE</span>
                      <span class="skill-tag">Docker</span>
                      <span class="skill-tag">Networking</span>
                      <span class="skill-tag">Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div class="section-container fade-in">
          <h2 class="section-title">Selected Projects</h2>
          <div class="projects-grid">
            ${repos
              .map(
                (repo: any, index: number) => `
              <div class="project-card" data-index="${index}">
                <div class="project-content">
                  <h3 class="project-title">${repo.name}</h3>
                  <p class="project-description">${
                    repo.description || 'No description available'
                  }</p>
                  <div class="project-meta">
                    <div class="project-tech">
                      <span class="tech-tag">${
                        repo.language || 'Various'
                      }</span>
                    </div>
                    <div class="project-stats">
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${repo.stargazers_count}
                      </span>
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 3v12"></path>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                        ${repo.forks_count}
                      </span>
                    </div>
                  </div>
                  <a href="${
                    repo.html_url
                  }" target="_blank" class="project-link">View Project</a>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
          <div class="view-more-container">
            <a href="${
              githubData.html_url
            }?tab=repositories" target="_blank" class="view-more-button">View All Projects</a>
          </div>
        </div>
      </section>

      <section id="contact" class="full-height">
        <div class="section-container fade-in">
          <h2 class="section-title">Get in Touch</h2>
          <div class="contact-content">
            <div class="contact-text">
              <p class="large-text">Interested in collaborating?</p>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            </div>
            <div class="contact-buttons">
              <a href="https://calendly.com/hybridx" target="_blank" class="cta-button primary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Schedule a Meeting
              </a>
              ${
                githubData.email
                  ? `<a href="mailto:${githubData.email}" class="cta-button secondary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Me
              </a>`
                  : ''
              }
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="footer-link">
              181094.xyz
            </a>
          </div>
          <copyright-x />
        </div>
      </footer>
    </div>
  `;

  // Add event listener for theme toggle
  document
    .getElementById('theme-toggle')
    ?.addEventListener('click', toggleTheme);

  // Initialize custom cursor
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
    if (cursor) {
      (cursor as HTMLElement).style.left = e.clientX + 'px';
      (cursor as HTMLElement).style.top = e.clientY + 'px';
    }
  });

  // Add hover effect for links
  const links = document.querySelectorAll('a, button');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      if (cursor) cursor.classList.add('cursor-hover');
    });
    link.addEventListener('mouseleave', () => {
      if (cursor) cursor.classList.remove('cursor-hover');
    });
  });

  // Initialize performance optimizations and accessibility
  initErrorBoundaries();
  initPerformanceOptimizations();
  initAccessibilityEnhancements();
  initPerformanceMonitoring();

  // Initialize loading screen and page transitions
  initLoadingScreen();
  initPageTransitions();

  // Initialize animations and effects
  animateOnScroll();
  initTypingAnimation();
  initParticleEffect();
  initSkillProgressBars();
  initTimelineAnimations();

  // Make changeTheme function available globally
  window.changeTheme = changeTheme;

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const themeDropdownContainer = document.getElementById(
      'theme-dropdown-container'
    );
    const themeToggle = document.getElementById('theme-toggle');
    if (themeDropdownContainer && themeToggle) {
      if (
        !themeDropdownContainer.contains(e.target as Node) &&
        !themeToggle.contains(e.target as Node)
      ) {
        themeDropdownContainer.style.display = 'none';
      }
    }
  });
}

// Add to window object to make it accessible from HTML
declare global {
  interface Window {
    changeTheme: (theme: string) => void;
  }
}

renderPortfolio();
