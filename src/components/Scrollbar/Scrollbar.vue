<template>
  <div
    :class="['ui-scrollbar', `ui-scrollbar--${widthVariant}`]"
    :style="customStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  width: { type: String, default: 'md' }, // sm, md, lg
  style: { type: Object, default: () => ({}) },
})

const widthVariant = computed(() => {
  if (['sm', 'md', 'lg'].includes(props.width)) return props.width
  return 'md'
})

const customStyle = computed(() => ({
  ...props.style,
}))
</script>

<style scoped>
.ui-scrollbar {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary-300, #a5b4fc) var(--color-background-primary, #fff);
}
.ui-scrollbar::-webkit-scrollbar {
  width: 8px;
  background: var(--color-background-primary, #fff);
}
.ui-scrollbar--sm::-webkit-scrollbar {
  width: 6px;
}
.ui-scrollbar--md::-webkit-scrollbar {
  width: 8px;
}
.ui-scrollbar--lg::-webkit-scrollbar {
  width: 12px;
}
.ui-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-primary-300, #a5b4fc);
  border-radius: 6px;
}
.ui-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-500, #3b82f6);
}
.ui-scrollbar::-webkit-scrollbar-track {
  background: var(--color-background-primary, #fff);
  border-radius: 6px;
}
</style>
