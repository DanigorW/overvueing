<template>
    <div>
        <div class="container">
            <CodeBlock
                type="code"
                title="Dynamic components "
                codeblock="<template>
  <div>
    <button @click='selectedComponent = 'UserSettings''>Go to user settings</button>
    <button @click='selectedComponent = 'AccountInfo''>Go to account info</button>
    <button @click='selectedComponent = 'Payment'>Go to payment</button>

    <!-- will display the selected component -->
    <component :is='selectedComponent'></component>
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