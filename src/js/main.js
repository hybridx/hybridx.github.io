import html from 'html-template-tag';

document.querySelector('body').innerHTML = html`
<nav></nav>
<main class="main"></main>
<!-- <div id="clock"></div> -->
<footer>
    <copyright-x><span slot="name">hybridX</span></copyright-x>
</footer>
`;

document.querySelector('main').innerHTML = html`
<div class="main__text">hybridX</div>
<div class="main__break-line"></div>
<div class="main__text">& Code</div>
`;

document.querySelector('nav').innerHTML = html`
<div>Menu</div>
<i class="fa fa-bars" aria-hidden="true"></i>
`;

const clock = document.querySelector('#clock');

if (clock !== null) {
    clock.innerHTML = html`
<div class="container">
  <div class="clock">
  <div class="hour">
    <div class="hr" id="hr"></div>
  </div>
  <div class="min">
    <div class="mn" id="mn"></div>
  </div>
  <div class="sec">
    <div class="sc" id="sc"></div>
  </div>
</div>
</div>
`;

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval( () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
}