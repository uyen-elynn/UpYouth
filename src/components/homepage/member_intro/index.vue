<template>
  <UContainer class="my-8" :ui="{ constrained: 'max-w-screen' }">
    <div class="flex flex-col items-center justify-center gap-4 md:gap-8">
      <div class="font-bold">
        <p class="text-xl md:text-6xl">One people come form ALL</p>
        <CommonBrandText
          label="parts of startup ecosystem"
          class="text-xl md:text-6xl"
          color="blue-700"
          background
          slide
        />
      </div>
      <p class="mb-4 text-center text-xs md:text-base">
        Our leadership, members, and alumni work in VCs and startups, just like
        you. We're young, closely connected, and understand young founders.
      </p>
    </div>
    <div class="mx-auto mt-4 flex w-fit flex-col gap-4 lg:flex-row">
      <HomepageMemberIntroItem
        v-for="item in items"
        :key="item.text"
        :place="item.place"
        :text="item.text"
        class="hidden lg:block"
      />
      <HomepageMemberIntroItem
        v-for="item in mobileItems"
        :key="item.text"
        :place="item.place"
        :text="item.text"
        class="lg:hidden"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const items = ref([
  {
    text: 'We live in',
    place: '/welivein.png'
  },
  {
    text: 'We study at',
    place: '/westudyat.png'
  },
  {
    text: 'We work at',
    place: 'weworkat.png'
  }
])

const mobileItems = ref([
  {
    text: 'We live in',
    place: '/welivein.png'
  },
  {
    text: 'We study at',
    place: '/westudyat.png'
  },
  {
    text: 'We work at',
    place: 'weworkat2.png'
  }
])
</script>
