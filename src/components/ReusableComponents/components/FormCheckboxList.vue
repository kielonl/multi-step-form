<template>
  <div class="checkbox-wrapper">
    <label
      v-for="option in options"
      :key="option.index"
      class="checkbox-container parent"
      :for="option.title"
    >
      <input
        type="checkbox"
        :key="option.index"
        :id="option.title"
        :value="{ name: option.title, price: option.price }"
        class="checkbox child"
        v-model="value.addOns"
      />
      <div class="checkbox-description">
        <div class="checkbox-title-description">
          <label :for="option.title">{{ option.title }}</label>
          <label :for="option.title">{{ option.description }}</label>
        </div>
        <div class="checkbox-price">
          <label :for="option.title">+${{ option.price }}/mo</label>
        </div>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { formValue } from "@/types";
import { computed } from "vue";

interface Props {
  options: {
    title: string;
    description: string;
    price: number;
    index: number;
  }[];
  modelValue: formValue;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "update:error"]);

const value = computed({
  get: () => props.modelValue,
  set: (value: any) => emit("update:modelValue", value),
});
</script>

<style scoped lang="scss">
@import "../styles/FormCheckboxList.scss";
</style>
