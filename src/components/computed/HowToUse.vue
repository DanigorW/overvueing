<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="How to use"
            content="
        Two key rules to use computed property data, if you useing a getters to get the data put it in computed property.
        If you know that the data you displaying to the user can change put it in computed property.
        In the example below i'm using getters to get `GET_USERS` so there for the value stored in computed property.
        On top of that i added the option to filter the data via user input and as you guessed it's also stored in computed property.
            "
            codeblock="<template>
  <div>
    <input type='text' v-model.trim='userInputValue' />
    <ul>
      <li v-for='(user, index) in _GET_USERS_FILTER' :key='index'>
        { user.name } 
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      userInputValue: '',
    };
  },

  computed: {
    ...mapGetters(['GET_USERS']),

    _GET_USERS_FILTER() {
        return this.GET_USERS.filter((item) => {
        return item.name.match(this.userInputValue);
      });
    },
  },
}
</script>"
        />
    </div>
</template>

<script>
export default {
    beforeCreate() {},
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