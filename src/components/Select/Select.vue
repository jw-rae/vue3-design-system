<template>
  <div class="relative" ref="selectWrapperRef">
    <label v-if="label" :for="selectId" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="      ? [
        'border-primary-700', 
        'dark:border-primary-500',
        'focus:border-primary-800', 
        'focus:ring-primary-800'
      ]rimary-700 ml-1">*</span>
    </label>
    
    <Listbox v-model="selectedValue" :disabled="disabled">
      <div class="relative">
        <template v-if="diagonal">
          <div class="diagonal-select" :style="diagonalStyles">
            <ListboxButton :class="buttonClasses" class="ui-focus-ring-diagonal ui-transition diagonal-content" @click="handleButtonClick">
              <span v-if="selectedValue" class="block truncate text-left">
                {{ getDisplayValue(selectedValue) }}
              </span>
              <span v-else class="block truncate text-left text-text-tertiary dark:text-text-tertiary">
                {{ placeholder }}
              </span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-text-tertiary dark:text-text-tertiary" />
              </span>
            </ListboxButton>
          </div>
        </template>
        
        <template v-else>
          <ListboxButton :class="buttonClasses" class="ui-focus-ring ui-transition" @click="handleButtonClick">
            <span v-if="selectedValue" class="block truncate text-left">
              {{ getDisplayValue(selectedValue) }}
            </span>
            <span v-else class="block truncate text-left text-text-tertiary dark:text-text-tertiary">
              {{ placeholder }}
            </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon class="h-5 w-5 text-text-tertiary dark:text-text-tertiary" />
            </span>
          </ListboxButton>
        </template>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <teleport to="body" v-if="teleport">
            <ListboxOptions
              :class="[
                'z-50 mt-1 max-h-60 overflow-auto bg-surface-elevated dark:bg-surface-elevated py-1 text-base shadow-lg focus:outline-none sm:text-sm',
                diagonal ? 'ui-diagonal-corners listbox-options' : 'rounded-md ring-1 ring-border-primary dark:ring-border-primary'
              ]"
              :style="{ ...dropdownPositionStyle, ...(diagonal ? diagonalDropdownStyles : {}) }"
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
                    'text-text-primary dark:text-text-primary relative cursor-default select-none py-2 pl-10 pr-4',
                    diagonal ? 'diagonal-option' : '',
                    active && diagonal ? 'diagonal-hover-option' : '',
                    active && !diagonal ? 'bg-primary-100 dark:bg-primary-900/20' : ''
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
          </teleport>
          
          <ListboxOptions
            v-else
            :class="[
              'absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-surface-elevated dark:bg-surface-elevated py-1 text-base shadow-lg focus:outline-none sm:text-sm',
              diagonal ? 'ui-diagonal-corners listbox-options' : 'rounded-md ring-1 ring-border-primary dark:ring-border-primary'
            ]"
            :style="diagonal ? diagonalDropdownStyles : {}"
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
                  'text-text-primary dark:text-text-primary relative cursor-default select-none py-2 pl-10 pr-4',
                  diagonal ? 'diagonal-option' : '',
                  active && diagonal ? 'diagonal-hover-option' : '',
                  active && !diagonal ? 'bg-primary-100 dark:bg-primary-900/20' : ''
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
    
    <p v-if="error" class="mt-1 text-sm text-primary-700 dark:text-primary-400">
      {{ error }}
    </p>
    
    <p v-else-if="hint" class="mt-1 text-sm text-text-tertiary dark:text-text-tertiary">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onUnmounted } from 'vue'
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
  diagonal?: boolean
  teleport?: boolean
}

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option...',
  disabled: false,
  required: false,
  size: 'md',
  options: () => [],
  diagonal: false,
  teleport: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: any]
}>()

// Refs for teleport positioning
const selectWrapperRef = ref<HTMLElement | null>(null)
const dropdownPositionStyle = ref<Record<string, string | number>>({})

