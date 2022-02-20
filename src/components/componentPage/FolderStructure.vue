<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Folder structure"
                codeblock="

--compontents
---homePage
----Header
-----Header.vue <- compontents/homePage/header/Header.vue
---globalReusableComponents 
----globalHeader 
-----Header.vue <- compontents/globalComponents/globalHeader/Header.vue
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

