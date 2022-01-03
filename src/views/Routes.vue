<template>
  <div class="padding20">
    <Header />
    <Example />
    <UseRoutes />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(
        /* webpackChunkName: "Header" */ "../components/routes/Header.vue"
      ),
    Example: () =>
      import(
        /* webpackChunkName: "Example" */ "../components/routes/Example.vue"
      ),
    UseRoutes: () =>
      import(
        /* webpackChunkName: "UseRoutes" */ "../components/routes/UseRoutes.vue"
      ),
  },
};
</script>

<style>
</style>