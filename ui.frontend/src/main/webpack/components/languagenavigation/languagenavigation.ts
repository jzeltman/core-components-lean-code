export default {
  selector: '.cmp-languagenavigation',
  init: (el) => {
    const languageListEl = el.querySelector('.cmp-languagenavigation__group');
    const buttonToggleEl = document.createElement('button');

    const toggleList = () => languageListEl.classList.toggle('block');

    buttonToggleEl.classList.add('cmp-languagenavigation__toggle');
    buttonToggleEl.addEventListener('click', toggleList);
    buttonToggleEl.addEventListener('keyup', toggleList);

    el.insertBefore(buttonToggleEl, languageListEl);
  }
}