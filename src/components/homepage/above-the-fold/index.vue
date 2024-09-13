<template>
  <div class="relative w-screen overflow-hidden">
    <UContainer
      class="relative -mt-[112px] flex h-screen flex-col justify-center gap-8"
    >
      <div class="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
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
    <img
      src="/arcs/arc1.png"
      class="absolute -bottom-[250px] right-0 z-10 w-[384px]"
    />
    <img
      src="/arcs/arc2.png"
      class="absolute -bottom-[170px] -rotate-90 right-[130px] w-[384px]"
    />
  </div>
</template>
