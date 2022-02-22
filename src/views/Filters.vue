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
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "A Filter is a simple JavaScript function which is used to change the output of a data to the browser. Filters in Vue. JS don't change the data directly wherever we store them, it only applies formatting to our data. The data remains the same only the output of a data to a browser is changed.",
            },
        ],
    },
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