<script lang="ts" setup>
import TheCard from "@/components/TheCard.vue";

import bgImage from '@/assets/repair-service-_v_.jpg'
import bgCardMac from '@/assets/servises/mac.webp'
import bgCardPhone from '@/assets/servises/phone.webp'
import bgCardConsole from '@/assets/servises/console.webp'
import bgCardTV from '@/assets/servises/tv.webp'
import bgCardTablet from '@/assets/servises/tablet.webp'
import bgCardDiagnostic from '@/assets/servises/diagnostic.webp'
</script>

<template>
  <div :style="{ backgroundImage: `url(${bgImage})` }"
       class="rounded-2xl w-full h-10/12 bg-cover bg-center flex flex-col items-center p-8">
    <div class="flex flex-col">
      <h2 class="text-left font-bold text-4xl text-shadow-2xs">FixPoint</h2>
      <p class="text-right text-yellow-400 text-shadow-2xs">Akron</p>
    </div>
    <p class="text-center leading-8 text-gray-700">Professional repair of smartphones, tablets,
      laptops,
      gaming consoles, and other electronics
      in Akron.</p>
  </div>
  <TheCard :background-img="bgCardPhone" title="Cellphone service" />
  <TheCard :background-img="bgCardTablet" title="Tablet service" />
  <TheCard :background-img="bgCardMac" title="Laptop service" />
  <TheCard :background-img="bgCardConsole" title="Gaming console service" />
  <TheCard :background-img="bgCardTV" title="TV service" />
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
</template>
