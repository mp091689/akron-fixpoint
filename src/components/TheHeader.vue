<script setup lang="ts">
import {onMounted, ref} from "vue";
import router from "@/router";

const menuExpanded = ref<boolean>(false);

const offsetTopMap = ref({} as { [key: string]: number });

const goTo = async (anchor: string) => {
  await router.push({name: "home"});
  const main = document.querySelector('main')!;
  main.scrollTo({top: offsetTopMap.value[anchor]});
  menuExpanded.value = false;
}

onMounted(() => {
  // refactor this f#$#@$hit
  setTimeout(() => {
    const sections = document.querySelector("main")?.getElementsByClassName("sticky");
    Array.prototype.forEach.call(sections, function (el) {
      offsetTopMap.value[el.id] = el.offsetTop;
    });
  }, 1);
});
</script>

<template>
  <header class="fixed top-0 left-0 w-screen z-50 px-4 bg-zinc-900 text-zinc-300 border-b border-b-zinc-700">
    <div class="flex grid-cols-2">
      <img src="@/assets/logo.png" alt="logo" class="w-18">
      <div class="w-full flex justify-end">
        <button class="md:hidden mr-2" @click="menuExpanded = !menuExpanded">
          <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path v-show="!menuExpanded" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
            <path v-show="menuExpanded" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"
                  d="M 1 1 15 15 M 15 1 1 15"/>
          </svg>
        </button>
      </div>
    </div>
    <ul class="grid grid-cols-1 md:flex md:justify-evenly mt-4 md:mt-0 uppercase"
        :class="[!menuExpanded ? 'hidden' : 'flex']">
      <li class="border-b border-zinc-700 pb-6"><a @click.prevent="goTo('home')" class="w-full text-center">Home</a></li>
      <li class="border-b border-zinc-700 py-6"><a @click.prevent="goTo('services')" class="w-full text-center">services</a></li>
      <li class="border-b border-zinc-700 py-6"><a @click.prevent="goTo('about-us')" class="w-full text-center">About Us</a></li>
      <li class="border-b border-zinc-700 py-6"><a @click.prevent="goTo('feedback')" class="w-full text-center">Feedback</a></li>
      <li class="py-6"><a @click.prevent="goTo('faq')" class="w-full text-center">FAQ</a></li>
    </ul>
  </header>
</template>

<style scoped>
@reference "tailwindcss";

ul li {
  @apply flex justify-end hover:font-bold hover:cursor-pointer;
}
</style>
