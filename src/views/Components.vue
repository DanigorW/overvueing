<template>
  <div class="padding20">
    <Header />
    <Example />
    <BroTip />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(
        /* webpackChunkName: "Header" */ "../components/componentPage/Header.vue"
      ),
    Example: () =>
      import(
        /* webpackChunkName: "Example" */ "../components/componentPage/Example.vue"
      ),
    BroTip: () =>
      import(
        /* webpackChunkName: "BroTip" */ "../components/componentPage/BroTip.vue"
      ),
  },
};
</script>

<style>
</style>