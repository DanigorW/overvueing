<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="Async await in vuex"
      content="

            "
      codeblock="
src/store/modules/users.js

export default {
    state: {
        users: [],
    },
    
    mutations: {
        SET_USERS(state, payload) {
            state.users = payload
        }
    },

    actions: {
        async GET_USER({ commit }) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                const formatedData = [];
                for (let key in data) {
                    const { id, name, username, email } = data[key];
                    formatedData.push({ id, name, username, email })
                }
                commit('SET_USERS', formatedData)

            } catch (error) {
                alert(error)
            }
        }
    },
    getters: {
        GET_USERS(state) {
            return state.users;
        }
    },
}
            "
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