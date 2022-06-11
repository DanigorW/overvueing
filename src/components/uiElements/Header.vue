<template>
    <div class="container">
        <PageHeader
            title="UI elements - you don't need 3rd party libraries for ui components"
            content=""
        />
        <CodeBlock
            type="code"
            title="Here you will finde UI compontents that ready to use"
            content="If you see something you like just click on 'show code' and copy the code - NOTE: you
            will need to changed the single quotes to double quotes after copying the code (i'm working on fixing this issue).
            You can easily conect every component to work directly with Vuex.
            "
        />
    </div>
</template>

<script>
export default {
    components: {
        PageHeader: () =>
            import(
                /* webpackChunkName: "PageHeader" */ "../globalComponents/pageHeader/PageHeader.vue"
            ),
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>