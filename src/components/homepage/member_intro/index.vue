<template>
  <UContainer class="my-8" :ui="{ constrained: 'max-w-screen' }">
    <div class="flex flex-col items-center justify-center gap-4 md:gap-8">
      <div class="font-bold">
        <p class="text-xl md:text-6xl">One people come form ALL</p>
        <CommonBrandText
          label="parts of startup ecosystem"
          class="text-xl md:text-6xl"
          color="blue-700"
        />
      </div>
      <p class="mb-4 text-center text-xs md:text-base">
        Our leadership, members, and alumni work in VCs and startups, just like
        you. We're young, closely connected, and understand young founders.
      </p>
    </div>
    <div class="mx-auto mt-4 grid w-fit grid-cols-1 gap-4 lg:grid-cols-3">
      <HomepageMemberIntroItem
        v-for="item in items"
        :key="item.text"
        :places="item.places"
        :text="item.text"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const items = ref([
  {
    text: 'We live in',
    places: [
      '/countries/Sweden.png',
      '/countries/America.png',
      '/countries/Japan.png',
      '/countries/Canada.png'
    ]
  },
  {
    text: 'We work at',
    places: [
      '/countries/Sweden.png',
      '/countries/America.png',
      '/countries/Japan.png',
      '/countries/Canada.png'
    ]
  },
  {
    text: 'We study at',
    places: [
      '/countries/Sweden.png',
      '/countries/America.png',
      '/countries/Japan.png',
      '/countries/Canada.png'
    ]
  }
])
</script>
