<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Fetching a collection of documents"
                content="
                Every collection can have unlimited documents, for exmaple 'users' is the collection name and you can have X amount of 'user' inside 'users'.
                It's possible to access the data on every component you have, most common practice is to use Vuex state management object.
                "
                codeblock="import { db } from '../../../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

export default {
    state: {
        users: []
    },

    mutations: {
        UPDATE_USERS(state, payload) {
            state.users = payload
        }
    },

    actions: {
        FETCH_USERS({ commit }) {
            const users = collection(db, 'users');
            getDocs(users)
                .then(snapshot => {
                    const docs = snapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    commit('UPDATE_USERS', docs)
                })
        },
    },

    getters: {
        GET_USERS(state) {
            return state.users;
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