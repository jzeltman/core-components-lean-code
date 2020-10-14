import TeaserCard from './teaser/style/card';

const Components = [
  TeaserCard
]

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