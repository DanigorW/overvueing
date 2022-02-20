<template>
    <div class="container">
        <PageHeader title="Forms in vue" />
        <CodeBlock
            type="code"
            title="The right approach (complex)"
            content="The right approach is to create a global component 'ControlInput' and to add the option to control the input filed via props.
      This way you can control any input and create as many form's you need in easy way.
      "
            codeblock=" src/components/globalComponents/InputFiled.vue   
//behind the scenes :value='value' is contenct to the v-model
<template>
    <div class='input-control'>
        <input
            v-if='controlType === 'input''
            v-bind='$attrs'
            :value='value'
            :class='{ errorBorder: !isValid, inputStyle }
            :placeholder='placeholder'
            :type='type'
            @input='$emit('input', $event.target.value)'
            @focus='$emit('focus')'
        />

        <textarea
            v-if='controlType === 'textarea''
            v-bind='$attrs'
            :value='value'
            :class='{ errorBorder: !isValid, inputStyle }'
            :placeholder='placeholder'
            @focus='$emit('focus')'
            @input='$emit('input', $event.target.value)'
        >
        </textarea>

        <transition name='fade'>
            <span v-show='!isValid' class='error'>{ errorMessage }</span>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },

        controlType: {
            type: String,
            default: 'input',
        },

        inputStyle: {
            type: String,
            default: ''
        },

        type: {
            type: String,
            default: 'text'
        },

        isValid: {
            type: Boolean,
            default: true,
        },

        errorMessage: {
            type: String,
            default: '',
        },

        placeholder: {
            type: String,
            default: '',
        }
    },
}
</script>   

<style scoped>
.error {
  padding-left: 20px;
  color: red;
  position: absolute;
  bottom: -20px;
  left: 0;
}

.input-control {
  position: relative;
  margin-bottom: 30px;
}

input,
textarea {
  width: 100%;
  border: 1px solid #2727270d;
  padding-left: 20px;
  outline: none;
  resize: none;
  font-size: 18px;
  transition: all 0.3s;
  font-family: 'General Sans', sans-serif;
}
input {
  height: 60px;
  border-radius: 30px;
  transition: all 0.3s;
}

.errorBorder {
  border: 1px solid red;
}
.errorBorder::placeholder {
  color: red;
}

::placeholder {
  font-size: 18px;
  color: #2b2a35;
}
textarea::placeholder {
  font-size: 18px;
  color: #2b2a35;
  font-family: 'General Sans', sans-serif;
}
textarea {
  height: 110px;
  border-radius: 30px;
  padding-top: 10px;
}

@media (max-width: 500px) {
  input {
    width: 320px;
  }
}

@media (max-width: 400px) {
  input {
    width: 280px;
  }
}
@media (max-width: 350px) {
  input {
    width: 250px;
  }
}
</style>            "
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