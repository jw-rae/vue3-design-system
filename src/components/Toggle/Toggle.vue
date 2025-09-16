<template>
  <div class="toggle-wrapper">
    <!-- Hidden checkbox for accessibility -->
    <input
      :id="inputId"
      v-model="isChecked"
      type="checkbox"
      :disabled="disabled"
      class="sr-only"
      @change="handleChange"
    />
    
    <!-- Toggle switch -->
    <label
      :for="inputId"
      :class="toggleClasses"
      :style="diagonalStyles"
      class="ui-focus-ring ui-transition"
    >
      <span :class="thumbClasses" :style="thumbStyles">
        <!-- Icons for on/off states -->
        <transition
          enter-active-class="transition-opacity duration-150"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <component
            v-if="showIcons && iconComponent"
            :is="iconComponent"
            :class="iconClasses"
          />
        </transition>
      </span>
    </label>
    
    <!-- Label text -->
    <label
      v-if="label"
      :for="inputId"
      :class="labelClasses"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export interface ToggleProps {
  modelValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  disabled?: boolean
  label?: string
  showIcons?: boolean
  diagonal?: boolean
}

const props = withDefaults(defineProps<ToggleProps>(), {
  modelValue: false,
  size: 'md',
  variant: 'primary',
  disabled: false,
  showIcons: false,
  diagonal: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()

// Generate unique ID for accessibility
const inputId = ref(`toggle-${Math.random().toString(36).substr(2, 9)}`)

const isChecked = computed({
  get: () => props.modelValue,
  set: (value: boolean) => {
    emit('update:modelValue', value)
  }
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.checked)
}

const toggleClasses = computed(() => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'flex-shrink-0',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['h-5', 'w-9'],
    md: ['h-6', 'w-11'],
    lg: ['h-8', 'w-14'],
  }

  // Variant classes - different colors for different states
  const variantClasses = {
    primary: isChecked.value ? [
      'bg-primary-500',
      'dark:bg-primary-400',
      'focus:ring-primary-500',
      'dark:focus:ring-primary-400',
    ] : [
      'bg-gray-200',
      'dark:bg-gray-700',
      'focus:ring-gray-500',
    ],
    success: isChecked.value ? [
      'bg-accent-success-main',
      'focus:ring-accent-success-main',
    ] : [
      'bg-gray-200',
      'dark:bg-gray-700',
      'focus:ring-gray-500',
    ],
    warning: isChecked.value ? [
      'bg-accent-warning-main',
      'focus:ring-accent-warning-main',
    ] : [
      'bg-gray-200',
      'dark:bg-gray-700',
      'focus:ring-gray-500',
    ],
    error: isChecked.value ? [
      'bg-accent-error-main',
      'focus:ring-accent-error-main',
    ] : [
      'bg-gray-200',
      'dark:bg-gray-700',
      'focus:ring-gray-500',
    ],
    info: isChecked.value ? [
      'bg-accent-info-main',
      'focus:ring-accent-info-main',
    ] : [
      'bg-gray-200',
      'dark:bg-gray-700',
      'focus:ring-gray-500',
    ],
  }

  // Border radius - support for diagonal sci-fi corners
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners-sm'] 
    : ['rounded-full']

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

const thumbClasses = computed(() => {
  const baseClasses = [
    'pointer-events-none',
    'absolute',
    'top-0.5',
    'left-0.5',
    'inline-block',
    'transform',
    'transition-transform',
    'duration-200',
    'ease-in-out',
    'bg-white',
    'shadow-lg',
    'ring-0',
    'flex',
    'items-center',
    'justify-center',
  ]

  // Size-specific thumb classes
  const sizeClasses = {
    sm: ['h-4', 'w-4'],
    md: ['h-5', 'w-5'],
    lg: ['h-7', 'w-7'],
  }

  // Transform based on checked state and size
  const transformClasses = {
    sm: isChecked.value ? ['translate-x-4'] : ['translate-x-0'],
    md: isChecked.value ? ['translate-x-5'] : ['translate-x-0'],
    lg: isChecked.value ? ['translate-x-6'] : ['translate-x-0'],
  }

  // Border radius for thumb
  const radiusClasses = props.diagonal 
    ? ['ui-diagonal-corners-xs'] 
    : ['rounded-full']

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...transformClasses[props.size],
    ...radiusClasses,
  ]
})

const thumbStyles = computed(() => {
  if (!props.diagonal) return {}
  
  return {
    '--diagonal-border-color': '#ffffff',
    '--diagonal-bg-color': '#ffffff',
  }
})

const iconClasses = computed(() => {
  const sizeClasses = {
    sm: ['h-3', 'w-3'],
    md: ['h-3.5', 'w-3.5'],
    lg: ['h-4', 'w-4'],
  }

  const colorClasses = isChecked.value ? [
    'text-primary-500',
    'dark:text-primary-400',
  ] : [
    'text-text-tertiary',
    'dark:text-text-tertiary',
  ]

  return [
    ...sizeClasses[props.size],
    ...colorClasses,
  ]
})

const labelClasses = computed(() => [
  'ml-3',
  'text-sm',
  'font-medium',
  'text-text-primary',
  props.disabled ? 'text-text-disabled' : 'cursor-pointer',
])

const iconComponent = computed(() => {
  if (!props.showIcons) return null
  return isChecked.value ? CheckIcon : XMarkIcon
})

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  const colors = getToggleDiagonalColors(props.variant, isChecked.value)
  
  return {
    '--diagonal-border-color': colors.border,
    '--diagonal-bg-color': colors.background,
  }
})

// Helper to get colors for diagonal effect
function getToggleDiagonalColors(variant: ToggleProps['variant'], checked: boolean) {
  if (!checked) {
    return {
      border: '#9ca3af', // gray-400
      background: '#e5e7eb', // gray-200
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
.toggle-wrapper {
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
