<template>
    <div class="container">
        <CodeBlock type="code" title="Custome Tabs" content="" />
        <div class="show-code-container">
            <span class="show-code" @click="showCode = !showCode">{{
                showCode ? "close" : "Show code"
            }}</span>
        </div>
        <transition name="fade">
            <div v-if="showCode">
                <CodeBlock
                    type="code"
                    title="Custome tabs code"
                    codeblock="<template>
  <div class='upload-files-tabs'>
    <a
    v-for='(tab, index) in tabs'
    :key='index'
    class='text-black'
    :class='{ active: value === tab.value }'
    @click.stop='setCurrent(tab)'
    >

      <div class='flex position-relative'>
          <span>{ tab.label }</span>
      </div>
    </a>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: {
        tabs: {},
        value: {},
    },
    methods: {
        setCurrent(tab) {
            this.$emit('input', tab.value);
        },
    },
};
</script>

<style lang='scss' scoped>
.bold-font a {
    font-weight: bold;
}
.font-size-12 a {
    font-size: 12px;
}
a {
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    position: relative;
    padding-bottom: 4px;
    padding-left: 25px;
    padding-right: 25px;
    letter-spacing: -0.28px;
    &.active {
        font-weight: bold;
        color: #41b883;
    }
    &:not(.active) {
        color: gray !important;
    }
}
a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #41b883;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: scale(0);
    transform-origin: center;
}
a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: gray;
    opacity: 1;
    transition: opacity 300ms, transform 300ms;
    transform: scale(1);
    transform-origin: center;
}
a.active::after {
    opacity: 1;
    transform: scale(1);
    height: 3px;
}
</style>"
                />
            </div>
        </transition>
        <CodeBlock
            v-if="showCode"
            type="code"
            title="How to use - tabs"
            content="
            
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