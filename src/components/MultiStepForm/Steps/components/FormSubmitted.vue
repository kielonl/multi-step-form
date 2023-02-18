<template>
  <div class="step-container">
    <IconThankYou />
    <h1>Thank you!</h1>
    <p>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support please feel free to email us at
      support@loremgaming.com
    </p>
  </div>
</template>

<script setup lang="ts">
import IconThankYou from "@/assets/IconThankYou.vue";
</script>

<style scoped lang="scss">
.step-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
