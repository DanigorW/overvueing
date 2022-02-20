<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            content="
you can wrap any HTML element you want to animate in a <transition name='some-class'> tag.
The transition name is the class you want to add - transition require 4 class to work and the name you provid 
need's to be prefix to the class (you will see in the example). Animation duration depends on the time you
provide in you transition, exmaple: all 1s ease-in-out;. If transition not provided you can add duration property on the transition tag.        
      "
            codeblock="//simple fade in fade out
<transition name='fade'>
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