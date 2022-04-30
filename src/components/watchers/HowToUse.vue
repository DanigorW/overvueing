<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            content="With watchers we can listen to any change to any property on our data object.
            On top of that we can watch for events that come from core features such as route changes, computed properties etc.
            In the example below we have name property (Flavio) and i know that this name will be changed but i don't know when.
            When the name changes i want to trigger function that do something.
            Note that the name of the watcher must be the same as the property name you want to watch.
            "
            codeblock="<template>
  <div>
    <p v-if='show'>{name}</p>            
    <button @click='changeName'>change name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Flavio'
      show: true
    }
  },
  methods: {
    changeName() {
      this.name = 'Flavius'
    }
  },
  watch: {
    name(newValue, oldValue) {
      // do something
      // triger mutation/action
      // change local values
    }

    //you can also watch for route changes and more
    $route(){
    // trigger a global mutations that closes any dropdown or navigation
    // any logic you need
      this.show = false; 
    }
  }
}
</script>      
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