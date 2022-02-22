<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Deleting document"
                content="To delete a document you will need to provide the id of the document you want to delete. In the example I'm deleting the document by id and also commiting mutation that deletes the document from the users array (ui)."
                codeblock="import { db } from '../../../firebase/config'

export default {
    state: {
        users: [],
        user:{},
    },

    mutations: {
        UPDATE_USERS(state, payload) {
            state.users = payload
        },

        DELETE_USER(state, payload) {
            state.users.splice(payload, 1)
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
        },

         async DELETE_USER_FROM_FIREBASE({ commit }, payload) {
            try {
                commit('DELETE_USER', payload.data.index);
                await db.collection('users').doc(payload.data.id).delete()
            } catch (error) {
                console.log(error);
            }
        },
    },

    getters: {
        GET_USERS(state) {
            return state.users;
        }
        GET_USER(state) {
            return state.user;
        }
    }
}"
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