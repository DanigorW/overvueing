<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="How to use"
                codeblock="<template>
    <div>
        <!-- $emit -->
        <Button :styles='{background:'red', fontSize:'20px'}'
         @handleSubmit='handleSubmit' text='click me' type='submit' />

        <!-- event -->
        <Button :classToAdd='['red','width','border']'
         :event='handleSubmit' text='click me' type='submit' />
    </div>
</template>

<script>
export default {

   methods: {
       handleSubmit(){
           //submit logic
       }
   },
   components:{
        Button: () =>
           import(
               /* webpackChunkName: 'Button' */ '../globalComponents/button/Button.vue'
           ), 
   }
};
</script>"
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

