<template>
  <div :class="alertClasses" :style="diagonalStyles" role="alert">
    <div v-if="diagonal" class="diagonal-content">
      <div v-if="$slots.icon || showIcon" class="flex-shrink-0">
        <slot name="icon">
          <component :is="iconComponent" class="h-5 w-5" />
        </slot>
      </div>
      
      <div class="flex-1">
        <div v-if="title" class="font-medium mb-1">
          {{ title }}
        </div>
        <div>
          <slot />
        </div>
      </div>
      
      <div v-if="dismissible" class="flex-shrink-0 ml-4">
        <button
          @click="$emit('dismiss')"
          class="inline-flex text-current hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded-md p-1"
        >
          <XMarkIcon class="h-4 w-4" />
        </button>
      </div>
    </div>
    <template v-else>
      <div v-if="$slots.icon || showIcon" class="flex-shrink-0">
        <slot name="icon">
          <component :is="iconComponent" class="h-5 w-5" />
        </slot>
      </div>
      
      <div class="flex-1">
        <div v-if="title" class="font-medium mb-1">
          {{ title }}
        </div>
        <div>
          <slot />
        </div>
      </div>
      
      <div v-if="dismissible" class="flex-shrink-0 ml-4">
        <button
          @click="$emit('dismiss')"
          class="inline-flex text-current hover:text-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded-md p-1"
        >
          <XMarkIcon class="h-4 w-4" />
        </button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

export interface AlertProps {
  variant?: 'success' | 'warning' | 'error' | 'info'
  title?: string
  dismissible?: boolean
  showIcon?: boolean
  filled?: boolean
  diagonal?: boolean
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  dismissible: false,
  showIcon: true,
  filled: false,
  diagonal: false,
})

defineEmits<{
  dismiss: []
}>()

const iconComponent = computed(() => {
  const icons = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
  }
  return icons[props.variant]
})

const alertClasses = computed(() => {
  const baseClasses = [
    'flex',
    'p-4',
    props.diagonal ? 'ui-diagonal-corners' : 'rounded-xl', // Diagonal or rounded
    'border-l-4', // Add accent border for personality
    'shadow-sm', // Subtle shadow
    'gap-3',
    'transition-all',
    'duration-200',
  ]

  const variantClasses = {
    success: props.filled ? [
      // Filled success alerts - slightly green transparent background
      'bg-green-500/15',
      'dark:bg-green-400/15',
      'backdrop-blur-sm',
      'border-l-accent-success-main', 
      'border border-green-500/25', 
      'dark:border-green-400/25',
      'text-accent-success-dark',
      'dark:text-accent-success-light',
    ] : [
      // Regular success alerts use theme-aware accent colors
      'bg-accent-success-light/20', 
      'dark:bg-accent-success-dark/20',
      'border-l-accent-success-main', 
      'border border-accent-success-light/50', 
      'dark:border-accent-success-dark/50',
      'text-accent-success-dark',
      'dark:text-accent-success-light',
    ],
    warning: props.filled ? [
      // Filled warning alerts - slightly orange/yellow transparent background
      'bg-amber-500/15',
      'dark:bg-amber-400/15',
      'backdrop-blur-sm',
      'border-l-accent-warning-main', 
      'border border-amber-500/25', 
      'dark:border-amber-400/25',
      'text-accent-warning-dark',
      'dark:text-accent-warning-light',
    ] : [
      // Regular warning alerts use theme-aware accent colors
      'bg-accent-warning-light/20', 
      'dark:bg-accent-warning-dark/20',
      'border-l-accent-warning-main', 
      'border border-accent-warning-light/50', 
      'dark:border-accent-warning-dark/50',
      'text-accent-warning-dark',
      'dark:text-accent-warning-light',
    ],
    error: props.filled ? [
      // Filled error alerts - slightly red transparent background
      'bg-red-500/15',
      'dark:bg-red-400/15',
      'backdrop-blur-sm',
      'border-l-accent-error-main', 
      'border border-red-500/25', 
      'dark:border-red-400/25',
      'text-accent-error-dark',
      'dark:text-accent-error-light',
    ] : [
      // Regular error alerts use theme-aware accent colors
      'bg-accent-error-light/20', 
      'dark:bg-accent-error-dark/20',
      'border-l-accent-error-main', 
      'border border-accent-error-light/50', 
      'dark:border-accent-error-dark/50',
      'text-accent-error-dark',
      'dark:text-accent-error-light',
    ],
    info: props.filled ? [
      // Filled info alerts - slightly blue transparent background
      'bg-blue-500/15',
      'dark:bg-blue-400/15',
      'backdrop-blur-sm',
      'border-l-accent-info-main', 
      'border border-blue-500/25', 
      'dark:border-blue-400/25',
      'text-accent-info-dark',
      'dark:text-accent-info-light',
    ] : [
      // Regular info alerts use theme-aware accent colors
      'bg-accent-info-light/20', 
      'dark:bg-accent-info-dark/20',
      'border-l-accent-info-main', 
      'border border-accent-info-light/50', 
      'dark:border-accent-info-dark/50',
      'text-accent-info-dark',
      'dark:text-accent-info-light',
    ],
  }

  // Text colors for diagonal variants (override default variant text colors)
  const diagonalTextClasses = props.diagonal ? (() => {
    switch (props.variant) {
      case 'success':
        return ['text-green-800', 'dark:text-green-100']
      case 'warning':
        return ['text-orange-800', 'dark:text-orange-100'] 
      case 'error':
        return ['text-red-800', 'dark:text-red-100']
      case 'info':
        return ['text-blue-800', 'dark:text-blue-100']
      default:
        return ['text-blue-800', 'dark:text-blue-100']
    }
  })() : []

  return [
    ...baseClasses,
    ...(props.diagonal ? [] : variantClasses[props.variant]), // Skip variant classes for diagonal
    ...diagonalTextClasses,
  ]
})

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  // Get colors based on variant and filled state
  const colors = getAlertDiagonalColors(props.variant, props.filled)
  
  console.log('Diagonal styles:', {
    variant: props.variant,
    filled: props.filled,
    colors,
  })
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

// Helper to get colors for diagonal effect
function getAlertDiagonalColors(variant: AlertProps['variant'], filled: boolean) {
  if (!filled) {
    // Non-filled alerts use standard surface background
    return {
      border: `var(--color-accent-${variant}-main)`,
      background: 'var(--color-surface-secondary)',
    }
  }
  
  // Use CSS custom properties that match the exact Tailwind colors used by regular alerts
  const colorMap = {
    success: {
      border: 'var(--color-accent-success-main)',
      background: 'rgb(34 197 94 / 0.15)', // green-500/15 - same as bg-green-500/15
    },
    warning: {
      border: 'var(--color-accent-warning-main)', 
      background: 'rgb(245 158 11 / 0.15)', // amber-500/15 - same as bg-amber-500/15
    },
    error: {
      border: 'var(--color-accent-error-main)',
      background: 'rgb(239 68 68 / 0.15)', // red-500/15 - same as bg-red-500/15
    },
    info: {
      border: 'var(--color-accent-info-main)',
      background: 'rgb(59 130 246 / 0.15)', // blue-500/15 - same as bg-blue-500/15
    },
  } as const
  
  return colorMap[variant || 'info']
}
</script>

<style scoped>
.diagonal-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  height: 100%;
}
</style>
