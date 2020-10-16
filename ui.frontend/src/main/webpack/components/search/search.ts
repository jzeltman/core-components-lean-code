export default {
  selector: '.cmp-search',
  init: (el) => {
    const headerEl = document.querySelector('.cmp-experiencefragment--header');
    const navEl = headerEl.querySelector('.navigation');
    const buttonEl = headerEl.querySelector('.button');

    const focusinHandler = (e) => {
      navEl.classList.add('hidden');
      buttonEl.classList.add('hidden');
      el.parentNode.classList.add('expanded');
    };
    const focusoutHandler = (e) => {
      navEl.classList.remove('hidden');
      buttonEl.classList.remove('hidden');
      el.parentNode.classList.remove('expanded');
      el.querySelector('input').value = '';
      el.querySelector('.cmp-search__clear').style.display = 'none';
    };
    el.addEventListener('focusin', focusinHandler);
    el.addEventListener('focusout', focusoutHandler);

  }
}