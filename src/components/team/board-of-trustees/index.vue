<template>
  <div class="mt-16 px-20 py-10">
    <div class="text-center w-full inline-block px-6 py-3 rounded-md border-2 border-blue-700">
      <h2 class="text-3xl font-bold text-blue-700">Board of Trustees</h2>
    </div>
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-blue-700 text-center mb-8">Chairs</h3>
      <div class="flex flex-wrap justify-center gap-32">
        <div v-for="(chair, index) in chairs" :key="index" class="flex flex-col items-center">
          <img :src="chair.image" alt="Chair Photo" class="w-40 h-40 object-cover rounded-full mb-4" />
          <h4 class="text-lg font-bold text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-700">{{ chair.name }}</h4>
          <p class="text-md text-gray-500 font-semibold text-center" v-html="chair.position"></p>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <h3 class="text-2xl font-bold text-blue-700 text-center mb-2">Board Advisors</h3>
      <p class="text-center text-sm text-black mb-8">*Non-exhaustive list</p>
      <div class="flex flex-wrap justify-center gap-32">
        <div v-for="(advisor, index) in advisors" :key="index" class="flex flex-col items-center">
          <img :src="advisor.image" alt="Advisor Photo" class="w-40 h-40 object-cover rounded-full mb-4" />
          <h4 class="text-lg font-bold text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-700">{{ advisor.name }}</h4>
          <p class="text-md text-gray-500 font-semibold text-center" v-html="advisor.position"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const chairs = ref([
  {
    name: 'Ms. Thanh Hoang',
    position: '<strong>Chair</strong><br/>Growth at Stealth Startup <br/> Incoming Consultant at <br/> McKinsey',
    image: '/board-chair1.png'
  },
  {
    name: 'Ms. Thi Le',
    position: '<strong>Vice Chair</strong> <br/> Strategy & Development at <br/>Masan',
    image: '/board-chair2.png'
  },
  {
    name: 'Mr. Vu Tran',
    position: '<strong>Vice Chair</strong> <br/> Ex Investment Banking at <br/>BDA Partners',
    image: '/board-chair3.png'
  }
]);

const advisors = ref([
  {
    name: 'Dr. Cuong Nguyen (Miro)',
    position: '<strong>Vinfast</strong> <br/>Global KOL & Partnership Director',
    image: '/board-advisor1.png'
  },
  {
    name: 'Ms. Huong Tran',
    position: '<strong>Monk\'s Hill Ventures</strong><br/> Venture Partner',
    image: '/board-advisor2.png'
  },
  {
    name: 'Ms. Thao Ha',
    position: '<strong>Integra Partners</strong><br/> Venture Partner',
    image: '/board-advisor3.png'
  }
]);
</script>
