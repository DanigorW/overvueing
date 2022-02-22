<template>
    <div class="container">
        <CodeBlock
            type="code"
            title="Memoization"
            content="

In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
The best example for that will be the famous fibonacci algorithm, but before we jump to the code it's important to know what is fibonacci algorithm.           
The Fibonacci sequence is a set of numbers that starts with a one or a zero, followed by a one, and proceeds based on the rule that each number (called a Fibonacci number) is equal to the sum of the preceding two numbers. ... F (0) = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ... In some texts, it is customary to use n = 1.
In simple words - the fibonacci sequence is the sum of the last two numbers, the algorithm stops when the result reaches the n number.
To solve the fibonacci algorithm we will use recursion (explained above).
The classic solution is very slow, if we provide the algorithm n = 1000 the time it will take to calculate the fibonacci sequence result can crush your browser.
Why? because it calculates the same numbers again and again a LOT of times.
Memoization function will store the result of the first calculation and if the calculation already exists it will immediately provide the result.

            
           "
            codeblock="// Classic version of fibonacci algorithm (slow)                        
const fibonacci = (n) => {
    if (n <= 2) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

fibonacci(40)
// Global memoisation function
// (We can use it as a global mixins like the debounce and Promisification/Promisify above)
const memoize = (fn) => {
        let cache = {};
        return (...args) => {
            let n = args[0]; // just taking one argument here
            if (n in cache) {
                console.log('Fetching from cache');
                return cache[n];
            } else {
                console.log('Calculating result');
                let result = fn(n);
                cache[n] = result;
                return result;
            }
        }
    }
// Memoized version of fibonacci algorithm (fast)
const memoizedFibonacci = memoize(fibonacci);
memoizedFibonacci(40)
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