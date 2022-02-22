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
                    "A computed property is used to declaratively describe a value that depends on other values. When you data-bind to a computed property inside the template, Vue knows when to update the DOM when any of the values depended upon by the computed property has changed. This can be very powerful and makes your code more declarative, data-driven and thus easier to maintain.",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/computed/Header.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/computed/HowToUse.vue"
            ),
    },
};
</script>

<style>
</style>