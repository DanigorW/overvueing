<template>
    <div>
        <transition name="fade">
            <div
                v-if="value"
                @click="$emit('input', false)"
                class="drawer-container position-relative"
            ></div>
        </transition>
        <transition name="slide-no-fade">
            <div
                v-if="value"
                :style="`width: ${computedWidth}`"
                class="drawer-content position-relative"
            >
                <div class="drawer-content-header text-normal">
                    <slot name="header"></slot>
                </div>

                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Drawer",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        preventClosePopup: {
            type: Boolean,
            default: true,
        },
        width: {
            default: "500",
        },
    },
    data() {
        return {
            showDialogExit: false,
        };
    },
    methods: {
        escapeEvent(e) {
            if (e.keyCode === 27) this.close();
        },
        close() {
            if (!this.preventClosePopup) {
                this.$emit("input", false);
            } else {
                this.showDialogExit = true;
            }
        },
    },
    computed: {
        computedWidth() {
            if (this.width.trim().slice(-1) === "%") return this.width.trim();
            else if (this.width.trim().slice(-2) === "px")
                return this.width.trim();
            else return this.width.trim() + "px";
        },
    },
    watch: {
        value(val) {
            if (val === true) {
                document.addEventListener("keyup", this.escapeEvent);
            } else {
                document.removeEventListener("keyup", this.escapeEvent);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.drawer-container {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    z-index: 100000000;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.46);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    cursor: pointer;
}
.drawer-content {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 1000000001;
    position: fixed;
    bottom: 0px;
    top: 0px;
    right: 0;
    background-color: #41b883;
    overflow-y: auto;
    padding: 20px;
}
.drawer-content::-webkit-scrollbar {
    display: none;
}

.drawer-content-header {
    background: #41b883;
}
</style>
