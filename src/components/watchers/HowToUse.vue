<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            codeblock="<script>
export default {
  data() {
    return {
      name: 'Flavio'
    }
  },
  methods: {
    changeName() {
      this.name = 'Flavius'
    }
  },
  watch: {
    name(newValue, oldValue) {
    console.log(newValue, oldValue)
    }
    //you can also watch for route changes and more
    $route(){
       this.show = false; <- can trigger a global mutations that closes any dropdown or navigation
    }
  }
}
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