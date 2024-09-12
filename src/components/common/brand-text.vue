<template>
  <div>
    {{ props.prefix }}
    <span
      :class="
        background
          ? 'bg-primary-700 px-2 leading-loose text-white'
          : 'text-primary-700'
      "
    >
      {{ label }}
    </span>
    {{ props.suffix }}
  </div>
</template>

<script lang="ts" setup>
import type { BrandText } from '~/types/brand-text'

const props = withDefaults(defineProps<BrandText>(), {
  color: 'primary',
  background: false
})

const color = computed(() => {
  return `text-${props.color}`
})

const label = computed(() => {
  const formattedLabel = props.label.replace(/\s+/g, ' ')
  return `${formattedLabel}`
})
</script>
