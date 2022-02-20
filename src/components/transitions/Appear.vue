<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Appear property"
            content="
        If you want the animation to fire on page load you can add the appear property.
"
            codeblock="//simple zoom in zoom out 
<transition name='zoom' mode='out-in' type='animation' appear>
    <h1 v-if='boolVal' key='first'>fade in/fade out</h1>
    <h2 v-else key='second'>another fade in/fade out</h2>
</transition>

<style>
//fade    
.zoom-enter-active, .zoom-leave-active {
 animation: zoomIn 1s ease-out;  
 transition: all 2s 
}
.zoom-enter, .zoom-leave-to {
  animation: zoomOut 1s ease-out;
  opacity: 0;
}    

@keyframes zoomIn {
  from {
    transform: scale(0,0)
  }

  to {
    transform: scale(1,1)
  }
}
@keyframes zoomOut {
  from {
    transform: scale(1,1)
  }

  to {
    transform: scale(0,0)
  }
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