<template>
  <div class="mt-16 px-20 py-10">
    <div class="text-center w-full inline-block px-6 py-3 rounded-md border-2 border-blue-700">
      <h2 class="text-3xl font-bold text-blue-700">Board of Trustees</h2>
    </div>
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-blue-700 text-center mb-8">Chairs</h3>
      <div class="flex flex-wrap justify-center gap-12">
        <div v-for="(chair, index) in chairs" :key="index" class="flex flex-col items-center">
          <img :src="chair.image" alt="Chair Photo" class="w-40 h-40 object-cover rounded-full mb-4" />
          <h4 class="text-lg font-bold text-blue-500">{{ chair.name }}</h4>
          <p class="text-md text-gray-500 font-semibold">{{ chair.position }}</p>
        </div>
      </div>
    </div>
    <div class="mt-16">
      <h3 class="text-2xl font-bold text-blue-700 text-center mb-2">Board Advisors</h3>
      <p class="text-center text-sm text-black mb-8">*Non-exhaustive list</p>
      <div class="flex flex-wrap justify-center gap-12">
        <div v-for="(advisor, index) in advisors" :key="index" class="flex flex-col items-center">
          <img :src="advisor.image" alt="Advisor Photo" class="w-40 h-40 object-cover rounded-full mb-4" />
          <h4 class="text-lg font-bold text-blue-500">{{ advisor.name }}</h4>
          <p class="text-md text-gray-500 font-semibold">{{ advisor.position }}</p>
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
    position: 'Chair',
    image: '/board-chair1.png',
    office: {
      name: '@Harvard Business School',
      position: 'MBA Candidate'
    }
  },
  {
    name: 'Ms. Thi Le',
    position: 'Vice Chair',
    image: '/board-chair2.png',
    office: {
      name: '@Masan Group',
      position: 'Executive Assistant to Group CEO'
    }
  },
  {
    name: 'Mr. Vu Tran',
    position: 'Vice Chair',
    image: '/board-chair3.png',
    office: {
      name: '@BDA Partners',
      position: 'Ex-Investment Banking Analyst'
    }
  }
]);

const advisors = ref([
  {
    name: 'Dr. Cuong Nguyen (Miro)',
    image: '/board-advisor1.png',
    office: {
      name: '@VinFast',
      position: 'Global KOL & Partnership Director'
    }
  },
  {
    name: 'Ms. Huong Tran',
    image: '/board-advisor2.png',
    office: {
      name: "@Monk's Hill Ventures",
      position: 'Ex-Venture Partner'
    }
  },
  {
    name: 'Ms. Thao Ha',
    image: '/board-advisor3.png',
    office: {
      name: '@Integra Partner',
      position: 'Venture Partner'
    }
  }
]);
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .flex-wrap {
    gap: 8rem;
  }
}

h4 {
  transition: color 0.3s ease;
}

h4:hover {
  color: #1d4ed8;
}
</style>
