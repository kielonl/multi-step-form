<template>
  <div class="step-container">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience</p>
    <FormSelect :options="options" v-model="value" />
  </div>
</template>

<script setup lang="ts">
import type { formValue } from "@/types";
import FormSelect from "@/components/ReusableComponents/components/FormCheckboxList.vue";
import { computed, ref } from "vue";

interface Props {
  modelValue: formValue;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "update:error"]);

const value = computed({
  get: () => props.modelValue,
  set: (value: any) => emit("update:modelValue", value),
});

const options = computed(() => {
  const multiplier = ref(props.modelValue.frequency ? 10 : 1);
  return [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: 1 * multiplier.value,
      index: 1,
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2 * multiplier.value,
      index: 2,
    },
    {
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2 * multiplier.value,
      index: 3,
    },
  ];
});
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
</style>
