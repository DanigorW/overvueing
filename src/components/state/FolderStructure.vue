<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Default"
                codeblock="
-public (folder)
-src (folder)
--assets (sub folder)
--compontents (sub folder)
--router (sub folder)
--store (sub folder)
---store.js (sub folder file)
--views (sub folder)
app.vue (file)
main.js (file)
"
            />
            <CodeBlock
                type="code"
                title="Modules"
                codeblock="
-public (folder)
-src (folder)  
--assets (sub folder)
--compontents (sub folder)
--router (sub folder)
--store (sub folder)
----modules (sub sub folder)
-----user (sub sub sub folder)
------user.js (sub sub sub file)
-----login (sub sub sub folder)
------login.js (sub sub sub file)
-----logout (sub sub sub folder)
------logout.js (sub sub sub file)
---store.js (sub folder file)
--views (sub folder)
app.vue (file)
main.js (file)
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

