<template>
    <div class="padding20">
        <Header />
        <Local />
        <Global />
        <HowToUse />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/filters/Header.vue"
            ),
        Local: () =>
            import(
                /* webpackChunkName: "Local" */ "../components/filters/Local.vue"
            ),
        Global: () =>
            import(
                /* webpackChunkName: "Global" */ "../components/filters/Global.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "Use" */ "../components/filters/HowToUse.vue"
            ),
    },
};
</script>

<style>
</style>