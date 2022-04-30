<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Normal without props"
                content="This is simple button that doesn't do much, on click event it's possible to run any logic needed.
                Now think about a scenario that you need to us the exact button component but only with different event and you need to change the styles a little bit.
                You see where i'm going with this?.
                "
                codeblock="<template>
 <div>
   <button @click='doSomething' class='btn'>click me</button>
 </div>
</template>  

<script>
export default {
    methods: {
      doSomething(){
        //logic
      }
    }
};
</script>

<style scoped>
  .btn {
    height:60px;
    width:280px;
    font-size:20px;
  }
</style>"
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

