import { db, auth } from '../../../firebase/config'
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

export default {
    state: {
        users: [],
        isError: false,
        isUserLoggedIn: false,
    },

    mutations: {
        UPDATE_USERS(state, payload) {
            state.users = payload
        },

        DELETE_USER(state, payload) {
            state.users.splice(payload, 1)
        },

        UPDATE_ERROR_STATE(state, payload) {
            state.isError = payload
        },

        UPDATE_LOGIN_STATUS(state, payload) {
            state.isUserLoggedIn = payload;
        }

        // GET_ONCE_USER(state, payload) {
        //     state.user = payload
        // }
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
                    commit("UPDATE_USERS", docs)
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
                commit('DELETE_USER', payload);
                const docRef = doc(db, "users", payload)
                await deleteDoc(docRef)

            } catch (error) {
                console.log(error);
            }
        },

        async UPDATE_USER(state, payload) {
            try {
                const docRef = doc(db, "users", payload.data.id)
                await updateDoc(docRef, {
                    name: 'igor',
                    uid: payload.data.uid
                })
            } catch (error) {
                console.log(error);
            }
        },

        async SIGNUP({ commit }, payload) {
            try {
                const res = await createUserWithEmailAndPassword(auth, payload.data.email, payload.data.password)
                if (!res) {
                    commit("UPDATE_ERROR_STATE", true);
                    throw new Error('some error')
                }
                commit("UPDATE_ERROR_STATE", false);


            } catch (error) {
                console.log(error.message);
            }
        },

        async SIGNIN({ commit }, payload) {
            try {

                const res = await signInWithEmailAndPassword(auth, payload.data.email, payload.data.password)
                if (!res) {
                    commit("UPDATE_ERROR_STATE", true);
                    throw new Error('some error')
                }
                commit("UPDATE_ERROR_STATE", false);
                // commit("UPDATE_LOGIN_STATUS", true)

            } catch (error) {
                console.log(error.message);
            }
        },

        CHECK_IF_USER_LOGGED_IN({ commit }) {
            let loggedInRef = auth.currentUser;
            console.log(loggedInRef, 'current status');
            onAuthStateChanged(auth, (_loggedInRef) => {
                loggedInRef = _loggedInRef;
                if (loggedInRef == null) {
                    commit("UPDATE_LOGIN_STATUS", false);
                } else {
                    commit("UPDATE_LOGIN_STATUS", true);
                }

            })
        },

        async LOGOUT() {
            signOut(auth);
            // commit("UPDATE_LOGIN_STATUS", false)
        }
    },
    getters: {
        GET_USERS(state) {
            return state.users;
        },
        GET_LOCING_STATUS(state) {
            return state.isUserLoggedIn;
        }

    }
}