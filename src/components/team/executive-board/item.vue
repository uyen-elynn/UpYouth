<template>
    <div
        class="i bg-white shadow-md rounded-md p-8 flex flex-row items-center gap-8 w-full">
        <img :src="member?.image" alt="Member Photo" class="w-40 h-40 object-cover rounded-md" />
        <div class="flex-1">
            <h3 class="text-2xl font-bold text-blue-700">{{ member?.name }}</h3>
            <p class="text-lg text-orange-500 font-semibold">{{ member?.position || 'Member' }}</p>
            <div class="mt-4">
                <div class="flex gap-4 border-b border-gray-200 pb-2">
                    <button @click="$emit('tab-click', 'accomplishments')"
                        :class="['text-xl font-bold px-2 py-1', activeTab === 'accomplishments' ? 'text-blue-700 border-b-4 border-orange-500' : 'text-gray-500']">
                        Accomplishments
                    </button>
                    <button @click="$emit('tab-click', 'story')"
                        :class="['text-xl font-bold px-2 py-1', activeTab === 'story' ? 'text-blue-700 border-b-4 border-orange-500' : 'text-gray-500']">
                        {{ member?.name?.split(' ')[0] }}'s Story
                    </button>
                </div>
                <div v-if="activeTab === 'accomplishments'" class="mt-4">
                    <ul class="mt-2 text-gray-700">
                        <li v-for="(achievement, i) in member?.accomplishments" :key="i" class="mb-1">{{ achievement }}
                        </li>
                    </ul>
                </div>
                <div v-else-if="activeTab === 'story'" class="mt-4 text-gray-700">
                    <p>{{ member?.storyContent }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props for member and activeTab with optional member properties
const props = defineProps({
    member: Object,
    activeTab: String,
});
</script>

<style scoped>
h4 {
    transition: color 0.3s ease;
}

h4:hover {
    color: #1d4ed8;
}

</style>