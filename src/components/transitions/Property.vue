<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Duration property"
            content="
The duration property is only for case you diden't provided a transition time on your css.
In the example below we are using transition time and duration property just for the
example. You dont need both, if provided both vue will prioritise the duration property
        
      "
            codeblock="//simple fade in fade out
<transition name='fade' duration='1000'>
    <h1>fade in/fade out</h1>
</transition>

//any name
<transition name='[any name]'>
    <h1>any animation</h1>
</transition>

<style>
//fade    
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}    

//any name
.[any name]-enter-active, .[any name]-leave-active {
  do somting
}
.[any name]-enter, .[any name]-leave-to {
  do somting
}    
</style>"
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