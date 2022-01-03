<template>
  <div>
    <div class="container">
      <PageHeader title="Routes with vue router" />
      <CodeBlock
        type="code"
        title="Router structure"
        content="It's possible to use vue router in a few ways, by default after creating new project in the router file you will see 
        two options vue provide, one is importing views (pages) in a regular way and the second way is for route level code splitting which is lazy-loaded when the route is visited, the second option is much better and improve performance, vue provide access to the router from any component for navigation and because of that we can do a lot more then just navigate the user to different pages.
        "
      />
    </div>
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

<style scoped>
</style>