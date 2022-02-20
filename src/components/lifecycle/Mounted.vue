<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="mounted"
            content="
   Called after the instance has been mounted, where element, passed to app.mount is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called.
            "
            codeblock="<script>
export default {
    mounted(){
       //do something
    },
}
</script>"
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