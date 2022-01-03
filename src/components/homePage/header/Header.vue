<template>
  <div id="home-page-header" class="padding20">
    <div class="igor-img">
      <img src="../../../../src/assets/igor.png" alt="" />
    </div>

    <div class="home-page-text">
      <h1 class="frontend">frontend</h1>
      <h1 class="developer">developer</h1>
      <h1 class="specialized">specializing</h1>
      <h1 class="invue">in <span class="vue-color-green">vue</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.gsap.to(".frontend", {
      scrollTrigger: {
        trigger: "#home-page-header",
        scrub: 3,
        start: 1,
      },
      x: 1000,
    });
    this.gsap.to(".developer", {
      scrollTrigger: {
        trigger: "#home-page-header",
        scrub: 3,
        start: 1,
      },
      x: 800,
    });
    this.gsap.to(".specialized", {
      scrollTrigger: {
        trigger: "#home-page-header",
        scrub: 3,
        start: 1,
      },
      x: 600,
    });
    this.gsap.to(".invue", {
      scrollTrigger: {
        trigger: "#home-page-header",
        scrub: 3,
        start: 1,
      },
      x: 400,
    });
  },
};
</script>

<style scoped>
#home-page-header {
  position: relative;
  height: 93vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 1) 70%,
    rgba(255, 255, 255, 1) 70%,
    rgba(65, 184, 131, 1) 54%
  );
}

.igor-img {
  position: absolute;
  right: 350px;
  bottom: -5px;
  z-index: 10000;
}

.igor-img img {
  width: 400px;
  transform: scaleX(-1);
}

.home-page-text {
  margin-top: 180px;
  margin-left: 250px;
}

.home-page-text h1 {
  font-size: 90px;
  text-transform: uppercase;
}
</style>