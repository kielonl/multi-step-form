<template>
  <div class="slider-container">
    <span class="slider-unchecked" :class="!value.frequency || 'unchecked'"
      >Monthly</span
    >
    <label class="switch" for="checkbox">
      <input type="checkbox" id="checkbox" v-model="value.frequency" />
      <div class="slider round"></div>
    </label>
    <span class="slider-checked" :class="value.frequency || 'unchecked'"
      >Yearly</span
    >
  </div>
</template>

<script setup lang="ts">
import type { formValue } from "@/types";
import { computed } from "vue";

interface Props {
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
@import "../styles/SliderCheckbox.scss";
</style>
