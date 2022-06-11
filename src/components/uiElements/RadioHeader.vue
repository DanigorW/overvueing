<template>
    <div class="container">
        <CodeBlock type="code" title="Custome radio" content="" />
        <div class="show-code-container">
            <span class="show-code" @click="showCode = !showCode">{{
                showCode ? "close" : "Show code"
            }}</span>
        </div>
        <transition name="fade">
            <div v-if="showCode">
                <CodeBlock
                    type="code"
                    title="Custome radio code"
                    codeblock="<template>
  <div id='radio'>
    <label class='custom-radio'>
        <input
         class='checkbox'
         type='radio'
         :checked='isChecked'
         :value='value'
         @change='$emit('change', $event.target.value)'
         />
            <span class='checkmark'></span>
            <span class='white-dot'></span>
            <span class='uncheckmark'></span>
    </label>
        <span class='radio-text'>{ label }</span>
  </div>
</template>

<script>
export default {
    model: {
        prop: 'modelValue',
        event: 'change',
    },
    props: {
        label: { type: String, default: '', required: true },
        modelValue: { default: '' },
        value: { type: String, default: undefined },
    },
    computed: {
        isChecked() {
            return this.modelValue == this.value;
        },
    },
};
</script>

<style scoped lang='scss'>
#radio {
    display: flex;
    align-items: center;
    margin-right: 18px;
    margin-bottom: 8px;
}
.custom-radio {
    width: 15px;
    height: 15px;
    border: 1px solid #41b883;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.custom-radio:hover {
    outline: 6px solid #efeef6;
}

.custom-radio:hover .uncheckmark {
    display: flex;
}

.uncheckmark {
    background: #41b883;
    width: 5px;
    height: 5px;
    display: none;
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
}

.custom-radio .checkmark {
    width: 100%;
    height: 100%;
    background: #41b883;
    opacity: 0;
    outline: 3px solid #fff;
    display: inline-block;
    border-radius: 50%;
    transition: all 0.3s;
}

.white-dot {
    display: none;
    width: 5px;
    height: 5px;
    background: #fff;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
}

.custom-radio input:checked + .checkmark {
    opacity: 1;
}

.custom-radio input:checked + .white-dot {
    display: inline-block;
}

.custom-radio {
    margin-right: 3px;
}

.custom-radio input {
    display: none;
}

.radio-text {
    margin-left: 5px;
    margin-top: -2px;
}
</style>"
                />
            </div>
        </transition>
        <CodeBlock
            v-if="showCode"
            type="code"
            title="How to use - radio"
            content=""
            codeblock="<template>
    <div class='radio-container'>
        <div v-for='(item, index) in radios' :key='index'>
            <Radio :label='item' :value='item' v-model='checked' />
        </div>
    </div>
</template>

<script>
    data(){ 
      return {
        checked: 'custom radio',
            radios: [
                'custom radio',
                'custom radio 2',
                'custom radio 3',
                'custom radio 4',
            ], 
        }
    },

    components: {
        Radio: () =>
            import(
                /* webpackChunkName: 'Radio' */ '@/components/uiElements/Radio.vue'
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