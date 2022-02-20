<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Js animation hooks"
            content="
    It's possible to add animations via js with 8 different hooks.
    The hooks are added to the transition html tag.
    In this example im using only 6 hooks the other 2 are @enter-cancelled=' '
@leave-cancelled=' ', in 99% present of the time you won't need to use them.
Every function receive an el argument and enter and leave functions receives another argument called done.
To make every thing work we will use the Web Animations API (fairly new DOM api, nor related to vue).
"
            codeblock="//simple zoom in zoom out 
// the css bindings = to false is talling vue that the animation is only using js
// by default vue checks if there are animations via css and it's time consuming.
// by providing the css set to false is saves time.

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