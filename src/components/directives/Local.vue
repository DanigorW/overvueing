<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Local"
            content="
      You can define local directives in a component’s options:
            "
            codeblock="
<script>

directives:{
    highlight:{
      bind(el,binding,vnode){ 
      let delay = 0;
      if(binding.modifiers['delayed']){
          delay = 3000;
      }
      
      setTimeout(() => {
           if(binding.arg == 'background'){
           el.style.background = binding.value;
      } else {
           el.style.color = binding.value;
       }
      },delay)
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