const key = '19799543-c8ad4c9cd6437357aa5be5727';
export default {
  searchQuery: '',
  page: 1,

  fetchImg() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${key}`,
    )
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
