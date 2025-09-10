<template>
  <div class="radio-group" :class="groupClasses">
    <div
      v-for="option in options"
      :key="getOptionValue(option)"
      class="radio-item"
      :class="itemClasses"
    >
      <label :class="labelClasses" :for="getInputId(option)">
        <input
          :id="getInputId(option)"
          type="radio"
          :value="getOptionValue(option)"
          :checked="modelValue === getOptionValue(option)"
          :disabled="disabled || getOptionDisabled(option)"
          :name="name"
          @change="handleChange"
          class="sr-only"
        />
        <div :class="getRadioClasses(option)" :style="diagonalStyles">
          <div v-if="diagonal" class="diagonal-content">
            <div :class="getIndicatorClasses(option)" />
          </div>
          <div v-else :class="getIndicatorClasses(option)" />
        </div>
        <span :class="textClasses">
          {{ getOptionLabel(option) }}
        </span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type RadioOption = string | number | { label: string; value: string | number; disabled?: boolean }

export interface RadioButtonProps {
  modelValue?: string | number
  options: RadioOption[]
  name?: string
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  diagonal?: boolean
}

const props = withDefaults(defineProps<RadioButtonProps>(), {
  disabled: false,
  direction: 'vertical',
  size: 'md',
  diagonal: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

// Helper functions to handle different option formats
function getOptionValue(option: RadioOption): string | number {
  if (typeof option === 'object') {
    return option.value
  }
  return option
}

function getOptionLabel(option: RadioOption): string {
  if (typeof option === 'object') {
    return option.label
  }
  return String(option)
}

function getOptionDisabled(option: RadioOption): boolean {
  if (typeof option === 'object') {
    return option.disabled ?? false
  }
  return false
}

function getInputId(option: RadioOption): string {
  const value = getOptionValue(option)
  const baseName = props.name || 'radio'
  return `${baseName}-${value}`
}

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.value
  
  // Try to parse as number if it's a numeric string
  const numericValue = Number(value)
  const finalValue = !isNaN(numericValue) && value !== '' ? numericValue : value
  
  emit('update:modelValue', finalValue)
}

const groupClasses = computed(() => {
  const directionClasses = props.direction === 'horizontal' 
    ? ['flex', 'flex-wrap', 'gap-4'] 
    : ['space-y-2']

  return directionClasses
})

const itemClasses = computed(() => {
  return ['relative']
})

const labelClasses = computed(() => {
  const baseClasses = [
    'flex',
    'items-center',
    'cursor-pointer',
    'ui-transition',
  ]

  const sizeClasses = {
    sm: ['gap-2'],
    md: ['gap-3'],
    lg: ['gap-4'],
  }

  const disabledClasses = props.disabled 
    ? ['opacity-50', 'cursor-not-allowed', 'pointer-events-none']
    : ['hover:opacity-80']

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...disabledClasses,
  ]
})

const radioClasses = computed(() => {
  const baseClasses = [
    'relative',
    'border-2',
    'ui-transition',
    'ui-focus-ring',
  ]

  const sizeClasses = {
    sm: ['w-4', 'h-4'],
    md: ['w-5', 'h-5'],
    lg: ['w-6', 'h-6'],
  }

  const shapeClasses = props.diagonal 
    ? ['ui-diagonal-corners-sm'] 
    : ['rounded-full']

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...shapeClasses,
  ]
})

function getRadioClasses(option: RadioOption) {
  const isChecked = props.modelValue === getOptionValue(option)
  const isDisabled = props.disabled || getOptionDisabled(option)
  
  const colorClasses = [
    'border-primary-300',
    'bg-white',
    'dark:border-primary-600', 
    'dark:bg-gray-800',
  ]

  if (isChecked) {
    colorClasses.push(
      'border-primary-500',
      'bg-white',
      'dark:border-primary-400',
      'dark:bg-gray-800'
    )
  }

  if (!isDisabled) {
    colorClasses.push(
      'hover:border-primary-400',
      'dark:hover:border-primary-500'
    )
  } else {
    colorClasses.push(
      'opacity-50',
      'cursor-not-allowed'
    )
  }

  return [
    ...radioClasses.value,
    ...colorClasses,
  ]
}

const indicatorClasses = computed(() => {
  const baseClasses = [
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'ui-transition',
  ]

  const sizeClasses = {
    sm: ['w-2', 'h-2'],
    md: ['w-2.5', 'h-2.5'], 
    lg: ['w-3', 'h-3'],
  }

  const shapeClasses = props.diagonal 
    ? ['ui-diagonal-corners-xs'] 
    : ['rounded-full']

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...shapeClasses,
  ]
})

function getIndicatorClasses(option: RadioOption) {
  const isChecked = props.modelValue === getOptionValue(option)
  
  const colorClasses = [
    'bg-primary-500',
    'dark:bg-primary-400',
  ]

  const visibilityClasses = isChecked 
    ? ['scale-100', 'opacity-100']
    : ['scale-0', 'opacity-0']

  return [
    ...indicatorClasses.value,
    ...colorClasses,
    ...visibilityClasses,
  ]
}

const textClasses = computed(() => {
  const baseClasses = [
    'text-text-primary',
    'select-none',
  ]

  const sizeClasses = {
    sm: ['text-sm'],
    md: ['text-base'],
    lg: ['text-lg'],
  }

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
  ]
})

// Diagonal styles for sci-fi effect
const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}

  return {
    '--diagonal-border-color': 'var(--color-primary-500)',
    '--diagonal-bg-color': 'var(--color-primary-500)',
  }
})
</script>

<style scoped>
.diagonal-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Hide the default radio button */
input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>
