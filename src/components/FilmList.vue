<script>
import axios from 'axios';
import { store } from '../store.js';
import FilmInfo from './FilmInfo.vue';

export default {
  name: 'FilmList',
  components: {
    FilmInfo,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(store.apiUrl).then((response) => {
      console.log(response);
      store.film = response.data.results;
    });
  },
};
</script>

<template>
  <div class="container" v-for="films in store.film">
    <FilmInfo :title="films.title" />
  </div>
</template>

<style scoped lang="scss"></style>
