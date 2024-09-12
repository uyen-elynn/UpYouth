<template>
  <div
    class="mx-auto flex w-fit flex-col gap-4 rounded-lg border border-gray-300 p-8"
  >
    <span class="text-primary-700 text-3xl font-bold">{{ text }}</span>
    <div class="flex gap-2">
      <img v-for="place in places" :key="place" :src="place" class="w-[45px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MemberIntroItem } from '~/types/member-intro'

defineProps<MemberIntroItem>()
</script>
