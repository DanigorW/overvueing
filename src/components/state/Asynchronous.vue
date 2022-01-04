<template>
  <div>
    <div class="container">
      <div class="mt-40">
        <CodeBlock
          type="code"
          contentTitle="Default"
          title="Asynchronous vs synchronous"
          content="In some point you will have to fetch some data from any backend api and store the data in your state and use is in 
          your app, in vue world you have to do it in the right way, for that you have mutations & actions, mutations is for updating the state with synchronous action only, actions is for asynchronous code that runs in the background and then commits mutations that update the state.
          "
          codeblock="
export default {
   state: {
       counter:0,
       users:[]
   },
   mutations: {
       INCREMENT_COUNTER(state){
           <!-- synchronous code that update the counter -->
           state.counter++
       },

       UPDATE_USERS(state,payload){
           state.users = payload
       } 
   },
   actions: {
          <!-- asynchronous code that update the users array with mutations  -->
        FETCH_USERS({commit}){
            fetch logic....
            commit('UPDATE_USERS',data)       
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