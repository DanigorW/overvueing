<template>
  <div class="padding20">
    <Header />
    <Example />
    <UseRoutes />
    <Programmatic />
    <Guards />
    <PageError />
    <CssControl />
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
    Programmatic: () =>
      import(
        /* webpackChunkName: "Programmatic" */ "../components/routes/Programmatic.vue"
      ),
    Guards: () =>
      import(
        /* webpackChunkName: "Guards" */ "../components/routes/Guards.vue"
      ),
    PageError: () =>
      import(
        /* webpackChunkName: "PageError" */ "../components/routes/PageError.vue"
      ),
    CssControl: () =>
      import(
        /* webpackChunkName: "CssControl" */ "../components/routes/CssControl.vue"
      ),
  },
};
</script>

<style>
</style>