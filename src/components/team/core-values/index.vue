<template>
  <div class="mt-16 px-20 py-10 gap-10">
    <div class="text-center w-full inline-block px-6 py-3 rounded-md ">
        <CommonBrandText label="Our Core Values" color="blue-700"
          class="text-center text-xl font-bold md:text-6xl" background slide>
        </CommonBrandText>
        <p class="text-center text-xs md:text-base">
          Our culture is <strong class="text-blue-700">can-do mindset</strong> - Even though what we do is challenging, we are able to achieve all we want with <strong class="text-blue-700">03 working principles.</strong>
        </p>
      </div>

    <div class="mt-8">
      <div class="flex justify-evenly items-center gap-4 border-b border-gray-200 pb-4 px-12">
        <button
          v-for="(tab, index) in coreValuesTabs"
          :key="index"
          @click="activeTab = index"
          :class="['text-xl font-semibold uppercase py-2 px-4 transition-all duration-300 ease-in-out hover:text-blue-700', activeTab === index ? 'text-blue-700 border-b-4 border-orange-500' : 'text-gray-500 border-b-2 border-transparent']"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="mt-8 text-2xl text-gray-700 text-justify leading-relaxed" v-html="coreValuesTabs[activeTab].content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref(0);
const coreValuesTabs = ref([
  {
    label: 'GOAL ORIENTED',
    content: `<p>We do not do things without being crystal clear <strong>WHY</strong> we do them and <strong>WHAT</strong> success looks like.</p>
    <br />
    <p>We are resilient to overcome all difficulties until we achieve the goal or pivot to a new goal.</p>`
  },
  {
    label: 'EXCELLENCE',
    content: `<p>We insist on the highest level of quality in <strong>EVERYTHING WE DO</strong>, down to details like an email.</p>
    <br/>
    <p>We consistently try to learn and improve instead of being content with the status quo.</p>`
  },
  {
    label: 'LIKE A FAMILY',
    content: `<p>We are ready to give brutally honest feedback to one another to make them better.</p>
    <br>
    <p>We work hard and play hard <strong>TOGETHER</strong>.</p>`
  }
]);
</script>
