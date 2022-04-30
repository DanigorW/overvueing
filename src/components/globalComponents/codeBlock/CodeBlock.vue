<template>
    <div :style="{ background: bg }" id="block-code">
        <div v-if="type == 'normal'">
            <p class="title" v-if="title">
                {{ title }}
            </p>
            <p class="installation" v-if="installation">{{ installation }}</p>
            <p class="npm" v-if="npm">{{ npm }}</p>
            <p class="use" v-if="use">{{ use }}</p>
        </div>

        <div v-if="type == 'code'">
            <p class="code-title" v-if="title">{{ title }}</p>
            <p class="content">{{ content }}</p>
            <pre v-if="codeblock"></pre>
        </div>

        <prism-editor
            v-if="type == 'code' && codeblock"
            class="my-editor"
            v-model="codeblock"
            :readonly="true"
            :highlight="highlighter"
            :lineNumbers="true"
        ></prism-editor>
    </div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
export default {
    props: [
        "type",
        "codeblock",
        "title",
        "installation",
        "npm",
        "use",
        "content",
        "bg",
    ],

    components: {
        PrismEditor,
    },
    methods: {
        highlighter(codeblock) {
            return highlight(codeblock, languages.js); // languages.<insert language> to return html with markup
        },
    },
};
</script>

<style scoped>
/* required class */
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #89ddff !important;
    border-radius: 8px;
    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none !important;
    border: none !important;
    display: none !important;
    border-radius: 8px;
}
#block-code {
    margin: 20px 0px;
    background: #32475b;
    border-radius: 8px;
    padding: 20px;
    transition: all 0.3s;
}

#block-code:hover {
    /* transform: scale(1.01); */
    /* background: #263849; */
    /* background: #41b883; */
}

#block-code p {
    font-size: 16px;
    color: #fff;
    margin: 10px 0;
}
#block-code p:nth-child(1) {
    font-size: 24px;
    color: #41b883;
}

.content {
    max-width: 1000px;
    width: 100%;
    line-height: 24px;
}

.content-title {
    font-size: 24px !important;
}
</style>