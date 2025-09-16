<template>
  <button
    :class="[buttonClasses, diagonal ? 'ui-focus-ring-diagonal' : 'ui-focus-ring', 'ui-transition']"
    :style="diagonalStyles"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <span v-if="diagonal" class="diagonal-content">
      <slot name="prefix" />
      
      <!-- Icon before text (left position or icon-only) -->
      <component
        :is="iconComponent"
        :class="iconClasses"
        v-if="iconComponent && iconPosition === 'left'"
      />
      <div
        v-else-if="iconSrc && iconPosition === 'left'"
        :class="iconClasses"
        v-html="iconSvg"
      />
      
      <!-- Button text content -->
      <span v-if="$slots.default" class="button-content">
        <slot />
      </span>
      
      <!-- Icon after text (right position) -->
      <component
        :is="iconComponent"
        :class="iconClasses"
        v-if="iconComponent && iconPosition === 'right'"
      />
      <div
        v-else-if="iconSrc && iconPosition === 'right'"
        :class="iconClasses"
        v-html="iconSvg"
      />
      
      <slot name="suffix" />
    </span>
    <template v-else>
      <slot name="prefix" />
      
      <!-- Icon before text (left position or icon-only) -->
      <component
        :is="iconComponent"
        :class="iconClasses"
        v-if="iconComponent && iconPosition === 'left'"
      />
      <div
        v-else-if="iconSrc && iconPosition === 'left'"
        :class="iconClasses"
        v-html="iconSvg"
      />
      
      <!-- Button text content -->
      <span v-if="$slots.default" class="button-content">
        <slot />
      </span>
      
      <!-- Icon after text (right position) -->
      <component
        :is="iconComponent"
        :class="iconClasses"
        v-if="iconComponent && iconPosition === 'right'"
      />
      <div
        v-else-if="iconSrc && iconPosition === 'right'"
        :class="iconClasses"
        v-html="iconSvg"
      />
      
      <slot name="suffix" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, type Component } from 'vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'error' | 'info'
  size?: 'xxs' | 'xs' | 'sm' | 'md'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  rounded?: boolean
  diagonal?: boolean
  icon?: Component
  iconSrc?: string
  iconPosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  block: false,
  rounded: false,
  diagonal: false,
  iconPosition: 'left',
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
    'whitespace-nowrap',
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
    xxs: ['px-1.5', 'py-0.5', 'text-xs', (props.icon || props.iconSrc) ? 'gap-0.5' : 'gap-0.5'],
    xs: ['px-2', 'py-1', 'text-xs', (props.icon || props.iconSrc) ? 'gap-1' : 'gap-1'],
    sm: ['px-3', 'py-1.5', 'text-sm', (props.icon || props.iconSrc) ? 'gap-1' : 'gap-1.5'],
    md: ['px-4', 'py-2', 'text-base', (props.icon || props.iconSrc) ? 'gap-1.5' : 'gap-2'],
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

  // Text colors for diagonal variants (override default variant text colors)
  const diagonalTextClasses = props.diagonal ? (() => {
    switch (props.variant) {
      case 'primary':
        return ['text-white', 'dark:text-white'] // White text on dark background
      case 'secondary':
        return ['text-primary-800', 'dark:text-primary-900'] // Dark text on light background
      case 'outline':
        return ['text-primary-700', 'dark:text-primary-800'] // Dark text on light background
      case 'ghost':
        return ['text-primary-700', 'dark:text-primary-800'] // Dark text on light background
      case 'success':
        return ['text-white', 'dark:text-white'] // White text on colored background
      case 'warning':
        return ['text-white', 'dark:text-white'] // White text on colored background
      case 'error':
        return ['text-white', 'dark:text-white'] // White text on colored background
      case 'info':
        return ['text-white', 'dark:text-white'] // White text on colored background
      default:
        return ['text-white', 'dark:text-white']
    }
  })() : []

  // Block
  const blockClasses = props.block ? ['w-full'] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...(props.diagonal ? [] : variantClasses[props.variant]), // Skip variant classes for diagonal
    ...radiusClasses,
    ...diagonalTextClasses,
    ...blockClasses,
  ]
})

const iconClasses = computed(() => {
  const sizeClasses = {
    xxs: ['w-2', 'h-2'],
    xs: ['w-2.5', 'h-2.5'],
    sm: ['w-3', 'h-3'],
    md: ['w-3', 'h-3'],
  }

  return [
    ...sizeClasses[props.size],
    'flex-shrink-0',
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
      border: 'var(--color-primary-600)',
      background: 'var(--color-primary-600)', // Darker for better contrast with white text
    },
    secondary: {
      border: 'var(--color-primary-400)',
      background: 'var(--color-primary-100)', // Light background for dark text
    },
    outline: {
      border: 'var(--color-primary-600)',
      background: 'var(--color-primary-50)', // Very light fill for dark text
    },
    ghost: {
      border: 'var(--color-primary-300)',
      background: 'var(--color-primary-50)', // Light background instead of transparent
    },
    success: {
      border: 'var(--color-accent-success-main)',
      background: 'var(--color-accent-success-main)', // Keep solid for contrast
    },
    warning: {
      border: 'var(--color-accent-warning-main)',
      background: 'var(--color-accent-warning-main)', // Keep solid for contrast
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
  flex: 1;
}

.diagonal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: inherit;
}

/* Constrain SVG size strictly and prevent expansion */
:deep(svg) {
  fill: currentColor;
  max-width: 1rem;
  max-height: 1rem;
  width: auto;
  height: auto;
  display: block;
  flex-shrink: 0;
}

/* Ensure icon containers have fixed dimensions and don't grow */
.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: fit-content;
  height: fit-content;
}
</style>
