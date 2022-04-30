<template>
    <div class="container">
        <PageHeader title="Fetch data" />
        <CodeBlock
            type="code"
            title="Fetch in general"
            content="
            In some point in your app you will need to fetch data from a backend api and show it to the user.
            There are a few ways to do that:
            We can use the fetch built in method or to use 3rd party libraries like axios etc...
            Because we are using Vue, the data we get needs to be saved somewhere - for that we have our global state object that we can use,
            but in some cases we can use local component's and store the data on the data object without use of the global state.
            NOTE - by default fetch use GET, if we want to send data we need to use POST method.
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