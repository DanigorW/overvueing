<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Simple exmaple"
            content="
            After adding jest with vue add unit-jest, it generate a test example. Let's go over it.
            "
            codeblock="
//shallowMount mount the component for you, other options is to use { mount } insted           
import { shallowMount } from '@vue/test-utils'

//the component we want to test
import HelloWorld from '@/components/HelloWorld.vue'

//the tests block, we can group a few tests together
//the 'HelloWorld.vue' is just a discription of what we testing

describe('HelloWorld.vue', () => {

  //the it block is just a Test block that describe what we testing
  //in the first parmeter we describe what we are testing (string)
   
  it('renders props.msg when passed', () => {

  //inside the callback function we will write the logic for the test  

    const msg = 'new message'
   
   //the component we want to test goes to the wrapper variable
   //with the shallowMount function 
    
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    //assertion, the acutal test

    expect(wrapper.text()).toMatch(msg)
  })
})
            
            "
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