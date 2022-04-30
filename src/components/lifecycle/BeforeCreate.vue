<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="beforeCreate"
            content="
      Called synchronously immediately after the instance has been initialized, before data observation and event/watcher setup.
      Now after reading the explanations you probably think why to use beforeCreate at all...
      beforeCreate is great for verifying if the user is logged or not (JWT in the localestorage/cookie/or any outher value).    
            "
            codeblock="<script>
export default {
    beforeCreate(){
      const jwt = localestorage.get('jwt');
      if(jwt === null){
          //user not logged in
          //do something...
      }
    },
}
</script>"
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