<script>
import { store } from './store';

import axios from 'axios';

export default {
  name: 'BoolFLix',
  components: {},
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
  <form @submit.prevent="search">
    <label for="search">Search</label>
    <input type="text" id="search" v-model="store.searchKey" />
    <button>Search</button>
  </form>

  <ul>
    <li>
      <div v-for="films in store.film">
        <h4>{{ films.title }}</h4>
        <h5>{{ films.original_title }}</h5>
        <p>{{ films.original_language }}</p>
        <p>{{ films.vote_average }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  list-style-type: none;
}
</style>
