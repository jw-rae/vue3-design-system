<template>
  <button
    :class="buttonClasses"
    :style="diagonalStyles"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
    class="ui-focus-ring ui-transition"
    :aria-label="ariaLabel"
  >
    <span v-if="diagonal" class="diagonal-content">
      <component
        :is="iconComponent"
        :class="iconClasses"
        v-if="iconComponent"
      />
      <div
        v-else-if="iconSrc"
        :class="iconClasses"
        v-html="iconSvg"
      />
    </span>
    <template v-else>
      <component
        :is="iconComponent"
        :class="iconClasses"
        v-if="iconComponent"
      />
      <div
        v-else-if="iconSrc"
        :class="iconClasses"
        v-html="iconSvg"
      />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, type Component } from 'vue'

export interface IconButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  rounded?: boolean
  diagonal?: boolean
  icon?: Component
  iconSrc?: string
  ariaLabel: string
}

const props = withDefaults(defineProps<IconButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  rounded: false,
  diagonal: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const iconSvg = ref('')
const iconComponent = computed(() => props.icon)

// Load SVG content if iconSrc is provided
onMounted(async () => {
  if (props.iconSrc) {
    try {
      const response = await fetch(props.iconSrc)
      if (response.ok) {
        iconSvg.value = await response.text()
      }
    } catch (error) {
      console.warn('Failed to load icon:', props.iconSrc, error)
    }
  }
})

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

  // Size classes for icon buttons (square aspect ratio)
  const sizeClasses = {
    sm: ['w-8', 'h-8', 'p-1.5'],
    md: ['w-10', 'h-10', 'p-2'],
    lg: ['w-12', 'h-12', 'p-2.5'],
  }

  // Variant classes - same as Button component
  const variantClasses = {
    primary: [
      'bg-primary-500',
      'border-primary-500',
      'text-white',
      'hover:bg-primary-600',
      'hover:border-primary-600',
      'active:bg-primary-700',
      'dark:bg-primary-400',
      'dark:border-primary-400',
      'dark:text-primary-950',
      'dark:hover:bg-primary-500',
      'dark:hover:border-primary-500',
      'dark:active:bg-primary-600',
    ],
    secondary: [
      'bg-primary-100',
      'border-primary-200',
      'text-primary-700',
      'hover:bg-primary-200',
      'hover:border-primary-300',
      'active:bg-primary-300',
      'dark:bg-primary-800',
      'dark:border-primary-700',
      'dark:text-primary-100',
      'dark:hover:bg-primary-700',
      'dark:hover:border-primary-600',
      'dark:active:bg-primary-600',
    ],
    outline: [
      'bg-transparent',
      'border-2 border-primary-500',
      'text-primary-500',
      'hover:bg-primary-50',
      'hover:text-primary-600',
      'hover:border-primary-600',
      'active:bg-primary-100',
      'dark:border-primary-400',
      'dark:text-primary-400',
      'dark:hover:bg-primary-900',
      'dark:hover:text-primary-300',
      'dark:hover:border-primary-300',
      'dark:active:bg-primary-800',
    ],
    ghost: [
      'bg-transparent',
      'border-transparent',
      'text-primary-500',
      'hover:bg-primary-100',
      'hover:text-primary-600',
      'active:bg-primary-200',
      'dark:text-primary-400',
      'dark:hover:bg-primary-900',
      'dark:hover:text-primary-300',
      'dark:active:bg-primary-800',
    ],
    success: [
      'bg-accent-success-main',
      'border-accent-success-main',
      'text-white',
      'hover:bg-accent-success-dark',
      'hover:border-accent-success-dark',
      'active:bg-accent-success-dark',
      'dark:bg-accent-success-main',
      'dark:border-accent-success-main',
      'dark:text-white',
      'dark:hover:bg-accent-success-light',
      'dark:hover:border-accent-success-light',
      'dark:active:bg-accent-success-light',
    ],
    warning: [
      'bg-accent-warning-main',
      'border-accent-warning-main',
      'text-white',
      'hover:bg-accent-warning-dark',
      'hover:border-accent-warning-dark',
      'active:bg-accent-warning-dark',
      'dark:bg-accent-warning-main',
      'dark:border-accent-warning-main',
      'dark:text-white',
      'dark:hover:bg-accent-warning-light',
      'dark:hover:border-accent-warning-light',
      'dark:active:bg-accent-warning-light',
    ],
    error: [
      'bg-accent-error-main',
      'border-accent-error-main',
      'text-white',
      'hover:bg-accent-error-dark',
      'hover:border-accent-error-dark',
      'active:bg-accent-error-dark',
      'dark:bg-accent-error-main',
      'dark:border-accent-error-main',
      'dark:text-white',
      'dark:hover:bg-accent-error-light',
      'dark:hover:border-accent-error-light',
      'dark:active:bg-accent-error-light',
    ],
    info: [
      'bg-accent-info-main',
      'border-accent-info-main',
      'text-white',
      'hover:bg-accent-info-dark',
      'hover:border-accent-info-dark',
      'active:bg-accent-info-dark',
      'dark:bg-accent-info-main',
      'dark:border-accent-info-main',
      'dark:text-white',
      'dark:hover:bg-accent-info-light',
      'dark:hover:border-accent-info-light',
      'dark:active:bg-accent-info-light',
    ],
  }

  // Border radius
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners-sm'] 
    : props.rounded 
    ? ['rounded-full'] 
    : ['rounded-lg']

  // Text colors for diagonal variants
  const diagonalTextClasses = props.diagonal ? (() => {
    switch (props.variant) {
      case 'primary':
      case 'success':
      case 'warning':
      case 'error':
      case 'info':
        return ['text-white', 'dark:text-white']
      case 'secondary':
      case 'outline':
      case 'ghost':
        return ['text-primary-800', 'dark:text-primary-900']
      default:
        return ['text-white', 'dark:text-white']
    }
  })() : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...(props.diagonal ? [] : variantClasses[props.variant]),
    ...radiusClasses,
    ...diagonalTextClasses,
  ]
})

const iconClasses = computed(() => {
  const sizeClasses = {
    sm: ['w-5', 'h-5'],
    md: ['w-6', 'h-6'],
    lg: ['w-7', 'h-7'],
  }

  return [
    ...sizeClasses[props.size],
    'flex-shrink-0',
  ]
})

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  const colors = getVariantColors(props.variant)
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

function getVariantColors(variant: IconButtonProps['variant']) {
  const colorMap = {
    primary: {
      border: 'var(--color-primary-600)',
      background: 'var(--color-primary-600)',
    },
    secondary: {
      border: 'var(--color-primary-400)',
      background: 'var(--color-primary-100)',
    },
    outline: {
      border: 'var(--color-primary-600)',
      background: 'var(--color-primary-50)',
    },
    ghost: {
      border: 'var(--color-primary-300)',
      background: 'var(--color-primary-50)',
    },
    success: {
      border: 'var(--color-accent-success-main)',
      background: 'var(--color-accent-success-main)',
    },
    warning: {
      border: 'var(--color-accent-warning-main)',
      background: 'var(--color-accent-warning-main)',
    },
    error: {
      border: 'var(--color-accent-error-main)',
      background: 'var(--color-accent-error-main)',
    },
    info: {
      border: 'var(--color-accent-info-main)',
      background: 'var(--color-accent-info-main)',
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

/* Ensure SVG content inherits the text color */
:deep(svg) {
  fill: currentColor;
  width: 100%;
  height: 100%;
}
</style>
