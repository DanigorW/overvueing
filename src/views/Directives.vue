<template>
    <div class="padding20">
        <Header />
        <Local />
        <Global />
        <HowToUse />
        <Complex />
        <FolderStructure />
        <Nuxt />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "Vue. js Directives are special HTML attributes that allow us to manipulate the DOM. Directives are very powerful and we use them every day. Common directives are v-if , v-for and v-model . The course covers all you need to know to be able to create your own, custom vue.",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/directives/Header.vue"
            ),
        Local: () =>
            import(
                /* webpackChunkName: "Local" */ "../components/directives/Local.vue"
            ),
        Global: () =>
            import(
                /* webpackChunkName: "Global" */ "../components/directives/Global.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/directives/HowToUse.vue"
            ),
        Complex: () =>
            import(
                /* webpackChunkName: "Complex" */ "../components/directives/Complex.vue"
            ),
        FolderStructure: () =>
            import(
                /* webpackChunkName: "FolderStructure" */ "../components/directives/FolderStructure.vue"
            ),
        Nuxt: () =>
            import(
                /* webpackChunkName: "Nuxt" */ "../components/directives/Nuxt.vue"
            ),
    },
};
</script>

<style>
</style>