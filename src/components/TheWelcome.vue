<script lang="ts" setup>
import bgImage from '@/assets/repair-service-_v_.jpg'
import bgCardMac from '@/assets/servises/mac.webp'
import bgCardPhone from '@/assets/servises/phone.webp'
import bgCardConsole from '@/assets/servises/console.webp'
import bgCardTV from '@/assets/servises/tv.webp'
import bgCardTablet from '@/assets/servises/tablet.webp'
import TheCard from "@/components/TheCard.vue";
</script>

<template>
    <div :style="{ backgroundImage: `url(${bgImage})` }"
         class="rounded-2xl w-full h-10/12 bg-cover bg-center flex flex-col items-center p-8">
      <div class="flex flex-col">
        <h2 class="text-left font-bold text-4xl text-white text-shadow-2xs">FixPoint</h2>
        <p class="text-right text-yellow-400 text-shadow-2xs">Akron</p>
      </div>
      <p class="text-center font-thin leading-8">Professional repair of smartphones, tablets, laptops,
        gaming consoles, and other electronics
        in Akron.</p>
    </div>
    <TheCard :background-img="bgCardPhone" title="Cellphone service" />
    <TheCard :background-img="bgCardTablet" title="Tablet service" />
    <TheCard :background-img="bgCardMac" title="Laptop service" />
    <TheCard :background-img="bgCardConsole" title="Gaming console service" />
    <TheCard :background-img="bgCardTV" title="TV service" />
</template>
