<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Vue 3 Design System
        </h1>
        <p class="text-xl text-gray-600">
          A responsive component library built with Vue 3, Tailwind CSS, and TypeScript
        </p>
      </div>

      <!-- Button Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Buttons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Button Variants</h3>
            </template>
            <div class="space-y-3">
              <UiButton variant="primary" @click="showModal = true">Primary</UiButton>
              <UiButton variant="secondary">Secondary</UiButton>
              <UiButton variant="outline">Outline</UiButton>
              <UiButton variant="ghost">Ghost</UiButton>
              <UiButton variant="danger">Danger</UiButton>
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Button Sizes</h3>
            </template>
            <div class="space-y-3">
              <UiButton size="xs">Extra Small</UiButton>
              <UiButton size="sm">Small</UiButton>
              <UiButton size="md">Medium</UiButton>
              <UiButton size="lg">Large</UiButton>
              <UiButton size="xl">Extra Large</UiButton>
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Button States</h3>
            </template>
            <div class="space-y-3">
              <UiButton>Normal</UiButton>
              <UiButton disabled>Disabled</UiButton>
              <UiButton rounded>Rounded</UiButton>
              <UiButton block>Block Button</UiButton>
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Alert Example -->
      <section v-if="showAlert" class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Alerts</h2>
        <div class="space-y-4">
          <UiAlert variant="success" title="Success!" dismissible @dismiss="showAlert = false">
            Your changes have been saved successfully.
          </UiAlert>
          <UiAlert variant="warning" title="Warning">
            Please review your input before proceeding.
          </UiAlert>
          <UiAlert variant="error" title="Error">
            There was an error processing your request.
          </UiAlert>
          <UiAlert variant="info">
            This is an informational message without a title.
          </UiAlert>
        </div>
      </section>

      <!-- Badge Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Badges</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Badge Variants</h3>
            </template>
            <div class="flex flex-wrap gap-2">
              <UiBadge variant="primary">Primary</UiBadge>
              <UiBadge variant="secondary">Secondary</UiBadge>
              <UiBadge variant="success">Success</UiBadge>
              <UiBadge variant="warning">Warning</UiBadge>
              <UiBadge variant="error">Error</UiBadge>
              <UiBadge variant="info">Info</UiBadge>
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Badge Styles</h3>
            </template>
            <div class="space-y-3">
              <div class="flex gap-2">
                <UiBadge size="sm">Small</UiBadge>
                <UiBadge size="md">Medium</UiBadge>
                <UiBadge size="lg">Large</UiBadge>
              </div>
              <div class="flex gap-2">
                <UiBadge rounded>Rounded</UiBadge>
                <UiBadge outline>Outline</UiBadge>
                <UiBadge outline rounded>Both</UiBadge>
              </div>
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Select Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Select Dropdowns</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Country Selection</h3>
            </template>
            <div class="space-y-4">
              <UiSelect
                v-model="formData.country"
                :options="countryOptions"
                label="Country"
                placeholder="Select your country"
                hint="Choose your country of residence"
              />
              <p v-if="formData.country" class="text-sm text-gray-600">
                Selected: {{ (formData.country as any)?.label }}
              </p>
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Size Variants</h3>
            </template>
            <div class="space-y-4">
              <UiSelect
                :options="countryOptions"
                size="sm"
                label="Small Select"
                placeholder="Small size"
              />
              <UiSelect
                :options="countryOptions"
                size="md"
                label="Medium Select"
                placeholder="Medium size"
              />
              <UiSelect
                :options="countryOptions"
                size="lg"
                label="Large Select"
                placeholder="Large size"
              />
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Input Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Inputs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Text Inputs</h3>
            </template>
            <div class="space-y-4">
              <UiInput
                v-model="formData.name"
                label="Full Name"
                placeholder="Enter your name"
                required
              />
              <UiInput
                v-model="formData.email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                hint="We'll never share your email"
              />
              <UiInput
                v-model="formData.password"
                type="password"
                label="Password"
                placeholder="Enter password"
                :error="passwordError"
              />
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Input Sizes</h3>
            </template>
            <div class="space-y-4">
              <UiInput
                v-model="formData.small"
                size="sm"
                label="Small Input"
                placeholder="Small size"
              />
              <UiInput
                v-model="formData.medium"
                size="md"
                label="Medium Input"
                placeholder="Medium size"
              />
              <UiInput
                v-model="formData.large"
                size="lg"
                label="Large Input"
                placeholder="Large size"
              />
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Card Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UiCard variant="default">
            <template #header>
              <h3 class="font-medium">Default Card</h3>
            </template>
            <p class="text-gray-600">This is a default card with header and content.</p>
            <template #footer>
              <UiButton size="sm">Action</UiButton>
            </template>
          </UiCard>

          <UiCard variant="outlined">
            <template #header>
              <h3 class="font-medium">Outlined Card</h3>
            </template>
            <p class="text-gray-600">This card has a thicker border.</p>
          </UiCard>

          <UiCard variant="elevated">
            <template #header>
              <h3 class="font-medium">Elevated Card</h3>
            </template>
            <p class="text-gray-600">This card has a shadow effect.</p>
          </UiCard>

          <UiCard variant="filled" hoverable>
            <template #header>
              <h3 class="font-medium">Hoverable Card</h3>
            </template>
            <p class="text-gray-600">Hover over this card to see the effect.</p>
          </UiCard>
        </div>
      </section>

      <!-- Modal Example -->
      <UiModal :is-open="showModal" @close="showModal = false">
        <template #header>
          Modal Example
        </template>
        <div>
          <p class="text-gray-600 mb-4">
            This is an example modal built with Headless UI. It includes smooth transitions
            and proper accessibility features.
          </p>
          <UiInput
            v-model="modalInput"
            label="Example Input"
            placeholder="Type something..."
          />
        </div>
        <template #footer>
          <UiButton variant="outline" @click="showModal = false">
            Cancel
          </UiButton>
          <UiButton @click="showModal = false">
            Confirm
          </UiButton>
        </template>
      </UiModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  Button as UiButton, 
  Card as UiCard, 
  Modal as UiModal, 
  Input as UiInput,
  Badge as UiBadge,
  Alert as UiAlert,
  Select as UiSelect
} from './index'

const showModal = ref(false)
const modalInput = ref('')
const showAlert = ref(true)

const formData = ref({
  name: '',
  email: '',
  password: '',
  small: '',
  medium: '',
  large: '',
  country: null,
})

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

const passwordError = computed(() => {
  if (formData.value.password && formData.value.password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  return ''
})
</script>
