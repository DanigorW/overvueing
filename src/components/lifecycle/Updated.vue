<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="updated"
            content="
Called when data changes, before the DOM is patched. This is a good place to access the existing DOM before an update, e.g. to remove manually added event listeners.
            "
            codeblock="<script>
export default {
    updated(){
       //do something
    },
}
</script>          "
        />
    </div>
</template>

<script>
export default {
    beforeCreate() {},
    components: {
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>