// Dropdown positioning for teleport
function updateDropdownPosition() {
  if (!props.teleport || !selectWrapperRef.value) return;
  
  nextTick(() => {
    if (!selectWrapperRef.value) return;
    const rect = selectWrapperRef.value.getBoundingClientRect();
    dropdownPositionStyle.value = {
      position: 'absolute',
      top: `${rect.bottom + window.scrollY + 4}px`,
      left: `${rect.left + window.scrollX}px`,
      width: `${rect.width}px`,
      zIndex: 1000,
    };
  });
}

// Handle button click for teleported dropdowns
function handleButtonClick() {
  if (props.teleport) {
    updateDropdownPosition();
  }
}

// Click outside handler for teleported dropdown
function onClickOutside(e: MouseEvent) {
  if (!props.teleport) return;
  
  const selectWrapper = selectWrapperRef.value;
  const target = e.target as Node;
  
  // Check if click is outside the select wrapper
  if (selectWrapper && !selectWrapper.contains(target)) {
    // Check if the target is a teleported dropdown option
    const isDropdownElement = target instanceof Element && (
      target.closest('[role="listbox"]') || 
      target.closest('[role="option"]') ||
      target.hasAttribute('data-headlessui-state')
    );
    
    // If click is not in dropdown, let it close naturally
    if (!isDropdownElement) {
      // Headless UI will handle the closing automatically
      return;
    }
  }
}

// Handle scroll to close dropdown (better UX)
function onScroll() {
  if (!props.teleport) return;
  
  // Close dropdown on scroll by forcing blur on the button
  const selectWrapper = selectWrapperRef.value;
  if (selectWrapper) {
    const button = selectWrapper.querySelector('[role="button"]') as HTMLElement;
    if (button) {
      button.blur();
    }
  }
}

// Lifecycle hooks for teleport
onMounted(() => {
  if (props.teleport) {
    updateDropdownPosition();
    window.addEventListener('resize', updateDropdownPosition);
    window.addEventListener('mousedown', onClickOutside);
    window.addEventListener('scroll', onScroll, true); // Close on scroll instead of following
  }
});

onUnmounted(() => {
  if (props.teleport) {
    window.removeEventListener('resize', updateDropdownPosition);
    window.removeEventListener('mousedown', onClickOutside);
    window.removeEventListener('scroll', onScroll, true);
  }
});

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
  'text-text-primary',
  'dark:text-text-primary',
  'mb-1',
])

const buttonClasses = computed(() => {
  const baseClasses = [
    'relative',
    'w-full',
    'cursor-default',
    'bg-surface-primary',
    'dark:bg-surface-primary',
    'text-text-primary',
    'dark:text-text-primary',
    'text-left',
    'shadow-sm',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:bg-surface-secondary',
    'dark:disabled:bg-surface-secondary',
  ]

  // Shape classes
  const shapeClasses = props.diagonal 
    ? ['ui-diagonal-corners'] 
    : ['rounded-md', 'border']

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-2', 'text-sm'],
    md: ['px-4', 'py-2.5', 'text-base'],
    lg: ['px-4', 'py-3', 'text-lg'],
  }

  // State classes for non-diagonal only
  const stateClasses = props.diagonal ? [] : (props.error
    ? [
        'border-error-300', 
        'dark:border-error-500',
        'focus:border-error-500', 
        'focus:ring-error-500'
      ]
    : [
        'border-border-primary', 
        'dark:border-border-primary',
        'focus:border-primary-500', 
        'focus:ring-primary-500'
      ])

  return [
    ...baseClasses,
    ...shapeClasses,
    ...sizeClasses[props.size],
    ...stateClasses,
  ]
})

const diagonalStyles = computed(() => {
  if (!props.diagonal) return {}
  
  const errorColors = {
    '--ui-diagonal-border': 'var(--color-error-300)',
    '--ui-diagonal-bg': 'var(--color-surface-primary)',
  }
  
  const normalColors = {
    '--ui-diagonal-border': 'var(--color-border-primary)',
    '--ui-diagonal-bg': 'var(--color-surface-primary)',
  }
  
  return props.error ? errorColors : normalColors
})

const diagonalDropdownStyles = computed(() => {
  if (!props.diagonal) return {}
  
  return {
    '--diagonal-border-color': 'var(--color-border-primary)',
    '--diagonal-bg-color': 'var(--color-surface-elevated)',
  }
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
