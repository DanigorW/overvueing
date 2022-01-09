<template>
    <div class="padding20">
        <Header />
        <Basic />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/forms/Header.vue"
            ),
        Basic: () =>
            import(
                /* webpackChunkName: "Basic" */ "../components/forms/Basic.vue"
            ),
    },
};
</script>

<style>
</style>