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
    'bg-white',
    'overflow-hidden',
    'ui-transition',
  ]

  // Variant classes
  const variantClasses = {
    default: ['border', 'border-gray-200'],
    outlined: ['border-2', 'border-gray-300'],
    elevated: ['shadow-md', 'border-0'],
    filled: ['bg-gray-50', 'border', 'border-gray-200'],
  }

  // Rounded classes
  const radiusClasses = props.rounded ? ['rounded-lg'] : ['rounded-none']

  // Hoverable classes
  const hoverClasses = props.hoverable 
    ? ['hover:shadow-lg', 'hover:scale-[1.02]', 'cursor-pointer']
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
    'border-gray-200',
    'bg-gray-50',
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
    'border-gray-200',
    'bg-gray-50',
    ...paddingClasses[props.padding],
  ]
})
</script>
