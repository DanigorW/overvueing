<template>
  <div class="container">
    <PageHeader title="Forms in vue" />
    <CodeBlock
      type="code"
      title="Basic use"
      content="This is a simple example that uses only one input and length validation, now think how your fille will look if you have 5 different inputs or more & different validations for email,phone etc...  the file will be quickly hard to work with and not scalable AND if you have more that 1 form in your app what will you do ? yeah its possible use the form as a global component but what if you need in your other form different input fields or different validation ? you will need to add a lot of logic to solve it and quickly the code will be not manageable and hard to read."
      codeblock="
<template>
    <div class='container'>
        <form @submit.prevent>
            <div class='form-input first-name'>
                <input
                    @input='checkInputLength(max)'
                    v-model.trim='firstName'
                    type='text'
                    placeholder='First name'
                />
                <span>{firstName.length}/{max}</span> <- NOTE - it's need to be in double curly brackets!
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            max: 10,
        };
    },

    methods: {
        checkInputLength(length) {
            if (this.firstName.length > length) {
                this.firstName = this.firstName.substring(0, length);
            }
        },
    },
};
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