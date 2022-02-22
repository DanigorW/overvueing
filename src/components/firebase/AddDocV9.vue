<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Add document"
                content="To add a document all you need to do is just use the add() function. If you don't have a collection and you're adding one via code - firebase will automatically create the collection for you."
                codeblock="import { db } from '../../../firebase/config'
import { collection, getDocs , addDoc } from 'firebase/firestore'

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

        async ADD_NEW_USER(state, payload) {
            try {
                const usersRef = collection(db, 'users');
                await addDoc(usersRef, payload)
            } catch (error) {
                console.log(error);
            }

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