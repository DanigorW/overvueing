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
        <SetData />
        <State />
        <StateReal />
        <StateMock />
        <!-- <Docks /> -->
    </div>
</template>

<script>
export default {
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "It's a common practice to use some test libraries in your project. One of the most popular libraries is jest (developed by facebook). Before pushing code to production we must run all the tests that we've written and make sure everything is passing. It prevents a lot of headache and debugging time - even if at first writing those test may seem like an overkill. In complex projects test driven development is a standard. Think of a big team of developers asked to change some logic in one of your commponents writen a long time ago - it's so easy to ruin something by mistake. Jest is here to insure that everything is working how it's supposed to and find very fast any occuring errors.",
            },
        ],
    },
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
        SetData: () =>
            import(
                /* webpackChunkName: "SetData" */ "../components/jest/SetData.vue"
            ),
        State: () =>
            import(
                /* webpackChunkName: "State" */ "../components/jest/State.vue"
            ),
        StateReal: () =>
            import(
                /* webpackChunkName: "StateReal" */ "../components/jest/StateReal.vue"
            ),
        StateMock: () =>
            import(
                /* webpackChunkName: "StateMock" */ "../components/jest/StateMock.vue"
            ),
        // Docks: () =>
        //     import(
        //         /* webpackChunkName: "Docks" */ "../components/jest/Docks.vue"
        //     ),
    },
};
</script>

<style>
</style>