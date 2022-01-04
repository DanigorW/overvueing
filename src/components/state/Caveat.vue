<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        title="Caveat about mutations & actions"
        content="
        The right way to update the state is ONLY with mutations, we already established that mutations run synchronous code and actions run asynchronous code so it means that if we have simple counter and we want to increment it we will write a mutations for that - technically we can write a action that can commit the mutations for us and a lot of developers do that - every mutations get a actions even if the mutations run synchronous code - how you should write mutations? personal use? - do whatever you want... develop team? decide together.
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