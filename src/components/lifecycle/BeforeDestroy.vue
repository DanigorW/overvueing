<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="BeforeDestroy"
            content="
Before destroy is very useful lifecycle hook that we can use to cancell any event or behavior we don't want before the component is destroyed or route changes.
If you have scroll event or any event that exists only in a specific component it will be smarter to remove them and add again only when the component is called.
Better performance widout duplicated events.
      "
            codeblock="<script>
export default {
     beforeDestroy(){
         //do something
         //cancell events
         //trigger event
    },
}
</script>"
        />
    </div>
</template>

<script>
export default {
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