import { reactive } from 'vue';

export const store = reactive({
  film: [],

  config: {
    apiFilms: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'fefaeabe53117f1cbd0449d990e58215',
  },
});
