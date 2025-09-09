<template>
  <div class="relative">
    <label v-if="label" :for="inputId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-error-500 ml-1">*</span>
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
    
    <p v-if="error" class="mt-1 text-sm text-error-500">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="mt-1 text-sm text-gray-500">
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
  'text-gray-700',
  'mb-1',
])

const inputClasses = computed(() => {
  const baseClasses = [
    'block',
    'w-full',
    'border',
    'rounded-md',
    'shadow-sm',
    'placeholder-gray-400',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-50',
    'ui-transition',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-2', 'text-sm'],
    md: ['px-4', 'py-2.5', 'text-base'],
    lg: ['px-4', 'py-3', 'text-lg'],
  }

  // State classes
  const stateClasses = props.error
    ? ['border-error-300', 'focus:border-error-500', 'focus:ring-error-500']
    : ['border-gray-300', 'focus:border-primary-500', 'focus:ring-primary-500']

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
