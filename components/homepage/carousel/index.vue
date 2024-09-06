<template>
    <UContainer>
        <div class="flex flex-col justify-center items-center gap-8">
            <CommonBrandText prefix="We are backed by" label="the best" color="blue-700" class="text-6xl font-bold">
            </CommonBrandText>
            <p>Our elite partners in startup ecosystems help you build real ventures and grow them far beyond.</p>
        </div>
        <div class="my-8 flex flex-col gap-8">
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full basis-1/4' }"
                class="rounded-lg overflow-hidden" indicators>
                <img :src="item" draggable="false" width="260" height="120">
            </UCarousel>
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="items2" :ui="{ item: 'basis-full lg:basis-1/4' }"
                class="rounded-lg overflow-hidden" indicators>
                <img :src="item" draggable="false" width="260" height="120">
            </UCarousel>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const items = [
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
]

const items2 = [
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
    './layer.png',
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 1000)
})
</script>