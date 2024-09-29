<template>
  <div class="relative">
    <transition
      enter-active-class="transition-opacity duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <div
        v-if="isActive"
        class="text-primary-600 mobile group absolute relative flex flex-col items-center justify-center gap-4"
      >
        <span class="text-text-4xl font-bold md:text-7xl">
          {{ number }}
        </span>
        <p class="text-center text-xs md:text-lg">
          {{ content }}
        </p>
        <div
          class="absolute top-[145px] h-[106px] w-[106px] transform rounded-full bg-[#48a6ff] opacity-0 blur-lg backdrop-blur-[64px] transition-all duration-700 ease-in-out"
          :class="isActive && 'scale-100 opacity-100'"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { AchievementItem } from '~/types/achievement'

defineProps<AchievementItem>()
</script>
