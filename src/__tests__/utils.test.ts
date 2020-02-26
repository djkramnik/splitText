import {JSDOM} from 'jsdom';
import {tokenizeEl, getLineElements} from '../utils';

const {window: {document}} = new JSDOM(`<div id="quote" style="width: 100px">\
SplitText makes it easy to break apart \
the text in an HTML element so that each character, word, and/or line is wrapped in its own div tag.\
</div>`);

const linesMap = {
  0: ['SplitText'],
  1: ['makes it easy'],
  2: ['to break apart'],
  3: ['the text in an'],
  4: ['HTML element'],
  5: ['so that each'],
  6: ['character'],
  7: ['word and/or'],
  8: ['line is wrapped'],
  9: ['its own div'],
  10: ['tag'],
};

test('tokenizeEl creates one span per word as delimited by space', () => {
  const quote = document.getElementById('quote');
  expect(quote).toBeDefined();
  if (quote !== null) {
    const fragment = tokenizeEl(quote);
    expect(fragment.children.length).toBe(27);
  }
});

test('getLineElements creates a div for every key in the object passed to it',
  () => {
    const fragment = getLineElements(linesMap);
    expect(fragment.children.length).toBe(Object.keys(linesMap).length);
  });

test('getLineElements fragment children have expected style', () => {
  const fragment = getLineElements(linesMap);
  const expectedStyle = {
    display: 'block',
    textAlign: 'start',
    position: 'relative',
  };
  Array.from(fragment.children).forEach((el => {
    if (el instanceof HTMLElement) {
      expect({
        display: el.style.display,
        textAlign: el.style.textAlign,
        position: el.style.position,
      }).toEqual(expectedStyle);
    }
  }));
});