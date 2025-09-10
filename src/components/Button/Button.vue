<template>
  <button
    :class="buttonClasses"
    :style="diagonalStyles"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
    class="ui-focus-ring ui-transition"
  >
    <span v-if="diagonal" class="diagonal-content">
      <slot name="prefix" />
      <span v-if="$slots.default" class="button-content">
        <slot />
      </span>
      <slot name="suffix" />
    </span>
    <template v-else>
      <slot name="prefix" />
      <span v-if="$slots.default" class="button-content">
        <slot />
      </span>
      <slot name="suffix" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'error' | 'info'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  rounded?: boolean
  diagonal?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  block: false,
  rounded: false,
  diagonal: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'border',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'transform',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
    'disabled:transform-none',
    'disabled:shadow-none',
  ]

  // Size classes
  const sizeClasses = {
    xs: ['px-2', 'py-1', 'text-xs', 'gap-1'],
    sm: ['px-3', 'py-1.5', 'text-sm', 'gap-1.5'],
    md: ['px-4', 'py-2', 'text-base', 'gap-2'],
    lg: ['px-6', 'py-3', 'text-lg', 'gap-2'],
    xl: ['px-8', 'py-4', 'text-xl', 'gap-3'],
  }

  // Variant classes - simplified for better legibility
  const variantClasses = {
    primary: [
      // Bold, confident primary action - solid colors
      'bg-primary-500',
      'border-primary-500',
      'text-white',
      'hover:bg-primary-600',
      'hover:border-primary-600',
      'active:bg-primary-700',
      // Dark mode - good contrast
      'dark:bg-primary-400',
      'dark:border-primary-400',
      'dark:text-primary-950',
      'dark:hover:bg-primary-500',
      'dark:hover:border-primary-500',
      'dark:active:bg-primary-600',
    ],
    secondary: [
      // Sophisticated, refined secondary - clear backgrounds
      'bg-primary-100',
      'border-primary-200',
      'text-primary-700',
      'hover:bg-primary-200',
      'hover:border-primary-300',
      'active:bg-primary-300',
      // Dark mode - solid contrast
      'dark:bg-primary-800',
      'dark:border-primary-700',
      'dark:text-primary-100',
      'dark:hover:bg-primary-700',
      'dark:hover:border-primary-600',
      'dark:active:bg-primary-600',
    ],
    outline: [
      // Clean outline - no transparency
      'bg-transparent',
      'border-2 border-primary-500',
      'text-primary-500',
      'hover:bg-primary-50',
      'hover:text-primary-600',
      'hover:border-primary-600',
      'active:bg-primary-100',
      // Dark mode
      'dark:border-primary-400',
      'dark:text-primary-400',
      'dark:hover:bg-primary-900',
      'dark:hover:text-primary-300',
      'dark:hover:border-primary-300',
      'dark:active:bg-primary-800',
    ],
    ghost: [
      // Subtle ghost - minimal but visible
      'bg-transparent',
      'border-transparent',
      'text-primary-500',
      'hover:bg-primary-100',
      'hover:text-primary-600',
      'active:bg-primary-200',
      // Dark mode
      'dark:text-primary-400',
      'dark:hover:bg-primary-900',
      'dark:hover:text-primary-300',
      'dark:active:bg-primary-800',
    ],
    success: [
      // Success using theme-aware accent colors
      'bg-accent-success-main',
      'border-accent-success-main',
      'text-white',
      'hover:bg-accent-success-dark',
      'hover:border-accent-success-dark',
      'active:bg-accent-success-dark',
      // Dark mode - maintain good contrast
      'dark:bg-accent-success-main',
      'dark:border-accent-success-main',
      'dark:text-white',
      'dark:hover:bg-accent-success-light',
      'dark:hover:border-accent-success-light',
      'dark:active:bg-accent-success-light',
    ],
    warning: [
      // Warning using theme-aware accent colors
      'bg-accent-warning-main',
      'border-accent-warning-main',
      'text-white',
      'hover:bg-accent-warning-dark',
      'hover:border-accent-warning-dark',
      'active:bg-accent-warning-dark',
      // Dark mode
      'dark:bg-accent-warning-main',
      'dark:border-accent-warning-main',
      'dark:text-white',
      'dark:hover:bg-accent-warning-light',
      'dark:hover:border-accent-warning-light',
      'dark:active:bg-accent-warning-light',
    ],
    error: [
      // Error using theme-aware accent colors
      'bg-accent-error-main',
      'border-accent-error-main',
      'text-white',
      'hover:bg-accent-error-dark',
      'hover:border-accent-error-dark',
      'active:bg-accent-error-dark',
      // Dark mode
      'dark:bg-accent-error-main',
      'dark:border-accent-error-main',
      'dark:text-white',
      'dark:hover:bg-accent-error-light',
      'dark:hover:border-accent-error-light',
      'dark:active:bg-accent-error-light',
    ],
    info: [
      // Info using theme-aware accent colors
      'bg-accent-info-main',
      'border-accent-info-main',
      'text-white',
      'hover:bg-accent-info-dark',
      'hover:border-accent-info-dark',
      'active:bg-accent-info-dark',
      // Dark mode
      'dark:bg-accent-info-main',
      'dark:border-accent-info-main',
      'dark:text-white',
      'dark:hover:bg-accent-info-light',
      'dark:hover:border-accent-info-light',
      'dark:active:bg-accent-info-light',
    ],
  }

  // Border radius - support for diagonal sci-fi corners
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners-sm'] 
    : props.rounded 
    ? ['rounded-full'] 
    : ['rounded-lg']

  // Block
  const blockClasses = props.block ? ['w-full'] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...radiusClasses,
    ...blockClasses,
  ]
})

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  // Get the border and background colors based on variant
  const colors = getVariantColors(props.variant)
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

// Helper to get colors for diagonal effect using theme CSS custom properties
function getVariantColors(variant: ButtonProps['variant']) {
  const colorMap = {
    primary: {
      border: 'var(--color-primary-500)',
      background: 'var(--color-primary-500)', // Revert to solid color
    },
    secondary: {
      border: 'var(--color-primary-300)',
      background: 'var(--color-primary-50)', // Even lighter background
    },
    outline: {
      border: 'var(--color-primary-500)',
      background: 'var(--color-primary-50)', // Light fill instead of transparent
    },
    ghost: {
      border: 'var(--color-text-tertiary)',
      background: 'transparent',
    },
    success: {
      border: 'var(--color-accent-success-main)',
      background: 'var(--color-accent-success-main)', // Revert to solid color
    },
    warning: {
      border: 'var(--color-accent-warning-main)',
      background: 'var(--color-accent-warning-main)', // Revert to solid color
    },
    error: {
      border: 'var(--color-accent-error-main)',
      background: 'var(--color-accent-error-main)', // Revert to solid color
    },
    info: {
      border: 'var(--color-accent-info-main)',
      background: 'var(--color-accent-info-main)', // Revert to solid color
    },
  } as const
  
  return colorMap[variant || 'primary']
}
</script>

<style scoped>
.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.diagonal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
