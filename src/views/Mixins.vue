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
    metaInfo: {
        meta: [
            {
                name: "description",
                content: `
Mixins are a flexible way to distribute reusable functionalities for Vue components. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be “mixed” into the component's own options.`,
            },
        ],
    },
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