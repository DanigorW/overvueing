<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="mounted"
            content="
   Called after the instance has been mounted, where element, passed to app.mount is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called.
   Now you can do whatever you like with your component. DON'T GET CONFUSED and fetch data in mounted hook! it's possible but better to use create hook.
   You will see in many examples thet people fetch data on the mountd hook, don't do that.         
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