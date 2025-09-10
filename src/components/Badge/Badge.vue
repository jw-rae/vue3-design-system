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
      'border-2 border-accent-success-main', 
      'text-accent-success-dark',
      'dark:text-accent-success-light',
    ],
    warning: [
      'bg-transparent', 
      'border-2 border-accent-warning-main', 
      'text-accent-warning-dark',
      'dark:text-accent-warning-light',
    ],
    error: [
      'bg-transparent', 
      'border-2 border-accent-error-main', 
      'text-accent-error-dark',
      'dark:text-accent-error-light',
    ],
    info: [
      'bg-transparent', 
      'border-2 border-accent-info-main', 
      'text-accent-info-dark',
      'dark:text-accent-info-light',
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
      // Success using theme-aware accent colors
      'bg-accent-success-light/30', 
      'dark:bg-accent-success-dark/30',
      'border border-accent-success-main/50', 
      'text-accent-success-dark',
      'dark:text-accent-success-light',
    ],
    warning: [
      // Warning using theme-aware accent colors
      'bg-accent-warning-light/30', 
      'dark:bg-accent-warning-dark/30',
      'border border-accent-warning-main/50', 
      'text-accent-warning-dark',
      'dark:text-accent-warning-light',
    ],
    error: [
      // Error using theme-aware accent colors
      'bg-accent-error-light/30', 
      'dark:bg-accent-error-dark/30',
      'border border-accent-error-main/50', 
      'text-accent-error-dark',
      'dark:text-accent-error-light',
    ],
    info: [
      // Info using theme-aware accent colors
      'bg-accent-info-light/30', 
      'dark:bg-accent-info-dark/30',
      'border border-accent-info-main/50', 
      'text-accent-info-dark',
      'dark:text-accent-info-light',
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
