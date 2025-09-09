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
    'font-medium',
    'border',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-2', 'py-0.5', 'text-xs'],
    md: ['px-2.5', 'py-1', 'text-sm'],
    lg: ['px-3', 'py-1.5', 'text-base'],
  }

  // Variant classes
  const variantClasses = props.outline ? {
    primary: [
      'bg-transparent', 
      'border-primary-500', 
      'dark:border-primary-400',
      'text-primary-500',
      'dark:text-primary-400'
    ],
    secondary: [
      'bg-transparent', 
      'border-gray-500', 
      'dark:border-gray-400',
      'text-gray-500',
      'dark:text-gray-400'
    ],
    success: [
      'bg-transparent', 
      'border-success-500', 
      'dark:border-success-400',
      'text-success-500',
      'dark:text-success-400'
    ],
    warning: [
      'bg-transparent', 
      'border-warning-500', 
      'dark:border-warning-400',
      'text-warning-500',
      'dark:text-warning-400'
    ],
    error: [
      'bg-transparent', 
      'border-error-500', 
      'dark:border-error-400',
      'text-error-500',
      'dark:text-error-400'
    ],
    info: [
      'bg-transparent', 
      'border-primary-400', 
      'dark:border-primary-300',
      'text-primary-400',
      'dark:text-primary-300'
    ],
  } : {
    primary: [
      'bg-primary-100', 
      'dark:bg-primary-900/30',
      'border-primary-200', 
      'dark:border-primary-700',
      'text-primary-800',
      'dark:text-primary-200'
    ],
    secondary: [
      'bg-gray-100', 
      'dark:bg-gray-700',
      'border-gray-200', 
      'dark:border-gray-600',
      'text-gray-800',
      'dark:text-gray-200'
    ],
    success: [
      'bg-success-100', 
      'dark:bg-success-900/30',
      'border-success-200', 
      'dark:border-success-700',
      'text-success-800',
      'dark:text-success-200'
    ],
    warning: [
      'bg-warning-100', 
      'dark:bg-warning-900/30',
      'border-warning-200', 
      'dark:border-warning-700',
      'text-warning-800',
      'dark:text-warning-200'
    ],
    error: [
      'bg-error-100', 
      'dark:bg-error-900/30',
      'border-error-200', 
      'dark:border-error-700',
      'text-error-800',
      'dark:text-error-200'
    ],
    info: [
      'bg-blue-100', 
      'dark:bg-blue-900/30',
      'border-blue-200', 
      'dark:border-blue-700',
      'text-blue-800',
      'dark:text-blue-200'
    ],
  }

  // Border radius
  const radiusClasses = props.rounded ? ['rounded-full'] : ['rounded-md']

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...radiusClasses,
  ]
})
</script>
