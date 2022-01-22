<template>
    <div id="transition" class="padding20">
        <Header />
        <HowToUse />

        <OnRoutes />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/transitions/Header.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/transitions/HowToUse.vue"
            ),
        OnRoutes: () =>
            import(
                /* webpackChunkName: "OnRoutes " */ "../components/transitions/OnRoutes.vue"
            ),
    },
};
</script>

<style>
</style>