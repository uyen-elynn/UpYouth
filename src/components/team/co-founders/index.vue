<template>
    <div class="mt-16 px-20 py-20">
        <div class="text-center w-full inline-block px-6 py-3 rounded-md border-2 border-blue-700">
            <h2 class="text-3xl font-bold text-blue-700">Co-founders</h2>
        </div>
        <div class="mt-12">
            <div class="flex flex-wrap justify-center gap-12">
                <div v-for="(founder, index) in founders" :key="index" class="flex flex-col items-center">
                    <img :src="founder.image" alt="Chair Photo" class="w-40 h-40 object-cover rounded-full mb-4" />
                    <h4 class="text-lg font-bold text-blue-500">{{ founder.name }}</h4>
                    <p class="text-md text-gray-500 font-semibold">{{ founder.position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const founders = ref([
    {
        name: 'Brian Minh Tran',
        image: '/co-founder1.png'
        office: {
            name: '',
            position: 'Forbes 30U30 Asia'
        }
    },
    {
        name: 'Nam Doan',   
        image: '/co-founder2.png'
        office: {
          name: '@ThinkZone Ventures',
          position: 'Accelerator Program Manager'
        }
    }
]);
</script>

<style scoped>
.flex {
    display: flex;
    flex-wrap: wrap;
}

@media (min-width: 768px) {
    .flex-wrap {
        gap: 8rem;
    }
}

h4 {
    transition: color 0.3s ease;
}

h4:hover {
    color: #1d4ed8;
}
</style>
