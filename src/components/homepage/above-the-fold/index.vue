<template>
  <UContainer class="flex h-screen flex-col justify-center gap-8">
    <!-- <div class="flex flex-col justify-center gap-8 lg:justify-between">
      <div class="w-max">
        <h1 class="text-4xl font-bold md:text-8xl">Do like a</h1>
        <CommonBrandText
          label="Real founder"
          color="blue-700"
          class="text-4xl font-bold md:text-8xl"
        ></CommonBrandText>
      </div>
      <div>
        <UButton
          label="Discover more"
          icon="i-heroicons-arrow-right-16-solid"
          :trailing="true"
          variant="solid"
          size="xl"
          color="white"
          class="rounded-full"
        ></UButton>
      </div>
    </div>

    <p class="text-lg md:text-xl">
      We are a youth-focused tech startup ecosystem providing the best resources
      for Vietnamese entrepreneurs to find REAL ventures.
    </p> -->
    <div
      class="-mt-[80px] flex flex-col items-start gap-8 lg:flex-row lg:items-center"
    >
      <div class="flex-1">
        <h1 class="text-4xl font-bold md:text-8xl">Do like a</h1>
        <CommonBrandText
          label="Real founder"
          color="blue-700"
          class="text-4xl font-bold md:text-8xl"
        />
      </div>
      <p class="flex-1 text-lg text-gray-500 md:text-xl">
        We are a youth-focused tech startup ecosystem providing the best
        resources for Vietnamese entrepreneurs to find REAL ventures.
      </p>
    </div>
    <div>
      <UButton
        label="Discover more"
        icon="i-heroicons-arrow-right-16-solid"
        :trailing="true"
        variant="solid"
        size="xl"
        color="white"
        class="rounded-full"
      ></UButton>
    </div>
  </UContainer>
</template>
