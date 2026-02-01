<script lang="ts" setup>
import {ref} from 'vue'

import TheCard from "@/components/TheCard.vue";
import bgImage from '@/assets/repair-service-_v_.jpg'
import bgCardDiagnostic from '@/assets/servises/diagnostic.webp'
import Benefits from "@/components/TheBenefits.vue";
import TheFaqItem from "@/components/TheFaqItem.vue";
import {faqItems} from "@/data/faq";
import {serviceCards} from '@/data/services'
import {benefits} from "@/data/benefits";


const openIndex = ref<number | null>(null)
</script>

<template>
  <section id="home" :style="{ backgroundImage: `url(${bgImage})` }"
       class="rounded-2xl w-full h-10/12 bg-cover bg-center flex flex-col items-center p-8">
    <div class="flex flex-col mb-4">
      <h2 class="text-left text-6xl text-gray-800">FixPoint</h2>
      <p class="text-right text-gray-800 text-xl -mt-2">Akron</p>
    </div>
    <p class="text-center leading-8 text-gray-700">Professional repair of smartphones, tablets,
      laptops, gaming consoles, and other electronics in Akron.</p>
  </section>

  <section id="services" class="mb-12">
    <h1 class="mt-16 text-4xl text-center">Our Services</h1>
    <TheCard
      v-for="card in serviceCards"
      :key="card.title"
      :background-img="card.backgroundImg"
      :title="card.title"
    />
  </section>

  <section id="benefits" class="mb-12">
    <ul class="grid grid-cols-2 gap-8 mt-18 mb-18">
      <li v-for="b in benefits" :key="b.title">
        <Benefits :badge="b.badge" :title="b.title">
          {{ b.text }}
        </Benefits>
      </li>
    </ul>
  </section>

  <section id="about-us" class="mb-12">
    <TheCard :background-img="bgCardDiagnostic" title="Free diagnostic">
      <div class="space-y-4">
        <div>
          <h2 class="text-4xl">FixPoint Akron</h2>
          <h3 class="text-2xl">Service Center</h3>
        </div>
        <p><strong class="font-bold">FixPoint Akron</strong> provides professional repair of phones,
          smartphones, tablets, laptops, and other electronic devices of almost all brands and models.
        </p>
        <p>We never charge money just “to take a look.” At <strong class="font-bold">FixPoint
          Akron</strong>, diagnostics for your device
          are completely free. Every day, we handle numerous repairs, monitor the work of our
          technicians, and ensure that repair times for phones, laptops, tablets, and other gadgets
          stay fast and reliable.</p>
      </div>
    </TheCard>
  </section>

  <section id="faq" class="space-y-4">
    <h2 class="text-4xl text-center">F.A.Q.</h2>
    <TheFaqItem
      v-for="(it, i) in faqItems"
      :key="it.q"
      :question="it.q"
      :answer="it.a"
      :open="openIndex === i"
      @toggle="openIndex = openIndex === i ? null : i"
    />
  </section>

</template>
