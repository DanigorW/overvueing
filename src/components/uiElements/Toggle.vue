<template>
    <div id="toggle">
        <label class="switch">
            <input
                name="input"
                type="checkbox"
                @change="getCheck"
                v-model="value"
            />
            <span class="slider round"></span>
        </label>
        <span class="toggle-value">{{ value }}</span>
    </div>
</template>


<script>
export default {
    props: {
        text: {},
        checked: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            value: this.checked,
        };
    },
    methods: {
        getCheck() {
            this.$emit("set-checked", this.value);
        },
    },
    watch: {
        checked() {
            this.value = this.checked;
        },
    },
};
</script>


<style scoped>
#toggle {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 10px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.toggle-value {
    margin-left: 5px;
    display: inline-block;
}
/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    top: -4px;
    background-color: #41b883;
    -webkit-transition: 0.4s;
    transition: all 0.4s;
}

.slider:hover:before {
    outline: 8px solid #41b88331;
}

input:checked + .slider {
    background-color: #3d30cf53;
}

input:focus + .slider {
    box-shadow: 0 0 1px #d7d5f8;
}

input:checked + .slider:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>