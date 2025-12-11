<script lang="ts" setup>
import {computed} from 'vue';

interface CardProps {
  title?: string;
  description?: string;
  backgroundImg?: string;
}

const props = defineProps<CardProps>();
const bgStyle = computed(() => {
  if (!props.backgroundImg) return {};
  return {
    backgroundImage: `url(${new URL(props.backgroundImg, import.meta.url).href})`,
  };
});
</script>

<template>
  <div class="mt-5">
    <div
      :style="bgStyle"
      class="card-header rounded-2xl w-full h-64 bg-cover bg-center flex flex-col justify-end p-8">
      <h4 class="font-normal tracking-wide text-shadow-xs">{{ props.title }}</h4>
    </div>
    <div class="card-content mt-4">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
