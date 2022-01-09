<template>
    <div class="container">
        <PageHeader title="Forms in vue" />
        <CodeBlock
            type="code"
            title="Basic use"
            codeblock="
<template>
    <div class='container'>
        <form @submit.prevent>
            <div class='form-input first-name'>
                <input
                    @input='checkInputLength(max)'
                    v-model.trim='firstName'
                    type='text'
                    placeholder='First name'
                />
                <span>{firstName.length}/{max}</span> <- NOTE - it's need to be in double curly brackets!
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            max: 10,
        };
    },

    methods: {
        checkInputLength(length) {
            if (this.firstName.length > length) {
                this.firstName = this.firstName.substring(0, length);
            }
        },
    },
};
</script>

<style>
</style>            
            "
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