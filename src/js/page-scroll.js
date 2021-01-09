function scrollGallery() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 2000);
}

export default scrollGallery;
