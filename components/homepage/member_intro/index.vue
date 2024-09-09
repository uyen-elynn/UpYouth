<template>
    <UContainer class="my-8" :ui="{constrained: 'max-w-screen'}">
        <div class="flex flex-col justify-center items-center gap-8">
            <CommonBrandText prefix="Our people come from ALL" label="parts of startup ecosystem" color="blue-700" class="text-6xl text-center font-bold">
            </CommonBrandText>
            <p class="my-8">Our leadership, members, and alumni work in VCs and startups, just like you. We're young, closely connected, and understand young founders.</p>
        </div>
        <div class="w-screen">
            <NuxtImg src="./place.png" class="w-full h-full object-fit"></NuxtImg>
        </div>
    </UContainer>
</template>

<script setup lang="ts"></script>