<template>
  <UCarousel
    :items="items"
    class="h-[250px] w-fit overflow-hidden rounded-3xl"
    indicators
    v-slot="{ item }"
  >
    <img :src="item" class="h-full w-[500px]" draggable="false" />
  </UCarousel>
</template>

<script setup lang="ts">
import type { AboutUsCarousel } from '~/types/about-us'

defineProps<AboutUsCarousel>()
</script>
