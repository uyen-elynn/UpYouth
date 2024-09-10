<template>
  <UCard>
    <div class="mb-4 flex flex-row items-center gap-2 md:gap-4">
      <UIcon
        :name="props.icon"
        class="h-6 w-6 text-blue-700 md:h-9 md:w-9"
      ></UIcon>
      <h1 class="text-xl font-bold md:text-3xl">{{ props.title }}</h1>
    </div>
    <div>
      <p class="text-xs leading-6 md:text-base lg:h-[72px]">
        {{ props.content }}
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
type Props = {
  icon: string
  title: string
  content: string
}
const props = defineProps<Props>()
</script>
