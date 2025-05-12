import './style.css'
import logo from './logo.svg'
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
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&fork=false`);
  const repos = await response.json();
  return repos;
}

function toggleTheme() {
  const themeDropdownContainer = document.getElementById('theme-dropdown-container');
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
  const themeDropdownContainer = document.getElementById('theme-dropdown-container');
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
  } else if (theme === 'light') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  } else if (theme === 'blue') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    `;
  } else if (theme === 'orange') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    `;
  } else if (theme === 'purple') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    `;
  } else if (theme === 'green') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
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
  const themeDropdownContainer = document.getElementById('theme-dropdown-container');
  if (themeDropdownContainer) {
    themeDropdownContainer.style.display = 'none';
  }
}

function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

async function renderPortfolio() {
  const githubData = await fetchGitHubData();
  const repos = await fetchGitHubRepos();
  
  initTheme();

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
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
            <div id="theme-dropdown-container" class="theme-dropdown-container">
              <div id="theme-dropdown" class="theme-dropdown">
                <button class="theme-option" onclick="changeTheme('dark')">Dark</button>
                <button class="theme-option" onclick="changeTheme('light')">Light</button>
                <button class="theme-option" onclick="changeTheme('blue')">Blue</button>
                <button class="theme-option" onclick="changeTheme('orange')">Orange</button>
                <button class="theme-option" onclick="changeTheme('purple')">Purple</button>
                <button class="theme-option" onclick="changeTheme('green')">Green</button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section id="hero" class="full-height">
        <div class="hero-content fade-in">
          <div class="hero-text">
            <h1 class="hero-title">Hi, I'm <span class="highlight">${githubData.name || 'Hybridx'}</span></h1>
            <p class="hero-tagline">${githubData.bio || 'Software Developer'}</p>
            <div class="hero-cta">
              <a href="#projects" class="primary-button">View My Work</a>
              <a href="#contact" class="secondary-button">Get in Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="${githubData.avatar_url}" class="profile-img" alt="Profile picture" />
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
              <p class="large-text">Software developer based in ${githubData.location || 'Earth'} with a passion for building innovative solutions.</p>
              <p>I have ${githubData.public_repos} public repositories on GitHub and love contributing to open source. My work focuses on creating elegant, efficient, and user-friendly applications.</p>
              <div class="social-links">
                <a href="${githubData.html_url}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                ${githubData.twitter_username ? `<a href="https://twitter.com/${githubData.twitter_username}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>` : ''}
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

      <section id="projects">
        <div class="section-container fade-in">
          <h2 class="section-title">Selected Projects</h2>
          <div class="projects-grid">
            ${repos.map((repo: any, index: number) => `
              <div class="project-card" data-index="${index}">
                <div class="project-content">
                  <h3 class="project-title">${repo.name}</h3>
                  <p class="project-description">${repo.description || 'No description available'}</p>
                  <div class="project-meta">
                    <div class="project-tech">
                      <span class="tech-tag">${repo.language || 'Various'}</span>
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
                  <a href="${repo.html_url}" target="_blank" class="project-link">View Project</a>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="view-more-container">
            <a href="${githubData.html_url}?tab=repositories" target="_blank" class="view-more-button">View All Projects</a>
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
              ${githubData.email ? `<a href="mailto:${githubData.email}" class="cta-button secondary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Me
              </a>` : ''}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-content">
          <copyright-x />
        </div>
      </footer>
    </div>
  `;

  // Add event listener for theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  
  // Initialize custom cursor
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      (cursor as HTMLElement).style.left = e.clientX + 'px';
      (cursor as HTMLElement).style.top = e.clientY + 'px';
    }
  });
  
  // Add hover effect for links
  const links = document.querySelectorAll('a, button');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (cursor) cursor.classList.add('cursor-hover');
    });
    link.addEventListener('mouseleave', () => {
      if (cursor) cursor.classList.remove('cursor-hover');
    });
  });
  
  // Initialize animations
  animateOnScroll();
  
  // Make changeTheme function available globally
  window.changeTheme = changeTheme;
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const themeDropdownContainer = document.getElementById('theme-dropdown-container');
    const themeToggle = document.getElementById('theme-toggle');
    if (themeDropdownContainer && themeToggle) {
      if (!themeDropdownContainer.contains(e.target as Node) && !themeToggle.contains(e.target as Node)) {
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
