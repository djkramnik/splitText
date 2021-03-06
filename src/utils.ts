type LinesMapType = {
  [offset: string]: Array<string>;
};

export interface Options {
  markup?: string;
}

export const tokenizeEl: (el: HTMLElement) => DocumentFragment = (
  el: HTMLElement
) => {
  const fragment = document.createDocumentFragment();
  const text = el.textContent;

  if (typeof text === 'string') {
    text.split(/\s/).forEach(word => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      fragment.appendChild(span);
    });
  }

  return fragment;
};

export const getLines = (tokenizedEl: HTMLElement) =>
  Array.from(tokenizedEl.children).reduce(
    (linesMap: LinesMapType, token: Element) => {
      if (token instanceof HTMLElement) {
        return {
          ...linesMap,
          [token.offsetTop]: linesMap[token.offsetTop]
            ? linesMap[token.offsetTop].concat(token.innerText.trim())
            : [token.innerText.trim()],
        };
      }
      return linesMap;
    },
    {}
  );

export const getLineElements = (linesMap: LinesMapType, markup?: string) => {
  const fragment = document.createDocumentFragment();
  Object.keys(linesMap)
    .sort((a: string, b: string) => parseInt(a, 10) - parseInt(b, 10))
    .forEach((key: string) => {
      if (typeof markup === 'string') {
        const doc = new DOMParser().parseFromString(
          markup.replace('{slot}', linesMap[key].join(' ')),
          'text/html'
        );
        fragment.appendChild(doc.body.children[0]);
      } else {
        const div = document.createElement('div');
        div.style.display = 'block';
        div.style.textAlign = 'start';
        div.style.position = 'relative';
        div.textContent = linesMap[key].join(' ');
        fragment.appendChild(div);
      }
    });
  return fragment;
};
