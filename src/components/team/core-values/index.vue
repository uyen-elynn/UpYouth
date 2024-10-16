<template>
  <div class="mt-16 px-20 py-10 gap-10">
    <div class="text-center w-full inline-block px-6 py-3 rounded-md border-2 border-blue-700">
      <h2 class="text-3xl font-bold text-blue-700">Our Core Values</h2>
    </div>
    <div class="mt-8">
      <div class="flex flex-wrap justify-center gap-4 border-b border-gray-200 pb-4 px-12">
        <button 
          v-for="(tab, index) in coreValuesTabs" 
          :key="index" 
          @click="activeTab = index" 
          :class="['text-center text-xl font-semibold px-4 py-2 whitespace-normal break-words', activeTab === index ? 'text-blue-700 border-b-4 border-orange-500' : 'text-gray-500']"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="mt-8 text-lg text-gray-500 text-justify" v-html="coreValuesTabs[activeTab].content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref(0);
const coreValuesTabs = ref([
  {
    label: 'STARTUP-CENTRIC',
    content: `<p>We are startup entrepreneurs ourselves. Our daily work covers from searching for user pain points to transforming insights into action. We, <strong>THE MAKERS</strong>, aim to create highly demanded and innovative products used by Vietnamese young entrepreneurs.</p>
    <br />
    <p>Our culture deeply embraces startup-centric values. We move <strong>FAST</strong> and <strong>MAKE</strong> things with a strong <strong>COMMITMENT</strong> and <strong>HIGH EFFICIENCY</strong> while still maintaining <strong>AGILITY</strong> to pivot if needed.</p>`
  },
  {
    label: 'A CAN-DO MINDSET',
    content: 'We encourage a can-do attitude in everything we do. Challenges are opportunities to learn, grow, and succeed.'
  },
  {
    label: 'DISCIPLINE',
    content: 'Discipline is key in ensuring that we achieve our goals efficiently and effectively.'
  },
  {
    label: 'EAGER TO LEARN NEW THINGS',
    content: 'We foster a culture where curiosity and continuous learning are highly valued.'
  },
  {
    label: 'MAKE AN IMPACT',
    content: 'We strive to make an impact with everything we do, from the smallest tasks to the biggest projects.'
  },
  {
    label: 'LIKE A FAMILY',
    content: 'We treat each other like family, supporting and encouraging one another to grow and succeed.'
  }
]);
</script>

<style scoped>
button {
  transition: all 0.3s ease;
  white-space: normal;
}

button:hover {
  color: #1d4ed8;
}
</style>