<template>
  <div>
    <div class="container">
      <div class="mt-40">
        <CodeBlock
          type="code"
          contentTitle="Default"
          title="Asynchronous vs synchronous"
          content="In some point you will have to fetch some data from any backend api and store the data in your state and use is in 
          your app, in vue world you have to do it in the right way, for that you have mutations & actions, mutations is for updating the state with synchronous action only, actions is for asynchronous code that runs in the background - note - actions & mutations can receive second argument 'payload' that can update the state from component or any user action that change the state.
          "
          codeblock="
export default {
   state: {
       counter:0,
       users:[]
   },
   mutations: {
       INCREMENT_COUNTER(state,payload){
           <!-- synchronous code that update the counter -->
           return state.counter++
       } 
   },
   actions: {
            <!-- asynchronous code that update the users array -->
        FETCH_USERS(state,payload){
            fetch logic....
            state.users = data from fetch
       }
   },
   getters: {
       [SOME_GETTER](state){
           
       }
   }
}
"
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