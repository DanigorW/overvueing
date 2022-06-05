<template>
    <div class="container">
        <CodeBlock type="code" title="Custome checkbox" content="" />
        <span class="show-code" @click="showCode = !showCode">{{
            showCode ? "close" : "Show code"
        }}</span>
        <transition name="fade">
            <div v-if="showCode">
                <CodeBlock
                    type="code"
                    title="Custome checkbox code"
                    codeblock="<template>
  <div id='checkbox'>
    <label class='container'>
        <span class='checkbox-text'>{ text }</span>
            <input
             class='checkbox-input'
             name='input'
             type='checkbox'
             @change='getCheck'
             v-model='value'
             />
        <span class='checkmark'></span>
        <span class='checked-span'>{ value }</span>
    </label>
  </div>
</template>

<script>
export default {
    props: {
        text: {},
        event: {},  //can be any event you want via prop
        checked: {
            type: Boolean,
        },
    },
    data() {
        return {
            value: this.checked,
        };
    },
    methods: {
        getCheck() {
            this.$emit('set-checked', this.value);
        },
    },

    watch: {
        checked() {
            this.value = this.checked;
        },
    },
};
</script>

<style scoped lang='scss'>
/* Customize the label (the container) */
.container {
    display: flex;
    align-items: flex-start;
    position: relative;
    padding-left: 22px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.checked-span {
    margin-left: 10px;
}
/* Hide the browser's default checkbox */
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    background: #eee;
    transition: all 0.3s;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
    background: linear-gradient(#41b883, #41b883);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: '';
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.checkbox-text {
    margin-left: 5px;
}
</style>"
                />
            </div>
        </transition>
        <CodeBlock
            v-if="showCode"
            type="code"
            title="How to use - checkbox"
            content=""
            codeblock="<template>
    <div class='checkbox-container'>
        <div v-for='(item, index) in cheackboxs' :key='index'>
            <Checkbox :text='item.text' :checked='item.checked' />
        </div>
    </div>
</template>

<script>
    data(){
      return {
        cheackboxs: [
          {
          text: 'custom checkbox',
          checked: true,
          },
          {
          text: 'custom checkbox 2',
          checked: false,
          },
          {
          text: 'custom checkbox 3',
          checked: false,
          },
          {
          text: 'custom checkbox 4',
          checked: false,
          },
        ], 
        }
    },

    components: {
        Checkbox: () =>
            import(
                /* webpackChunkName: 'Checkbox' */ '@/components/uiElements/Checkbox.vue'
            ),
    }    
</script>    
"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCode: false,
        };
    },
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