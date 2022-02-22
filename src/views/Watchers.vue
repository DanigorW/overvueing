<template>
    <div class="padding20">
        <Header />
        <HowToUse />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "A watcher is a special Vue.js feature that allows you to spy on one property of the component state, and run a function when that property value changes.",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Plugins" */ "../components/watchers/Header.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/watchers/HowToUse.vue"
            ),
    },
};
</script>

<style>
</style>