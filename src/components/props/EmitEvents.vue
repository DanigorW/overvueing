<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Events"
                content="It's possible to add costume event via props/$emit.
                This way we can create one button with different controllable event instead of multiple buttons, logic, html templates etc.
                If we use the $emit option we don't need to provide additional prop for that, only the name of the event from the child.
                If we use the event option we need to add additional prop.
                "
                codeblock="<template>
  <div id='button'>
      // below in 'how to use' section you will see the function 'handleSubmit' 

      //with $emit
      <button :style='styles' @click='$emit('handleSubmit')' v-if='type === submit'>
          {text}
      </button>

      // with event via prop
      // the event can be any function
      <button :style='styles' @click='event' v-if='type === submit'>
          {text}
      </button>
  </div>
</template>                    
<script>
export default {
    props: ['text', 'type' , 'event', 'styles'],
};
</script>"
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

