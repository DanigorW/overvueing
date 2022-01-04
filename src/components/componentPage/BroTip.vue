<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        title="BRO TIP"
        content="
       Before starting any project stop for a sec and think about your components stretcher 
         witch reusable components you need ? buttons ? forms ? popups ? - witch components will be in every route you have ? nav bar ? footer ? etc... you get the point. this step can save you or your team A LOT OF TIME IN THE FUTURE.
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

<style scoped>
</style>