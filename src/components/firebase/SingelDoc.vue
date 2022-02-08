<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Fetching singel document"
                content="To fetch a singel document you need to know the id of the document. Firebase generate doc id automatically if you don't provide id."
                codeblock="
import { db } from '../../../firebase/config'

export default {
    state: {
        users: [],
        user:{},
    },

    mutations: {
        UPDATE_USERS(state, payload) {
            state.users = payload
        },
        UPDATE_ONE_USER(state, payload) {
            state.user = payload
        }
    },

    actions: {
        async FETCH_USERS({ commit }) {
            try {
                const res = await db.collection('users').get();
                const users = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                
              commit('UPDATE_USERS', users)
              
            } catch (error) {
                console.log(error);
            }
        },

       async FETCH_USER_BY_ID({commit},payload)(){
            try {
                const res = await db.collection('users').doc(payload).get();
                const data = res.data()
                commit('GET_ONCE_USER', data)

            } catch (error) {
                console.log(error);
            }
        }
    },

    getters: {
        GET_USERS(state) {
            return state.users;
        }
        GET_USER(state) {
            return state.user;
        }
    }
}
                "
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

<style>
</style>