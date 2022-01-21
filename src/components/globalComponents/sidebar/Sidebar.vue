<template>
    <transition name="slide-fade">
        <div v-if="IS_SIDE_BAR_OPEN" class="elm-center" id="sidebar">
            <div class="search-input-container">
                <input
                    class="search-input"
                    v-model="userValue"
                    type="text"
                    placeholder="Filter"
                />
            </div>

            <div
                class="router-links"
                v-for="(item, index) in filterAllRoutes"
                :key="index"
            >
                <router-link
                    :to="{ name: item.split(' ')[0], query: $route.query }"
                    >{{ item }}</router-link
                >
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            userValue: "",
        };
    },
    mounted() {
        this.gsap.from("#sidebar", 1.8, {
            opacity: 0,
            delay: 0.5,
            x: -100,
            ease: "power4.out",
        }),
            this.gsap.utils.toArray(".router-links a").forEach((route) => {
                let hover = this.gsap.to(route, {
                    skewX: -5,

                    x: 2,

                    paused: true,
                    ease: "power1.inOut",
                });
                route.addEventListener("mouseenter", () => hover.play());
                route.addEventListener("mouseleave", () => hover.reverse());
            });
    },
    computed: {
        ...mapGetters(["IS_SIDE_BAR_OPEN", "GET_ALL_ROUTES"]),

        filterAllRoutes() {
            return this.GET_ALL_ROUTES.filter((route) =>
                route.toLowerCase().match(this.userValue.toLowerCase())
            );
        },
    },
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #41b883;
    border-radius: 10px;
}
#sidebar {
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    padding: 10px;
    width: 250px;
    background: #32475b;
    color: #fff;
    z-index: 1000000;
    overflow-y: auto;
}

a {
    margin-bottom: 10px;
    font-size: 20px;
}

.router-links {
    padding: 0 15px;
    margin-top: 10px;
}

@media (max-width: 1000px) {
    #sidebar {
        width: 200px;
    }
}
@media (max-width: 500px) {
    #sidebar {
        width: 100%;
    }
}
</style>
