<template>
  <UContainer
    class="flex h-screen -mt-[56px] flex-col lg:items-center justify-center gap-8 lg:gap-16 lg:flex-row lg:justify-between"
    :ui="{ constrained: '2xl:max-w-7xl lg:max-w-full max-w-3xl' }"
  >
    <div class="flex flex-col justify-center gap-8 lg:justify-between">
      <div class="w-max">
        <h1 class="text-8xl font-bold">Do like a</h1>
        <CommonBrandText
          label="Real founder"
          color="blue-700"
          class="text-8xl font-bold"
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

    <p class="text-xl">
      We are a youth-focused tech startup ecosystem providing the best resources
      for Vietnamese entrepreneurs to find REAL ventures.
    </p>
  </UContainer>
</template>
