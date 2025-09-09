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
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
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
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ]

  // Size classes
  const sizeClasses = {
    xs: ['px-2', 'py-1', 'text-xs', 'gap-1'],
    sm: ['px-3', 'py-1.5', 'text-sm', 'gap-1.5'],
    md: ['px-4', 'py-2', 'text-base', 'gap-2'],
    lg: ['px-6', 'py-3', 'text-lg', 'gap-2'],
    xl: ['px-8', 'py-4', 'text-xl', 'gap-3'],
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-primary-500',
      'border-primary-500',
      'text-white',
      'hover:bg-primary-600',
      'hover:border-primary-600',
      'active:bg-primary-700',
    ],
    secondary: [
      'bg-gray-500',
      'border-gray-500',
      'text-white',
      'hover:bg-gray-600',
      'hover:border-gray-600',
      'active:bg-gray-700',
    ],
    outline: [
      'bg-transparent',
      'border-primary-500',
      'text-primary-500',
      'hover:bg-primary-50',
      'hover:text-primary-600',
      'active:bg-primary-100',
    ],
    ghost: [
      'bg-transparent',
      'border-transparent',
      'text-primary-500',
      'hover:bg-primary-50',
      'hover:text-primary-600',
      'active:bg-primary-100',
    ],
    danger: [
      'bg-error-500',
      'border-error-500',
      'text-white',
      'hover:bg-error-600',
      'hover:border-error-600',
      'active:bg-error-700',
    ],
  }

  // Border radius
  const radiusClasses = props.rounded ? ['rounded-full'] : ['rounded-md']

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
