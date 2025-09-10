<template>
  <div :class="cardClasses">
    <header v-if="$slots.header" :class="headerClasses">
      <slot name="header" />
    </header>
    
    <div v-if="$slots.default" :class="contentClasses">
      <slot />
    </div>
    
    <footer v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
  rounded: true,
  hoverable: false,
})

const cardClasses = computed(() => {
  const baseClasses = [
    'bg-surface-primary',
    'dark:bg-surface-primary',
    'overflow-hidden',
    'ui-transition',
  ]

  // Variant classes - monochromatic
  const variantClasses = {
    default: [
      'border', 
      'border-primary-200', 
      'dark:border-primary-700/50'
    ],
    outlined: [
      'border-2', 
      'border-primary-300', 
      'dark:border-primary-600/50'
    ],
    elevated: [
      'shadow-md', 
      'border-0',
      'dark:shadow-primary-900/20'
    ],
    filled: [
      'bg-primary-50', 
      'dark:bg-primary-900/20',
      'border', 
      'border-primary-200',
      'dark:border-primary-700/30'
    ],
  }

  // Rounded classes
  const radiusClasses = props.rounded ? ['rounded-lg'] : ['rounded-none']

  // Hoverable classes
  const hoverClasses = props.hoverable 
    ? ['hover:shadow-lg', 'hover:scale-[1.02]', 'cursor-pointer', 'hover:border-primary-300', 'dark:hover:border-primary-600']
    : []

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    ...radiusClasses,
    ...hoverClasses,
  ]
})

const headerClasses = computed(() => {
  const paddingClasses = {
    none: [],
    sm: ['px-3', 'py-2'],
    md: ['px-4', 'py-3'],
    lg: ['px-6', 'py-4'],
    xl: ['px-8', 'py-6'],
  }

  return [
    'border-b',
    'border-primary-200',
    'dark:border-primary-700/50',
    'bg-primary-50',
    'dark:bg-primary-900/20',
    ...paddingClasses[props.padding],
  ]
})

const contentClasses = computed(() => {
  const paddingClasses = {
    none: [],
    sm: ['p-3'],
    md: ['p-4'],
    lg: ['p-6'],
    xl: ['p-8'],
  }

  return paddingClasses[props.padding]
})

const footerClasses = computed(() => {
  const paddingClasses = {
    none: [],
    sm: ['px-3', 'py-2'],
    md: ['px-4', 'py-3'],
    lg: ['px-6', 'py-4'],
    xl: ['px-8', 'py-6'],
  }

  return [
    'border-t',
    'border-primary-200',
    'dark:border-primary-700/50',
    'bg-primary-50',
    'dark:bg-primary-900/20',
    ...paddingClasses[props.padding],
  ]
})
</script>
