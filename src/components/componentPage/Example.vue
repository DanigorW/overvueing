<template>
    <div id="example">
        <div class="container">
            <CodeBlock
                type="code"
                title="Normal"
                codeblock="<template>
     <header id='main-header' class='bg-grey'>
        <div class='container'>
          <h3>TITLE</h3>
        </div>
    </header>
</template>  

<style scoped>
  .bg-grey {
    backgrouund: grey;
  }
</style>
            "
            />
            <CodeBlock
                type="code"
                title="With props"
                codeblock="<template>
     <header :class='type === 'normal' ? 'bg-grey' : 'bg-red'' id='main-header'>
        <div class='container'>
          <h3>{{}}</h3> <- title prop
        </div>
    </header>
</template>  

export default {
    //NOTE it's not possible to use required
    //and default in the same time, only one can be added
    props: {
        type:{
          default:'normal'
        },

        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: 'default text if prop not provided',
        },
    },
};

<style scoped>
  .bg-grey {
    backgrouund: grey;
  }
  .bg-red {
    backgrouund: red;
  }
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

