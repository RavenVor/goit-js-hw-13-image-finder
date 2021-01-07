import refs from './refs';
import galleryItemTpl from '../templates/gallery.hbs';

function updateMarkup(img) {
  const markup = galleryItemTpl(img);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
