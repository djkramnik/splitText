type LinesMapType = {
  [offset: string]: Array<string>
};

const tokenizeEl: (el: HTMLElement) => DocumentFragment = (el: HTMLElement) => {
  const words = el.innerText.split(' ');
  const fragment = new DocumentFragment();
  words.forEach(word => {
    const span = document.createElement('span');
    span.innerText = word + ' ';
    fragment.appendChild(span);
  });
  return fragment;
};

const getLines = (tokenizedEl: HTMLElement) =>
  Array.from(tokenizedEl.children)
    .reduce((linesMap: LinesMapType, token: Element) => {
      if (token instanceof HTMLElement) {
        return {
          ...linesMap,
          [token.offsetTop]: linesMap[token.offsetTop]
            ? linesMap[token.offsetTop].concat(token.innerText.trim())
            : [token.innerText.trim()],
        };
      }
      return linesMap;
    }, {});

const getLineElements = (linesMap: LinesMapType) => {
  const fragment = new DocumentFragment();
  Object.keys(linesMap)
    .sort((a: string, b: string) => parseInt(a, 10) - parseInt(b, 10))
    .forEach((key: string) => {
      const div = document.createElement('div');
      div.style.display = 'block';
      div.style.textAlign = 'start';
      div.style.position = 'relative';
      div.innerText = linesMap[key].join(' ');
      fragment.appendChild(div);
    });
  return fragment;
}

const waitForBrowser = async () => {
  return new Promise(resolve => window.setTimeout(resolve, 0));
};

export default async (el: HTMLElement) => {
  // store the original text
  const originalText = el.innerText;
  if (!originalText) {
    return;
  }

  const tokens = tokenizeEl(el);
  el.innerText = '';
  el.appendChild(tokens);
  await waitForBrowser();
  const lines = getLineElements(getLines(el));
  el.innerHTML = '';
  el.appendChild(lines);

  // returns a function to revert the split
  return () => {
    el.innerHTML = '';
    el.innerText = originalText;
  };
};
