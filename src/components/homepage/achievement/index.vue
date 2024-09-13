<template>
  <div class="bg-primary-700 relative mx-auto mb-8 max-w-full py-8 text-white">
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
        <CommonBrandText
          label="Our numbers speak"
          background
          class="text-2xl font-bold md:text-6xl"
        />
        <p class="mb-4 text-center text-xs md:mb-8 md:text-base">
          UpYouth empowers can-do youth to create real impacts, and we also do
          the same.
        </p>
      </div>
    </UContainer>
    <UContainer
      class="grid grid-cols-2 gap-x-8 gap-y-4 md:gap-x-32 lg:grid-cols-4"
      :ui="{ constrained: 'lg:max-w-7xl md:max-w-md max-w-xs' }"
    >
      <div v-for="achievement in achievementList" :key="achievement.id">
        <div class="flex flex-col items-center justify-center gap-4">
          <span class="text-4xl font-bold text-white md:text-7xl">
            {{ achievement.number }}
          </span>
          <p class="text-center text-xs md:text-lg">
            {{ achievement.content }}
          </p>
        </div>
      </div>
    </UContainer>
   
  </div>
</template>

<script setup lang="ts">
const achievementList = ref([
  {
    id: 1,
    number: '150+',
    content: 'Ecosystem partners',
    url: ''
  },
  {
    id: 2,
    number: '$4.5M+',
    content: 'Raised combined'
  },
  {
    id: 3,
    number: '40+',
    content: 'Startups supported'
  },
  {
    id: 4,
    number: '4,000+',
    content: 'Community members'
  }
])
</script>
