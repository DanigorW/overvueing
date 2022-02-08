<template>
    <div class="container">
        <PageHeader title="Firebase & firestore V8" />
        <CodeBlock
            type="code"
            title="config version 8.0.0"
            content="The example is on firebase version 8, in higher versions the config migth be diffrent, check the documentation.
            NOTE - The api key is located in the frontend of your project. You dont need to worry about that, in firebase console you can configure multiple options that protect your database.
            One way is to add you domain to a white list that only your url can send and get data.
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