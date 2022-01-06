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
        /* webpackChunkName: "Plugins" */ "../components/watchers/Header.vue"
      ),
    HowToUse: () =>
      import(
        /* webpackChunkName: "HowToUse" */ "../components/watchers/HowToUse.vue"
      ),
  },
};
</script>

<style>
</style>