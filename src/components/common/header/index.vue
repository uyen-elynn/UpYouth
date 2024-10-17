<template>
  <div
    class="sticky top-0 z-30 flex w-full flex-row items-center justify-between border-b border-gray-300 bg-white/30 px-4 py-6 backdrop-blur-md md:px-8"
  >
    <div class="flex max-w-32 flex-row items-center gap-2">
      <UButton
        variant="ghost"
        icon="i-heroicons-bars-3-bottom-left"
        size="xs"
        class="text-gray-900 md:hidden"
        @click="toggleVerticalNav"
      />
      <CommonLogo />
    </div>
    <UHorizontalNavigation
      :links="navigationLinks"
      class="hidden justify-end md:flex"
    />
    <NuxtLink 
      to="https://tally.so/r/mZzXpo"
      target="_blank"
      class="ml-4 hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-900 transition-transform transform hover:scale-105 whitespace-nowrap"
    >
      Join us now!
  </NuxtLink>
  </div>
  <UVerticalNavigation
    :links="navigationLinks"
    class="md:hidden"
    :class="!isVerticalNavOpen && 'hidden'"
  />
  <hr />
</template>

<script setup lang="ts">
const navigationLinks = [
  {
    label: 'Homepage',
    to: '/'
  },
  {
    label: 'Our Team',
    to: '/team'
  }
]

const isVerticalNavOpen = ref(false)

const toggleVerticalNav = () => {
  isVerticalNavOpen.value = !isVerticalNavOpen.value
}
</script>