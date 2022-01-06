<template>
  <div>
    <div class="container">
      <CodeBlock
        type="code"
        title="Dynamic components "
        codeblock="
<template>
  <div>
    <button @click='selectedComponent = 'UserSettings''>go to User settings</button>
    <button @click='selectedComponent = 'AccountInfo''>go to account info</button>
    <button @click='selectedComponent = 'Payment'>go to payment</button>

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
</script>

<style>
</style>
      "
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