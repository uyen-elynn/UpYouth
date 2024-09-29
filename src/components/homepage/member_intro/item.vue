<template>
  <div
    class="mx-auto flex w-fit flex-col items-center gap-4 rounded-lg border border-gray-300 p-8"
  >
    <span class="text-primary-700 text-3xl font-bold">{{ text }}</span>
    <img :src="place" class="w-[240px] lg:h-[170px] lg:h-auto" />
  </div>
</template>

<script setup lang="ts">
import type { MemberIntroItem } from '~/types/member-intro'

defineProps<MemberIntroItem>()
</script>
