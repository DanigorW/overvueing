<template>
  <div class="padding20">
    <Header />
    <Basic />
    <TheRightWay />
    <HowToUse />
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
    HowToUse: () =>
      import(
        /* webpackChunkName: "HowToUse" */ "../components/forms/HowToUse.vue"
      ),
  },
};
</script>

<style>
</style>