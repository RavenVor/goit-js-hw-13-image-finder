import updateMarkup from './js/update-gallery';
import api from './js/api-service';
import onGalleryItemClick from './js/modal';
import scrollGallery from './js/page-scroll';
import refs from './js/refs';
import toastr from 'toastr';
import toastOptions from './js/options/toastr-options';
import 'toastr/build/toastr.min.css';
import './styles.css';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMorBtn.addEventListener('click', fetchImg);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  api.query = form.elements.query.value;

  refs.galleryList.innerHTML = '';
  refs.galleryList.removeEventListener('click', onGalleryItemClick);

  api.resetPage();

  fetchImg();

  form.reset();
}

function fetchImg() {
  refs.loadMorBtn.classList.add('is-hidden');
  api.fetchImg().then(img => {
    if (img.length === 0) {
      toastr.error(
        'No results were found for your request! Please specify your request.',
      );

      return;
    }

    toastr.success('Images on your request. Enjoy.');

    updateMarkup(img);

    refs.loadMorBtn.classList.remove('is-hidden');

    scrollGallery();
    // console.log(document.documentElement.offsetHeight);
  });

  refs.galleryList.addEventListener('click', onGalleryItemClick);
}

// console.log(document.documentElement.offsetHeight);

// function fetchImages() {
//   refs.button.classList.add('is-hidden');

//   apiService.fetchImages().then(images => {
//     if (images.length === 0) {
//       showNotice();

//       refs.button.classList.add('is-hidden');

//       return;
//     }

//     showSuccess();

//     updateGalleryMarkup(images);

//     refs.button.classList.remove('is-hidden');

//     setTimeout(() => {
//       window.scrollTo({
//         top: document.documentElement.offsetHeight,
//         behavior: 'smooth',
//       });
//     }, 3000);
//   });
// }

// formRef.addEventListener('submit', e => {
//   e.preventDefault();
//   const query = e.currentTarget.elements.query.value;
//   const key = '19799543-c8ad4c9cd6437357aa5be5727';
//   const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=${key}`;
//   fetch(URL)
//     .then(res => res.json())
//     .then(({ hits }) => console.log(hits));
// });
