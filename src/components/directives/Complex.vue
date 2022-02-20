<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Complex example"
            content="
      The classic click outside directive (folder structure in the next section)
            "
            codeblock="src/components/directives/click-ouside.js
export default {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
}

//how to use (the directive is global and shared with any component that need it)
<template>
    <ElementThatOpensTheDropdown @click='isOpen = true' />
    <DropdownContent v-click-outside='closeDropDown' v-if='isOpen' />
</template

<script>
export default {
 data(){
     return {
         isOpen='false',
     }
 }   
 methods: {
      closeDropDown() {
        this.isOpen = false;
      }
    }
};
</script>"
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