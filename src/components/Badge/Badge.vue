<template>
  <div :class="badgeClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  outline?: boolean
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  rounded: false,
  outline: false,
})

const badgeClasses = computed(() => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold', // Changed from 'font-medium' for more impact
    'border',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-2', 'py-0.5', 'text-xs'],
    md: ['px-2.5', 'py-1', 'text-sm'],
    lg: ['px-3', 'py-1.5', 'text-base'],
  }

  // Variant classes - simplified for better legibility
  const variantClasses = props.outline ? {
    primary: [
      'bg-transparent', 
      'border-2 border-primary-500', 
      'dark:border-primary-400',
      'text-primary-600',
      'dark:text-primary-400',
    ],
    secondary: [
      'bg-transparent', 
      'border-2 border-primary-300', 
      'dark:border-primary-600',
      'text-primary-500',
      'dark:text-primary-500',
    ],
    success: [
      'bg-transparent', 
      'border-2 border-primary-400', 
      'dark:border-primary-500',
      'text-primary-500',
      'dark:text-primary-400',
    ],
    warning: [
      'bg-transparent', 
      'border-2 border-primary-400', 
      'dark:border-primary-500',
      'text-primary-500',
      'dark:text-primary-400',
    ],
    error: [
      'bg-transparent', 
      'border-2 border-primary-700', 
      'dark:border-primary-300',
      'text-primary-700',
      'dark:text-primary-300',
    ],
    info: [
      'bg-transparent', 
      'border-2 border-primary-300', 
      'dark:border-primary-600',
      'text-primary-400',
      'dark:text-primary-500',
    ],
  } : {
    primary: [
      // Rich, confident primary - solid backgrounds
      'bg-primary-100', 
      'dark:bg-primary-800',
      'border border-primary-300', 
      'dark:border-primary-700',
      'text-primary-800',
      'dark:text-primary-100',
    ],
    secondary: [
      // Soft, sophisticated secondary - solid
      'bg-primary-50', 
      'dark:bg-primary-900',
      'border border-primary-200', 
      'dark:border-primary-800',
      'text-primary-700',
      'dark:text-primary-200',
    ],
    success: [
      // Bright, celebratory success - solid
      'bg-primary-200', 
      'dark:bg-primary-700',
      'border border-primary-400', 
      'dark:border-primary-600',
      'text-primary-800',
      'dark:text-primary-100',
    ],
    warning: [
      // Attention-getting warning - solid
      'bg-primary-300', 
      'dark:bg-primary-600',
      'border border-primary-500', 
      'dark:border-primary-500',
      'text-primary-900',
      'dark:text-primary-50',
    ],
    error: [
      // Strong error using deep tones - solid
      'bg-primary-700/20', 
      'dark:bg-primary-200/30',
      'border border-primary-700/50', 
      'dark:border-primary-300/50',
      'text-primary-900',
      'dark:text-primary-50',
    ],
    info: [
      // Calm, informative - solid
      'bg-primary-50', 
      'dark:bg-primary-900',
      'border border-primary-200', 
      'dark:border-primary-800',
      'text-primary-600',
      'dark:text-primary-300',
    ],
  }

  // Border radius - more modern defaults
  const radiusClasses = props.rounded ? ['rounded-full'] : ['rounded-lg']

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...radiusClasses,
  ]
})
</script>
