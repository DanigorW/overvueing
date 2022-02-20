<template>
    <div class="padding20">
        <Header />
        <GlobalReplace />
        <NumberInString />
        <HasSymbol />
        <OnlyLetters />
        <Email />
        <TrimAndSymbol />
        <ProTip />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/regex/Header.vue"
            ),
        GlobalReplace: () =>
            import(
                /* webpackChunkName: "GlobalReplace" */ "../components/regex/GlobalReplace.vue"
            ),
        NumberInString: () =>
            import(
                /* webpackChunkName: "NumberInString" */ "../components/regex/NumberInString.vue"
            ),
        HasSymbol: () =>
            import(
                /* webpackChunkName: "HasSymbol" */ "../components/regex/HasSymbol.vue"
            ),
        OnlyLetters: () =>
            import(
                /* webpackChunkName: "OnlyLetters" */ "../components/regex/OnlyLetters.vue"
            ),
        Email: () =>
            import(
                /* webpackChunkName: "Email" */ "../components/regex/Email.vue"
            ),
        TrimAndSymbol: () =>
            import(
                /* webpackChunkName: "TrimAndSymbol" */ "../components/regex/TrimAndSymbol.vue"
            ),
        ProTip: () =>
            import(
                /* webpackChunkName: "ProTip" */ "../components/regex/ProTip.vue"
            ),
    },
};
</script>

<style>
</style>