<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        title="Programmatic navigation"
        content="
        Some times you will need to redirect the user to different page via click on button/login etc... 
        "
        codeblock="
<button @click='$router.push({ name: 'Home' })'>Home page</button>  

$router.push('home')
$router.push({ path: 'home' })
$router.push({ name: 'user', params: { userId: '123' } })
$router.push({ path: 'register', query: { plan: 'private' } })
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