<template>
    <div id="transition" class="padding20">
        <Header />
        <HowToUse />
        <OnRoutes />
        <Property />
        <Mode />
        <KeyFrames />
        <Type />
        <Appear />
        <JsAnimations />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/transitions/Header.vue"
            ),
        HowToUse: () =>
            import(
                /* webpackChunkName: "HowToUse" */ "../components/transitions/HowToUse.vue"
            ),
        OnRoutes: () =>
            import(
                /* webpackChunkName: "OnRoutes" */ "../components/transitions/OnRoutes.vue"
            ),
        Property: () =>
            import(
                /* webpackChunkName: "Property" */ "../components/transitions/Property.vue"
            ),
        Mode: () =>
            import(
                /* webpackChunkName: "Mode"  */ "../components/transitions/Mode.vue"
            ),
        KeyFrames: () =>
            import(
                /* webpackChunkName: "KeyFrames" */ "../components/transitions/KeyFrames.vue"
            ),
        Type: () =>
            import(
                /* webpackChunkName: "Type" */ "../components/transitions/Type.vue"
            ),
        Appear: () =>
            import(
                /* webpackChunkName: "Appear" */ "../components/transitions/Appear.vue"
            ),
        JsAnimations: () =>
            import(
                /* webpackChunkName: "JsAnimations" */ "../components/transitions/JsAnimations.vue"
            ),
    },
};
</script>

<style>
</style>