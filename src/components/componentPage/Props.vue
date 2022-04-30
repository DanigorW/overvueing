<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Reusable button with props (more examples in props page)"
                content="This is the same button from the example above, but now we can control the button behavior and styles via props.
                Now i can provide a `type` prop that will change the behavior of the button. In one case the button can redirect users to any route needed and in the second i can submit form.
                "
                codeblock="<template>
    <div id='button'>
        <button v-if='type === submit'
         @click='$emit('submitForm')'
        :style='styles'
        >{ text }</button>
        
    <router-link v-if='type === redirect' :to='{path: routeToGo}'>
         <button  :style='styles'
        >{ text }</button>
    </router-link>
       
    </div>
</template>

<script>
export default {
    props: {
        type: {
            require: true,
        },

        routeToGo: {
            default: '/'
        }

        text: {
            require: true,
        },

        styles: {}
    },
};
</script>
"
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

<style>
</style>

