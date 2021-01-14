import api from './js/api-service';
import onGalleryItemClick from './js/modal';
import scrollGallery from './js/page-scroll';
import refs from './js/refs';
import fetchImg from './js/fetch-img';

import './styles.css';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMorBtn.addEventListener('click', onLoadMorBtnClick);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  api.query = form.elements.query.value;

  refs.galleryList.innerHTML = '';
  refs.galleryList.removeEventListener('click', onGalleryItemClick);

  api.resetPage();

  fetchImg();
}

function onLoadMorBtnClick() {
  fetchImg();
  scrollGallery();
}
