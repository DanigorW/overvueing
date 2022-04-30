<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Styles & classes"
                content="It's possible to add costume styles and classes via props and control every child component appearance.
                "
                codeblock="<template>
<div id='button'>
      // with styles prop
      // all the button styles come from styles object that we provide as a prop
      // this way we can control every child component appearance
      // usually buttons have the same style except background color, width, height, font size
       <button :style='styles' @click='$emit('handleSubmit')' v-if='type === submit'>
          {text}
      </button>

      // with classes
      // we will have to write preset of css classes and add them when needed
       <button :class='classToAdd' @click='$emit('handleSubmit')' v-if='type === submit'>
          {text}
      </button>

      // the best way is to combine styles + array of calsses via prop
       <button :style='styles' :class='classToAdd' @click='$emit('handleSubmit')' v-if='type === submit'>
          {text}
      </button>
  </div>
</template>
<script>

export default {
    props: ['text', 'type' , 'event', 'styles', 'classToAdd'],
};
</script>

<style scoped>
// general button reset    
button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
}
// if we add classes via props
// bank for all the possible classes needed to create our buttons
.red {
    background: red;
}
.blue {
    background: blue;
}
.border {
    .....
}
.shadow {
    .....
}
.width {
    .....
}
.auto-width {
    .....
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

<style scoped>
</style>


