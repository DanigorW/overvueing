<template>
    <div class="padding20">
        <Debounce />
        <Closure />
        <Promises />
        <Promisify />
        <Recursion />
        <Memoization />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "Tricky concepts explained, we will go over Debounce,Closures,Promises,Promisification/Promisify,Recursion,Memoization, and many more.",
            },
        ],
    },
    components: {
        Debounce: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/concepts/Debounce.vue"
            ),
        Closure: () =>
            import(
                /* webpackChunkName: "Closure" */ "../components/concepts/Closure.vue"
            ),
        Promises: () =>
            import(
                /* webpackChunkName: "Promises" */ "../components/concepts/Promises.vue"
            ),
        Promisify: () =>
            import(
                /* webpackChunkName: "Promisify" */ "../components/concepts/Promisify.vue"
            ),
        Recursion: () =>
            import(
                /* webpackChunkName: "Recursion" */ "../components/concepts/Recursion.vue"
            ),
        Memoization: () =>
            import(
                /* webpackChunkName: "Memoization" */ "../components/concepts/Memoization.vue"
            ),
    },
};
</script>

<style>
</style>