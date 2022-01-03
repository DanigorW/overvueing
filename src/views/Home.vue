<template>
  <div>
    <Header />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {
    Header: () =>
      import(
        /* webpackChunkName: "Header" */ "../components/homePage/header/Header.vue"
      ),
  },
};
</script>

<style scoped>
</style>