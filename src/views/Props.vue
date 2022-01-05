<template>
    <div class="padding20">
        <Header />
        <Example />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/props/Header.vue"
            ),
        Example: () =>
            import(
                /* webpackChunkName: "Example" */ "../components/props/Example.vue"
            ),
    },
};
</script>

<style>
</style>