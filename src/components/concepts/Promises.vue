<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Promises"
            content="JavaScript is single threaded, meaning that two bits of script cannot run at the same time, they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
            At first it seems tricky to understandm but after seeing a few exmaples it's getting easier.
            After knowing what exactly a promise is in javascript, it's much easier to understand how 'fetch/axios' works behind the scenes (or any promise based code).
            "
            codeblock="const add = function(x, y) {
  return new Promise((resolve,reject) => {
    const sum = x + y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error('Could not add the two values!'));
    }
  });
};

const subtract = function(x, y) {
  return new Promise((resolve, reject) => {
    const sum = x - y;
    if (sum) {
      resolve(sum);
    }
    else {
      reject(Error('Could not subtract the two values!'));
    }
  });
};

// Starting promise chain
add(2,2)
  .then((added) => {
    // added = 4
    return subtract(added, 3);
  })
  .then((subtracted) => {
    // subtracted = 1
    return add(subtracted, 5);
  })
  .then((added) => {
    // added = 6
    return added * 2;    
  })
  .then((result) => {
    // result = 12
    console.log('My result is', result);
  })
  .catch((err) => {
    // If any part of the chain is rejected, print the error message.
    console.log(err);
  });     "
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