<template>
  <div class="bg-blue-50 py-8">
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-4 md:gap-8">
        <CommonBrandText
          prefix="Our"
          label="Advisors"
          color="blue-700"
          class="text-xl font-bold md:text-6xl"
        >
        </CommonBrandText>
        <p class="mb-8 text-xs md:text-base">
          UpYouth is closely supported by high-level advisors, serial
          entrepreneurs, and seasoned investors.
        </p>
      </div>
      <div>
        <div class="grid grid-cols-3 gap-8">
          <div
            v-for="item in items"
            class="mx-auto flex flex-col items-center text-center"
          >
            <img
              :src="item.avatar.src"
              :alt="item.name"
              class="mb-2 h-[100px] w-[100px] rounded-full md:h-[200px] md:w-[200px]"
              draggable="false"
            />
            <div>
              <p class="text-base font-semibold md:text-2xl">
                {{ item.name }}
              </p>
              <p class="mt-1 text-xs md:text-base">{{ item.position }}</p>
              <p class="mt-1 text-xs text-blue-700 md:text-base">
                {{ item.title }}
              </p>
              <p class="text-xs text-blue-700 md:text-base">
                {{ item.signature }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    name: 'Brian Minh Tran',
    avatar: { src: './advisor1.png' },
    position: 'Co-founder',
    title: 'Forbes 30U30 Asia',
    signature: ''
  },
  {
    name: 'Huong Tran',
    avatar: { src: './advisor2.png' },
    position: 'Board Advisor',
    title: 'Venture Partner',
    signature: "@Monk's Hill Ventures"
  },
  {
    name: 'Nguyen Huu Cuong',
    avatar: { src: './advisor3.png' },
    position: 'Board Advisor',
    title: 'Chief Strategy Officer',
    signature: '@VinAI'
  },
  {
    name: 'Anthony Fu',
    avatar: { src: './advisor3.png' },
    position: 'Board Advisor',
    title: 'Chief Strategy Officer',
    signature: '@VinAI'
  },
  {
    name: 'Anthony Fu',
    avatar: { src: './advisor3.png' },
    position: 'Board Advisor',
    title: 'Chief Strategy Officer',
    signature: '@VinAI'
  }
]
</script>
