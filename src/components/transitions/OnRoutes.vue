<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="On Routes"
            content="
You can animate page transitions as well"
            codeblock="<transition name='fade'>
  <router-view/>
</transition>"
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