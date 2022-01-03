<template>
  <div class="padding20">
    <Plugins />
  </div>
</template>

<script>
export default {
  components: {
    Plugins: () =>
      import(
        /* webpackChunkName: "Plugins" */ "../components/pluginsForVue/Plugins.vue"
      ),
  },
};
</script>

<style>
</style>