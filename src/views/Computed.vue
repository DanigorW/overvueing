<template>
  <div class="padding20">
    <Header />
    <HowToUse />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(
        /* webpackChunkName: "Header" */ "../components/computed/Header.vue"
      ),
    HowToUse: () =>
      import(
        /* webpackChunkName: "HowToUse" */ "../components/computed/HowToUse.vue"
      ),
  },
};
</script>

<style>
</style>