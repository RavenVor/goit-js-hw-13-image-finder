import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

function onGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const larghImg = e.target.dataset.src;
  const instance = basicLightbox.create(`<img src="${larghImg}">`);

  instance.show();
  console.log('kdjfkdjfkd');
}

export default onGalleryItemClick;
