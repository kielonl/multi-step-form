<template>
  <main>
    <MultiStepForm />
  </main>
</template>
<script setup lang="ts">
import MultiStepForm from "@/components/MultiStepForm/MultiStepForm.vue";
</script>

<style scoped lang="scss">
@import "./scss/variables.scss";
main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $lightGray;
  min-height: 100vh;
}
</style>
