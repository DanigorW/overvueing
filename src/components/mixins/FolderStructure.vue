<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Folder structure"
            codeblock="-src
--assets
--compontents
--mixins <- src/mixins
---globalDebounce.js <-src/mixins/globalDebounce.js
--router
--store
---store.js
--views
app.vue
main.js    
      "
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