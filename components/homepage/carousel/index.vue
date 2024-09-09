<template>
  <UContainer>
    <div class="flex flex-col justify-center items-center gap-8">
      <CommonBrandText
        prefix="We are backed by"
        label="the best"
        color="blue-700"
        class="text-6xl font-bold"
      >
      </CommonBrandText>
      <p>
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
        class="rounded-lg overflow-hidden"
      >
        <img :src="item" draggable="false" width="260" height="120" />
      </UCarousel>
      <UCarousel
        ref="carouselRef2"
        v-slot="{ item }"
        :items="items2"
        :ui="{ item: 'basis-full lg:basis-1/4' }"
        class="rounded-lg overflow-hidden"
      >
        <img :src="item" draggable="false" width="260" height="120" />
      </UCarousel>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const items = [
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
];

const items2 = [
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
  "./layer.png",
];

const carouselRef1 = ref();
const carouselRef2 = ref();
onMounted(() => {
  setInterval(() => {
    if (!carouselRef1.value) return;

    if (carouselRef1.value.page === carouselRef1.value.pages) {
      return carouselRef1.value.select(0);
    }

    carouselRef1.value.next();
  }, 2000);
  setInterval(() => {
    if (!carouselRef2.value) return;

    if (carouselRef2.value.page === carouselRef1.value.pages) {
      return carouselRef2.value.select(0);
    }

    carouselRef2.value.next();
  }, 2000);
});
</script>
