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
    'rounded-lg',
    'border',
    'gap-3',
  ]

  const variantClasses = {
    success: [
      'bg-success-50', 
      'dark:bg-success-900/20',
      'border-success-200', 
      'dark:border-success-700',
      'text-success-800',
      'dark:text-success-200'
    ],
    warning: [
      'bg-warning-50', 
      'dark:bg-warning-900/20',
      'border-warning-200', 
      'dark:border-warning-700',
      'text-warning-800',
      'dark:text-warning-200'
    ],
    error: [
      'bg-error-50', 
      'dark:bg-error-900/20',
      'border-error-200', 
      'dark:border-error-700',
      'text-error-800',
      'dark:text-error-200'
    ],
    info: [
      'bg-blue-50', 
      'dark:bg-blue-900/20',
      'border-blue-200', 
      'dark:border-blue-700',
      'text-blue-800',
      'dark:text-blue-200'
    ],
  }

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
  ]
})
</script>
