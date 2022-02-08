<template>
    <div class="padding20">
        <Header />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/jest/Header.vue"
            ),
    },
};
</script>

<style>
</style>