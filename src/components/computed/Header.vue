<template>
  <div class="container">
    <PageHeader title="Computed properties in vue" />
    <CodeBlock
      type="code"
      title="Computed properties"
      content="
          Template expressions are very convenient, but they are really meant for simple operations only. Templates are meant to describe the structure of your view. Putting too much logic into your templates can make them bloated and hard to maintain. This is why Vue.js limits binding expressions to one expression only. For any logic that requires more than one expression, you should use a computed property. 
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