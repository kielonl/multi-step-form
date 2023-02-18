<template>
  <div class="multi-form-container">
    <div class="bg-sidebar-container">
      <div class="form-steps">
        <div class="step" v-for="step in steps" :key="step.index">
          <div
            class="step-number"
            :class="currentStep === step.index && 'selected'"
          >
            {{ step.index }}
          </div>
          <div class="right-side">
            <div class="title">STEP {{ step.index }}</div>
            <div class="description">{{ step.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-container">
      <component
        :is="components[currentStep - 1]"
        v-model="modelValue"
        :isError="isError"
      />
      <div class="navigation-container">
        <PreviousStepButton
          @click="prevStep()"
          :class="(currentStep > 1 && currentStep < 5) || 'hidden'"
        />
        <NextStepButton
          @click="nextStep()"
          :class="currentStep < 5 || 'hidden'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FirstStep from "./Steps/components/FirstStep.vue";
import SecondStep from "./Steps/components/SecondStep.vue";
import ThirdStep from "./Steps/components/ThirdStep.vue";
import FourthStep from "./Steps/components/FourthStep.vue";
import FormSubmitted from "./Steps/components/FormSubmitted.vue";

import NextStepButton from "../ReusableComponents/components/NextStepButton.vue";
import PreviousStepButton from "../ReusableComponents/components/PreviousStepButton.vue";

import type { FormErrors, formValue } from "@/types";
import { allFalse, checkLength } from "@/utils";
import { ref } from "vue";
const modelValue = ref<formValue>({
  name: "",
  email: "",
  phone: 0,
  plan: {
    name: "",
    price: 0,
  },
  frequency: false,
  addOns: [],
});

const isError = ref<FormErrors>({
  name: false,
  email: false,
  phone: false,
  plan: false,
});

const currentStep = ref<1 | 2 | 3 | 4 | 5>(1);

const components = [
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  FormSubmitted,
];

const steps = ref<{ title: string; index: number }[]>([
  {
    index: 1,
    title: "YOUR INFO",
  },
  {
    index: 2,
    title: "SELECT PLAN",
  },
  {
    index: 3,
    title: "ADD-ONS",
  },
  {
    index: 4,
    title: "SUMMARY",
  },
]);

const nextStep = () => {
  if (currentStep.value >= 5) return;
  switch (currentStep.value) {
    case 1:
      isError.value.name = !checkLength(modelValue.value.name, 3, 20);
      isError.value.email = !checkLength(modelValue.value.email, 3, 20);
      isError.value.phone = !checkLength(modelValue.value.phone, 9, 9);
      if (allFalse(isError.value)) {
        currentStep.value++;
      }
      break;
    case 2:
      isError.value.plan = modelValue.value.plan.name === "";
      if (allFalse(isError.value)) {
        currentStep.value++;
      }
      break;
    default:
      if (allFalse(isError.value)) {
        currentStep.value++;
      }
      break;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};
</script>

<style lang="scss">
@import "./MultiStepForm.scss";
</style>
