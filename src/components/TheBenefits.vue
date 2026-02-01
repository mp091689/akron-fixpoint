<script lang="ts" setup>
import TheBenefitIcon from "@/components/TheBenefitIcon.vue";

defineProps<{ badge: string, title: string }>();
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <TheBenefitIcon>{{ badge }}</TheBenefitIcon>
    <strong class="text-2xl font-extralight text-nowrap">{{ title }}</strong>
    <p class="text-center text-sm">
      <slot />
    </p>
  </div>
</template>
