<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Live database & snapshot"
                content="Firebase provides a real time live database that takes a snapshot on every change that happens on your database. Do to that you can get the data live witout reload the page."
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
                const res = await db.collection('users').orderBy('created','desc')
                .snapshot((snap) => {
                    let users = snap.docs.map(doc => {
                        return {
                            id:doc.id,
                            ...doc.data()
                        }
                    })                    
                    commit('UPDATE_USERS', users)
                })
                
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