<template>
    <div class="container">
        <PageHeader title="Forms in vue" />
        <CodeBlock
            type="code"
            title="How to use"
            content="
        
      "
            codeblock="src/components/[any component that need form]
<template>
    <div class='form'>
        <form @submit.prevent novalidate>
            <ControlInput  
                controlType='textarea'
                v-model.trim='userData.message.val'
                :isValid='userData.message.isValid'
                errorMessage='*Required'
                placeholder='Message'
                @focus='clearValidity('message')'
            />

            <ControlInput  
                v-model.trim='userData.fullName.val'
                :isValid='userData.fullName.isValid'
                errorMessage='*Required'
                placeholder='Full name'
                type='text'
                @focus='clearValidity('fullName')'
            />

            <ControlInput  
                v-model.trim='userData.email.val'
                :isValid='userData.email.isValid'
                errorMessage='*Required'
                placeholder='Email'
                type='email'
                @focus='clearValidity('email')'
            />

            <div class='btn' @click='submitForm'>
                <Button
                    text='Submit'
                    fontSize='18px'
                    height='60px'
                    width='100%'
                />
            </div>
        </form>
    </div>
</template>

<script>
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  validate
} from '../../util/validators';
//validators file in the next section

export default {
  data() {
    return {
      userData: {
        message: {
            val: '',
            isValid: true,
            validators: [VALIDATOR_REQUIRE()],
        },
        fullName: {
            val: '',
            isValid: true,
            validators: [VALIDATOR_MINLENGTH(3)],
        },
        email: {
            val: '',
            isValid: true,
            validators: [VALIDATOR_EMAIL()],
        },
      },

      formIsValid: true,
    }
  },

  methods: {
    clearValidity(fieldName) {
        this.userData[fieldName].isValid = true;
    },

    validateForm() {
        let checkFormIsValid = true;

        for (const fieldName in this.userData) {
            let fieldIsValid = validate(this.userData[fieldName].val, this.userData[fieldName].validators);
            this.userData[fieldName].isValid = fieldIsValid;
            checkFormIsValid = checkFormIsValid && fieldIsValid;
        }

      this.formIsValid = checkFormIsValid;
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      let formData = {};

      for (const fieldName in this.userData) {
        formData = {
            ...formData,
            [fieldName]: this.userData[fieldName].val
        }
      }

      this.$emit('submit', formData);

      for (const fieldName in this.userData) {
        this.userData[fieldName].val = '';
      }
    },
  },

  components: {
    Button: () =>
      import(
        /* webpackChunkName: 'Button' */ '~/components/globalComponents/button/Button.vue'
      ),
    ControlInput: () =>
      import(
        /* webpackChunkName: 'ControlInput' */ '~/components/globalComponents/controlInput/ControlInput.vue'
      ),
  },
}
</script>

<style scoped>

form {
  max-width: 394px;
  width: 100%;
}

.btn {
  max-width: 142px;
  width: 100%;
}

@media (max-width: 1366px) {
  form {
    max-width: 348px;
  }
}

@media (max-width: 1024px) {
  form {
    max-width: 800px;
  }
  .btn {
    max-width: 800px;
  }

  .form div:last-child {
    margin-bottom: 0;
  }
}

</style>"
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