<template>
    <div class="mt-16 px-20">
      <div class="text-center w-full inline-block px-6 py-3 rounded-md border-2 border-blue-700">
        <h2 class="text-3xl font-bold text-blue-700">Executive Board</h2>
      </div>
      <div class="mt-8 grid gap-12">
        <Item
          v-for="(member, index) in executiveBoardMembers"
          :key="index"
          :member="member"
          :active-tab="activeTab[index]"
          @tab-click="(tab) => handleTabClick(index, tab)"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Item from './item.vue'; 
  
  // Define the executive board members
  const executiveBoardMembers = ref([
    {
      name: 'Dao Phan Anh',
      position: 'President',
      image: '/executive-board1.png',
      accomplishments: [
        'Working at a stealth startup in solar financing',
        'Worked as an associate at LvUp Ventures - an industry-agnostic early-stage VC',
        'Worked on sell-side M&A insurtech and renewables transactions ($300M+ deal value)',
        'Finance and Business Technology major at University of Miami (3.97 GPA)',
        'Portfolio Manager (Tech sector) on $2M student-managed investment fund',
        'Bermont-Carlin Scholars - top 5% finance-focused students',
      ],
      storyContent: 'Dao Phan Anh has extensive experience in finance and entrepreneurship, leading teams and managing investments in various sectors.',
    },
    {
      name: 'Pham Van Luong',
      position: '',
      image: '/executive-board2.png',
      accomplishments: [
        'Corporate Finance major at National Economics University (3.90 GPA)',
        'Scholarship for Excellence (awarded to top 1% students) at National Economics University',
        "CEO Trainee at GIMO (YC W'22)",
        'National First Runner-up of Microsoft Specialist Competition',
      ],
      storyContent: 'Pham Van Luong has shown excellence in both academics and entrepreneurship, participating in various programs and competitions.',
    },
    {
      name: 'Nguyen Canh Huy',
      position: '',
      image: '/executive-board3.png',
      accomplishments: [
        'First Runner-up at ICEAW Mainland China and South-East Asia Business Competition 2024',
        'KPMG Campus Ambassador',
        'Computer Science major at VinUniversity',
        'Honorary student at VinUni-Cornell Student Immersion Program 2023',
        'Intern at Got It AI',
      ],
      storyContent: 'Nguyen Canh Huy has been active in various international competitions, showcasing his skills in technology and business.',
    },
  ]);
  
  const activeTab = ref(Array(executiveBoardMembers.value.length).fill('accomplishments'));
  
  // Function to handle tab clicks
  const handleTabClick = (index: number, tab: string) => {
    activeTab.value[index] = tab;
  };
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  