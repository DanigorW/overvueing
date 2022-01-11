<template>
  <div class="about">
    <div class="container">
      <div class="header">
        <h2>About</h2>
        <!-- <h2>Over<span class="vue-color-green">Vue</span>ing</h2> -->
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          facere nihil? Consectetur, aut quia suscipit dolorem nobis dolore!
          Libero unde ea blanditiis dolores repudiandae distinctio est eveniet
          repellat nobis tenetur expedita accusamus, dignissimos provident
          dolorum quidem vel magnam corporis hic incidunt. Amet voluptas
          veritatis at deleniti vero architecto voluptate mollitia distinctio
          corporis dignissimos possimus, quibusdam esse alias! Iusto explicabo
          nam est, corporis praesentium, maiores itaque vel officia quidem ullam
          laboriosam harum pariatur repudiandae tenetur qui soluta eveniet
          laborum veniam similique consequatur adipisci magnam perspiciatis
          repellendus. Eos, porro? Assumenda aspernatur consequuntur adipisci
          autem dolorum deserunt aliquid reprehenderit dolor quisquam similique
          quo numquam alias veniam, quod vel nulla aperiam veritatis esse sequi
          non. Ipsum suscipit maxime atque iure obcaecati et doloribus inventore
          vitae dolore similique vel, iste id nihil nemo hic modi nobis quaerat
          corrupti ad velit? A totam soluta, eum tenetur ex fuga. Voluptatem
          dolorum architecto corporis ad iure et! Alias quidem vero rem suscipit
          commodi libero, animi iste soluta reprehenderit adipisci illo
          voluptatibus ab! Cumque ipsum mollitia explicabo vel repellendus
        </p>
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