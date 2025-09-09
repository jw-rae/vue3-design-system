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
    primary: ['bg-transparent', 'border-primary-500', 'text-primary-500'],
    secondary: ['bg-transparent', 'border-gray-500', 'text-gray-500'],
    success: ['bg-transparent', 'border-success-500', 'text-success-500'],
    warning: ['bg-transparent', 'border-warning-500', 'text-warning-500'],
    error: ['bg-transparent', 'border-error-500', 'text-error-500'],
    info: ['bg-transparent', 'border-primary-400', 'text-primary-400'],
  } : {
    primary: ['bg-primary-100', 'border-primary-200', 'text-primary-800'],
    secondary: ['bg-gray-100', 'border-gray-200', 'text-gray-800'],
    success: ['bg-success-100', 'border-success-200', 'text-success-800'],
    warning: ['bg-warning-100', 'border-warning-200', 'text-warning-800'],
    error: ['bg-error-100', 'border-error-200', 'text-error-800'],
    info: ['bg-blue-100', 'border-blue-200', 'text-blue-800'],
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
