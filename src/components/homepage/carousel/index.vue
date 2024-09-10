<template>
  <UContainer>
    <div class="flex flex-col items-center justify-center gap-4 md:gap-8">
      <CommonBrandText
        prefix="We are backed by"
        label="the best"
        color="blue-700"
        class="text-center text-xl font-bold md:text-6xl"
      >
      </CommonBrandText>
      <p class="text-center text-xs md:text-base">
        Our elite partners in startup ecosystems help you build real ventures
        and grow them far beyond.
      </p>
    </div>
    <div class="my-8 flex flex-col gap-8">
      <UCarousel
        ref="carouselRef1"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full basis-1/4' }"
        class="hidden gap-2 overflow-hidden rounded-lg lg:block"
      >
        <div
          class="flex h-[140px] items-center justify-center rounded-lg border border-gray-300"
        >
          <img :src="item" draggable="false" class="mx-6 w-[200px]" />
        </div>
      </UCarousel>
      <UCarousel
        ref="carouselRef3"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full basis-1/2 sm:basis-1/4' }"
        class="gap-2 overflow-hidden rounded-lg lg:hidden"
      >
        <div
          class="flex h-[70px] items-center justify-center rounded-lg border border-gray-300"
        >
          <img :src="item" draggable="false" class="mx-4 w-[100px]" />
        </div>
      </UCarousel>
      <UCarousel
        ref="carouselRef2"
        v-slot="{ item }"
        :items="items2"
        :ui="{ item: 'basis-full basis-1/4' }"
        class="mt-2 hidden overflow-hidden rounded-lg lg:block"
      >
        <div
          class="flex h-[140px] items-center justify-center rounded-lg border border-gray-300"
        >
          <img :src="item" draggable="false" class="mx-6 w-[200px]" />
        </div>
      </UCarousel>
      <UCarousel
        ref="carouselRef4"
        v-slot="{ item }"
        :items="items2"
        :ui="{ item: 'basis-full basis-1/2 sm:basis-1/4' }"
        class="overflow-hidden rounded-lg lg:hidden"
      >
        <div
          class="flex h-[70px] items-center justify-center rounded-lg border border-gray-300"
        >
          <img :src="item" draggable="false" class="mx-4 w-[100px]" />
        </div>
      </UCarousel>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const items = [
  '/sponsors/Advertising Vietnam.svg',
  '/sponsors/Ái Việt Ventures.svg',
  '/sponsors/Airtable.svg',
  '/sponsors/Antler.svg',
  '/sponsors/AWS.svg',
  '/sponsors/Brands Vietnam.svg',
  '/sponsors/Builtfirst.svg',
  '/sponsors/Elsa.svg',
  '/sponsors/Genestory.svg',
  '/sponsors/HubSpot.svg',
  '/sponsors/Indochine Counsel.svg'
]

const items2 = [
  '/sponsors/infina.svg',
  '/sponsors/mixpanel.svg',
  '/sponsors/Notion.svg',
  '/sponsors/pre.dev.svg',
  '/sponsors/Singapore Global Network.svg',
  '/sponsors/Startup Wheel.svg',
  '/sponsors/Stucolab.svg',
  '/sponsors/The Sentry P.svg',
  '/sponsors/Timo Bank.svg',
  '/sponsors/TopCV.svg'
]

const carouselRef1 = ref()
const carouselRef2 = ref()
const carouselRef3 = ref()
const carouselRef4 = ref()
onMounted(() => {
  setInterval(() => {
    if (!carouselRef1.value) return

    if (carouselRef1.value.page === carouselRef1.value.pages) {
      return carouselRef1.value.select(0)
    }

    carouselRef1.value.next()
  }, 2000)
  setInterval(() => {
    if (!carouselRef3.value) return

    if (carouselRef3.value.page === carouselRef3.value.pages) {
      return carouselRef1.value.select(0)
    }

    carouselRef3.value.next()
  }, 2000)
  setInterval(() => {
    if (!carouselRef2.value) return

    if (carouselRef2.value.page === carouselRef2.value.pages) {
      return carouselRef2.value.select(0)
    }

    carouselRef2.value.next()
  }, 2000)
  setInterval(() => {
    if (!carouselRef4.value) return

    if (carouselRef4.value.page === carouselRef4.value.pages) {
      return carouselRef4.value.select(0)
    }

    carouselRef4.value.next()
  }, 2000)
})
</script>
