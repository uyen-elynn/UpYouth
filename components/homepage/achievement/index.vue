<template>
    <div class="mx-auto max-w-3xl lg:max-w-full bg-blue-50 py-8 my-8">
        <UContainer>
            <div class="flex flex-col justify-center items-center gap-8">
                <h1 class="text-6xl font-bold">Our numbers speak</h1>
                <p class="mb-8">UpYouth empowers can-do youth to create real impacts, and we also do the same.</p>
            </div>
        </UContainer>
        <UContainer class="grid grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-4"
            :ui="{ constrained: 'lg:max-w-7xl md:max-w-md max-w-xs' }">
            <div v-for="achievement in achievementList" :key="achievement.id">
                <div class="flex flex-col justify-center items-center gap-2">
                    <CommonBrandText :label="achievement.number" color="blue-700" class="text-7xl font-bold">
                    </CommonBrandText>
                    <p class="text-lg text-center">{{ achievement.content }}</p>
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
        content: 'Ecosystem partners (Investors, C-level founders,...)'
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
    },
]);
</script>