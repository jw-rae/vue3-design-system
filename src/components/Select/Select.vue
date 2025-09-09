<template>
  <div class="relative">
    <label v-if="label" :for="selectId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-error-500 ml-1">*</span>
    </label>
    
    <Listbox v-model="selectedValue" :disabled="disabled">
      <div class="relative">
        <ListboxButton :class="buttonClasses" class="ui-focus-ring ui-transition">
          <span v-if="selectedValue" class="block truncate text-left">
            {{ getDisplayValue(selectedValue) }}
          </span>
          <span v-else class="block truncate text-left text-gray-400 dark:text-gray-500">
            {{ placeholder }}
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="option in options"
              :key="getOptionKey(option)"
              v-slot="{ active, selected }"
              :value="option"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-900 dark:text-primary-200' : 'text-gray-900 dark:text-gray-100',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                  {{ getDisplayValue(option) }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600 dark:text-primary-400"
                >
                  <CheckIcon class="h-5 w-5" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    
    <p v-if="error" class="mt-1 text-sm text-error-500 dark:text-error-400">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="mt-1 text-sm text-gray-500 dark:text-gray-400">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export interface SelectOption {
  value: any
  label: string
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: any
  options: SelectOption[]
  label?: string
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option...',
  disabled: false,
  required: false,
  size: 'md',
  options: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: any]
}>()

const selectId = computed(() => `select-${Math.random().toString(36).substr(2, 9)}`)

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const labelClasses = computed(() => [
  'block',
  'text-sm',
  'font-medium',
  'text-gray-700',
  'dark:text-gray-300',
  'mb-1',
])

const buttonClasses = computed(() => {
  const baseClasses = [
    'relative',
    'w-full',
    'cursor-default',
    'rounded-md',
    'border',
    'bg-white',
    'dark:bg-gray-800',
    'text-gray-900',
    'dark:text-white',
    'text-left',
    'shadow-sm',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-gray-50',
    'dark:disabled:bg-gray-700',
  ]

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-2', 'text-sm'],
    md: ['px-4', 'py-2.5', 'text-base'],
    lg: ['px-4', 'py-3', 'text-lg'],
  }

  // State classes
  const stateClasses = props.error
    ? [
        'border-error-300', 
        'dark:border-error-500',
        'focus:border-error-500', 
        'focus:ring-error-500'
      ]
    : [
        'border-gray-300', 
        'dark:border-gray-600',
        'focus:border-primary-500', 
        'focus:ring-primary-500'
      ]

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
    ...stateClasses,
  ]
})

const getDisplayValue = (option: SelectOption | any): string => {
  if (typeof option === 'object' && option !== null && 'label' in option) {
    return option.label
  }
  return String(option)
}

const getOptionKey = (option: SelectOption | any): string => {
  if (typeof option === 'object' && option !== null && 'value' in option) {
    return String(option.value)
  }
  return String(option)
}
</script>
