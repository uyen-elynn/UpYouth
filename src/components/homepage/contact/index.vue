<template>
<div ref="templateRef" :class="{ 'scale-up': isVisible, 'scale-down': !isVisible }">
  <div
    class="relative overflow-hidden pb-[240px] pt-[120px] text-center text-xl font-bold md:text-6xl"
  >
    <h1>Further inquiries?</h1>
    <nuxt-link to="https://www.linkedin.com/company/upyouth/">
      <CommonBrandText prefix="Text us at" label="UpYouth LinkedIn" />
    </nuxt-link>
    <img
      src="/arcs/arc1.png"
      class="absolute -bottom-[200px] left-1/2 z-10 w-[384px] -translate-x-1/2 transform"
    />
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '~/assets/TS/useIntersectionObserver';

const templateRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(templateRef, (visible) => {
  isVisible.value = visible;
});
</script>

<style scoped>
.scale-up {
  transform: scale(1);
  transition: transform 0.4s ease-in-out;
}

.scale-down {
  transform: scale(0.85);
  transition: transform 0.4s ease-in-out;
}
</style>
