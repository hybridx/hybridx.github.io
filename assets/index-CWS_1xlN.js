(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const w="/assets/logo-XYpuJ04E.svg";(function(e){var s={};function t(i){if(s[i])return s[i].exports;var n=s[i]={i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=s,t.d=function(i,n,a){t.o(i,n)||Object.defineProperty(i,n,{enumerable:!0,get:a})},t.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,n){if(1&n&&(i=t(i)),8&n||4&n&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),2&n&&typeof i!="string")for(var r in i)t.d(a,r,(function(u){return i[u]}).bind(null,r));return a},t.n=function(i){var n=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(n,"a",n),n},t.o=function(i,n){return Object.prototype.hasOwnProperty.call(i,n)},t.p="",t(t.s=0)})([function(e,s){function t(d){return(t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l})(d)}function i(d,l){for(var c=0;c<l.length;c++){var p=l[c];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(d,p.key,p)}}function n(d,l){return!l||t(l)!=="object"&&typeof l!="function"?function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(d):l}function a(d){var l=typeof Map=="function"?new Map:void 0;return(a=function(c){if(c===null||(p=c,Function.toString.call(p).indexOf("[native code]")===-1))return c;var p;if(typeof c!="function")throw new TypeError("Super expression must either be null or a function");if(l!==void 0){if(l.has(c))return l.get(c);l.set(c,m)}function m(){return r(c,arguments,o(this).constructor)}return m.prototype=Object.create(c.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),f(m,c)})(d)}function r(d,l,c){return(r=u()?Reflect.construct:function(p,m,k){var g=[null];g.push.apply(g,m);var v=new(Function.bind.apply(p,g));return k&&f(v,k.prototype),v}).apply(null,arguments)}function u(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function f(d,l){return(f=Object.setPrototypeOf||function(c,p){return c.__proto__=p,c})(d,l)}function o(d){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(d)}var b=document.createElement("template");b.innerHTML=`
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
`);var y=function(d){(function(v,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(h&&h.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),h&&f(v,h)})(g,d);var l,c,p,m,k=(l=g,c=u(),function(){var v,h=o(l);if(c){var E=o(this).constructor;v=Reflect.construct(h,arguments,E)}else v=h.apply(this,arguments);return n(this,v)});function g(){return function(v,h){if(!(v instanceof h))throw new TypeError("Cannot call a class as a function")}(this,g),k.call(this)}return p=g,(m=[{key:"connectedCallback",value:function(){var v=this.attachShadow({mode:"open"});v.appendChild(b.content.cloneNode(!0)),this.getAttribute("year")===null?v.getElementById("year").innerHTML=new Date().getFullYear():v.getElementById("year").innerHTML=this.getAttribute("year")}}])&&i(p.prototype,m),g}(a(HTMLElement));window.customElements.define("copyright-x",y)}]);async function S(){return await(await fetch("https://api.github.com/users/hybridx")).json()}async function L(){return await(await fetch("https://api.github.com/users/hybridx/repos?sort=updated&per_page=6&fork=false")).json()}function M(){const e=document.getElementById("theme-dropdown-container");e&&(e.style.display==="block"?e.style.display="none":e.style.display="block")}function C(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),x(e);const t=document.getElementById("theme-dropdown-container");t&&(t.style.display="none")}function x(e){const s=document.getElementById("theme-toggle");s&&(s.innerHTML="",e==="dark"?s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `:s.innerHTML=`
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
    `)}function j(){const t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t),x(t);const i=document.getElementById("theme-dropdown-container");i&&(i.style.display="none")}function P(){const e=document.querySelectorAll(".fade-in"),s=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1});e.forEach(t=>{s.observe(t)})}function T(){const e=["Software Engineer","DevOps Enthusiast","Homelab Explorer","Open Source Contributor"],s=document.querySelector(".typing-text");if(!s)return;let t=0,i=0,n=!1,a=100;function r(){const u=e[t];n?(s&&(s.textContent=u.substring(0,i-1)),i--,a=50):(s&&(s.textContent=u.substring(0,i+1)),i++,a=100),!n&&i===u.length?setTimeout(()=>n=!0,2e3):n&&i===0&&(n=!1,t=(t+1)%e.length),setTimeout(r,a)}r()}function I(){const e=document.createElement("canvas");e.id="particle-canvas",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",e.style.zIndex="1",document.body.insertBefore(e,document.body.firstChild);const s=e.getContext("2d");let t=[];function i(){e.width=window.innerWidth,e.height=window.innerHeight}function n(){return{x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+1,opacity:Math.random()*.5+.1}}function a(){t=[];for(let o=0;o<50;o++)t.push(n())}function r(){t.forEach(o=>{o.x+=o.vx,o.y+=o.vy,(o.x<0||o.x>e.width)&&(o.vx*=-1),(o.y<0||o.y>e.height)&&(o.vy*=-1)})}function u(){s&&(s.clearRect(0,0,e.width,e.height),t.forEach(o=>{s&&(s.beginPath(),s.arc(o.x,o.y,o.size,0,Math.PI*2),s.fillStyle=`rgba(100, 108, 255, ${o.opacity})`,s.fill())}),t.forEach((o,b)=>{t.slice(b+1).forEach(y=>{if(!s)return;const d=Math.sqrt(Math.pow(o.x-y.x,2)+Math.pow(o.y-y.y,2));d<100&&(s.beginPath(),s.moveTo(o.x,o.y),s.lineTo(y.x,y.y),s.strokeStyle=`rgba(100, 108, 255, ${.1*(1-d/100)})`,s.lineWidth=1,s.stroke())})}))}function f(){r(),u(),requestAnimationFrame(f)}i(),a(),f(),window.addEventListener("resize",()=>{i(),a()})}function O(){const e=document.querySelectorAll(".skill-item"),s=new IntersectionObserver(t=>{t.forEach(i=>{if(i.isIntersecting){const n=i.target.querySelector(".skill-progress");if(n){const a=n.getAttribute("data-progress");a&&setTimeout(()=>{n.style.width=a+"%"},200)}}})},{threshold:.5});e.forEach(t=>{s.observe(t)})}function B(){const e=document.querySelectorAll(".timeline-item"),s=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.3});e.forEach(t=>{s.observe(t)})}function z(){const e=document.getElementById("loading-screen"),s=document.querySelector(".portfolio"),t=["Loading amazing content...","Fetching GitHub data...","Initializing animations...","Almost ready...","Welcome!"];let i=0;const n=document.querySelector(".loading-message"),a=setInterval(()=>{i<t.length-1&&(i++,n&&(n.textContent=t[i]))},800);setTimeout(()=>{clearInterval(a),e&&e.classList.add("hidden"),s&&s.classList.add("loaded"),setTimeout(()=>{e&&e.remove()},800)},3e3)}function _(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{var a;t.preventDefault();const i=s.getAttribute("href");if(!i)return;const n=document.querySelector(i);if(n){const r=((a=document.querySelector("header"))==null?void 0:a.offsetHeight)||80,u=n.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:u,behavior:"smooth"})}})});const e=document.querySelector("header");if(e){let s=!1;const t=()=>{const i=window.scrollY,n=Math.min(.95,.7+i/300*.25);e.style.background=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--header-bg").replace(/[^\d,]/g,"")}, ${n})`,s=!1};window.addEventListener("scroll",()=>{s||(requestAnimationFrame(t),s=!0)},{passive:!0})}}function D(){const e=document.querySelectorAll("img[data-src]"),s=new IntersectionObserver(n=>{n.forEach(a=>{if(a.isIntersecting){const r=a.target;r.src=r.dataset.src,r.classList.remove("lazy"),s.unobserve(r)}})});e.forEach(n=>{s.observe(n)});const t=document.createElement("link");t.rel="preload",t.as="font",t.crossOrigin="anonymous",document.head.appendChild(t);const i=document.createElement("link");i.rel="preconnect",i.href="https://api.github.com",document.head.appendChild(i)}function A(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.style.setProperty("--animation-duration","0s"),document.documentElement.style.setProperty("--transition-duration","0s");const t=document.getElementById("particle-canvas");t&&(t.style.display="none")}document.addEventListener("keydown",t=>{t.key==="Tab"&&document.body.classList.add("keyboard-navigation")}),document.addEventListener("mousedown",()=>{document.body.classList.remove("keyboard-navigation")});const s=document.createElement("a");s.href="#hero",s.className="skip-link",s.textContent="Skip to main content",s.setAttribute("aria-label","Skip to main content"),document.body.insertBefore(s,document.body.firstChild)}function $(){window.addEventListener("error",e=>{console.error("Portfolio Error:",e.error);const s=document.getElementById("loading-screen");s&&s.classList.add("hidden");const t=document.querySelector(".portfolio");t&&t.classList.add("loaded")}),window.addEventListener("unhandledrejection",e=>{console.error("Unhandled Promise Rejection:",e.reason)})}function H(){window.addEventListener("load",()=>{setTimeout(()=>{const e=performance.getEntriesByType("navigation")[0];if(e){const s={dns:e.domainLookupEnd-e.domainLookupStart,tcp:e.connectEnd-e.connectStart,request:e.responseStart-e.requestStart,response:e.responseEnd-e.responseStart,domLoading:e.domContentLoadedEventEnd-e.fetchStart,domComplete:e.loadEventEnd-e.fetchStart};console.log("Performance Metrics:",s)}},0)})}async function V(){var n;const e=await S(),s=await L();j(),document.querySelector("#app").innerHTML=`
    <div id="loading-screen" class="loading-screen">
      <div class="loading-container">
        <div class="loading-logo">
          <img src="${w}" alt="Logo" class="loading-logo-img" />
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
              <img src="${w}" class="logo" alt="Hybridx logo" />
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
            <h1 class="hero-title">Hi, I'm <span class="highlight">${e.name||"Hybridx"}</span></h1>
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
            <img src="${e.avatar_url}" class="profile-img" alt="Profile picture" />
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
              <p class="large-text">Software developer based in ${e.location||"Earth"} with a passion for building innovative solutions.</p>
              <p>I have ${e.public_repos} public repositories on GitHub and love contributing to open source. My work focuses on creating elegant, efficient, and user-friendly applications.</p>
              <div class="social-links">
                <a href="${e.html_url}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                ${e.twitter_username?`<a href="https://twitter.com/${e.twitter_username}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>`:""}
              </div>
            </div>
            <div class="stats-container">
              <div class="stats">
                <div class="stat-item">
                  <span class="stat-number">${e.public_repos}</span>
                  <span class="stat-label">Repositories</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${e.followers}</span>
                  <span class="stat-label">Followers</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${e.following}</span>
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
            ${s.map((a,r)=>`
              <div class="project-card" data-index="${r}">
                <div class="project-content">
                  <h3 class="project-title">${a.name}</h3>
                  <p class="project-description">${a.description||"No description available"}</p>
                  <div class="project-meta">
                    <div class="project-tech">
                      <span class="tech-tag">${a.language||"Various"}</span>
                    </div>
                    <div class="project-stats">
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${a.stargazers_count}
                      </span>
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 3v12"></path>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                        ${a.forks_count}
                      </span>
                    </div>
                  </div>
                  <a href="${a.html_url}" target="_blank" class="project-link">View Project</a>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="view-more-container">
            <a href="${e.html_url}?tab=repositories" target="_blank" class="view-more-button">View All Projects</a>
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
              ${e.email?`<a href="mailto:${e.email}" class="cta-button secondary-button">
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
          <div class="footer-links">
            <a href="https://181094.xyz" target="_blank" rel="noopener noreferrer" class="footer-link">
              181094.xyz
            </a>
          </div>
          <copyright-x />
        </div>
      </footer>
    </div>
  `,(n=document.getElementById("theme-toggle"))==null||n.addEventListener("click",M);const t=document.querySelector(".cursor");document.addEventListener("mousemove",a=>{console.log(a.clientX,a.clientY),t&&(t.style.left=a.clientX+"px",t.style.top=a.clientY+"px")}),document.querySelectorAll("a, button").forEach(a=>{a.addEventListener("mouseenter",()=>{t&&t.classList.add("cursor-hover")}),a.addEventListener("mouseleave",()=>{t&&t.classList.remove("cursor-hover")})}),$(),D(),A(),H(),z(),_(),P(),T(),I(),O(),B(),window.changeTheme=C,document.addEventListener("click",a=>{const r=document.getElementById("theme-dropdown-container"),u=document.getElementById("theme-toggle");r&&u&&!r.contains(a.target)&&!u.contains(a.target)&&(r.style.display="none")})}V();
