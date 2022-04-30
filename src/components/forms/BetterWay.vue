<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Vue formulate (easy, simple, small, easy to design)"
            content="
As you see the way to create inputs generation by type is very complex and hard to grasp especially for new developers.
 But the big pros
is that you can create as many forms you want very easy in that way.
Always think about your project that you working on and ask yourself how many forms this app/website has ? 
if you have 1-2 simplae forms the complex way IS OVERKILL and not necessary, go with the simaple way.
But if you have big system (crm/cms/complex website with alots of form inputs etc...) you can go with the complex example.
It's possible to implement the complex example in 2 ways - build your own from system from scratch OR use library that does all the work for you.
I'll will always go with library approach - it saves a LOT of time and easy to work with.
The best library that exist for froms is 'Vue Formulate'.

            "
            codeblock="./src/components/[any component that need form]
//you can add any validators you want
//https://vueformulate.com/guide/validation/

<template>
  <FormulateForm
    :values='formValues'
  >
    <FormulateInput
      type='text'
      name='name'
      label='Your name'
    />
    <FormulateInput
      type='email'
      name='email'
      label='Your email'
    />
    <FormulateInput
      type='submit'
      label='Save account'
    />
  </FormulateForm>
</template>

<script>
export default {
  data () {
    return {
      formValues: {
        name: 'Jenny Taylor',
        email: 'jenny.taylor@example.com'
      }
    }
  }
}
</script>"
        />
    </div>
</template>

<script>
export default {
    beforeCreate() {},
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