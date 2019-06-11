import { render, createElement } from 'preact';
import unboundHtm from 'htm';

const htm = unboundHtm.bind(createElement);

const main = () => {
  const reactRootElement = document.createElement('div');
  document.body.append(reactRootElement);
  render(htm`<h1>Hello There</h1>`, reactRootElement);
};

main();
