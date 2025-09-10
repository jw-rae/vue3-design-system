<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
    class="ui-focus-ring ui-transition"
  >
    <slot name="prefix" />
    <span v-if="$slots.default" class="button-content">
      <slot />
    </span>
    <slot name="suffix" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'error' | 'info'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  block?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  block: false,
  rounded: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

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

  // Size classes
  const sizeClasses = {
    xs: ['px-2', 'py-1', 'text-xs', 'gap-1'],
    sm: ['px-3', 'py-1.5', 'text-sm', 'gap-1.5'],
    md: ['px-4', 'py-2', 'text-base', 'gap-2'],
    lg: ['px-6', 'py-3', 'text-lg', 'gap-2'],
    xl: ['px-8', 'py-4', 'text-xl', 'gap-3'],
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
      // Success using bright primary - solid
      'bg-primary-400',
      'border-primary-400',
      'text-white',
      'hover:bg-primary-500',
      'hover:border-primary-500',
      'active:bg-primary-600',
      // Dark mode
      'dark:bg-primary-300',
      'dark:border-primary-300',
      'dark:text-primary-950',
      'dark:hover:bg-primary-400',
      'dark:hover:border-primary-400',
      'dark:active:bg-primary-500',
    ],
    warning: [
      // Warning using medium primary tones - solid
      'bg-primary-300',
      'border-primary-300',
      'text-primary-900',
      'hover:bg-primary-400',
      'hover:border-primary-400',
      'active:bg-primary-500',
      'active:text-white',
      // Dark mode
      'dark:bg-primary-600',
      'dark:border-primary-600',
      'dark:text-primary-50',
      'dark:hover:bg-primary-500',
      'dark:hover:border-primary-500',
      'dark:active:bg-primary-400',
    ],
    error: [
      // Error using deep primary tones - solid
      'bg-primary-700',
      'border-primary-700',
      'text-white',
      'hover:bg-primary-800',
      'hover:border-primary-800',
      'active:bg-primary-900',
      // Dark mode
      'dark:bg-primary-200',
      'dark:border-primary-200',
      'dark:text-primary-950',
      'dark:hover:bg-primary-300',
      'dark:hover:border-primary-300',
      'dark:active:bg-primary-400',
    ],
    info: [
      // Info using light primary tones - solid
      'bg-primary-200',
      'border-primary-200',
      'text-primary-800',
      'hover:bg-primary-300',
      'hover:border-primary-300',
      'active:bg-primary-400',
      // Dark mode
      'dark:bg-primary-700',
      'dark:border-primary-700',
      'dark:text-primary-100',
      'dark:hover:bg-primary-600',
      'dark:hover:border-primary-600',
      'dark:active:bg-primary-500',
    ],
  }

  // Border radius - more modern defaults
  const radiusClasses = props.rounded ? ['rounded-full'] : ['rounded-lg']

  // Block
  const blockClasses = props.block ? ['w-full'] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...variantClasses[props.variant],
    ...radiusClasses,
    ...blockClasses,
  ]
})
</script>

<style scoped>
.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
