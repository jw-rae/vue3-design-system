# Usage Examples

This document provides practical examples of how to use the Vue 3 Design System in your projects.

## Installation

### 1. Install the package
```bash
npm install @jwrae/design-system
```

### 2. Setup in your main.js/ts
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import DesignSystem from '@jwrae/design-system'
import '@jwrae/design-system/style.css'

const app = createApp(App)
app.use(DesignSystem)
app.mount('#app')
```

## Component Examples

### Form Component
```vue
<template>
  <UiCard variant="elevated" padding="lg">
    <template #header>
      <h2 class="text-xl font-semibold">User Registration</h2>
    </template>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Personal Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UiInput
          v-model="form.firstName"
          label="First Name"
          placeholder="Enter your first name"
          required
          :error="errors.firstName"
        />
        <UiInput
          v-model="form.lastName"
          label="Last Name"
          placeholder="Enter your last name"
          required
          :error="errors.lastName"
        />
      </div>
      
      <!-- Contact Information -->
      <UiInput
        v-model="form.email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        required
        :error="errors.email"
      />
      
      <!-- Country Selection -->
      <UiSelect
        v-model="form.country"
        :options="countryOptions"
        label="Country"
        placeholder="Select your country"
        required
        :error="errors.country"
      />
      
      <!-- Password -->
      <UiInput
        v-model="form.password"
        type="password"
        label="Password"
        placeholder="Create a password"
        hint="Password must be at least 8 characters"
        required
        :error="errors.password"
      />
      
      <!-- Terms and Conditions -->
      <div class="flex items-start space-x-3">
        <input
          id="terms"
          v-model="form.acceptTerms"
          type="checkbox"
          class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label for="terms" class="text-sm text-gray-700">
          I agree to the 
          <a href="#" class="text-primary-600 hover:text-primary-500">Terms of Service</a>
          and 
          <a href="#" class="text-primary-600 hover:text-primary-500">Privacy Policy</a>
        </label>
      </div>
      
      <!-- Submit Button -->
      <div class="flex justify-end space-x-3">
        <UiButton variant="outline" type="button" @click="resetForm">
          Reset
        </UiButton>
        <UiButton 
          type="submit" 
          :disabled="!isFormValid || isSubmitting"
          class="min-w-24"
        >
          <UiSpinner v-if="isSubmitting" size="sm" color="white" />
          <span v-else>Register</span>
        </UiButton>
      </div>
    </form>
    
    <!-- Success Alert -->
    <UiAlert
      v-if="showSuccess"
      variant="success"
      title="Registration Successful!"
      dismissible
      @dismiss="showSuccess = false"
      class="mt-6"
    >
      Welcome! Your account has been created successfully.
    </UiAlert>
  </UiCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  country: null,
  password: '',
  acceptTerms: false,
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  // ... more countries
]

const isFormValid = computed(() => {
  return form.value.firstName &&
         form.value.lastName &&
         form.value.email &&
         form.value.country &&
         form.value.password &&
         form.value.acceptTerms
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showSuccess.value = true
    resetForm()
  } catch (error) {
    // Handle error
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  Object.keys(form.value).forEach(key => {
    if (typeof form.value[key] === 'boolean') {
      form.value[key] = false
    } else {
      form.value[key] = ''
    }
  })
  errors.value = {}
}
</script>
```

### Dashboard Card Grid
```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Stats Cards -->
    <UiCard
      v-for="stat in stats"
      :key="stat.title"
      variant="elevated"
      hoverable
      class="cursor-pointer"
      @click="navigateToDetail(stat.path)"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-text-secondary">{{ stat.title }}</p>
          <p class="text-3xl font-bold text-text-primary">{{ stat.value }}</p>
          <div class="flex items-center mt-2">
            <UiBadge
              :variant="stat.trend === 'up' ? 'success' : 'error'"
              size="sm"
            >
              {{ stat.change }}
            </UiBadge>
            <span class="ml-2 text-sm text-text-tertiary">vs last month</span>
          </div>
        </div>
        <div :class="[
          'p-3 rounded-full',
          stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
        ]">
          <component :is="stat.icon" class="h-6 w-6" />
        </div>
      </div>
    </UiCard>
  </div>
