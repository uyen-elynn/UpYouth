<template>
    <UCard>
        <div class="flex flex-row items-center gap-4 mb-4">
            <UIcon :name="props.icon" class="w-9 h-9 text-blue-700" ></UIcon>
            <h1 class="font-bold text-3xl">{{ props.title }}</h1>
        </div>
        <div>
            <p class="leading-6">{{ props.content }}</p>
        </div>
    </UCard>
</template>

<script setup lang="ts">

type Props = {
    icon: string;
    title: string;
    content: string;
}
const props = defineProps<Props>();
</script>
