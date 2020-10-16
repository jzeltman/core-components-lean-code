export default {
  selector: 'footer.experiencefragment',
  init: (el) => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('cmp-backtotop');

    buttonEl.addEventListener('click', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      buttonEl.blur();
    });

    el.appendChild(buttonEl);
    el.classList.add('relative');
  }
}