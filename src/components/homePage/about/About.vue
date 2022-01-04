<template>
  <div class="about">
    <div class="container">
      <div class="header">
        <h2>About How</h2>
        <h2>you <span class="vue-color-green">vueing</span></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.gsap.from(".header h2", {
      scrollTrigger: {
        scrub: 3,
        start: 1,
      },
      y: 500,
    });

    this.gsap.from(".header h2", 1.8, {
      scrollTrigger: {
        scrub: 1,
        ease: "power4.out",
        end: "center center",
        // start: 200,
      },
      opacity: 0,
      x: 500,
      skewY: 7,
      skewX: 7,
    });
  },
};
</script>

<style scoped>
.header h2 {
  font-size: 90px;
  text-transform: uppercase;
}

.about {
  height: 100vh;
}
</style>