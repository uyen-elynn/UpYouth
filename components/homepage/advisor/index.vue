<template>
    <div class="bg-blue-50 py-8">
    <UContainer>
        <div class="flex flex-col justify-center items-center gap-8">
            <CommonBrandText prefix="Our" label="Advisors" color="blue-700" class="text-6xl font-bold">
            </CommonBrandText>
            <p class="mb-8">UpYouth is closely supported by high-level advisors, serial entrepreneurs, and seasoned
                investors.</p>
        </div>
        <div>
            <UCarousel v-slot="{ item, index }" :items="items" :ui="{ item: 'basis-full basis-1/3'}">
                <div class="text-center mx-auto">
                    <img :src="item.avatar.src" :alt="item.name" class="rounded-full mb-2" width="200" height="200"
                        draggable="false">
                    <div>
                        <p class="font-semibold">
                            {{ item.name }}
                        </p>
                        <p>{{ item.position }}</p>
                        <p class="text-blue-700">{{ item.title }}</p>
                        <p class="text-blue-700">{{ item.signature }}</p>
                    </div>
                </div>
            </UCarousel>
        </div>
    </UContainer>
    </div>
</template>

<script setup lang="ts">
const items = [{
    name: 'Brian Minh Tran',
    avatar: { src: './advisor1.png' },
    position: 'Co-founder',
    title: 'Forbes 30U30 Asia',
    signature: ''
}, {
    name: 'Huong Tran',
    avatar: { src: './advisor2.png' },
    position: 'Board Advisor',
    title: 'Venture Partner',
    signature: "@Monk's Hill Ventures",
}, {
    name: 'Nguyen Huu Cuong',
    avatar: { src: './advisor3.png' },
    position: 'Board Advisor',
    title: 'Chief Strategy Officer',
    signature: "@VinAI",
}, {
    name: 'Anthony Fu',
    avatar: { src: './advisor3.png' },
    position: 'Board Advisor',
    title: 'Chief Strategy Officer',
    signature: "@VinAI",
}, {
    name: 'Anthony Fu',
    avatar: { src: './advisor3.png' },
    position: 'Board Advisor',
    title: 'Chief Strategy Officer',
    signature: "@VinAI",
}]
</script>