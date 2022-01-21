<template>
    <div class="padding20">
        <Header />
        <Local />
        <Global />
        <HowToUse />
        <Complex />
        <FolderStructure />
    </div>
</template>

<script>
export default {
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
    },
};
</script>

<style>
</style>