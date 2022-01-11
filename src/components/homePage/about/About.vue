<template>
  <div class="about">
    <div class="container">
      <div class="header">
        <h2>About</h2>
        <!-- <h2>Over<span class="vue-color-green">Vue</span>ing</h2> -->
      </div>
      <div class="content">
        <p></p>
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
    this.gsap.from(".content p", {
      scrollTrigger: {
        scrub: 5,
        ease: "power4.out",
        end: "center center",
        start: 500,
      },
      opacity: 0,
      y: 600,
      skewY: 5,
      // skewX: 7,
    });
  },
};
</script>

<style scoped>
.header h2 {
  font-size: 90px;
  text-transform: uppercase;
}
.content {
  /* margin-top: 120px; */
  max-width: 600px;
  width: 100%;
}
</style>