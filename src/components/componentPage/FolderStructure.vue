<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Folder structure"
                codeblock="

--compontents
---homePage (sub sub folder)
----Header (sub sub sub folder)
----Header.vue (sub sub sub file) <- compontents/homePage/Header.vue
---globalReusableComponents (sub sub folder) 
----globalHeader (sub sub sub folder) 
-----Header.vue (sub sub sub sub file) <- compontents/globalComponents/globalHeader/Header.vue
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