</template>
```

### Modal Confirmation Dialog
```vue
<template>
  <UiModal :is-open="isOpen" @close="handleClose" size="sm">
    <template #header>
      <div class="flex items-center space-x-3">
        <div class="p-2 bg-red-100 rounded-full">
          <ExclamationTriangleIcon class="h-6 w-6 text-red-600" />
        </div>
        <h3 class="text-lg font-medium">Delete Item</h3>
      </div>
    </template>
    
    <div class="space-y-4">
      <p class="text-text-secondary">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
      
      <UiAlert variant="warning" :show-icon="false">
        This will permanently remove all associated data.
      </UiAlert>
    </div>
    
    <template #footer>
      <UiButton variant="outline" @click="handleClose">
        Cancel
      </UiButton>
      <UiButton
        variant="danger"
        :disabled="isDeleting"
        @click="handleDelete"
      >
        <UiSpinner v-if="isDeleting" size="sm" color="white" />
        <span v-else>Delete</span>
      </UiButton>
    </template>
  </UiModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  isOpen: boolean
  itemId: string
}>()

const emit = defineEmits<{
  close: []
  deleted: [itemId: string]
}>()

const isDeleting = ref(false)

const handleClose = () => {
  if (!isDeleting.value) {
    emit('close')
  }
}

const handleDelete = async () => {
  isDeleting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    emit('deleted', props.itemId)
    emit('close')
  } catch (error) {
    // Handle error
  } finally {
    isDeleting.value = false
  }
}
</script>
```

## Theming Examples

### Custom Theme
```css
/* Override default theme variables */
:root {
  --color-primary: #7c3aed;
  --color-primary-hover: #6d28d9;
  --color-primary-focus: #5b21b6;
  --border-radius-base: 0.5rem;
  --border-radius-lg: 1rem;
}

/* Dark theme */
[data-theme="dark"] {
  --color-surface: #1f2937;
  --color-surface-variant: #374151;
  --color-on-surface: #f9fafb;
  --color-on-surface-variant: #d1d5db;
}
```

### Theme Switching
```vue
<template>
  <div :data-theme="currentTheme">
    <UiButton @click="toggleTheme">
      Switch to {{ currentTheme === 'light' ? 'dark' : 'light' }} theme
    </UiButton>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentTheme = ref('light')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', currentTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    currentTheme.value = savedTheme
  }
})
</script>
```

## Responsive Design Examples

### Mobile-First Layout
```vue
<template>
  <div class="container mx-auto px-4">
    <!-- Mobile: Stack vertically, Desktop: Side by side -->
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Sidebar -->
      <aside class="lg:w-1/4">
        <UiCard>
          <template #header>
            <h3>Filters</h3>
          </template>
          <!-- Filter content -->
        </UiCard>
      </aside>
      
      <!-- Main content -->
      <main class="flex-1">
        <!-- Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <UiCard v-for="item in items" :key="item.id">
            <!-- Item content -->
          </UiCard>
        </div>
      </main>
    </div>
  </div>
</template>
```

## Integration with Popular Libraries

### With Vue Router
```vue
<template>
  <UiButton
    variant="primary"
    @click="navigateToProfile"
  >
    View Profile
  </UiButton>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProfile = () => {
  router.push('/profile')
}
</script>
```

### With Pinia Store
```javascript
// stores/notifications.js
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    alerts: []
  }),
  
  actions: {
    addAlert(alert) {
      this.alerts.push({
        id: Date.now(),
        ...alert
      })
    },
    
    removeAlert(id) {
      const index = this.alerts.findIndex(alert => alert.id === id)
      if (index > -1) {
        this.alerts.splice(index, 1)
      }
    }
  }
})
```

```vue
<template>
  <div class="fixed top-4 right-4 z-50 space-y-2">
    <UiAlert
      v-for="alert in notifications.alerts"
      :key="alert.id"
      :variant="alert.variant"
      :title="alert.title"
      dismissible
      @dismiss="notifications.removeAlert(alert.id)"
    >
      {{ alert.message }}
    </UiAlert>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notifications'

const notifications = useNotificationStore()
</script>
```

These examples demonstrate the flexibility and power of the Vue 3 Design System across different use cases and integrations.
