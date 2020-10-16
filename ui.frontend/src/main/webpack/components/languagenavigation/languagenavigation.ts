export default {
  selector: '.cmp-languagenavigation',
  init: (el) => {
    const languageListEl: HTMLElement = el.querySelector('.cmp-languagenavigation__group');
    const buttonToggleEl: HTMLButtonElement = document.createElement('button');

    const toggleList = () => languageListEl.classList.toggle('block');

    buttonToggleEl.classList.add('cmp-languagenavigation__toggle');
    buttonToggleEl.addEventListener('click', toggleList);
    document.addEventListener('click', ({ target }: any) => {
      if (!buttonToggleEl.contains(target) || languageListEl.contains(target)) {
        languageListEl.classList.remove('block');
      }
    });

    el.insertBefore(buttonToggleEl, languageListEl);
  }
}