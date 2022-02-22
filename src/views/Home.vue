<template>
    <div class="home-page-container padding20">
        <Header />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                hid: "og:title",
                name: "og:title",
                content: `overvueing is one big sandbox for Vue.js developers. You will find a lot of information and detailed "real-life" examples of 'how to', as well as explanations of complex concepts: how to mange your state correctly, useful plugins and much more useful info!`,
            },
            {
                name: "description",
                content: `"overvueing is one big sandbox for Vue.js developers. You will find a lot of information and detailed "real-life" examples of 'how to', as well as explanations of complex concepts: how to mange your state correctly, useful plugins and much more useful info!"`,
            },
        ],
    },

    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/homePage/header/Header.vue"
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
        // this.gsap.timeline().from(".circle", {
        //     scrollTrigger: {
        //         scrub: 5,
        //         start: 1,
        //         duration: 3000,
        //         opacity: 1,
        //     },
        //     x: 1500,
        //     y: 1000,
        // });
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