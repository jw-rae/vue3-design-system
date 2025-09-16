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
    if (props.filled) {
      // Diagonal filled: use theme accent dark color for text
      switch (props.variant) {
        case 'success':
          return ['text-[color:var(--color-accent-success-dark)]']
        case 'warning':
          return ['text-[color:var(--color-accent-warning-dark)]']
        case 'error':
          return ['text-[color:var(--color-accent-error-dark)]']
        case 'info':
          return ['text-[color:var(--color-accent-info-dark)]']
        default:
          return ['text-[color:var(--color-accent-info-dark)]']
      }
    } else {
      // Diagonal non-filled: keep pastel/dark text
      switch (props.variant) {
        case 'success':
          return ['text-[color:var(--color-accent-success-dark)]']
        case 'warning':
          return ['text-[color:var(--color-accent-warning-dark)]']
        case 'error':
          return ['text-[color:var(--color-accent-error-dark)]']
        case 'info':
          return ['text-[color:var(--color-accent-info-dark)]']
        default:
          return ['text-[color:var(--color-accent-info-dark)]']
      }
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
    // Non-filled diagonal: theme accent border, surface background
    return {
      border: `var(--color-accent-${variant}-main)`,
      background: 'var(--color-surface-secondary)',
    }
  }

  // Diagonal filled: use theme accent light for border, accent main for background
  const colorMap = {
    success: {
      border: 'var(--color-accent-success-light)',
      background: 'var(--color-accent-success-main)',
    },
    warning: {
      border: 'var(--color-accent-warning-light)',
      background: 'var(--color-accent-warning-main)',
    },
    error: {
      border: 'var(--color-accent-error-light)',
      background: 'var(--color-accent-error-main)',
    },
    info: {
      border: 'var(--color-accent-info-light)',
      background: 'var(--color-accent-info-main)',
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
  /* Make the diagonal border thicker */
  --diagonal-border-width: 4px;
}

/* If you have a custom diagonal border implementation, use the variable */
.ui-diagonal-corners {
  /* Example: if your diagonal corners use a border, make it thicker */
  border-width: var(--diagonal-border-width, 2px);
}
</style>
