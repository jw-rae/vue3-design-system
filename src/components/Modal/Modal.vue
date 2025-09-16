<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25 dark:bg-black dark:bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel :class="modalClasses">
              <div v-if="$slots.header" class="flex items-center justify-between mb-4">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-primary-900 dark:text-primary-100">
                  <slot name="header" />
                </DialogTitle>
                <button
                  v-if="showCloseButton"
                  @click="closeModal"
                  class="rounded-md text-primary-400 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <XMarkIcon class="h-6 w-6" />
                </button>
              </div>

              <div v-if="$slots.default" class="mb-6">
                <slot />
              </div>

              <div v-if="$slots.footer" class="flex justify-end space-x-3">
                <slot name="footer" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

export interface ModalProps {
  isOpen: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
}

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  showCloseButton: true,
  closeOnOverlayClick: true,
})

const emit = defineEmits<{
  close: []
}>()

const modalClasses = computed(() => {
  const baseClasses = [
    'w-full',
    'transform',
    'overflow-hidden',
    'rounded-2xl',
    'bg-surface-elevated',
    'dark:bg-surface-elevated',
    'p-6',
    'text-left',
    'align-middle',
    'shadow-xl',
    'dark:shadow-primary-900/50',
    'transition-all',
  ]

  const sizeClasses = {
    sm: ['max-w-sm'],
    md: ['max-w-md'],
    lg: ['max-w-lg'],
    xl: ['max-w-xl'],
    full: ['max-w-7xl', 'mx-4'],
  }

  return [
    ...baseClasses,
    ...sizeClasses[props.size],
  ]
})

const closeModal = () => {
  emit('close')
}
</script>
