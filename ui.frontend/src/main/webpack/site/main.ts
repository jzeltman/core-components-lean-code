import './main.css';
import Components from '../components/components';

const onDocumentReady = () => {

  const headerEl: HTMLElement = document.querySelector('header.experiencefragment');
  const mainEl: HTMLElement = document.querySelector('.container.--main-behind-header');
  if (mainEl) {
    headerEl.classList.add('--main-behind-header');
    mainEl.style.marginTop = `-${headerEl.offsetHeight}px`;
  }

  Components.forEach(component => {
    const elements = document.querySelectorAll(component.selector);
    for (var i = 0; i < elements.length; i++) {
      new component.init(elements[i]);
    }
  })
}

if (document.readyState !== "loading") {
  onDocumentReady();
} else {
  document.addEventListener("DOMContentLoaded", onDocumentReady);
}