import html from 'html-template-tag';

document.querySelector('body').innerHTML = html`
<main class="main"></main>
`;

document.querySelector('main').innerHTML = html`
<a href="https://dev.to/hybridx">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Deepesh Nair's DEV Profile" height="30" width="30">
</a>
<div class="main__text">hybridX</div>
<div class="main__break-line"></div>
<div class="main__text">& Code</div>
 <copyright-x><span slot="name">hybridX</span></copyright-x>
`;
