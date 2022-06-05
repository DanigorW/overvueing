<template>
    <div class="step-container">
        <div
            @click="setCurrent(index)"
            :key="index"
            v-for="(item, index) in steps"
            class="step-item"
        >
            <div :class="{ active: index <= value }" class="step-content">
                <div></div>
            </div>
            <div class="labale">{{ item.label }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Steps",
    props: {
        value: {
            default: 0,
        },
        steps: {
            type: Array,
        },
    },
    data() {
        return {};
    },
    methods: {
        setCurrent(index) {
            if (this.steps[index].finished || index < this.value)
                this.$emit("input", index);
            if (this.steps.length > this.value)
                this.value = this.steps.length - 1;
        },
    },
};
</script>

<style lang="scss" scoped>
.step-container {
    //background-color: $purple;
    display: flex;
    //align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
}
.step-item {
    width: 100%;
    //background-color: $purple;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 105;
    // background-color: white !important;
    position: relative;
}
.labale {
    margin-top: 10px;
    font-size: 14px;
}
.step-item:not(:first-child):not(:last-child):before {
    content: "";
    position: absolute;
    top: 16px;
    width: 100%;
    height: 2px;
    background: #41b883;
    z-index: -1;
}
.step-item:first-child:before {
    content: "";
    position: absolute;
    top: 16px;
    width: 50%;
    left: 50%;
    height: 2px;
    background: #41b883;
    z-index: -1;
}
.step-item:last-child:before {
    content: "";
    position: absolute;
    top: 16px;
    width: 50%;
    right: 50%;
    height: 2px;
    background: #41b883;
    z-index: -1;
}

.step-content {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    border: 2px solid #41b883;
    color: #41b883;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    top: 7px;
    &.finished {
        background-color: #41b883;
        color: #ffffff;
    }
    &.active {
        background-color: #41b883;
        color: #ffffff;
    }
}
.icon {
    margin-right: 1px;
    margin-top: 1px;
}
</style>
