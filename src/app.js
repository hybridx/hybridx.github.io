// SCSS imports
import './main.scss';
// Webcomponent imports
import '@hybridxweb/copyright-x/dist/copyright-x';
// Components
import Footer from './components/footer';

document.querySelector('#app').innerHTML = `
  <footer>${Footer()}</footer>
`;
