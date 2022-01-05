<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Array"
                codeblock="
<script>
export default {
    props: ['title', 'content'],
};
</script>
            "
            />
            <CodeBlock
                type="code"
                title="Object"
                codeblock="
export default {
    
    <!-- NOTE it's not possible to use required
     and default in the same time only onc can added -->
    
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: 'default text if prop not provided',
        },
    },
};
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

