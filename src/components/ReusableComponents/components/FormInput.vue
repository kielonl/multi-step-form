<template>
  <div class="input-container">
    <label for="input">{{ label }}</label>
    <input
      :type="type || 'text'"
      :id="label"
      :class="{ error: isError }"
      :placeholder="placeholders[type || 'text']"
      v-model="value"
      required
    />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  label: string;
  type?: "text" | "email" | "number";
  modelValue?: string | number;
  isError: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "update:error"]);

const value = computed({
  get: () => props.modelValue,
  set: (value: any) => emit("update:modelValue", value),
});

const placeholders = ref<any>({
  text: "e.g Stephen King",
  email: "e.g stephenking@lorem.com",
  number: "e.g +1 234 567 890",
});
</script>

<style lang="scss">
@import "../styles/FormInput.scss";
</style>
