<template>
  <div class="step-container">
    <h1 @click="test()">Finishing up</h1>
    <p>Double-check everything looks OK before confirming</p>
    <div class="summary">
      <div class="main-costs">
        <div class="plan-cost">
          {{ modelValue.plan.name }} ({{ billing.billingFull }})
          <div>${{ planPrice }}</div>
        </div>
        <br />
        <div class="change">Change</div>
      </div>
      <hr />
      <div class="additional-cost-container">
        <div
          v-for="(addOn, index) in modelValue.addOns"
          :key="index"
          class="additional-cost"
        >
          <div>{{ addOn.name }}</div>
          <div class="additional-cost-price">
            +${{ addOn.price }}/{{ billing.billingShort }}
          </div>
        </div>
      </div>
    </div>
    <div class="total-price">
      <div>Total (per {{ billing.billingFull }})</div>
      <div>${{ total || 0 }}/{{ billing.billingShort }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { formValue } from "@/types";
import { ref, computed } from "vue";

interface Props {
  modelValue: formValue;
}
const props = defineProps<Props>();

const billing = ref({
  billingShort: props.modelValue.frequency ? "yr" : "mo",
  billingFull: props.modelValue.frequency ? "year" : "month",
});

const total = computed(() => {
  const multiplier = ref(props.modelValue.frequency ? 10 : 1);
  return (
    props.modelValue.addOns.reduce((acc, cur) => acc + cur.price, 0) +
    props.modelValue.plan.price * multiplier.value
  );
});

const planPrice = computed(() => {
  const multiplier = ref(props.modelValue.frequency ? 10 : 1);
  return props.modelValue.plan.price * multiplier.value;
});

const test = () => {
  console.log(props.bill);
};
</script>

<style scoped lang="scss">
@import "../styles/FourthStep.scss";
</style>
