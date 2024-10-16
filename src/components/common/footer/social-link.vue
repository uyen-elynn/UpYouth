<script setup lang="ts">
import type { SocialLink } from '~/types/social-link';

defineProps<SocialLink>();
</script>

<template>
  <UButton
    size="xl"
    variant="outline"
    class="hidden rounded-full md:flex button-fill transition duration-200"
    :to="link"
    color="white"
    square
    target="_blank"
  >
    <UIcon :name="icon" dynamic class="h-6 w-6 icon-transition" />
  </UButton>
  <UButton
    size="md"
    variant="outline"
    class="rounded-full md:hidden button-fill transition duration-200"
    :to="link"
    color="white"
    square
    target="_blank"
  >
    <UIcon :name="icon" dynamic class="h-6 w-6" />
  </UButton>
</template>

<style>
.button-fill {
  position: relative;
  overflow: hidden;
  color: black; 
}

.button-fill::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #1d4ed8; 
  z-index: 0;
  transition: all 0.5s ease-out;
}

.button-fill:hover::before {
  left: 0;
}

.button-fill:hover {
  color: white;
}

.button-fill > * {
  position: relative;
  z-index: 1;
}

.icon-transition {
  transition: color 0.5s ease-out; 
}

.button-fill:hover .icon-transition {
  color: white; 
}
</style>
