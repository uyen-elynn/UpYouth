<template>
  <div
    class="my-2 flex w-full flex-row items-center justify-between px-4 md:my-8 md:px-8"
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
  },
  {
    label: 'TechYouth Incubator',
    to: '/'
  }
]

const isVerticalNavOpen = ref(false)

const toggleVerticalNav = () => {
  isVerticalNavOpen.value = !isVerticalNavOpen.value
}
</script>
