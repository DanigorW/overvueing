<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Default"
                codeblock="-src
--assets
--compontents
--router
--store
---store.js
--views
app.vue
main.js"
            />
            <CodeBlock
                type="code"
                title="Modules"
                codeblock="-src  
--assets
--compontents
--router
--store
----modules
-----user
------user.js
-----login
------login.js
-----logout
------logout.js
---store.js
--views
app.vue
main.js     "
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

