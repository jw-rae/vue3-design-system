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
      // Light, encouraging feel - simplified backgrounds
      'bg-primary-50', 
      'dark:bg-primary-900/30',
      'border-l-primary-400', 
      'dark:border-l-primary-500',
      'border border-primary-200', 
      'dark:border-primary-700',
      'text-primary-800',
      'dark:text-primary-100',
    ],
    warning: [
      // Attention-grabbing but not alarming - solid backgrounds
      'bg-primary-100', 
      'dark:bg-primary-800/40',
      'border-l-primary-500', 
      'dark:border-l-primary-400',
      'border border-primary-300', 
      'dark:border-primary-600',
      'text-primary-900',
      'dark:text-primary-50',
    ],
    error: [
      // Strong but not harsh - clear contrast
      'bg-primary-700/10', 
      'dark:bg-primary-200/20',
      'border-l-primary-800', 
      'dark:border-l-primary-200',
      'border border-primary-700/30', 
      'dark:border-primary-300/30',
      'text-primary-900',
      'dark:text-primary-50',
    ],
    info: [
      // Calm and informative - readable backgrounds
      'bg-primary-50/80', 
      'dark:bg-primary-900/25',
      'border-l-primary-300', 
      'dark:border-l-primary-600',
      'border border-primary-200', 
      'dark:border-primary-800',
      'text-primary-700',
      'dark:text-primary-200',
    ],
  }

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
  ]
})
</script>
