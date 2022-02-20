<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Install & config"
                content="npm install firebase@8.0.0
            "
                codeblock="src/firebase/config.js
import firebase from 'firebase/app';
import 'firebase/firestore'
// the config is located on your firebase app project settings. 
const firebaseConfig = {
    apiKey: 'AIzaSyDDGT4wGpwhnseWWT6MRO32MYiDNd60zgM',
    authDomain: 'test.firebaseapp.com',
    projectId: 'test',
    storageBucket: 'test.appspot.com',
    messagingSenderId: '1598505070',
    appId: '1:154564080:web:b28b0a7125875Wd837f547',
    measurementId: 'G-PD87BGTE'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timestamp }"
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