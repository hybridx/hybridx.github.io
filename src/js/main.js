import html from 'html-template-tag';

document.querySelector('body').innerHTML = html`
<main class="main"></main>
`;

document.querySelector('main').innerHTML = html`
<div class="main__text">hybridX</div>
<div class="main__break-line"></div>
<div class="main__text">& Code</div>
 <copyright-x><span slot="name">hybridX</span></copyright-x>
`;
