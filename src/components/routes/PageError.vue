<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        title="Page not found 404"
        content="
        Some times users will try to access routes that don't exist or they can have typo in the url - in that case you need to
        provide default option in your router to programmatic redirect them to other page (most common is the home page )  
        "
        codeblock="
{
 path: '/:catchAll(.*)*',
 redirect: {
    name: 'Home'
  }
}
        "
      />
    </div>
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