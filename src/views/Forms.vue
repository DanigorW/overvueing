<template>
    <div class="padding20">
        <Header />
        <Basic />
        <TheRightWay />
        <HowToUse />
        <Validators />
        <BetterWay />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "Learn how to create, validate, and utilize inputs from a form in Vue.js",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/forms/Header.vue"
            ),
        Basic: () =>
            import(
                /* webpackChunkName: "Basic" */ "../components/forms/Basic.vue"
            ),
        TheRightWay: () =>
            import(
                /* webpackChunkName: "TheRightWay" */ "../components/forms/TheRightWay.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/forms/HowToUse.vue"
            ),
        Validators: () =>
            import(
                /* webpackChunkName: "Validators" */ "../components/forms/Validators.vue"
            ),
        BetterWay: () =>
            import(
                /* webpackChunkName: "BetterWay" */ "../components/forms/BetterWay.vue"
            ),
    },
};
</script>

<style>
</style>