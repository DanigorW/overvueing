<template>
    <div class="box-shadow" id="nav">
        <div class="container">
            <div class="nav-container">
                <div class="logo">
                    <router-link to="/"
                        ><h3>
                            OVER<span class="vue-color-green">VUE</span>ING
                        </h3></router-link
                    >
                </div>

                <div
                    @mouseenter="iconHover = true"
                    @mouseleave="changeIconHover"
                    @click="SET_IS_SIDE_BAR_OPEN"
                    class="nav-icon"
                >
                    <span class="vue-color-green-bg"></span>
                    <span
                        :class="iconHover ? 'nav-animation-2-span' : ''"
                        class="vue-color-gray-bg"
                    ></span>
                    <span
                        :class="iconHover ? 'nav-animation-3-span' : ''"
                        class="vue-color-gray-bg"
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            iconHover: false,
        };
    },

    methods: {
        ...mapMutations(["SET_IS_SIDE_BAR_OPEN"]),
        changeIconHover() {
            this.iconHover = false;
        },
    },
};
</script>

<style scoped>
.logo h3 {
    color: #32475b;
}
#nav {
    padding: 20px;
    background: #fff;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    z-index: 1000000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-icon {
    cursor: pointer;
    z-index: 1000;
}

.nav-icon span {
    display: block;
    margin: 5px 0;
    margin-left: auto;
}

.nav-icon span:nth-child(1) {
    height: 3px;
    width: 40px;
    transition: all 0.3s;
}

.nav-icon span:nth-child(2) {
    height: 3px;
    width: 30px;
    transition: all 0.3s;
}

.nav-icon span:nth-child(3) {
    height: 3px;
    width: 20px;
    transition: all 0.3s;
}
</style>

