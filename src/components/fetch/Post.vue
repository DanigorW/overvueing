<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Send data with post"
            content="

            "
            codeblock="async const SendData = (data) => {
  try {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, config)
    const json = await response.json()
    if (response.ok) {
         do something
    } else {
         do something
    }
} catch (error) {
    alert(error)
 }
}            "
        />
    </div>
</template>

<script>
export default {
    beforeCreate() {},
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