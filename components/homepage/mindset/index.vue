<template>
    <UContainer class="bg-color-50">
        <div class="flex flex-col justify-center items-center gap-8">
            <CommonBrandText prefix="UpYouth is proud to spread" label="entrepreneurial mindset" color="blue-700"
                class="text-6xl font-bold text-center">
            </CommonBrandText>
            <p class="mb-8">Read our stories in Vietnamese news, and stay tuned for our global impacts.</p>
        </div>
        <UContainer class="grid grid-cols-2 gap-2">
            <div v-for="element in mindSetList" :key="element.id" class="">
                <div class="relative">
                    <NuxtImg :src="element.image" alt="gdsc" class="w-full md:max-w-lg" />
                    <div class="absolute top-0 w-full md:max-w-lg">
                        <NuxtImg src="/overlay.png" alt="overlay" class="w-full md:max-w-lg"></NuxtImg>
                    </div>
                    <div class="absolute bottom-0 flex flex-col left-1/4">
                        <p class=" font-bold text-white text-xs text-center">
                            {{ element.title }}
                        </p>
                        <p class="text-center">{{ element.content }}</p>
                    </div>
                </div>
            </div>
        </UContainer>
    </UContainer>
</template>

<script setup lang="ts">
const mindSetList = ref([
    {
        id: 1,
        image: '/people.png',
        name: 'VN Economy',
        title: 'UpYouth khởi động',
        content: 'TechYouth Incubator 2024',
    },
    {
        id: 2,
        image: '/vnexpress.png',
        name: 'VnExpress',
        title: 'Vườn ươm khởi nghiệp công nghệ cho sinh viên Việt',
        content: '',
    },
    {
        id: 3,
        image: '/dantri.png',
        name: 'Dân trí',
        title: 'Gia tốc khởi nghiệp cho sinh viên ngay từ năm nhất: Khát vọng vươn tầm quốc tế  ',
        content: '',
    },
    {
        id: 4,
        image: '/vtv.png',
        name: 'VTV',
        title: 'TechYouth Startup Day',
        content: 'Cơ hội khởi nghiệp cho giới trẻ',
    }
])
</script>