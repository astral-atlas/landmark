import { html, render } from 'https://unpkg.com/preact-hook-htm?module'
import { Landmark } from './components/Landmark.js';

const main = () => {
  const reactRootElement = document.createElement('div');
  document.body.append(reactRootElement);
  render(html`<${Landmark} />`, reactRootElement);
};

main();
