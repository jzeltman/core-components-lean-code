export default {
  selector: '.teaser.--teaser-card',
  init: (el) => {
    const bgEl = document.createElement('div');
    bgEl.classList.add('cmp-teaser--bg-blur');

    let imgWidth = 320;
    const imgWidths = el.querySelector('.cmp-image')
      .getAttribute('data-cmp-widths')
      .split(',')
      .map(width => parseInt(width));

    for (let w = 0; w < imgWidths.length; w++) {
      if (imgWidths[w] >= el.offsetWidth) {
        imgWidth = imgWidths[w];
        break;
      }
    }

    let imgSrc = el.querySelector('.cmp-image').getAttribute('data-cmp-src');
    if (imgSrc.includes('{.width}')) imgSrc = imgSrc.replace('{.width}', `.${imgWidth}`);
    bgEl.style.backgroundImage = `url(${imgSrc})`;

    el.querySelector('.cmp-teaser').appendChild(bgEl);
  }
};
