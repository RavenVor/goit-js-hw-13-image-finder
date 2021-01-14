import refs from './refs';
import api from './api-service';
import updateMarkup from './update-gallery';
import onGalleryItemClick from './modal';
import toastr from 'toastr';
import toastOptions from './options/toastr-options';
import 'toastr/build/toastr.min.css';

function fetchImg() {
  refs.loadMorBtn.classList.add('is-hidden');
  api.fetchImg().then(img => {
    if (img.length === 0) {
      refs.form.reset();
      toastr.error(
        'No results were found for your request! Please specify your request.',
      );

      return;
    }

    toastr.success('Images on your request. Enjoy.');

    updateMarkup(img);

    refs.loadMorBtn.classList.remove('is-hidden');
  });

  refs.galleryList.addEventListener('click', onGalleryItemClick);
}

export default fetchImg;
