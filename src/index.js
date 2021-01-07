import updateMarkup from './js/update-gallery';
import api from './js/api-service';
import refs from './js/refs';
import './styles.css';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMorBtn.addEventListener('click', onLoadBtnClick);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  api.query = form.elements.query.value;
  refs.galleryList.innerHTML = '';

  api.resetPage();
  api.fetchImg().then(img => updateMarkup(img));

  form.reset();
}

function onLoadBtnClick() {
  api.fetchImg().then(img => updateMarkup(img));
}

function fetchImages() {
  refs.button.classList.add('is-hidden');

  apiService.fetchImages().then(images => {
    if (images.length === 0) {
      showNotice();

      refs.button.classList.add('is-hidden');

      return;
    }

    showSuccess();

    updateGalleryMarkup(images);

    refs.button.classList.remove('is-hidden');

    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    }, 3000);
  });
}

// formRef.addEventListener('submit', e => {
//   e.preventDefault();
//   const query = e.currentTarget.elements.query.value;
//   const key = '19799543-c8ad4c9cd6437357aa5be5727';
//   const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=${key}`;
//   fetch(URL)
//     .then(res => res.json())
//     .then(({ hits }) => console.log(hits));
// });
