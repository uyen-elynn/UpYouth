<template>
  <div class="bg-primary-700 pb-16 pt-8">
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-2 md:gap-4">
        <CommonBrandText
          label="Our Advisors"
          color="blue-700"
          class="text-xl font-bold md:text-6xl"
          background
        >
        </CommonBrandText>
        <p class="mb-8 text-xs text-white md:text-base">
          UpYouth is closely supported by high-level advisors, serial
          entrepreneurs, and seasoned investors.
        </p>
      </div>
      <div>
        <UCarousel
          :items="items"
          v-slot="{ item }"
          :ui="{
            item: 'basis-full md:basis-1/2 lg:basis-1/3',
            indicators: {
              active: 'bg-primary-50',
              inactive: 'bg-primary-500',
              wrapper:
                'absolute flex items-center justify-center gap-3 -bottom-10 inset-x-0'
            }
          }"
          indicators
        >
          <HomepageAdvisorsItem
            :avatar="item.avatar"
            :name="item.name"
            :office="item.office"
            :position="item.position"
          />
        </UCarousel>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { AdvisorItem } from '~/types/advisors'

const items = ref<AdvisorItem[]>([
  {
    name: 'Brian Minh Tran',
    avatar: './advisor1.png',
    position: 'Co-founder',
    office: {
      name: '',
      position: 'Forbes 30U30 Asia'
    }
  },
  {
    name: 'Huong Tran',
    avatar: './advisor2.png',
    position: 'Board Advisor',
    office: {
      name: "@Monk's Hill Ventures",
      position: 'Venture Partnee'
    }
  },
  {
    name: 'Nguyen Huu Cuong',
    avatar: './advisor3.png',
    position: 'Board Advisor',
    office: {
      name: '@VinAI',
      position: 'Chief Strategy Officer'
    }
  }
])
</script>
