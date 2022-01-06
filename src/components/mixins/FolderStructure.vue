<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="Folder structure"
      codeblock="
-public (folder)
-src (folder)
--assets (sub folder)
--compontents (sub folder)
--mixins (sub folder) <- src/mixins
---globalDebounce.js (sub sub file) <-src/mixins/globalDebounce.js
--router (sub folder)
--store (sub folder)
---store.js (sub folder file)
--views (sub folder)
app.vue (file)
main.js (file)    
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