<template>
    <div class="container">
        <PageHeader title="Tricky concepts" />
        <CodeBlock
            type="code"
            title="Debounce"
            content="
          Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
          Think of search input field that fires a function to your api on every keystroke you make.
          If user typed 'london' the function will call the api 6 times. But if we make use of the debounce concept - we can prevent this behavior and decrease the number of api calls.
          Behind the scenes of debounce there's just a timer that restarts itself every time you hit a key, and only in case the time you provided to your debounce function ends (in other words if you wait long enough between your keystrokes) - only then your function will call the api, and not on every single keystroke.
          So, how it works? First of all we need to create a global debounce function that can convert any normal function to a debounced version of it. To do it we will use mixins. After doing that, we can call our global mixin on every component we want and convert any function we want to the debounced version of it in 'mount' lifecycle hook.   
        The debounce function receives 2 params - a function you want to debounce and the timer (in miliseconds).
        After the time you provided elapses - only then your function will call the api.  
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
// Here you can see that I'm using `getDataFunc` on the input event
// `getDataFunc` is a function I converted to the debounced version of itself
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
// Importing our global debounce mixin
import globalDebounce from '../../../mixins/globalDebounce';

export default {
// Seting our global debounce file
// By doing that we get access to all the methods inside
// Behind the scenes Vue merges all the functions to the methods object    
  mixins: [globalDebounce],

  data() {
    return {
        userInput: '',
        getDataFunc: null,
      };
    },

  methods: {
        // Global fetch from state that commits the mutation
        // which updates the user array in the state
        ...mapActions(['FETCH_USER_DATA']),    
  },  

  mounted() {  
        // this.debounce is coming from globalDebounce import
        // We need to use `this` to access it, since the `debounce` function
        // is merged to our methods object              
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