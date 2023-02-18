<template>
  <div class="step-container">
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number</p>
    <div class="inputs-container">
      <FormInput
        label="Name"
        type="text"
        v-model="value.name"
        :isError="isError.name"
      />
      <FormInput
        label="Email Address"
        type="email"
        v-model="value.email"
        :isError="isError.email"
      />
      <FormInput
        label="Phone Number"
        type="number"
        v-model="value.phone"
        :isError="isError.phone"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormErrors, formValue } from "@/types";

import FormInput from "@/components/ReusableComponents/components/FormInput.vue";
import { computed } from "vue";
interface Props {
  modelValue: formValue;
  isError: FormErrors;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "update:error"]);

const value = computed({
  get: () => props.modelValue,
  set: (value: any) => emit("update:modelValue", value),
});
</script>

<style lang="scss">
@import "../styles/FirstStep.scss";
</style>
