
<script setup
lang = "ts" >
import {ref} from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div>
    <!-- Mobile Menu Button -->
    <button
      @click="toggleMenu"
      class="text-xl p-2 rounded-md bg-gray-200 hover:bg-gray-300 lg:hidden"
    >
      ☰
    </button>

    <!-- Menu -->
    <ul
      v-show="isMenuOpen"
      class="bg-white absolute top-14 left-0 w-full border-t border-gray-300 lg:static lg:flex lg:space-x-4 lg:border-none lg:top-auto lg:w-auto"
    >
      <li class="p-4 border-b border-gray-300 lg:border-none"><a href="#services">Services</a></li>
      <li class="p-4 border-b border-gray-300 lg:border-none"><a href="#reviews">Reviews</a></li>
      <li class="p-4 border-b border-gray-300 lg:border-none"><a href="#about-us">About Us</a></li>
      <li class="p-4 lg:border-none"><a href="#faq">FAQ</a></li>
    </ul>
  </div>
</template>

<style scoped>
</style>
