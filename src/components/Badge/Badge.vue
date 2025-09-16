<template>
  <div :class="badgeClasses" :style="diagonalStyles">
    <span v-if="diagonal" class="diagonal-content">
      <slot />
    </span>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  outline?: boolean
  diagonal?: boolean
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  rounded: false,
  outline: false,
  diagonal: false,
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

  // Border radius - support for diagonal sci-fi corners
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners-sm'] 
    : props.rounded 
    ? ['rounded-full'] 
    : ['rounded-lg']

  // Text colors for diagonal variants (override default variant text colors)
  const diagonalTextClasses = props.diagonal ? (() => {
    if (props.outline) {
      // Outline variants use dark text on light backgrounds
      switch (props.variant) {
        case 'primary':
          return ['text-primary-500', 'dark:text-primary-500'] // Match the border color exactly
        case 'secondary':
          return ['text-primary-700', 'dark:text-primary-200']
        case 'success':
          return ['text-green-700', 'dark:text-green-200'] // Darker in dark mode for better contrast
        case 'warning':
          return ['text-orange-700', 'dark:text-orange-200']
        case 'error':
          return ['text-red-700', 'dark:text-red-200']
        case 'info':
          return ['text-blue-700', 'dark:text-blue-200']
        default:
          return ['text-primary-500', 'dark:text-primary-500']
      }
    } else {
      // Filled variants need high contrast
      switch (props.variant) {
        case 'primary':
          return ['text-white', 'dark:text-white'] // White on primary-500
        case 'secondary':
          return ['text-primary-900', 'dark:text-primary-900'] // Dark text on light background
        case 'success':
          return ['text-white', 'dark:text-white'] // White on accent colors
        case 'warning':
          return ['text-white', 'dark:text-white']
        case 'error':
          return ['text-white', 'dark:text-white']
        case 'info':
          return ['text-white', 'dark:text-white']
        default:
          return ['text-white', 'dark:text-white']
      }
    }
  })() : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...(props.diagonal ? [] : variantClasses[props.variant]), // Skip variant classes for diagonal
    ...radiusClasses,
    ...diagonalTextClasses,
  ]
})

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  // Get colors based on variant and outline state
  const colors = getBadgeDiagonalColors(props.variant, props.outline)
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

// Helper to get colors for diagonal effect
function getBadgeDiagonalColors(variant: BadgeProps['variant'], outline: boolean) {
  const colorMap = {
    primary: {
      border: 'var(--color-primary-500)',
      background: outline ? 'var(--color-primary-50)' : 'var(--color-primary-500)',
    },
    secondary: {
      border: 'var(--color-primary-400)',
      background: outline ? 'var(--color-primary-50)' : 'var(--color-primary-300)',
    },
    success: {
      border: 'var(--color-accent-success-main)',
      background: outline ? 'var(--color-surface-secondary)' : 'var(--color-accent-success-subtle)',
    },
    warning: {
      border: 'var(--color-accent-warning-main)',
      background: outline ? 'var(--color-surface-secondary)' : 'var(--color-accent-warning-subtle)',
    },
    error: {
      border: 'var(--color-accent-error-main)',
      background: outline ? 'var(--color-surface-secondary)' : 'var(--color-accent-error-subtle)',
    },
    info: {
      border: 'var(--color-accent-info-main)',
      background: outline ? 'var(--color-surface-secondary)' : 'var(--color-accent-info-subtle)',
    },
  } as const
  
  return colorMap[variant || 'primary']
}
</script>

<style scoped>
.diagonal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
