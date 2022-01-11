<template>
  <div class="container">
    <PageHeader title="Forms in vue" />
    <CodeBlock
      type="code"
      title="The right approach"
      content="The right approach is to create a global component 'InputFiled' and to add the option to control the input filed via props.
      This way you can control any input and create as many form's you need in easy way.
      "
      codeblock=" 
src/components/globalComponents/InputFiled.vue   
     
<template>
  <div class='input-control'>
    <label><slot /></label>
    <input
      v-if='controlType === 'input''
      v-bind='$attrs'
      :value='value'
      @input='onInput'
    />
    <p v-if='error'>{ error }</p> <- NOTE - it needs to be in double curly brackets!
    <textarea
      v-if='controlType === 'textarea''
      rows='10'
      :value='value'
      @input='onInput'
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },

    error: {
      type: String,
      default: '',
    },
  },

  methods: {
    onInput(event) {
      const value = event.target.value;
      if (!value) {
        this.error = 'Value should not be empty';
      }
      this.$emit('input', event.target.value);
    },
  },

  watch: {
    value: {
      handler(value) {
        if (value) {
          this.error = '';
        }
      },
    },
  },
};
</script>   
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