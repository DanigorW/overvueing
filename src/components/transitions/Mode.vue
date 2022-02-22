<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Mode property"
            content="
If you have 2 elements you want to animate, or you have an if-else block - by default Vue will animate the second element first.
We want to avoid that behavior, since it will make your UI glitch for a sec. To synchronize our animations properly one after another - we will use the mode property.
Mode property has 2 options: out-in or in-out (default). To get the behavior we want, we will use out-in options which reverses the default behavior.
IMPORTANT NOTE: When animating more than 1 element, we need to provide the key attribute like we do in v-for loop.
"
            codeblock="//simple fade in fade out
<transition name='fade' mode='out-in'>
    <h1 v-if='boolVal' key='first'>fade in/fade out</h1>
    <h2 v-else key='second'>another fade in/fade out</h2>
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