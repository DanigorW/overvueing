<template>
  <div class="container">
    <CodeBlock
      type="code"
      title="How to use"
      content="
        Let's assume you fetched data on create lifecycle hook and updated users array on your state.
        To use the data we will need to use getter in any component you need the user array.
        To show the data we will use v-for and create an html template that contains the data. 
        Must of the time we will need input that can filter the data and this is the best example of way you
        need computed properties
            "
      codeblock="
<template>
  <div>
    <input type='text' v-model.trim='userInputValue' />
    <ul>
      <li v-for='(user, index) in _GET_USERS_FILTER' :key='index'>
        { user.name }  <- NOTE - it's need to be in double curly brackets!
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
</script>
            "
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