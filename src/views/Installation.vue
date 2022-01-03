<template>
  <div class="padding20">
    <installation />
  </div>
</template>

<script>
export default {
  components: {
    Installation: () =>
      import(
        /* webpackChunkName: "Installation" */ "../components/installation/Installation.vue"
      ),
  },
};
</script>

<style></style>
