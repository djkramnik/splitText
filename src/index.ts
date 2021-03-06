import { tokenizeEl, getLineElements, getLines, Options } from './utils';

const waitForBrowser = async () => {
  return new Promise(resolve => window.setTimeout(resolve, 0));
};

export default async (el: HTMLElement, options?: Options) => {
  // store the original text
  const originalText = el.innerText;
  if (!originalText) {
    return;
  }

  const tokens = tokenizeEl(el);
  el.innerText = '';
  el.appendChild(tokens);
  await waitForBrowser();

  const lines = getLineElements(
    getLines(el),
    options ? options.markup : undefined
  );
  el.innerHTML = '';
  el.appendChild(lines);

  // returns a function to revert the split
  return () => {
    el.innerHTML = '';
    el.innerText = originalText;
  };
};
