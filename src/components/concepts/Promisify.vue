<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Promisification/Promisify"
            content=" 
        Promisification is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.
        Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.
        It's possible to create a global function in mixins folder exactly like we did above in the debounce section. But because promisificstion is one of the most complicated concepts in javascript, I'll show it in vanilla.
        If you need a global promisification function - look at the debounce example above, it's the same thing.
        "
            codeblock="const getNames = (callback) => {
    const namesArry = ['igor', 'dima', 'danit']
    setTimeout(() => {
        callback(namesArry)
    }, 2000)
}

const promisify = (callbackFunction) => {
    return () => {
        return new Promise((resolve, reject) => {
            try {
                callbackFunction(resolve);
            } catch (error) {
                reject(error);
            }
        });
    };
};

const promisifyGetNames = promisify(getNames);

promisifyGetNames()
    .then(data => {
        // Do something
    })   "
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