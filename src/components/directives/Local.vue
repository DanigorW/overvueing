<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Local"
            content="
      You can define local directive in any component option."
            codeblock="
./src/components/[component]

<script>

directives: {
    background: {
        bind(el, binding,vnode) {
            // Allow users to customise the color by passing an expression.
            const defaultBackgroundColor = '#86bbff'
            const color = binding.expression || defaultBackgroundColor;

            // el might not be present for server-side rendering.
            if (el) {
            // Set the element's background color.
                el.style.backgroundColor = color;
              }
            },
        },
    },
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