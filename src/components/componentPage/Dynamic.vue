<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Dynamic components "
                content="
Dynamic components enable users to switch between two or more components without routing, and even retain the state of data when switching back to the initial component. The central idea is to let users dynamically mount and unmount components in the user interface without using routers.
"
                codeblock="<template>
  <div>
    <button @click='selectedComponent = 'UserSettings''>Go to user settings</button>
    <button @click='selectedComponent = 'AccountInfo''>Go to account info</button>
    <button @click='selectedComponent = 'Payment'>Go to payment</button>

    // will display the selected component
    // Inactive components will be cached because of `keep-alive` 
    <keep-alive> 
      <component :is='selectedComponent'></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedComponent: 'UserSettings',
    };
  },
  components: {
    UserSettings: () =>
      import(
        /* webpackChunkName: 'UserSettings' */ '../components/settings/UserSettings.vue'
      ),
    AccountInfo: () =>
      import(
        /* webpackChunkName: 'AccountInfo' */ '../components/settings/AccountInfo.vue'
      ),
    Payment: () =>
      import(
        /* webpackChunkName: 'Payment' */ '../components/settings/Payment.vue'
      ),
  },
};
</script>"
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