<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Update document"
                content="To update a document you will need the id of the document you want to update."
                codeblock="
import { db } from '../../../firebase/config'
import { collection, getDocs , addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'

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

           async DELETE_USER_FROM_FIREBASE({ commit }, payload) {
            try {
                console.log(payload);
                commit('DELETE_USER', payload);
                const docRef = doc(db, 'users', payload)
                await deleteDoc(docRef)

            } catch (error) {
                console.log(error);
            }
        },

        async UPDATE_USER(state, payload) {
            try {
                const docRef = doc(db, 'users', payload.data.id)
                await updateDoc(docRef, {
                    name: 'igor',
                    newFeild: payload.data.newValue
                })
            } catch (error) {
                console.log(error);
            }
        }
    },

    getters: {
        GET_USERS(state) {
            return state.users;
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