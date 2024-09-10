<script setup lang="ts">
import type { SocialLink } from '~/types/social-link'

defineProps<SocialLink>()
</script>

<template>
  <UButton
    size="xl"
    variant="outline"
    class="hidden rounded-full md:flex"
    :to="link"
    color="white"
    square
    target="_blank"
  >
    <UIcon :name="icon" dynamic class="h-6 w-6 text-gray-900" />
  </UButton>
  <UButton
    size="md"
    variant="outline"
    class="rounded-full md:hidden"
    :to="link"
    color="white"
    square
    target="_blank"
  >
    <UIcon :name="icon" dynamic class="h-6 w-6 text-gray-900" />
  </UButton>
</template>
