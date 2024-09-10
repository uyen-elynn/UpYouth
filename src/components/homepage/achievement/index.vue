<template>
  <div class="mx-auto my-8 max-w-full bg-blue-50 py-8">
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-4 md:gap-8">
        <h1 class="text-xl font-bold md:text-6xl">Our numbers speak</h1>
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
        <div class="flex flex-col items-center justify-center gap-2">
          <CommonBrandText
            :label="achievement.number"
            color="blue-700"
            class="text-4xl font-bold md:text-7xl"
          >
          </CommonBrandText>
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
    content: 'Ecosystem partners (Investors, C-level founders,...)',
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
