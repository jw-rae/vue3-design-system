<template>
  <div class="relative">
    <label v-if="label" :for="inputId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-primary-700 ml-1">*</span>
    </label>
    
    <div class="relative">
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClasses"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        class="ui-focus-ring ui-transition"
      />
      
      <div v-if="$slots.prefix" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="prefix" />
      </div>
      
      <div v-if="$slots.suffix" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <slot name="suffix" />
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-sm text-primary-700 dark:text-primary-400">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="mt-1 text-sm text-text-tertiary dark:text-text-tertiary">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSlots } from 'vue'

export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  label?: string
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  size: 'md',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const slots = useSlots()
const isFocused = ref(false)
const inputId = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`)

const labelClasses = computed(() => [
  'block',
  'text-sm',
  'font-medium',
  'text-primary-700',
  'dark:text-primary-300',
  'mb-1',
])

const inputClasses = computed(() => {
  const baseClasses = [
    'block',
    'w-full',
    'border',
    'rounded-md',
    'shadow-sm',
    'placeholder-text-tertiary',
    'dark:placeholder-text-tertiary',
    'bg-surface-primary',
    'dark:bg-surface-primary',
    'text-text-primary',
    'dark:text-text-primary',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-surface-secondary',
    'dark:disabled:bg-surface-secondary',
    'ui-transition',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-2', 'text-sm'],
    md: ['px-4', 'py-2.5', 'text-base'],
    lg: ['px-4', 'py-3', 'text-lg'],
  }

  // State classes - monochromatic
  const stateClasses = props.error
    ? [
        'border-primary-700/50', 
        'dark:border-primary-300/50',
        'focus:border-primary-700', 
        'focus:ring-primary-700/20'
      ]
    : [
        'border-primary-300', 
        'dark:border-primary-600',
        'focus:border-primary-500', 
        'focus:ring-primary-500/20'
      ]

  // Prefix/suffix padding
  const prefixClasses = slots.prefix ? ['pl-10'] : []
  const suffixClasses = slots.suffix ? ['pr-10'] : []

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...stateClasses,
    ...prefixClasses,
    ...suffixClasses,
  ]
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const onFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const onBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}
</script>
