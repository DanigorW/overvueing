<template>
  <div class="home-page-container">
    <div class="circle"></div>
    <Header />
    <HowItAllBegan />

    <div class="test"></div>
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
    HowItAllBegan: () =>
      import(
        /* webpackChunkName: "About" */ "../components/homePage/about/HowItAllBegan.vue"
      ),
  },

  mounted() {
    // this.gsap.to(".circle", {
    //   scrollTrigger: {
    //     trigger: ".circle",
    //     scrub: 5,
    //     start: 1,
    //   },
    //   opacity: 0,
    //   x: 1000,
    //   y: 500,
    // });

    this.gsap.timeline().from(".circle", {
      scrollTrigger: {
        scrub: 5,
        start: 1,
        duration: 3000,
        opacity: 1,
      },

      x: 1500,
      y: 1000,
    });
  },
};
</script>

<style scoped>
.home-page-container {
  position: relative;
}
.circle {
  background: #3ad69055;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  left: 0;
}
</style>