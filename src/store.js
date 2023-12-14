import { reactive } from 'vue';

export const store = reactive({
  film: [],

  apiUrl:
    'https://api.themoviedb.org/3/search/movie?api_key=fefaeabe53117f1cbd0449d990e58215&query=futuro',
});
