<template>
    <div class="padding20">
        <Header />
        <BeforeCreate />
        <Created />
        <BeforeMount />
        <Mounted />
        <BeforeUpdate />
        <Updated />
        <BeforeDestroy />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "Lifecycle hooks are a window into how the library you are using works behind the scenes. Lifecycle hooks allow you to know when your component is created, added to the DOM, updated, or destroyed. This article will introduce you to the creation, mounting, updating, and destruction hooks in Vue.",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/lifecycle/Header.vue"
            ),
        BeforeCreate: () =>
            import(
                /* webpackChunkName: "BeforeCreate" */ "../components/lifecycle/BeforeCreate.vue"
            ),
        Created: () =>
            import(
                /* webpackChunkName: "BeforeCreate" */ "../components/lifecycle/Created.vue"
            ),
        BeforeMount: () =>
            import(
                /* webpackChunkName: "BeforeMount" */ "../components/lifecycle/BeforeMount.vue"
            ),
        Mounted: () =>
            import(
                /* webpackChunkName: "Mounted" */ "../components/lifecycle/Mounted.vue"
            ),
        BeforeUpdate: () =>
            import(
                /* webpackChunkName: "BeforeUpdate" */ "../components/lifecycle/BeforeUpdate.vue"
            ),
        Updated: () =>
            import(
                /* webpackChunkName: "Updated" */ "../components/lifecycle/Updated.vue"
            ),
        BeforeDestroy: () =>
            import(
                /* webpackChunkName: "BeforeDestroy" */ "../components/lifecycle/BeforeDestroy.vue"
            ),
    },
};
</script>

<style>
</style>