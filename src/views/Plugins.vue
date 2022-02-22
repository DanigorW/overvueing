<template>
    <div class="padding20">
        <Plugins />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "useful plugins for vue that can help you during your development and save a lot of time.",
            },
        ],
    },
    components: {
        Plugins: () =>
            import(
                /* webpackChunkName: "Plugins" */ "../components/pluginsForVue/Plugins.vue"
            ),
    },
};
</script>

<style>
</style>