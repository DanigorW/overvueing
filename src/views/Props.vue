<template>
    <div class="padding20">
        <Header />
        <Example />
        <EmitEvents />
        <HowToUse />
        <Styles />
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "What are props? In Vue, props (or properties), are the way that we pass data from a parent component down to it's child components. When we build our applications out of components, we end up building a data structure called a tree. Similar to a family tree, you have: parents",
            },
        ],
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/props/Header.vue"
            ),
        Example: () =>
            import(
                /* webpackChunkName: "Example" */ "../components/props/Example.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/props/HowToUse.vue"
            ),
        Styles: () =>
            import(
                /* webpackChunkName: "Styles" */ "../components/props/Styles.vue"
            ),
        EmitEvents: () =>
            import(
                /* webpackChunkName: "EmitEvents" */ "../components/props/EmitEvents.vue"
            ),
    },
};
</script>

<style>
</style>