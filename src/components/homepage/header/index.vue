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
  }
]

const isVerticalNavOpen = ref(false)

const toggleVerticalNav = () => {
  isVerticalNavOpen.value = !isVerticalNavOpen.value
}
</script>
