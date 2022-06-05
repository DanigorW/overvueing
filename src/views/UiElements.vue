<template>
    <div class="padding20">
        <Header />
        <CheckboxHeader />
        <div class="checkbox-container">
            <div v-for="(item, index) in cheackboxs" :key="index">
                <Checkbox :text="item.text" :checked="item.checked" />
            </div>
        </div>
        <RadioHeader />
        <div class="radio-container">
            <div v-for="(item, index) in radios" :key="index">
                <Radio :label="item" :value="item" v-model="checked" />
                <span class="radio-value">value: {{ checked }}</span>
            </div>
        </div>
        <ToggleHeader />
        <div class="toggle-container">
            <div v-for="(item, index) in toggle" :key="index">
                <Toggle :text="item.text" :checked="item.checked" />
            </div>
        </div>
        <TabsHeader />
        <div class="tabs-container">
            <div>
                <Tabs :tabs="tabs" v-model="currentTab" />
            </div>
        </div>
        <StepsHeader />
        <div class="steps-container">
            <div>
                <Steps :value="currentStep" :steps="steps" />
                <div class="btns">
                    <button @click="previousStep">Previous</button>
                    <button @click="nextStep">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 0,
            cheackboxs: [
                {
                    text: "custom checkbox",
                    checked: true,
                },
                {
                    text: "custom checkbox 2",
                    checked: false,
                },
                {
                    text: "custom checkbox 3",
                    checked: false,
                },
                {
                    text: "custom checkbox 4",
                    checked: false,
                },
            ],
            checked: "custom radio",
            radios: [
                "custom radio",
                "custom radio 2",
                "custom radio 3",
                "custom radio 4",
            ],
            toggle: [
                { text: "toggle", checked: true },
                { text: "toggle 2", checked: false },
                { text: "toggle 3", checked: true },
                { text: "toggle 4", checked: false },
            ],
            currentTab: "tab",
            tabs: [
                { label: "custom tab", value: "tab" },
                { label: "custom tab 2", value: "tab 2" },
                { label: "custom tab 3", value: "tab 3" },
                { label: "custom tab 4", value: "tab 4" },
            ],
            steps: [
                {
                    label: "step 1",
                    status: "",
                    component: "UploadQuestionnaire",
                },
                {
                    label: "step 2",
                    status: "",
                    component: "UploadEvidence",
                },
                {
                    label: "step 3",
                    status: "",
                    component: "Summary",
                },
            ],
        };
    },
    methods: {
        nextStep() {
            this.steps[this.currentStep].status = "finished";
            this.currentStep++;
            if (this.currentStep > this.steps.length - 1)
                this.currentStep = this.steps.length - 1;
        },
        previousStep() {
            if (this.currentStep > 0) this.currentStep--;
        },
    },
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/uiElements/Header.vue"
            ),
        CheckboxHeader: () =>
            import(
                /* webpackChunkName: "CheckboxHeader" */ "../components/uiElements/CheckboxHeader.vue"
            ),
        RadioHeader: () =>
            import(
                /* webpackChunkName: "RadioHeader" */ "../components/uiElements/RadioHeader.vue"
            ),
        ToggleHeader: () =>
            import(
                /* webpackChunkName: "ToggleHeader" */ "../components/uiElements/ToggleHeader.vue"
            ),
        TabsHeader: () =>
            import(
                /* webpackChunkName: "TabsHeader" */ "../components/uiElements/TabsHeader.vue"
            ),
        StepsHeader: () =>
            import(
                /* webpackChunkName: "StepsHeader" */ "../components/uiElements/StepsHeader.vue"
            ),
        Checkbox: () =>
            import(
                /* webpackChunkName: "Checkbox" */ "../components/uiElements/Checkbox.vue"
            ),
        Radio: () =>
            import(
                /* webpackChunkName: "Radio" */ "../components/uiElements/Radio.vue"
            ),
        Toggle: () =>
            import(
                /* webpackChunkName: "Toggle" */ "../components/uiElements/Toggle.vue"
            ),
        Tabs: () =>
            import(
                /* webpackChunkName: "Tabs" */ "../components/uiElements/Tabs.vue"
            ),
        Steps: () =>
            import(
                /* webpackChunkName: "Steps" */ "../components/uiElements/Steps.vue"
            ),
    },
};
</script>

<style>
.checkbox-container,
.radio-container,
.toggle-container,
.tabs-container,
.steps-container {
    padding-left: 20px;
}
.radio-container div {
    display: flex;
}
.radio-value {
    margin-top: -3px;
}
.btns {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
.btns button {
    cursor: pointer;
    background: #41b883;
    color: #fff;
    border: none;
    width: 120px;
    height: 37px;
    border-radius: 5px;
    margin-right: 5px;
}
</style>
