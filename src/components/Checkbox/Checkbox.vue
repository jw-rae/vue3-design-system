<template>
  <div class="checkbox-wrapper">
    <!-- Hidden checkbox for proper form handling -->
    <input
      :id="inputId"
      v-model="isChecked"
      type="checkbox"
      :disabled="disabled"
      :indeterminate="indeterminate"
      class="sr-only"
      @change="handleChange"
    />
    
    <!-- Custom checkbox -->
    <div
      :class="checkboxClasses"
      :style="diagonalStyles"
      class="ui-focus-ring ui-transition"
      @click="handleClick"
    >
      <!-- Check icon -->
      <transition
        enter-active-class="transition-all duration-150"
        enter-from-class="opacity-0 scale-50"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-50"
      >
        <CheckIcon
          v-if="isChecked && !indeterminate"
          :class="iconClasses"
        />
        <MinusIcon
          v-else-if="indeterminate"
          :class="iconClasses"
        />
      </transition>
    </div>
    
    <!-- Label -->
    <label
      v-if="label || $slots.default"
      :for="inputId"
      :class="labelClasses"
    >
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { CheckIcon, MinusIcon } from '@heroicons/vue/24/solid'

export interface CheckboxProps {
  modelValue?: boolean | 'indeterminate'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  disabled?: boolean
  label?: string
  indeterminate?: boolean
  diagonal?: boolean
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  size: 'md',
  variant: 'primary',
  disabled: false,
  indeterminate: false,
  diagonal: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean | 'indeterminate']
  change: [value: boolean | 'indeterminate']
}>()

// Generate unique ID for accessibility
const inputId = ref(`checkbox-${Math.random().toString(36).substr(2, 9)}`)

const isChecked = computed({
  get: () => props.modelValue === true,
  set: (value: boolean) => {
    const newValue = value ? true : false
    emit('update:modelValue', newValue)
  }
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const newValue = target.checked ? true : false
  emit('change', newValue)
}

const handleClick = () => {
  if (props.disabled) return
  
  if (props.indeterminate) {
    emit('update:modelValue', true)
    emit('change', true)
  } else {
    const newValue = !isChecked.value
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
}

const checkboxClasses = computed(() => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'flex-shrink-0',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'border-2',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['h-4', 'w-4'],
    md: ['h-5', 'w-5'],
    lg: ['h-6', 'w-6'],
  }

  // State-based styling
  const isActive = isChecked.value || props.indeterminate
  
  // Variant classes
  const variantClasses = {
    primary: isActive ? [
      'bg-primary-500',
      'border-primary-500',
      'dark:bg-primary-400',
      'dark:border-primary-400',
      'focus:ring-primary-500',
      'dark:focus:ring-primary-400',
    ] : [
      'bg-surface-primary',
      'border-border-primary',
      'dark:bg-surface-primary',
      'dark:border-border-primary',
      'hover:border-primary-300',
      'dark:hover:border-primary-600',
      'focus:ring-primary-500',
    ],
    success: isActive ? [
      'bg-accent-success-main',
      'border-accent-success-main',
      'focus:ring-accent-success-main',
    ] : [
      'bg-surface-primary',
      'border-border-primary',
      'hover:border-accent-success-light',
      'focus:ring-accent-success-main',
    ],
    warning: isActive ? [
      'bg-accent-warning-main',
      'border-accent-warning-main',
      'focus:ring-accent-warning-main',
    ] : [
      'bg-surface-primary',
      'border-border-primary',
      'hover:border-accent-warning-light',
      'focus:ring-accent-warning-main',
    ],
    error: isActive ? [
      'bg-accent-error-main',
      'border-accent-error-main',
      'focus:ring-accent-error-main',
    ] : [
      'bg-surface-primary',
      'border-border-primary',
      'hover:border-accent-error-light',
      'focus:ring-accent-error-main',
    ],
    info: isActive ? [
      'bg-accent-info-main',
      'border-accent-info-main',
      'focus:ring-accent-info-main',
    ] : [
      'bg-surface-primary',
      'border-border-primary',
      'hover:border-accent-info-light',
      'focus:ring-accent-info-main',
    ],
  }

  // Border radius - support for diagonal sci-fi corners
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners-sm'] 
    : ['rounded-md']

  // Disabled state
  const disabledClasses = props.disabled ? [
    'opacity-50',
    'cursor-not-allowed',
    'pointer-events-none',
  ] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...(props.diagonal ? [] : variantClasses[props.variant]),
    ...radiusClasses,
    ...disabledClasses,
  ]
})

const iconClasses = computed(() => {
  const sizeClasses = {
    sm: ['h-3', 'w-3'],
    md: ['h-4', 'w-4'],
    lg: ['h-5', 'w-5'],
  }

  return [
    ...sizeClasses[props.size],
    'text-white',
    'drop-shadow-sm',
  ]
})

const labelClasses = computed(() => [
  'ml-3',
  'text-sm',
  'font-medium',
  'text-text-primary',
  props.disabled ? 'text-text-disabled' : 'cursor-pointer',
])

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  const colors = getCheckboxDiagonalColors(props.variant, isChecked.value || props.indeterminate)
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

// Helper to get colors for diagonal effect
function getCheckboxDiagonalColors(variant: CheckboxProps['variant'], checked: boolean) {
  if (!checked) {
    return {
      border: 'var(--color-border-primary)',
      background: 'var(--color-surface-primary)',
    }
  }

  const colorMap = {
    primary: {
      border: 'var(--color-primary-500)',
      background: 'var(--color-primary-500)',
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
.checkbox-wrapper {
  display: flex;
  align-items: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
