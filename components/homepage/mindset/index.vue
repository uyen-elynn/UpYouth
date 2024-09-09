<template>
    <div class="bg-color-50 text-center">
        <div class="justify-center items-center mb-8">
            <CommonBrandText prefix="UpYouth is proud to spread" label="entrepreneurial mindset" color="blue-700"
                class="text-6xl font-bold text-center">
            </CommonBrandText>
            <p class="mb-8">Read our stories in Vietnamese news, and stay tuned for our global impacts.</p>
        </div>
        <div class="grid grid-cols-2 gap-8 w-fit mx-auto">
            <div v-for="item in mindSetList" :key="item.id">
                <ULink :to="item.url" target="_blank">
                <NuxtImg :src="item.image" class="max-w-[500px]" /></ULink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const mindSetList = ref([
    {
        id: 1,
        image: '/VnEconomy.png',
        url: 'https://vneconomy.vn/upyouth-khoi-dong-techyouth-incubator-2024.htm'
    },
    {
        id: 2,
        image: '/VnExpess.png',
        url: 'https://vnexpress.net/vuon-uom-khoi-nghiep-cong-nghe-cho-sinh-vien-viet-4478515.html'
    },
    {
        id: 3,
        image: '/DanTri.png',
        url: 'https://dantri.com.vn/giao-duc/gia-toc-khoi-nghiep-cho-sinh-vien-ngay-tu-nam-nhat-khat-vong-vuon-tam-quoc-te-20220627174352460.htm'
    },
    {
        id: 4,
        image: '/VTV.png',
        url: 'https://vtv4.vtv.vn/video/ban-tin-tieng-viet/-41430.html'
    }
])
</script>