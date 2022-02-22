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
    metaInfo: {
        meta: [
            {
                name: "description",
                content:
                    "Regular expressions (regex or regexp) are extremely useful in extracting information from any text by searching for one or more matches of a specific search pattern. Why to use regex? it saves ALOT of time. Think of form validation for exmaple, if you have a few different input that you want to validate with diffrent conditions. regex can make your life easier.",
            },
        ],
    },
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