function scrollGallery() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 1500);
}

export default scrollGallery;
