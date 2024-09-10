<template>
  <div>
    <UContainer class="text-center">
      <div class="leading-10">
        <h1 class="text-2xl font-bold md:text-6xl">Our community nurtures</h1>
        <CommonBrandText
          label="Young founders from 0 to 1"
          class="text-2xl font-bold md:text-6xl"
          color="blue-700"
        ></CommonBrandText>
      </div>
      <div class="text-xs md:text-base my-4 md:my-10 text-center">
        <p>
          Vietnamese youth often get stuck in ideation stage due to critical
          lack of resources. UpYouth's here to offer the right resources,
          direction, and connections you need.
        </p>
      </div>
    </UContainer>
    <UContainer :ui="{ constrained: 'lg:max-w-7xl max-w-xl' }">
      <div v-for="item in aboutUsList" :key="item.id">
        <div
          class="lg:flex lg:items-center lg:justify-between gap-4 lg:gap-16 lg:text-left text-center"
          :class="item.id % 2 === 0 ? 'my-8 md:my-16 flex-row' : 'flex-row-reverse'"
        >
          <div class="h-full w-full">
            <img
              :src="item.img"
              class="h-full w-full rounded-3xl object-contain"
            ></img>
          </div>
          <div class="mt-4 md:mt-16 flex flex-col items-center lg:items-start gap-2 md:gap-4 lg:mt-0 lg:gap-8">
            <div class="text-lg sm:text-3xl text-2xl leading-8">
              <CommonBrandText
                :label="item.label"
                class="font-bold"
                color="blue-700"
              ></CommonBrandText>
            </div>
            <p class="leading-6 sm:text-base text-xs">{{ item.content }}</p>
            <ULink :to="item.url" target="_blank">
              <UButton
                :label="item.link"
                icon="i-heroicons-arrow-right-16-solid"
                :trailing="true"
                variant="solid"
                size="lg"
                color="white"
                class="rounded-full w-fit hidden md:flex"
              ></UButton>
              <UButton
                :label="item.link"
                icon="i-heroicons-arrow-right-16-solid"
                :trailing="true"
                variant="solid"
                size="md"
                color="white"
                class="rounded-full w-fit md:hidden"
              ></UButton>
            </ULink>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import type { AboutUs } from "~/types/about-us";
const { width } = useWindowSize()

const aboutUsList = ref<AboutUs[]>([
  {
    id: 1,
    img: "techincubator.png",
    label: "TechYouth Incubator",
    content:
      "A startup program helping 40+ startups gain over 4500+ users combined and raise money from top VCs like Antler and Iterative, through a package of AWS credits, recruitment support, and close mentorship from 50+ industry leaders and successful founders.",
    link: "Visit TechYouth Incubator",
    url: "https://incubator.upyouth.org/"
  },
  {
    id: 2,
    img: "people.png",
    label: "Ecosystem community events",
    content:
      "Exclusive networking events uniting the startup ecosystem's top minds, with 130+ high-level guests from the US, Singapore, and Vietnam (e.g. Antler, Singapore Global Network, etc.) and 200+ young talents from MBB, Momo, Shopee, etc.",
    link: "Visit our recap",
    url: 'https://www.facebook.com/upyouth.org/'
  },
  {
    id: 3,
    img: "buildstreet.png",
    label: "Build Street",
    content:
      "A community for all builders (scientists, engineers, artists, film makers,...) with weekly 4-hour co-working sessions to bring ideas from 0 to 1 together.",
    link: "Visit Build Street",
    url: 'https://www.buildstreet.xyz/'
  },
  {
    id: 4,
    img: "hackyouth.png",
    label: "HackYouth",
    content:
      "A 2-day hackathon with HackMIT as a technical advisor, offering a 300-million-VND prize for future entrepreneurs to solve real social challenges by Elsa, Timo, VinaCapital Ventures, and more.",
    link: "Visit HackYouth",
    url: 'https://www.upyouth.org/hackyouth'
  },
]);
</script>
