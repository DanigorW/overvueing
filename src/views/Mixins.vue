<template>
    <div class="padding20">
        <Header />
        <FolderStructure />
        <Structure />
        <HowToUse />
        <GlobalMixins />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/mixins/Header.vue"
            ),
        FolderStructure: () =>
            import(
                /* webpackChunkName: "FolderStructure" */ "../components/mixins/FolderStructure.vue"
            ),
        Structure: () =>
            import(
                /* webpackChunkName: "Structure" */ "../components/mixins/Structure.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/mixins/HowToUse.vue"
            ),
        GlobalMixins: () =>
            import(
                /* webpackChunkName: "GlobalMixins" */ "../components/mixins/GlobalMixins.vue"
            ),
    },
};
</script>

<style>
</style>