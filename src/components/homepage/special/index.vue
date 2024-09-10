<template>
  <div class="my-8 bg-blue-50 py-8 md:my-16 lg:block">
    <UContainer class="mb-8">
      <div
        class="flex flex-col items-center justify-center gap-4 leading-10 md:gap-8"
      >
        <div>
          <CommonBrandText
            prefix="What makes us"
            label="different?"
            color="blue-700"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
        </div>
        <p class="text-center text-xs md:text-base">
          We strive to become a go-to startup community by youth, for youth.
        </p>
      </div>
    </UContainer>
    <UContainer
      class="mx-8 mx-auto grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
    >
      <div v-for="special in specialList" :key="special.id">
        <HomepageSpecialItem
          :icon="special.icon"
          :title="special.title"
          :content="special.content"
          class="h-full"
        ></HomepageSpecialItem>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const specialList = ref([
  {
    id: 1,
    icon: 'i-heroicons-signal',
    title: 'Elite network',
    content:
      'UpYouth is backed by 70+ experienced founders, top VCs, C-level executives from Homebase, Genesia Ventures, Base.vn,... to help deliver hands-on support to young technopreneurs.'
  },
  {
    id: 2,
    icon: 'i-heroicons-globe-alt',
    title: 'Like-minded community',
    content:
      'UpYouth puts community at the heart of everything we do, from peer-sharing sessions, offline meetups, to online coding weekends.'
  },
  {
    id: 3,
    icon: 'i-heroicons-light-bulb',
    title: 'Access to talents',
    content:
      'UpYouth grows a strong network of young talents from top firms like Ericsson, McKinsey, and top global universities like NUS, UPenn, all committed to supporting startup growth.'
  },
  {
    id: 4,
    icon: 'i-heroicons-academic-cap',
    title: 'Founder-centric mindset',
    content:
      "At UpYouth, founders back founders. We move fast, fail fast, learn fast like a startup to best understand and solve young founders' biggest painpoints."
  }
])
</script>
