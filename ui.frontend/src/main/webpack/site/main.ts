import './main.css';
import Components from '../components/components';

const onDocumentReady = () => {
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