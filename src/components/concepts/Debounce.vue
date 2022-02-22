<template>
    <div class="container">
        <PageHeader title="Tricky concepts" />
        <CodeBlock
            type="code"
            title="Debounce"
            content="
          Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
          Think of search input field that fire a function to your api on every keystroke.
          If user typed 'london' the function will call the api 6 time. With debounce the api call will fire only one.
          Behind the scenes debounce it's just a timer that know to restart it self on every keystroke, when the time you provided to your debounce function will end only then your function will call your api.
          So how it works? first of all we need to create a global debounce function that can convert any normal function to debounced version of it. To do it we will use mixins, after that we can call our global mixin on every component we want and convert any function we want to debounced version of it in 'mount' lifecycle hook.   
        The debounce function receives 2 params, the function you want to debounce and timer (in miliseconds).
        After the time you provided end's only then your function will call the api.  
           "
            codeblock="src/mixins/globalDebounce.js
export default {
  methods: {
    debounce(func, delay=300) {
      let debounceTimer;
        return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
      }
    },
  }
} 
}          
//how to use it, here you can see that im using getDataFunc on the input event
//the getDataFunc it's function that converted to debounced version of it
src/components/globalComponents/searchInput/SearchInput.vue
<template>
    <form @submit.prevent class='search-form'>
        <div class='form-header'>search</div>
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
import {mapActions} from 'vuex';
//imprting our global debounce mixin
import globalDebounce from '../../../mixins/globalDebounce';

export default {
//seting our global debounce file
//by doing that we get access to all the methods on the file
//behind the scenes vue merges all the functions to the methods object    
  mixins: [globalDebounce],

  data() {
    return {
        userInput: '',
        getDataFunc: null,
      };
    },

  methods: {
        //global fetch from state that commits a mutations
        //that updates the user array on the state
        ...mapActions(['FETCH_USER_DATA']),    
  },  

  mounted() {  
        //this.debounce is coming from globalDebounce import
        //we need to use 'this' to access it, the 'debounce' function
        //merged to our methods object              
        this.getDataFunc = this.debounce(this.FETCH_USER_DATA, 500);
  },
};
</script> "
        />
    </div>
</template>

<script>
export default {
    components: {
        PageHeader: () =>
            import(
                /* webpackChunkName: "PageHeader" */ "../globalComponents/pageHeader/PageHeader.vue"
            ),
        CodeBlock: () =>
            import(
                /* webpackChunkName: "CodeBlock" */ "../globalComponents/codeBlock/CodeBlock.vue"
            ),
    },
};
</script>

<style>
</style>