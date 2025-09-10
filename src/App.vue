<template>
  <div class="min-h-screen bg-background-primary text-text-primary transition-colors">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
      <!-- Theme Toggle -->
      <div class="flex justify-end mb-8">
        <UiThemeToggle />
      </div>
      
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-text-primary mb-4">
          Vue 3 Design System
        </h1>
        <p class="text-xl text-text-secondary">
          A responsive component library built with Vue 3, Tailwind CSS, and TypeScript
        </p>
        <div class="mt-4">
          <UiBadge variant="primary" rounded>
            🌓 Full Dark Mode Support
          </UiBadge>
        </div>
      </div>

      <!-- Accent Colors Demo -->
      <section class="mb-12">
        <UiAccentColorsDemo />
      </section>

      <!-- Button Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Buttons</h2>
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
              <UiButton variant="error">Error</UiButton>
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
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Alerts</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-3">Regular Alerts</h3>
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
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-3">Filled Alerts (Semantic Colors)</h3>
            <div class="space-y-4">
              <UiAlert variant="success" title="Success!" filled dismissible>
                Success alert with slightly green transparent background.
              </UiAlert>
              <UiAlert variant="warning" title="Warning" filled>
                Warning alert with slightly amber transparent background.
              </UiAlert>
              <UiAlert variant="error" title="Error" filled>
                Error alert with slightly red transparent background.
              </UiAlert>
              <UiAlert variant="info" filled>
                Info alert with slightly blue transparent background.
              </UiAlert>
            </div>
          </div>
        </div>
      </section>

      <!-- Badge Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Badges</h2>
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
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Select Dropdowns</h2>
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
              <p v-if="formData.country" class="text-sm text-text-secondary">
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
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Inputs</h2>
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
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UiCard variant="default">
            <template #header>
              <h3 class="font-medium">Default Card</h3>
            </template>
            <p class="text-text-secondary">This is a default card with header and content.</p>
            <template #footer>
              <UiButton size="sm">Action</UiButton>
            </template>
          </UiCard>

          <UiCard variant="outlined">
            <template #header>
              <h3 class="font-medium">Outlined Card</h3>
            </template>
            <p class="text-text-secondary">This card has a thicker border.</p>
          </UiCard>

          <UiCard variant="elevated">
            <template #header>
              <h3 class="font-medium">Elevated Card</h3>
            </template>
            <p class="text-text-secondary">This card has a shadow effect.</p>
          </UiCard>

          <UiCard variant="filled" hoverable>
            <template #header>
              <h3 class="font-medium">Hoverable Card</h3>
            </template>
            <p class="text-text-secondary">Hover over this card to see the effect.</p>
          </UiCard>
        </div>
      </section>

      <!-- Modal Example -->
      <UiModal :is-open="showModal" @close="showModal = false">
        <template #header>
          Modal Example
        </template>
        <div>
          <p class="text-text-secondary mb-4">
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

      <!-- Sci-Fi Diagonal Corners Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Sci-Fi Diagonal Corners</h2>
        <p class="text-text-secondary mb-6">Experimental diagonal corner effect using layered elements for a futuristic look.</p>
        
        <!-- First Row: Diagonal Buttons and All Badge Variants -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Diagonal Buttons -->
          <UiCard>
            <template #header>
              <h3 class="font-medium">Diagonal Buttons</h3>
            </template>
            <div class="space-y-3">
              <UiButton variant="primary" diagonal>Primary Diagonal</UiButton>
              <UiButton variant="secondary" diagonal>Secondary Diagonal</UiButton>
              <UiButton variant="outline" diagonal>Outline Diagonal</UiButton>
              <UiButton variant="success" diagonal>Success Diagonal</UiButton>
              <UiButton variant="error" diagonal>Error Diagonal</UiButton>
            </div>
          </UiCard>

          <!-- All Diagonal Badge Variants -->
          <UiCard>
            <template #header>
              <h3 class="font-medium">Diagonal Badge Variants</h3>
            </template>
            <div class="space-y-4">
              <!-- Filled Badges -->
              <div>
                <h4 class="text-sm font-medium text-text-secondary mb-2">Filled Diagonal Badges</h4>
                <div class="flex flex-wrap gap-2">
                  <UiBadge variant="primary" diagonal>Primary</UiBadge>
                  <UiBadge variant="secondary" diagonal>Secondary</UiBadge>
                  <UiBadge variant="success" diagonal>Success</UiBadge>
                  <UiBadge variant="warning" diagonal>Warning</UiBadge>
                  <UiBadge variant="error" diagonal>Error</UiBadge>
                  <UiBadge variant="info" diagonal>Info</UiBadge>
                </div>
              </div>
              
              <!-- Outline Badges -->
              <div>
                <h4 class="text-sm font-medium text-text-secondary mb-2">Outline Diagonal Badges</h4>
                <div class="flex flex-wrap gap-2">
                  <UiBadge variant="primary" diagonal outline>Primary</UiBadge>
                  <UiBadge variant="secondary" diagonal outline>Secondary</UiBadge>
                  <UiBadge variant="success" diagonal outline>Success</UiBadge>
                  <UiBadge variant="warning" diagonal outline>Warning</UiBadge>
                  <UiBadge variant="error" diagonal outline>Error</UiBadge>
                  <UiBadge variant="info" diagonal outline>Info</UiBadge>
                </div>
              </div>

              <!-- Rounded Diagonal Badges -->
              <div>
                <h4 class="text-sm font-medium text-text-secondary mb-2">Rounded + Diagonal (Mixed Style)</h4>
                <div class="flex flex-wrap gap-2">
                  <UiBadge variant="primary" diagonal rounded>Primary</UiBadge>
                  <UiBadge variant="success" diagonal rounded>Success</UiBadge>
                  <UiBadge variant="error" diagonal rounded outline>Error Outline</UiBadge>
                </div>
              </div>
            </div>
          </UiCard>
        </div>

        <!-- Second Row: All Diagonal Alert Types -->
        <div class="grid grid-cols-1 gap-6 mb-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">All Diagonal Alert Types</h3>
            </template>
            <div class="space-y-4">
              <!-- Regular Diagonal Alerts -->
              <div>
                <h4 class="text-sm font-medium text-text-secondary mb-3">Regular Diagonal Alerts</h4>
                <div class="space-y-3">
                  <UiAlert variant="success" title="Diagonal Success!" diagonal>
                    Your futuristic operation completed successfully with diagonal styling.
                  </UiAlert>
                  <UiAlert variant="warning" title="Diagonal Warning" diagonal>
                    Please review your sci-fi input before proceeding with diagonal interface.
                  </UiAlert>
                  <UiAlert variant="error" title="Diagonal Error" diagonal>
                    There was an error in the quantum processing matrix with diagonal corners.
                  </UiAlert>
                  <UiAlert variant="info" diagonal>
                    This is a diagonal informational message for the future interface.
                  </UiAlert>
                </div>
              </div>

              <!-- Filled Diagonal Alerts -->
              <div>
                <h4 class="text-sm font-medium text-text-secondary mb-3">Filled Diagonal Alerts</h4>
                <div class="space-y-3">
                  <UiAlert variant="success" title="Filled Diagonal Success!" diagonal filled>
                    Filled success alert with diagonal corners and transparent background.
                  </UiAlert>
                  <UiAlert variant="warning" title="Filled Diagonal Warning" diagonal filled>
                    Filled warning alert with diagonal styling for futuristic interfaces.
                  </UiAlert>
                  <UiAlert variant="error" title="Filled Diagonal Error" diagonal filled>
                    Filled error alert with diagonal corners for sci-fi applications.
                  </UiAlert>
                  <UiAlert variant="info" diagonal filled>
                    Filled info alert with diagonal corners - no title for variety.
                  </UiAlert>
                </div>
              </div>
            </div>
          </UiCard>
        </div>

        <!-- Third Row: Diagonal Cards, Inputs, and Selects -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Diagonal Card & Input -->
          <UiCard diagonal>
            <template #header>
              <h3 class="font-medium">Diagonal Card & Input</h3>
            </template>
            <div class="space-y-4">
              <UiInput 
                diagonal 
                label="Sci-Fi Input" 
                placeholder="Enter futuristic data..." 
              />
              <p class="text-sm text-text-secondary">
                This entire card also has diagonal corners! Notice how the layered approach creates clean borders.
              </p>
            </div>
          </UiCard>

          <!-- Diagonal Select -->
          <UiCard diagonal>
            <template #header>
              <h3 class="font-medium">Diagonal Select</h3>
            </template>
            <div class="space-y-4">
              <UiSelect
                v-model="formData.techChoice"
                :options="techOptions"
                diagonal
                label="Technology Platform"
                placeholder="Select your tech stack..."
                hint="Choose your preferred technology"
              />
              <p v-if="formData.techChoice" class="text-sm text-text-secondary">
                Selected: {{ (formData.techChoice as any)?.label }}
              </p>
              <p class="text-sm text-text-secondary">
                Both the card and select have diagonal corners for a futuristic sci-fi look!
              </p>
            </div>
          </UiCard>
        </div>
      </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  Button as UiButton, 
  Card as UiCard, 
  Modal as UiModal, 
  Input as UiInput,
  Badge as UiBadge,
  Alert as UiAlert,
  Select as UiSelect,
  ThemeToggle as UiThemeToggle,
  AccentColorsDemo as UiAccentColorsDemo,
  useTheme
} from './index'

// Initialize theme on app startup
const { initializeTheme } = useTheme()
onMounted(() => {
  initializeTheme()
})

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
  techChoice: null,
})

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

const techOptions = [
  { value: 'vue', label: 'Vue.js & TypeScript' },
  { value: 'react', label: 'React & Next.js' },
  { value: 'angular', label: 'Angular & RxJS' },
  { value: 'svelte', label: 'Svelte & SvelteKit' },
  { value: 'node', label: 'Node.js & Express' },
  { value: 'python', label: 'Python & FastAPI' },
]

const passwordError = computed(() => {
  if (formData.value.password && formData.value.password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  return ''
})
</script>
