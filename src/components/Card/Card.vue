<template>
  <div :class="cardClasses" :style="diagonalStyles">
    <div v-if="diagonal" class="diagonal-content">
      <header v-if="$slots.header" :class="headerClasses">
        <slot name="header" />
      </header>
      
      <div v-if="$slots.default" :class="contentClasses">
        <Scrollbar v-if="maxHeight" :width="scrollbarWidth" :style="{ maxHeight }" class="pr-2">
          <slot />
        </Scrollbar>
        <slot v-else />
      </div>
      
      <footer v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </footer>
    </div>
    <template v-else>
      <header v-if="$slots.header" :class="headerClasses">
        <slot name="header" />
      </header>
      
      <div v-if="$slots.default" :class="contentClasses">
        <Scrollbar v-if="maxHeight" :width="scrollbarWidth" :style="{ maxHeight }" class="pr-2">
          <slot />
        </Scrollbar>
        <slot v-else />
      </div>
      
      <footer v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </footer>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Scrollbar from '../Scrollbar/Scrollbar.vue'

export interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
  hoverable?: boolean
  diagonal?: boolean
  filledHeader?: boolean
  maxHeight?: string
  scrollbarWidth?: string
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
  rounded: true,
  hoverable: false,
  diagonal: false,
  filledHeader: false,
  maxHeight: undefined,
  scrollbarWidth: 'md',
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

  // Border radius - support for diagonal sci-fi corners
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners'] 
    : props.rounded 
    ? ['rounded-lg'] 
    : ['rounded-none']

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

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  // Get colors based on variant
  const colors = getCardDiagonalColors(props.variant)
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

// Helper to get colors for diagonal effect
function getCardDiagonalColors(variant: CardProps['variant']) {
  const colorMap = {
    default: {
      border: 'var(--color-border-primary)',
      background: 'var(--color-surface-primary)',
    },
    outlined: {
      border: 'var(--color-border-primary)',
      background: 'transparent',
    },
    elevated: {
      border: 'var(--color-border-primary)',
      background: 'var(--color-surface-elevated)',
    },
    filled: {
      border: 'var(--color-primary-300)',
      background: 'var(--color-surface-secondary)',
    },
  } as const
  
  return colorMap[variant || 'default']
}

const headerClasses = computed(() => {
  const paddingClasses = {
    none: [],
    sm: ['px-3', 'py-2'],
    md: ['px-4', 'py-3'],
    lg: ['px-6', 'py-4'],
    xl: ['px-8', 'py-6'],
  }

  const baseClasses = [
    'border-b',
    'border-primary-200',
    'dark:border-primary-700/50',
    ...paddingClasses[props.padding],
  ]

  // Filled header with stronger colors
  if (props.filledHeader) {
    return [
      ...baseClasses,
      'bg-primary-500',
      'dark:bg-primary-600',
      'text-white',
      'font-semibold',
    ]
  }

  // Default subtle header
  return [
    ...baseClasses,
    'bg-primary-50',
    'dark:bg-primary-900/20',
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

<style scoped>
.diagonal-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
