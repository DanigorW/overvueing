<template>
    <div class="install">
        <div class="container">
            <CodeBlock
                type="code"
                title="Install & config"
                content="npm install firebase , in the future when firebase will be in version 10 to install the 9 version you will need to add the version you want like this: npm install firebase@9.0.0, To get the last version of firebase you just need to use npm intall firebase.
            "
                codeblock="src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
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
initializeApp(firebaseConfig);
const db = getFirestore()

export { db }"
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