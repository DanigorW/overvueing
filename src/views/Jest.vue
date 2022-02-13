<template>
    <div class="padding20">
        <Header />
        <WhatNotTest />
        <WhatToTest />
        <Install />
        <Exmaple />
        <Sanity />
        <ShallowMountVsMount />
        <FolderStructure />
        <BeforeStarting />
        <FindComponent />
        <ToBeTruthy />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/jest/Header.vue"
            ),
        Install: () =>
            import(
                /* webpackChunkName: "Install" */ "../components/jest/Install.vue"
            ),
        Exmaple: () =>
            import(
                /* webpackChunkName: "Exmaple" */ "../components/jest/Exmaple.vue"
            ),
        Sanity: () =>
            import(
                /* webpackChunkName: "Sanity" */ "../components/jest/Sanity.vue"
            ),
        ShallowMountVsMount: () =>
            import(
                /* webpackChunkName: "ShallowMountVsMount" */ "../components/jest/ShallowMountVsMount.vue"
            ),
        WhatNotTest: () =>
            import(
                /* webpackChunkName: "WhatNotTest" */ "../components/jest/WhatNotTest.vue"
            ),
        WhatToTest: () =>
            import(
                /* webpackChunkName: "WhatToTest" */ "../components/jest/WhatToTest.vue"
            ),
        FolderStructure: () =>
            import(
                /* webpackChunkName: "FolderStructure" */ "../components/jest/FolderStructure.vue"
            ),
        BeforeStarting: () =>
            import(
                /* webpackChunkName: "BeforeStarting" */ "../components/jest/BeforeStarting.vue"
            ),
        FindComponent: () =>
            import(
                /* webpackChunkName: "FindComponent" */ "../components/jest/FindComponent.vue"
            ),
        ToBeTruthy: () =>
            import(
                /* webpackChunkName: "ToBeTruthy" */ "../components/jest/ToBeTruthy.vue"
            ),
    },
};
</script>

<style>
</style>