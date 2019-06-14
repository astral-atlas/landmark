import { useState, html } from 'https://unpkg.com/preact-hook-htm?module'

export const LandmarkGreeting = () => {
  const [name, setName] = useState('Stranger');

  return html`<input
    type="text"
    value=${name}
    onChange=${event => setName(event.target.value)}
  />`;
};