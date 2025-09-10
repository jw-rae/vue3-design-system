<template>
  <div :class="spinnerClasses">
    <svg
      :class="svgClasses"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <span v-if="label" :class="labelClasses">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'white' | 'gray'
  label?: string
  centered?: boolean
}

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: 'md',
  color: 'primary',
  centered: false,
})

const spinnerClasses = computed(() => {
  const baseClasses = ['inline-flex', 'items-center']
  
  if (props.centered) {
    baseClasses.push('justify-center', 'w-full')
  }
  
  if (props.label) {
    baseClasses.push('gap-2')
  }
  
  return baseClasses
})

const svgClasses = computed(() => {
  const baseClasses = ['animate-spin']
  
  // Size classes
  const sizeClasses = {
    xs: ['h-3', 'w-3'],
    sm: ['h-4', 'w-4'],
    md: ['h-6', 'w-6'],
    lg: ['h-8', 'w-8'],
    xl: ['h-12', 'w-12'],
  }
  
  // Color classes
  const colorClasses = {
    primary: ['text-primary-500'],
    secondary: ['text-text-secondary'],
    white: ['text-white'],
    gray: ['text-text-tertiary'],
  }
  
  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...colorClasses[props.color],
  ]
})

const labelClasses = computed(() => {
  const baseClasses = ['font-medium']
  
  // Size-based text classes
  const textSizeClasses = {
    xs: ['text-xs'],
    sm: ['text-sm'],
    md: ['text-base'],
    lg: ['text-lg'],
    xl: ['text-xl'],
  }
  
  // Color classes for text
  const colorClasses = {
    primary: ['text-primary-600'],
    secondary: ['text-text-secondary'],
    white: ['text-white'],
    gray: ['text-text-tertiary'],
  }
  
  return [
    ...baseClasses,
    ...textSizeClasses[props.size],
    ...colorClasses[props.color],
  ]
})
</script>
