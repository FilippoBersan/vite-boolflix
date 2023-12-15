<script>
export default {
  name: 'FilmInfo',
  props: ['title'],

  data() {
    return {};
  },
};
</script>

<template>
  <div class="container-info">
    <ul>
      <li>{{ title }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
