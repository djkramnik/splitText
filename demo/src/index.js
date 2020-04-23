import splitText from '../../lib/index';

splitText(document.querySelector('#quote')).then(revert => {
  const btn = document.querySelector('button');
  btn.removeAttribute('disabled');
  btn.addEventListener('click', revert);
});
