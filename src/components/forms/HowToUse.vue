<template>
  <div class="container">
    <PageHeader title="Forms in vue" />
    <CodeBlock
      type="code"
      title="How to use"
      content="
        You can create the validation locally in the component or in the 'inputFiled' component  
      "
      codeblock="
src/components/[any component that need form]

<template>
    <div>
      <form>
         <FormInput v-model='firstName' error='first name required'>First Name</FormInput>
         <FormInput v-model='lastName' error='Lest name required'>Lest Name</FormInput>
         <FormInput v-model='password' error='Password required'>Password</FormInput>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      password: '',
    };
  },

  components: {
    FormInput,
  },
}
</script>

<style>

</style>
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