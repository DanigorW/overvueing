<template>
    <div>
        <div class="container">
            <div class="mt-40">
                <CodeBlock
                    type="code"
                    contentTitle="Default"
                    title="Name convention"
                    content="The best practice for name convention in state files is to use UPPERCASE naming, it will help you and any other developer to differentiate between local component methods and methods from state, state values can stay lowercase with camel case."
                    codeblock="export default {
   state: {
       counter:0
   },
   mutations: {
       INCREMENT_COUNTER(state){
           return state.counter++
       } 
   },
   actions: {
       [SOME_ACTION](state){

       }
   },
   getters: {
       [SOME_GETTER](state){
           
       }
   }
}"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
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