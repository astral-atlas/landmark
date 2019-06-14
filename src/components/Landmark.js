import { html } from 'https://unpkg.com/preact-hook-htm?module'
import { LandmarkGreeting } from './LandmarkGreeting.js';

export const Landmark = () => html`
  <h1>Landmark</h1>
  <p>Welcome, ${html`<${LandmarkGreeting} />`}</p>
`;