<template>
  <div class="about padding20">
    <div class="container">
      <div class="header">
        <h2>How it <span class="vue-color-green">all</span> began</h2>
        <!-- <h2>Over<span class="vue-color-green">Vue</span>ing</h2> -->
      </div>
      <div class="content">
        <!-- <p>Hey there!</p> -->
        <p>I started a new job in a compony that works with angular.js</p>
        <p>
          and thinking of moving to react - at this point i knew react & vue.
        </p>
        <p>
          BUT i always leaned to Vue, in that time react had only redux for
          state management
        </p>
        <p>and as many developers i disliked it.</p>
        <p>
          I decided to create a quick POC on one of the widgets the compony had
          and
        </p>
        <p>
          show them way Vue is so amazing and easy to work with and the best
        </p>
        <p>part of it is the easy state management compare to redux.</p>
        <p>I't was love at first sight, the compony decided to move to Vue.</p>
        <p>All the developers liked it and start learning Vue.</p>
        <p>Fast forward 3 years - all the compony product written in Vue.</p>
        <p>
          I created "OVERVUEING" not to replace the amazing Vue documentation!
        </p>
        <p>
          I wanted a place that store all the core functionality of Vue sorted
        </p>
        <p>
          in a way i like and can help new developers at the compony that need
        </p>
        <p>a quick reminder of "how to" and of course to myself.</p>
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
  margin-top: 10px;
  max-width: 700px;
  width: 100%;
}

.content p {
  line-height: 28px;
  font-size: 18px;
}
</style>