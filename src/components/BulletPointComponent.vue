<script lang="ts" setup>
import BulletPointBadge from "@/components/BulletPointBadge.vue";

defineProps(['badge', 'title']);
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <BulletPointBadge>{{ badge }}</BulletPointBadge>
    <strong class="text-2xl font-extralight text-nowrap">{{ title }}</strong>
    <p class="text-center text-sm">
      <slot />
    </p>
  </div>
</template>

