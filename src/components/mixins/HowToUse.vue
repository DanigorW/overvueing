<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use in components"
            content="To use our mixin we will need to import it like we do with mapActions etc...
      This is a complex example (in purpose) to show you how to work with state, functions, v-model and mixins
      at the same time
      "
            codeblock="src/components/globalComponents/searchInput/SearchInput.vue
<template>
    <form @submit.prevent class='search-form'>
        <div class='form-header'><span>search</span></div>
        <input
            v-model.trim='userInput'
            @input='getDataFunc(userInput)'
            class='userTerm'
            type='text'
            placeholder='Search'
        />
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import globalDebounce from '@/mixins/globalDebounce';

export default {
  //by adding globalDebounce to the mixins option (provided by vue)
  //we have access to all the methods/computed property/lifecycle hooks etc.... 
   
  mixins: [globalDebounce],

  data() {
    return {
        userInput: '',
        getDataFunc: null,
      };
    },

  methods: {
        //global fetch from state that commits a mutations
        ...mapActions(['FETCH_USER_DATA']),    
  },  

  mounted() {  
        //this.debounce is coming from globalDebounce import
        //we need to use 'this' to access it, 
        //behind the scene it is injected to the methods object            
        //this.FETCH_USER_DATA on mounted() becomes a new function with the debounce option 
        //and we are using it on user input event with PAYLOAD connected with V-MODAL to the user value   
        this.FETCH_USER_DATA = this.debounce(this.FETCH_USER_DATA, 500);
  },
};
</script> "
        />
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

<style>
</style>