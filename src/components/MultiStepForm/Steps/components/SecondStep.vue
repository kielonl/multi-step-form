<template>
  <div class="step-container">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing</p>
    <div class="inputs-container">
      <div v-for="plan in plans" :key="plan.name">
        <input
          type="radio"
          name="plan"
          :id="plan.name"
          :value="{ name: plan.name, price: plan.price }"
          v-model="value.plan"
        />
        <label
          :for="plan.name"
          :id="'label-' + plan.name"
          :class="{ error: isError.plan }"
        >
          <div class="label-text">
            <span>{{ plan.name }}</span>
            <br />${{ plan.price }}/{{ modelValue.frequency ? "yr" : "mo" }}
          </div>
        </label>
      </div>
    </div>
    <SliderCheckbox v-model="value" />
  </div>
</template>

<script setup lang="ts">
import type { FormErrors, formValue } from "@/types";
import SliderCheckbox from "@/components/ReusableComponents/components/SliderCheckbox.vue";
import { computed, ref } from "vue";

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

const plans = computed<{ name: string; price: number }[]>(() => {
  const multiplier = ref(props.modelValue.frequency ? 10 : 1);
  return [
    { name: "arcade", price: 9 * multiplier.value },
    { name: "advanced", price: 12 * multiplier.value },
    { name: "pro", price: 15 * multiplier.value },
  ];
});
</script>

<style scoped lang="scss">
@import "../styles/SecondStep.scss";
</style>
