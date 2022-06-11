<template>
    <textarea
        @focus="resize"
        @keyup="resize"
        :placeholder="placeholder"
        ref="textarea"
        rows="4"
        cols="50"
        :value="value"
        @input="emit"
        wrap
    >
    </textarea>
</template>

<script>
export default {
    name: "Textarea",
    props: {
        value: {},
        placeholder: {
            default: "Auto resize textarea via content with resize event",
        },
    },
    methods: {
        emit(evt) {
            this.$emit("input", evt.srcElement.value);
        },
        resize() {
            console.log("resize");
            const { textarea } = this.$refs;
            if (textarea) {
                textarea.style.height = "auto";
                textarea.style.height = textarea.scrollHeight - 2 + "px";
            }
        },
    },
    mounted() {
        setTimeout(() => {
            this.resize();
        }, 1);
    },
};
</script>

<style scoped>
textarea {
    padding: 5px;
    border: none;
    border-radius: 5px;
    background: #41b883b3;
    resize: none;
    width: 100%;
    outline: none;
    color: #fff;
}
::-webkit-scrollbar {
    display: none;
}
::placeholder {
    color: #fff;
}
</style>

