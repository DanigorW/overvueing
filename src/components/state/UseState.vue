<template>
    <div>
        <div class="container">
            <div class="mt-40">
                <CodeBlock
                    type="code"
                    contentTitle="Default"
                    title="How to use in components"
                    content="
          All your state functionality is ready to use, vue provide the option to map all the data for you in very easy way from any component (don't forget that behind the scenes Vue merges all your modules to the main store/index file) 
          "
                    codeblock="<template>
    <span>{{}}</span>
< /template>

<script>    
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    //map methods receive an array -->
    ...mapGetters(['GET_ALL_USERS', 'GET_COUNTER']),
  },
  methods:{
    ...mapActions(['SOME_ACTION_FROM_STATE']),    
  }
};
created(){
    this.SOME_ACTION_FROM_STATE();   
}
</script>"
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