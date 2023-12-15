<script>
import { store } from './store';
import axios from 'axios';

export default {
  name: 'BoolFLix',
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      axios
        .get(store.config.apiFilms, {
          params: {
            api_key: store.config.apiKey,
            query: store.searchKey,
          },
        })
        .then((response) => {
          this.store.film = response.data.results;
        });
    },
  },
};
</script>

<template>
  <form>
    <label @submit.prevent="search">Search</label>
    <input type="text" id="search" v-model="store.searchKey" />
    <button>Search</button>
  </form>
</template>

<style scoped></style>
