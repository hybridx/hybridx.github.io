import './style.css'
import logo from './logo.svg'
import '@hybridxweb/copyright-x/dist/copyright-x';
// import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${logo}" class="logo vanilla" alt="Hybridx logo" />
    <p>
      Coming soon!
    </p>
    <copyright-x />
  </div>
`;

// <embed src="/resume.pdf" width="595" height="800" type="application/pdf">
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
