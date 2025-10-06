(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const j="/assets/logo-XYpuJ04E.svg";(function(n){var s={};function t(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=s,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o||4&o&&typeof e=="object"&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&typeof e!="string")for(var u in e)t.d(r,u,(function(g){return e[g]}).bind(null,u));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)})([function(n,s){function t(d){return(t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(d)}function e(d,i){for(var l=0;l<i.length;l++){var c=i[l];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}function o(d,i){return!i||t(i)!=="object"&&typeof i!="function"?function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(d):i}function r(d){var i=typeof Map=="function"?new Map:void 0;return(r=function(l){if(l===null||(c=l,Function.toString.call(c).indexOf("[native code]")===-1))return l;var c;if(typeof l!="function")throw new TypeError("Super expression must either be null or a function");if(i!==void 0){if(i.has(l))return i.get(l);i.set(l,h)}function h(){return u(l,arguments,y(this).constructor)}return h.prototype=Object.create(l.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),v(h,l)})(d)}function u(d,i,l){return(u=g()?Reflect.construct:function(c,h,m){var f=[null];f.push.apply(f,h);var a=new(Function.bind.apply(c,f));return m&&v(a,m.prototype),a}).apply(null,arguments)}function g(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function v(d,i){return(v=Object.setPrototypeOf||function(l,c){return l.__proto__=c,l})(d,i)}function y(d){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(d)}var w=document.createElement("template");w.innerHTML=`
`.concat(`
<style>
:root {
  --fontSize: 14px;
  --fontColor: #72767B;
}
.copyright-section {
	font-size: var(--fontSize, 14px);
	color: var(--fontColor, #72767B);
}
</style>`,`
`).concat(`
<div class="copyright-section">
	<span class="copyright">
			Copyright &copy; <span id="year"></span> <slot name="name">All rights reserved.</slot>
</div>`,`
`);var x=function(d){(function(a,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(p&&p.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),p&&v(a,p)})(f,d);var i,l,c,h,m=(i=f,l=g(),function(){var a,p=y(i);if(l){var k=y(this).constructor;a=Reflect.construct(p,arguments,k)}else a=p.apply(this,arguments);return o(this,a)});function f(){return function(a,p){if(!(a instanceof p))throw new TypeError("Cannot call a class as a function")}(this,f),m.call(this)}return c=f,(h=[{key:"connectedCallback",value:function(){var a=this.attachShadow({mode:"open"});a.appendChild(w.content.cloneNode(!0)),this.getAttribute("year")===null?a.getElementById("year").innerHTML=new Date().getFullYear():a.getElementById("year").innerHTML=this.getAttribute("year")}}])&&e(c.prototype,h),f}(r(HTMLElement));window.customElements.define("copyright-x",x)}]);async function T(){return await(await fetch("https://api.github.com/users/hybridx")).json()}async function M(){return await(await fetch("https://api.github.com/users/hybridx/repos?sort=updated&per_page=6&fork=false")).json()}function E(){const n=document.getElementById("theme-dropdown-container");n&&(n.style.display==="block"?n.style.display="none":n.style.display="block")}function _(n){document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n),b(n);const t=document.getElementById("theme-dropdown-container");t&&(t.style.display="none")}function b(n){const s=document.getElementById("theme-toggle");s&&(s.innerHTML="",n==="dark"?s.innerHTML=`
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
    `:n==="light"?s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `:(n==="blue"||n==="orange"||n==="purple"||n==="green")&&(s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    `))}function S(){const t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t),b(t);const e=document.getElementById("theme-dropdown-container");e&&(e.style.display="none")}function O(){const n=document.querySelectorAll(".fade-in"),s=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1});n.forEach(t=>{s.observe(t)})}async function L(){var o;const n=await T(),s=await M();S(),document.querySelector("#app").innerHTML=`
    <div class="portfolio">
      <div class="cursor"></div>
      
      <header>
        <div class="header-container">
          <div class="logo-container">
            <a href="/">
              <img src="${j}" class="logo" alt="Hybridx logo" />
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
            <h1 class="hero-title">Hi, I'm <span class="highlight">${n.name||"Hybridx"}</span></h1>
            <p class="hero-tagline">${n.bio||"Software Developer"}</p>
            <div class="hero-cta">
              <a href="#projects" class="primary-button">View My Work</a>
              <a href="#contact" class="secondary-button">Get in Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <img src="${n.avatar_url}" class="profile-img" alt="Profile picture" />
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
              <p class="large-text">Software developer based in ${n.location||"Earth"} with a passion for building innovative solutions.</p>
              <p>I have ${n.public_repos} public repositories on GitHub and love contributing to open source. My work focuses on creating elegant, efficient, and user-friendly applications.</p>
              <div class="social-links">
                <a href="${n.html_url}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                ${n.twitter_username?`<a href="https://twitter.com/${n.twitter_username}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>`:""}
              </div>
            </div>
            <div class="stats-container">
              <div class="stats">
                <div class="stat-item">
                  <span class="stat-number">${n.public_repos}</span>
                  <span class="stat-label">Repositories</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${n.followers}</span>
                  <span class="stat-label">Followers</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${n.following}</span>
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
            ${s.map((r,u)=>`
              <div class="project-card" data-index="${u}">
                <div class="project-content">
                  <h3 class="project-title">${r.name}</h3>
                  <p class="project-description">${r.description||"No description available"}</p>
                  <div class="project-meta">
                    <div class="project-tech">
                      <span class="tech-tag">${r.language||"Various"}</span>
                    </div>
                    <div class="project-stats">
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${r.stargazers_count}
                      </span>
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 3v12"></path>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                        ${r.forks_count}
                      </span>
                    </div>
                  </div>
                  <a href="${r.html_url}" target="_blank" class="project-link">View Project</a>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="view-more-container">
            <a href="${n.html_url}?tab=repositories" target="_blank" class="view-more-button">View All Projects</a>
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
              ${n.email?`<a href="mailto:${n.email}" class="cta-button secondary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Me
              </a>`:""}
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
  `,(o=document.getElementById("theme-toggle"))==null||o.addEventListener("click",E);const t=document.querySelector(".cursor");document.addEventListener("mousemove",r=>{t&&(t.style.left=r.clientX+"px",t.style.top=r.clientY+"px")}),document.querySelectorAll("a, button").forEach(r=>{r.addEventListener("mouseenter",()=>{t&&t.classList.add("cursor-hover")}),r.addEventListener("mouseleave",()=>{t&&t.classList.remove("cursor-hover")})}),O(),window.changeTheme=_,document.addEventListener("click",r=>{const u=document.getElementById("theme-dropdown-container"),g=document.getElementById("theme-toggle");u&&g&&!u.contains(r.target)&&!g.contains(r.target)&&(u.style.display="none")})}L();
