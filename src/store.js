import { reactive } from 'vue';

export const store = reactive({
  film: [],
  series: [],
  searchKey: '',

  config: {
    apiFilms: 'https://api.themoviedb.org/3/search/movie',
    apiSeries: 'https://api.themoviedb.org/3/search/tv',
    apiKey: 'fefaeabe53117f1cbd0449d990e58215',
  },
});
