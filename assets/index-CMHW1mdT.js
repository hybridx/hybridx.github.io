(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const P="/assets/logo-XYpuJ04E.svg";(function(t){var i={};function e(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=i,e.d=function(s,a,o){e.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:o})},e.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,a){if(1&a&&(s=e(s)),8&a||4&a&&typeof s=="object"&&s&&s.__esModule)return s;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:s}),2&a&&typeof s!="string")for(var v in s)e.d(o,v,(function(u){return s[u]}).bind(null,v));return o},e.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(a,"a",a),a},e.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},e.p="",e(e.s=0)})([function(t,i){function e(p){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(p)}function s(p,r){for(var n=0;n<r.length;n++){var l=r[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(p,l.key,l)}}function a(p,r){return!r||e(r)!=="object"&&typeof r!="function"?function(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(p):r}function o(p){var r=typeof Map=="function"?new Map:void 0;return(o=function(n){if(n===null||(l=n,Function.toString.call(l).indexOf("[native code]")===-1))return n;var l;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(r!==void 0){if(r.has(n))return r.get(n);r.set(n,d)}function d(){return v(n,arguments,y(this).constructor)}return d.prototype=Object.create(n.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),b(d,n)})(p)}function v(p,r,n){return(v=u()?Reflect.construct:function(l,d,g){var m=[null];m.push.apply(m,d);var c=new(Function.bind.apply(l,m));return g&&b(c,g.prototype),c}).apply(null,arguments)}function u(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function b(p,r){return(b=Object.setPrototypeOf||function(n,l){return n.__proto__=l,n})(p,r)}function y(p){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(p)}var k=document.createElement("template");k.innerHTML=`
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
`);var x=function(p){(function(c,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(h&&h.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),h&&b(c,h)})(m,p);var r,n,l,d,g=(r=m,n=u(),function(){var c,h=y(r);if(n){var w=y(this).constructor;c=Reflect.construct(h,arguments,w)}else c=h.apply(this,arguments);return a(this,c)});function m(){return function(c,h){if(!(c instanceof h))throw new TypeError("Cannot call a class as a function")}(this,m),g.call(this)}return l=m,(d=[{key:"connectedCallback",value:function(){var c=this.attachShadow({mode:"open"});c.appendChild(k.content.cloneNode(!0)),this.getAttribute("year")===null?c.getElementById("year").innerHTML=new Date().getFullYear():c.getElementById("year").innerHTML=this.getAttribute("year")}}])&&s(l.prototype,d),m}(o(HTMLElement));window.customElements.define("copyright-x",x)}]);const f={name:"Deepesh Padmanabhan Nair",avatar_url:"https://avatars.githubusercontent.com/u/12994292?v=4",html_url:"https://github.com/hybridx",location:"Pune, India",twitter_username:"_deepeshnair",public_repos:69,followers:47,following:80},E=[{name:"WebScraper",description:"A modern, full-featured web scraper built with Next.js and Supabase. Crawl directory listings, classify files, and search through media collections with a beautiful UI.",language:"TypeScript",stargazers_count:6,forks_count:4,html_url:"https://github.com/hybridx/WebScraper"},{name:"WebSocket_RAT",description:"Remote Access Trojan using websockets",language:"JavaScript",stargazers_count:5,forks_count:1,html_url:"https://github.com/hybridx/WebSocket_RAT"},{name:"ai-slack-companion",description:"This is an AI slackbot which you can talk to for FREEE",language:"JavaScript",stargazers_count:4,forks_count:3,html_url:"https://github.com/hybridx/ai-slack-companion"},{name:"Whatsapp_bomb",description:"To automatically send whatsapp messages in a loop through WhatsAppWeb using selenium",language:"Python",stargazers_count:2,forks_count:1,html_url:"https://github.com/hybridx/Whatsapp_bomb"},{name:"REST-java-example",description:"Web application with rest web services to add, update, get the data from database and integrated these services with UI application built using angularJS.",language:"Java",stargazers_count:2,forks_count:0,html_url:"https://github.com/hybridx/REST-java-example"},{name:"CyBot",description:"chatbot application with custom functions for slack api",language:"JavaScript",stargazers_count:2,forks_count:0,html_url:"https://github.com/hybridx/CyBot"}];function C(){const t=document.documentElement,e=(t.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";t.setAttribute("data-theme",e),localStorage.setItem("theme",e),L(e)}function L(t){const i=document.getElementById("theme-toggle");i&&(i.innerHTML="",t==="dark"?i.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `:i.innerHTML=`
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
    `)}function I(){const e=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",e),L(e)}function T(){const t=document.querySelectorAll(".fade-in"),i=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:.1});t.forEach(e=>{i.observe(e)})}function z(){const t=["Platform Engineer","Infrastructure Builder","Systems Thinker","DevConf India Organizer"],i=document.querySelector(".typing-text");if(!i)return;let e=0,s=0,a=!1,o=100;function v(){const u=t[e];a?(i&&(i.textContent=u.substring(0,s-1)),s--,o=50):(i&&(i.textContent=u.substring(0,s+1)),s++,o=100),!a&&s===u.length?setTimeout(()=>a=!0,2e3):a&&s===0&&(a=!1,e=(e+1)%t.length),setTimeout(v,o)}v()}function A(){if(window.innerWidth<768||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=document.createElement("canvas");t.id="particle-canvas",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",t.style.zIndex="1",document.body.insertBefore(t,document.body.firstChild);const i=t.getContext("2d");let e=[],s,a=0;const v=1e3/30;function u(){t.width=window.innerWidth,t.height=window.innerHeight}function b(){return{x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.5+.5,opacity:Math.random()*.4+.1}}function y(){e=[];const n=Math.min(25,Math.floor(window.innerWidth/60));for(let l=0;l<n;l++)e.push(b())}function k(){for(const n of e)n.x+=n.vx,n.y+=n.vy,(n.x<0||n.x>t.width)&&(n.vx*=-1),(n.y<0||n.y>t.height)&&(n.vy*=-1)}function x(){if(!i)return;i.clearRect(0,0,t.width,t.height);for(const d of e)i.beginPath(),i.arc(d.x,d.y,d.size,0,Math.PI*2),i.fillStyle=`rgba(100, 108, 255, ${d.opacity})`,i.fill();const n=8100,l=e.length;for(let d=0;d<l-1;d++){const g=e[d];for(let m=d+1;m<l;m++){const c=e[m],h=g.x-c.x,w=g.y-c.y,S=h*h+w*w;if(S<n){const M=.08*(1-S/n);i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(c.x,c.y),i.strokeStyle=`rgba(100, 108, 255, ${M})`,i.lineWidth=.5,i.stroke()}}}}function p(n){s=requestAnimationFrame(p);const l=n-a;l<v||(a=n-l%v,k(),x())}u(),y(),s=requestAnimationFrame(p);let r;window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{if(window.innerWidth<768){cancelAnimationFrame(s),t.remove();return}u(),y()},200)},{passive:!0})}function _(){const t=document.querySelectorAll(".skill-item"),i=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const a=s.target.querySelector(".skill-progress");if(a){const o=a.getAttribute("data-progress");o&&setTimeout(()=>{a.style.width=o+"%"},200)}}})},{threshold:.5});t.forEach(e=>{i.observe(e)})}function B(){const t=document.querySelectorAll(".timeline-item"),i=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&s.target.classList.add("visible")})},{threshold:.3});t.forEach(e=>{i.observe(e)})}function j(){const t=document.getElementById("loading-screen"),i=document.querySelector(".portfolio"),e=["Loading amazing content...","Fetching GitHub data...","Initializing animations...","Almost ready...","Welcome!"];let s=0;const a=document.querySelector(".loading-message"),o=setInterval(()=>{s<e.length-1&&(s++,a&&(a.textContent=e[s]))},800);setTimeout(()=>{clearInterval(o),t&&t.classList.add("hidden"),i&&i.classList.add("loaded"),setTimeout(()=>{t&&t.remove()},800)},3e3)}function O(){document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",e=>{var o;e.preventDefault();const s=i.getAttribute("href");if(!s)return;const a=document.querySelector(s);if(a){const v=((o=document.querySelector("header"))==null?void 0:o.offsetHeight)||80,u=a.getBoundingClientRect().top+window.scrollY-v;window.scrollTo({top:u,behavior:"smooth"})}})});const t=document.querySelector("header");if(t){let i=!1;const e=()=>{const s=window.scrollY,a=Math.min(.95,.7+s/300*.25);t.style.background=`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--header-bg").replace(/[^\d,]/g,"")}, ${a})`,i=!1};window.addEventListener("scroll",()=>{i||(requestAnimationFrame(e),i=!0)},{passive:!0})}}function D(){const t=document.querySelectorAll("img[data-src]"),i=new IntersectionObserver(s=>{s.forEach(a=>{if(a.isIntersecting){const o=a.target;o.src=o.dataset.src,o.classList.remove("lazy"),i.unobserve(o)}})});t.forEach(s=>{i.observe(s)});const e=document.createElement("link");e.rel="preload",e.as="font",e.crossOrigin="anonymous",document.head.appendChild(e)}function H(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.style.setProperty("--animation-duration","0s"),document.documentElement.style.setProperty("--transition-duration","0s");const e=document.getElementById("particle-canvas");e&&(e.style.display="none")}document.addEventListener("keydown",e=>{e.key==="Tab"&&document.body.classList.add("keyboard-navigation")}),document.addEventListener("mousedown",()=>{document.body.classList.remove("keyboard-navigation")});const i=document.createElement("a");i.href="#hero",i.className="skip-link",i.textContent="Skip to main content",i.setAttribute("aria-label","Skip to main content"),document.body.insertBefore(i,document.body.firstChild)}function V(){window.addEventListener("error",t=>{console.error("Portfolio Error:",t.error);const i=document.getElementById("loading-screen");i&&i.classList.add("hidden");const e=document.querySelector(".portfolio");e&&e.classList.add("loaded")}),window.addEventListener("unhandledrejection",t=>{console.error("Unhandled Promise Rejection:",t.reason)})}function F(){window.addEventListener("load",()=>{setTimeout(()=>{const t=performance.getEntriesByType("navigation")[0];if(t){const i={dns:t.domainLookupEnd-t.domainLookupStart,tcp:t.connectEnd-t.connectStart,request:t.responseStart-t.requestStart,response:t.responseEnd-t.responseStart,domLoading:t.domContentLoadedEventEnd-t.fetchStart,domComplete:t.loadEventEnd-t.fetchStart};console.log("Performance Metrics:",i)}},0)})}async function R(){var i;const t=E;I(),document.querySelector("#app").innerHTML=`
    <div id="loading-screen" class="loading-screen">
      <div class="loading-container">
        <div class="loading-logo">
          <img src="${P}" alt="Logo" class="loading-logo-img" />
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
      
      <header>
        <div class="header-container">
          <div class="logo-container">
            <a href="/">
              <img src="${P}" class="logo" alt="Hybridx logo" />
            </a>
          </div>
          <nav>
            <a href="#about" class="nav-link">About</a>
            <a href="#homelab" class="nav-link">Infrastructure</a>
            <a href="#ai-experiments" class="nav-link">AI & Experiments</a>
            <a href="#experience" class="nav-link">Experience</a>
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
          </nav>
        </div>
      </header>
      <section id="hero" class="full-height">
        <div class="hero-content fade-in">
          <div class="hero-text">
            <h1 class="hero-title">Hi, I'm <span class="highlight">${f.name}</span></h1>
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
            <img src="${f.avatar_url}" class="profile-img" alt="Profile picture" />
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
              <p class="large-text">I build backend systems, infrastructure tooling, and practical AI integrations. Based in ${f.location}.</p>
              <p>My work centers on platform engineering—designing systems that are understandable, repairable, and observable. I run production-like infrastructure at home, experiment with LLM-based tooling (MCP servers, NL→SQL), and help organize DevConf India.</p>
              <p>I prefer Podman over Docker, run my own Proxmox lab with proper backups and DNS, and believe good systems should explain themselves. No buzzwords, no exaggeration—just honest engineering.</p>
              <div class="social-links">
                <a href="${f.html_url}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                ${`<a href="https://twitter.com/${f.twitter_username}" target="_blank" class="social-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>`}
              </div>
            </div>
            <div class="stats-container">
              <div class="stats">
                <div class="stat-item">
                  <span class="stat-number">${f.public_repos}</span>
                  <span class="stat-label">Repositories</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${f.followers}</span>
                  <span class="stat-label">Followers</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">${f.following}</span>
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
                <h3 class="category-title">Backend & APIs</h3>
                <div class="skill-items">
                  <div class="skill-item" data-skill="fastapi">
                    <div class="skill-icon">⚡</div>
                    <span class="skill-name">FastAPI</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="92"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="postgresql">
                    <div class="skill-icon">🐘</div>
                    <span class="skill-name">PostgreSQL</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="88"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="mongodb">
                    <div class="skill-icon">🍃</div>
                    <span class="skill-name">MongoDB</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="80"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="mcp">
                    <div class="skill-icon">🔧</div>
                    <span class="skill-name">MCP Servers</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="85"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="skill-category" data-category="devops">
                <h3 class="category-title">Infrastructure & Platform</h3>
                <div class="skill-items">
                  <div class="skill-item" data-skill="podman">
                    <div class="skill-icon">📦</div>
                    <span class="skill-name">Podman</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="90"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="proxmox">
                    <div class="skill-icon">🖥️</div>
                    <span class="skill-name">Proxmox VE</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="85"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="linux">
                    <div class="skill-icon">🐧</div>
                    <span class="skill-name">Linux</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="92"></div>
                    </div>
                  </div>
                  <div class="skill-item" data-skill="networking">
                    <div class="skill-icon">🌐</div>
                    <span class="skill-name">DNS/TLS/Networking</span>
                    <div class="skill-bar">
                      <div class="skill-progress" data-progress="80"></div>
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
              <p class="large-text">Production-like infrastructure at home</p>
              <p>My Proxmox lab runs services the way real infrastructure does: proper backups, automated recovery, reverse proxies with TLS, custom DDNS, and monitoring. I use Podman for containers, maintain DNS hygiene, and design for repairability. This isn't a toy—it's a testing ground for patterns that scale.</p>
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
                  <span class="tech-badge">Clustering</span>
                </div>
              </div>

              <div class="homelab-card container-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15 11.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm1.5-2.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1ZM23 15.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-2-6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-6 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-7 6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm2-4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z"/>
                  </svg>
                </div>
                <h3>Containers & Services</h3>
                <p>Podman-first container deployment with systemd integration, rootless where possible. Running databases (PostgreSQL, MongoDB), APIs, reverse proxies, and custom tooling.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">Podman</span>
                  <span class="tech-badge">systemd</span>
                  <span class="tech-badge">PostgreSQL</span>
                </div>
              </div>

              <div class="homelab-card monitoring-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <h3>Backups & Recovery</h3>
                <p>Automated backup strategies, failure recovery procedures, and monitoring to catch issues before they become outages. Systems designed to be restored, not rebuilt.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">Backups</span>
                  <span class="tech-badge">Monitoring</span>
                  <span class="tech-badge">Automation</span>
                </div>
              </div>

              <div class="homelab-card network-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>DNS & Networking</h3>
                <p>Custom DDNS service, reverse proxy setup with automatic TLS (Caddy/Traefik), proper domain management, and network segmentation for service isolation.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">DDNS</span>
                  <span class="tech-badge">TLS</span>
                </div>
              </div>
            </div>

            <div class="homelab-stats">
              <div class="stat-group">
                <div class="homelab-stat">
                  <span class="stat-number">Proxmox</span>
                  <span class="stat-label">Hypervisor</span>
                </div>
                <div class="homelab-stat">
                  <span class="stat-number">Podman</span>
                  <span class="stat-label">Containers</span>
                </div>
                <div class="homelab-stat">
                  <span class="stat-number">PostgreSQL</span>
                  <span class="stat-label">Primary DB</span>
                </div>
                <div class="homelab-stat">
                  <span class="stat-number">Custom DDNS</span>
                  <span class="stat-label">DNS Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-experiments">
        <div class="section-container fade-in">
          <h2 class="section-title">AI & Experiments</h2>
          <div class="homelab-content">
            <div class="homelab-intro">
              <p class="large-text">Practical AI integration, not hype</p>
              <p>I experiment with LLM-based systems that solve real problems: natural language to SQL for read-only queries, MCP (Model Context Protocol) servers for tool integration, vector search with pgvector, and schema-aware APIs. Focus on explainability, safety boundaries, and usefulness.</p>
            </div>

            <div class="homelab-grid">
              <div class="homelab-card proxmox-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                  </svg>
                </div>
                <h3>Natural Language → SQL</h3>
                <p>LLM-powered query generation from natural language. Schema-aware, read-only by design, with explain plans and safety checks. Built for exploration, not production writes.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">PostgreSQL</span>
                  <span class="tech-badge">FastAPI</span>
                  <span class="tech-badge">LLMs</span>
                </div>
              </div>

              <div class="homelab-card container-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
                  </svg>
                </div>
                <h3>MCP Servers</h3>
                <p>Model Context Protocol servers using FastAPI. Exposes database schemas, file systems, and custom tools to LLMs in a structured, controlled way. Think API design for AI agents.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">MCP</span>
                  <span class="tech-badge">FastAPI</span>
                  <span class="tech-badge">Tools</span>
                </div>
              </div>

              <div class="homelab-card monitoring-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Vector Search & Embeddings</h3>
                <p>pgvector for similarity search over text, code, and documentation. Experimenting with retrieval-augmented generation (RAG) and semantic search patterns.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">pgvector</span>
                  <span class="tech-badge">Embeddings</span>
                  <span class="tech-badge">RAG</span>
                </div>
              </div>

              <div class="homelab-card network-card">
                <div class="homelab-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3>POCs & Internal Demos</h3>
                <p>Built working prototypes for internal discussions: schema exposure APIs, tool-based LLM interactions, and AI integration patterns. Focused on evolvability, not one-off scripts.</p>
                <div class="homelab-tech">
                  <span class="tech-badge">FastAPI</span>
                  <span class="tech-badge">Design</span>
                  <span class="tech-badge">Systems</span>
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
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">DevConf India Organizer</h3>
                    <div class="timeline-company">Community Leadership</div>
                    <div class="timeline-date">2024 - Present</div>
                  </div>
                  <div class="timeline-description">
                    <p>Core organizing member for DevConf India 2025 & 2026 (~2000 attendees). Focus on operational readiness, crowd control systems, communication tooling, and event coordination at scale.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">Event Ops</span>
                      <span class="skill-tag">Leadership</span>
                      <span class="skill-tag">Coordination</span>
                      <span class="skill-tag">Community</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item" data-aos="fade-left">
                <div class="timeline-marker">
                  <div class="timeline-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">Platform & Backend Engineering</h3>
                    <div class="timeline-company">Various Roles</div>
                    <div class="timeline-date">2020 - Present</div>
                  </div>
                  <div class="timeline-description">
                    <p>Building backend systems, infrastructure tooling, and developer platforms. API design, database architecture (PostgreSQL, MongoDB), containerization with Podman, and CI/CD pipelines.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">FastAPI</span>
                      <span class="skill-tag">PostgreSQL</span>
                      <span class="skill-tag">Podman</span>
                      <span class="skill-tag">Python</span>
                      <span class="skill-tag">Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item" data-aos="fade-right">
                <div class="timeline-marker">
                  <div class="timeline-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3 class="timeline-title">AI Experiments & MCP Development</h3>
                    <div class="timeline-company">Personal R&D</div>
                    <div class="timeline-date">2023 - Ongoing</div>
                  </div>
                  <div class="timeline-description">
                    <p>Built MCP-compatible servers, NL→SQL systems, and vector search prototypes. Focus on practical integration patterns, not demos. Schema-aware APIs, embeddings, and tool-based LLM interactions.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">MCP</span>
                      <span class="skill-tag">FastAPI</span>
                      <span class="skill-tag">pgvector</span>
                      <span class="skill-tag">LLMs</span>
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
                    <h3 class="timeline-title">Proxmox Lab & Self-Hosting</h3>
                    <div class="timeline-company">Infrastructure Learning</div>
                    <div class="timeline-date">2021 - Ongoing</div>
                  </div>
                  <div class="timeline-description">
                    <p>Built production-like infrastructure at home: Proxmox virtualization, Podman containers, custom DDNS service, automated backups, and proper DNS/TLS setup. Learn by operating real systems.</p>
                    <div class="timeline-skills">
                      <span class="skill-tag">Proxmox VE</span>
                      <span class="skill-tag">Podman</span>
                      <span class="skill-tag">DDNS</span>
                      <span class="skill-tag">Backups</span>
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
            ${t.map((e,s)=>`
              <div class="project-card" data-index="${s}">
                <div class="project-content">
                  <h3 class="project-title">${e.name}</h3>
                  <p class="project-description">${e.description||"No description available"}</p>
                  <div class="project-meta">
                    <div class="project-tech">
                      <span class="tech-tag">${e.language||"Various"}</span>
                    </div>
                    <div class="project-stats">
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${e.stargazers_count}
                      </span>
                      <span class="project-stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M6 3v12"></path>
                          <circle cx="18" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                        ${e.forks_count}
                      </span>
                    </div>
                  </div>
                  <a href="${e.html_url}" target="_blank" class="project-link">View Project</a>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="view-more-container">
            <a href="${f.html_url}?tab=repositories" target="_blank" class="view-more-button">View All Projects</a>
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
  `,(i=document.getElementById("theme-toggle"))==null||i.addEventListener("click",C),V(),D(),H(),F(),j(),O(),T(),z(),A(),_(),B()}R();
