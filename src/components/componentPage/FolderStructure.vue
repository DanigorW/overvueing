<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Folder structure"
                codeblock="--compontents
---homePage
----header
-----Header.vue <- compontents/homePage/header/Header.vue
---globalReusableComponents 
----globalButton 
-----GlobalButton.vue <- compontents/globalReusableComponents/globalButton/GlobalButton.vue"
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

