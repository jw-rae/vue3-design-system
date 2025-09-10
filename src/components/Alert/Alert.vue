<template>
  <div :class="alertClasses" role="alert">
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
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  dismissible: false,
  showIcon: true,
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
    'rounded-xl', // More rounded for modern feel
    'border-l-4', // Add accent border for personality
    'shadow-sm', // Subtle shadow
    'gap-3',
    'transition-all',
    'duration-200',
  ]

  const variantClasses = {
    success: [
      // Success alerts use theme-aware accent colors
      'bg-accent-success-light/20', 
      'dark:bg-accent-success-dark/20',
      'border-l-accent-success-main', 
      'border border-accent-success-light/50', 
      'dark:border-accent-success-dark/50',
      'text-accent-success-dark',
      'dark:text-accent-success-light',
    ],
    warning: [
      // Warning alerts use theme-aware accent colors
      'bg-accent-warning-light/20', 
      'dark:bg-accent-warning-dark/20',
      'border-l-accent-warning-main', 
      'border border-accent-warning-light/50', 
      'dark:border-accent-warning-dark/50',
      'text-accent-warning-dark',
      'dark:text-accent-warning-light',
    ],
    error: [
      // Error alerts use theme-aware accent colors
      'bg-accent-error-light/20', 
      'dark:bg-accent-error-dark/20',
      'border-l-accent-error-main', 
      'border border-accent-error-light/50', 
      'dark:border-accent-error-dark/50',
      'text-accent-error-dark',
      'dark:text-accent-error-light',
    ],
    info: [
      // Info alerts use theme-aware accent colors
      'bg-accent-info-light/20', 
      'dark:bg-accent-info-dark/20',
      'border-l-accent-info-main', 
      'border border-accent-info-light/50', 
      'dark:border-accent-info-dark/50',
      'text-accent-info-dark',
      'dark:text-accent-info-light',
    ],
  }

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
  ]
})
</script>
