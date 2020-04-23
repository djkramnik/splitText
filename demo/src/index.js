import splitText from '../../lib/index';

splitText(document.querySelector('#quote-basic')).then(revert => {
  const btn = document.querySelector('#quote-basic-btn');
  btn.removeAttribute('disabled');
  btn.addEventListener('click', revert);
});

splitText(document.querySelector('#quote-markup'), {
  markup:
    '<div class="stagger-line"><div class="stagger-line__inner">{slot}</div></div>',
}).then(revert => {
  const btn = document.querySelector('#quote-markup-btn');
  btn.removeAttribute('disabled');
  btn.addEventListener('click', revert);
});
