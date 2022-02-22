<template>
    <div class="padding20">
        <Header />
        <Example />
        <Dynamic />
        <FolderStructure />
        <Options />
        <HowToImport />
        <BroTip />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "Components are reusable Vue instances with custom HTML elements. Components can be reused as many times as you want or used in another component, making it a child component. Data, computed, watch, and methods can be used in a Vue component.",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/componentPage/Header.vue"
            ),
        Example: () =>
            import(
                /* webpackChunkName: "Example" */ "../components/componentPage/Example.vue"
            ),
        FolderStructure: () =>
            import(
                /* webpackChunkName: "Example" */ "../components/componentPage/FolderStructure.vue"
            ),

        BroTip: () =>
            import(
                /* webpackChunkName: "BroTip" */ "../components/componentPage/BroTip.vue"
            ),
        HowToImport: () =>
            import(
                /* webpackChunkName: "BroTip" */ "../components/componentPage/HowToImport.vue"
            ),
        Options: () =>
            import(
                /* webpackChunkName: "Options" */ "../components/componentPage/Options.vue"
            ),
        Dynamic: () =>
            import(
                /* webpackChunkName: "Dynamic" */ "../components/componentPage/Dynamic.vue"
            ),
    },
};
</script>

<style>
</style>