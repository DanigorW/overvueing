<template>
  <div class="padding20">
    <Header />
    <Basic />
    <TheRightWay />
  </div>
</template>

<script>
export default {
  components: {
    Header: () =>
      import(/* webpackChunkName: "Header" */ "../components/forms/Header.vue"),
    Basic: () =>
      import(/* webpackChunkName: "Basic" */ "../components/forms/Basic.vue"),
    TheRightWay: () =>
      import(
        /* webpackChunkName: "TheRightWay" */ "../components/forms/TheRightWay.vue"
      ),
  },
};
</script>

<style>
</style>