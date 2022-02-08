<template>
    <div id="home-page-header" class="padding20">
        <div class="container">
            <div class="home-page-text">
                <h1 class="frontend">frontend</h1>
                <h1 class="developer">developer</h1>
                <h1 class="specialized">specializing</h1>
                <h1 class="invue">
                    in <span class="vue-color-green">vue</span>
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.gsap.from(".frontend", 1.8, {
            y: 100,

            ease: "power4.out",
            opacity: 0,
            skewY: 7,
            skewX: 7,
            stagger: {
                amount: 0,
            },
        });
        this.gsap.from(".developer", 1.8, {
            y: 100,

            ease: "power4.out",
            delay: 0.1,
            opacity: 0,
            skewY: 7,
            skewX: 7,
            stagger: {
                amount: 0,
            },
        });
        this.gsap.from(".specialized", 1.8, {
            y: 100,

            ease: "power4.out",
            delay: 0.2,
            opacity: 0,
            skewY: 7,
            skewX: 7,
            stagger: {
                amount: 0,
            },
        });
        this.gsap.from(".invue", 1.8, {
            y: 100,

            ease: "power4.out",
            delay: 0.3,
            opacity: 0,
            skewY: 7,
            skewX: 10,
            stagger: {
                amount: 0,
            },
        });
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
    height: 100vh;
    background: rgb(255, 255, 255);
    background: linear-gradient(
        40deg,
        rgba(255, 255, 255, 1) 70%,
        rgba(255, 255, 255, 1) 70%,
        rgba(65, 184, 131, 1) 54%
    );
}

.home-page-text {
    margin-top: 180px;
    /* margin-left: 250px; */
    z-index: 100;
    position: relative;
}

.home-page-text h1 {
    font-size: 90px;
    text-transform: uppercase;
}
</style>