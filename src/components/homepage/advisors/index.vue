<template>
  <div class="bg-primary-700 relative overflow-hidden pb-16 pt-8">
    <UContainer>
      <div class="flex flex-col items-center justify-center  gap-2 md:gap-4">
        <CommonBrandText
          label="Our Advisors"
          color="blue-700"
          class="text-xl font-bold md:text-6xl"
          background
        >
        </CommonBrandText>
        <p class="mb-8 text-xs text-center text-white md:text-base">
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
    <img
        src="/arcs/arc1.png"
        class="absolute -left-[150px] lg:-left-[300px] z-10 rotate-[150] top-[35px] lg:-top-[70px] w-[190px] lg:w-[384px]"
      />
      <img
        src="/arcs/arc1.png"
        class="absolute -right-[150px] lg:-right-[300px] z-10 rotate-[150] bottom-[35px] lg:-bottom-[70px] w-[190px] lg:w-[384px]"
      />
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
    name: 'Nam Doan',
    avatar: './advisor4.png',
    position: 'Co-founder',
    office: {
      name: '@ThinkZone Venture',
      position: 'Chief Strategy Officer'
    }
  }
  ,
  {
    name: 'Huong Tran',
    avatar: './advisor2.png',
    position: 'Board Advisor',
    office: {
      name: "@Monk's Hill Ventures",
      position: 'Venture Partner'
    }
  },
  {
    name: 'Nguyen Huu Cuong',
    avatar: './advisor3.png',
    position: 'Board Advisor',
    office: {
      name: '@VinAI',
      position: 'Co-founder - Accelerator Manager'
    }
  },
  
  {
    name: 'Thao Ha', 
    avatar: './advisor5.png',
    position: 'Board Advisor',
    office: {
      name: '@Integra Partner',
      position: 'Venture Partner'
    }
  }
])
</script>
