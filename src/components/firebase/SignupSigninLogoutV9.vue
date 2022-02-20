<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Signup Signin Logout"
                content="It's possible to use firebase authentication service to signup/signin/logout users and track the data. By default when user signsup he automatically receive a JWT if the user is loginout the JWT despire. We can track the status of the token and show content only to loggedin users."
                codeblock="import { db } from '../../../firebase/config'
import { collection, getDocs , addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

export default {
    state: {
        users: []
        isError: false,
        isUserLoggedIn: false,
    },

    mutations: {
        UPDATE_USERS(state, payload) {
            state.users = payload
        }

         UPDATE_LOGIN_STATUS(state, payload) {
            state.isUserLoggedIn = payload;
        }

        UPDATE_ERROR_STATE(state, payload) {
            state.isError = payload
        },
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
        },

         async SIGNUP({ commit }, payload) {
            try {
                const res = await createUserWithEmailAndPassword(auth, payload.data.email, payload.data.password)
                if (!res) {
                    commit('UPDATE_ERROR_STATE', true);
                    throw new Error('some error')
                }
                commit('UPDATE_ERROR_STATE', false);


            } catch (error) {
                console.log(error.message);
            }
        },

        async SIGNIN({ commit }, payload) {
            try {
                const res = await signInWithEmailAndPassword(auth, payload.data.email, payload.data.password)
                if (!res) {
                    commit('UPDATE_ERROR_STATE', true);
                    throw new Error('some error')
                }
                commit('UPDATE_ERROR_STATE', false);
                commit('UPDATE_LOGIN_STATUS', true)

            } catch (error) {
                console.log(error.message);
            }
        },

         async LOGOUT() {
            signOut(auth);
            commit('UPDATE_LOGIN_STATUS', false)
        }
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