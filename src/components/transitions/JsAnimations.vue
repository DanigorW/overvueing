<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Js animation hooks"
            content="
   It's possible to add animations via js with 8 different hooks.
    The hooks are added to the transition html tag.
    In this example I'm using only 6 hooks. The other 2 are @enter-cancelled=' '
@leave-cancelled=' ' and in 99% present of the time you won't need to use them.
Every function receives an `el` argument. `enter` and `leave` functions receive another argument - `done`.
To make everything work we will use the Web Animations API (fairly new DOM api, nor related to Vue).
"
            codeblock="//simple zoom in zoom out 
// by setting the css binding to false we are telling Vue that the animation is only using js
// by default Vue checks whether there are animations via css and it's time consuming.
// by providing the css set to false we save some time.

<transition 
@before-enter='beforeEnter' 
@enter='enter' 
@after-enter='afterEnter' 
@before-leave='beforeLeave' 
@leave='leave' 
@after-leave='afterLeave'
:css='false'
>
    <h1 v-if='boolVal' key='first'>fade in/fade out</h1>
    <h2 v-else key='second'>another fade in/fade out</h2>
</transition>

<script>
export default {
    methods:{
        beforeEnter(el){

        },

        enter(el, done){
           const animation = el.animate([{transform:'scale3d(0,0,0)'},{}], {
                duration:1000,

            })
            
            animation.onfinish = () => {
                done()
            }
        },

        afterEnter(el){

        },

        beforeLeave(el){

        },

        // reverse the order of the objects
        leave(el , done){
            const animation = el.animate([{},{transform:'scale3d(0,0,0)'}], {
                duration:1000,

            })
            
            animation.onfinish = () => {
                done()
            }
        },

        afterLeave(el){

        }
    }
};
</script>"
        />
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