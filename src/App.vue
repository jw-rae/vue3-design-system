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

      <!-- Date & Time Pickers -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Date & Time Pickers</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Date Picker</h3>
            </template>
            <div class="space-y-4">
              <UiDatePicker v-model="formData.dateValue" label="Date" />
              <div class="text-sm text-text-secondary">Value: {{ formData.dateValue }}</div>
            </div>
          </UiCard>
          <UiCard>
            <template #header>
              <h3 class="font-medium">Time Picker</h3>
            </template>
            <div class="space-y-4">
              <UiTimePicker v-model="formData.timeValue" label="Time" />
              <div class="text-sm text-text-secondary">Value: {{ formData.timeValue }}</div>
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Slider Example -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Slider</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Basic Slider</h3>
            </template>
            <div class="space-y-4">
              <UiSlider v-model="formData.sliderValue" :min="0" :max="100" :step="1" label="Volume" />
              <div class="text-sm text-text-secondary">Value: {{ formData.sliderValue }}</div>
            </div>
          </UiCard>
        </div>
      </section>
        <!-- ProgressSlider Example -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-text-primary mb-6">Progress Slider</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiCard>
              <template #header>
                <h3 class="font-medium">Progress Bar Style Slider</h3>
              </template>
              <div class="space-y-4">
                <UiProgressSlider v-model="formData.progressSliderValue" :min="0" :max="100" :step="1" label="Progress" />
                <div class="text-sm text-text-secondary">Value: {{ formData.progressSliderValue }}</div>
              </div>
            </UiCard>
          </div>
        </section>

      <!-- Toggle Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Toggle Switches</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Basic Toggles</h3>
            </template>
            <div class="space-y-4">
              <UiToggle v-model="formData.notifications" label="Push Notifications" />
              <UiToggle v-model="formData.darkMode" variant="info" label="Dark Mode" />
              <UiToggle v-model="formData.autoSave" variant="success" label="Auto-save" />
              <UiToggle v-model="formData.analytics" variant="warning" show-icons label="Analytics" />
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Toggle Sizes</h3>
            </template>
            <div class="space-y-4">
              <UiToggle v-model="formData.smallToggle" size="sm" label="Small toggle" />
              <UiToggle v-model="formData.mediumToggle" size="md" label="Medium toggle" />
              <UiToggle v-model="formData.largeToggle" size="lg" label="Large toggle" />
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Checkbox Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Checkboxes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Checkbox Variants</h3>
            </template>
            <div class="space-y-4">
              <UiCheckbox v-model="formData.primaryCheck" variant="primary" label="Primary checkbox" />
              <UiCheckbox v-model="formData.successCheck" variant="success" label="Success checkbox" />
              <UiCheckbox v-model="formData.warningCheck" variant="warning" label="Warning checkbox" />
              <UiCheckbox v-model="formData.errorCheck" variant="error" label="Error checkbox" />
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Checkbox Sizes</h3>
            </template>
            <div class="space-y-4">
              <UiCheckbox v-model="formData.smallCheck" size="sm" label="Small checkbox" />
              <UiCheckbox v-model="formData.mediumCheck" size="md" label="Medium checkbox" />
              <UiCheckbox v-model="formData.largeCheck" size="lg" label="Large checkbox" />
            </div>
          </UiCard>
        </div>
      </section>

      <!-- Tabs Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Tabs</h2>
        <div class="space-y-8">
          <!-- Basic Tabs -->
          <UiCard>
            <template #header>
              <h3 class="font-medium">Basic Tabs</h3>
            </template>
            <UiTabs v-model="formData.basicTab" :tabs="basicTabs" />
          </UiCard>

          <!-- Tabs with Icons and Badges -->
          <UiCard>
            <template #header>
              <h3 class="font-medium">Tabs with Icons & Badges</h3>
            </template>
            <UiTabs v-model="formData.iconTab" :tabs="iconTabs" variant="pills" />
          </UiCard>

          <!-- Diagonal Tabs -->
          <UiCard>
            <template #header>
              <h3 class="font-medium">Sci-Fi Diagonal Tabs</h3>
            </template>
            <UiTabs v-model="formData.diagonalTab" :tabs="sciFiTabs" diagonal />
          </UiCard>
        </div>
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
              <UiButton size="xxs">Extra Extra Small</UiButton>
              <UiButton size="xs">Extra Small</UiButton>
              <UiButton size="sm">Small</UiButton>
              <UiButton size="md">Medium</UiButton>
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
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Badges</h2>
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
        
        <!-- Filled Header Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <UiCard :filled-header="true">
            <template #header>
              <h3 class="text-lg font-semibold">Filled Header</h3>
            </template>
            <p class="text-text-secondary">This card has a prominent filled header with white text on a colored background.</p>
            <template #footer>
              <UiButton variant="primary" size="sm">Learn More</UiButton>
            </template>
          </UiCard>

          <UiCard variant="elevated" :filled-header="true">
            <template #header>
              <h3 class="text-lg font-semibold">Elevated + Filled</h3>
            </template>
            <p class="text-text-secondary">Combination of elevated shadow with filled header for extra emphasis.</p>
          </UiCard>

          <UiCard variant="outlined" :filled-header="true">
            <template #header>
              <h3 class="text-lg font-semibold">Outlined + Filled</h3>
            </template>
            <p class="text-text-secondary">Strong border with filled header creates a professional look.</p>
          </UiCard>
        </div>
      </section>

      <!-- IconButton Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Icon Buttons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Icon Button Variants</h3>
            </template>
            <div class="flex flex-wrap gap-3">
              <UiIconButton variant="primary" :icon="HeartIcon" ariaLabel="Like" />
              <UiIconButton variant="secondary" :icon="ShareIcon" ariaLabel="Share" />
              <UiIconButton variant="outline" :icon="BookmarkIcon" ariaLabel="Bookmark" />
              <UiIconButton variant="ghost" :icon="PlusIcon" ariaLabel="Add" />
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Icon Button Sizes</h3>
            </template>
            <div class="flex flex-wrap items-center gap-3">
              <UiIconButton variant="primary" :icon="HeartIcon" size="sm" ariaLabel="Small" />
              <UiIconButton variant="primary" :icon="HeartIcon" size="md" ariaLabel="Medium" />
              <UiIconButton variant="primary" :icon="HeartIcon" size="lg" ariaLabel="Large" />
            </div>
          </UiCard>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Buttons with Icons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Button with Icons</h3>
            </template>
            <div class="space-y-3">
              <div class="flex gap-2">
                <UiButton variant="primary" :icon="PlusIcon" size="sm">Add Item</UiButton>
                <UiButton variant="secondary" :icon="HeartIcon" size="sm">Like</UiButton>
              </div>
              <div class="flex gap-2">
                <UiButton variant="outline" :icon="ArrowLeftIcon" icon-position="left">Previous</UiButton>
                <UiButton variant="outline" :icon="ArrowRightIcon" icon-position="right">Next</UiButton>
              </div>
              <div class="flex gap-2">
                <UiButton variant="success" :icon="PlusIcon" size="md">Medium with Icon</UiButton>
              </div>
            </div>
          </UiCard>
        </div>
      </section>

      <!-- RadioButton Examples -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-text-primary mb-6">Radio Buttons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="font-medium">Size Selection</h3>
            </template>
            <div class="space-y-4">
              <UiRadioButton
                v-model="formData.size"
                :options="sizeOptions"
                name="size-selection"
              />
              <p v-if="formData.size" class="text-sm text-text-secondary">
                Selected: {{ formData.size }}
              </p>
            </div>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="font-medium">Notification Preferences</h3>
            </template>
            <div class="space-y-4">
              <UiRadioButton
                v-model="formData.notificationPreference"
                :options="notificationOptions"
                direction="horizontal"
                size="sm"
                name="notification-prefs"
              />
              <p v-if="formData.notificationPreference" class="text-sm text-text-secondary">
                Selected: {{ formData.notificationPreference }}
              </p>
            </div>
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
  IconButton as UiIconButton,
  Card as UiCard, 
  Modal as UiModal, 
  Input as UiInput,
  Badge as UiBadge,
  Alert as UiAlert,
  Select as UiSelect,
  ThemeToggle as UiThemeToggle,
  AccentColorsDemo as UiAccentColorsDemo,
  Toggle as UiToggle,
  Checkbox as UiCheckbox,
  Tabs as UiTabs,
  RadioButton as UiRadioButton,
  Slider as UiSlider,
  ProgressSlider as UiProgressSlider,
  DatePicker as UiDatePicker,
  TimePicker as UiTimePicker,
  useTheme
} from './index'
import { 
  HeartIcon, 
  ShareIcon, 
  BookmarkIcon, 
  PlusIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon 
} from '@heroicons/vue/24/outline'

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
  dateValue: '2025-09-10',
  timeValue: '12:00',
  // Task manager data
  task1: false,
  task2: true,
  task3: false,
  task4: false,
  newTask: '',
  sliderValue: 50,
  progressSliderValue: 30,
  techChoice: null,
  size: 'medium',
  // Toggle properties
  notifications: true,
  notificationPreference: 'email',
  darkMode: false,
  autoSave: true,
  analytics: false,
  smallToggle: false,
  mediumToggle: true,
  largeToggle: false,
  // Checkbox properties
  primaryCheck: true,
  successCheck: false,
  warningCheck: true,
  errorCheck: false,
  smallCheck: true,
  mediumCheck: false,
  largeCheck: true,
  // Tab properties
  basicTab: 'home',
  iconTab: 'dashboard',
  diagonalTab: 'systems',
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

const sizeOptions = [
  { label: 'Small (S)', value: 'small' },
  { label: 'Medium (M)', value: 'medium' },
  { label: 'Large (L)', value: 'large' },
  { label: 'Extra Large (XL)', value: 'xl', disabled: true },
]

const notificationOptions = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'None', value: 'none' },
]

// Tab data for demo
const basicTabs = [
  { value: 'home', label: 'Home', content: '<div class="p-4"><h3 class="font-semibold mb-2">Welcome Home</h3><p class="text-text-secondary">This is the home tab content with basic information and overview.</p></div>' },
  { value: 'about', label: 'About', content: '<div class="p-4"><h3 class="font-semibold mb-2">About Us</h3><p class="text-text-secondary">Learn more about our company and mission.</p></div>' },
  { value: 'services', label: 'Services', content: '<div class="p-4"><h3 class="font-semibold mb-2">Our Services</h3><p class="text-text-secondary">Discover what we can do for you.</p></div>' },
  { value: 'contact', label: 'Contact', content: '<div class="p-4"><h3 class="font-semibold mb-2">Get in Touch</h3><p class="text-text-secondary">Contact information and form.</p></div>' },
]

const iconTabs = [
  { 
    value: 'dashboard', 
    label: 'Dashboard', 
    content: '<div class="p-4"><h3 class="font-semibold mb-2">📊 Dashboard</h3><p class="text-text-secondary">Overview of your system metrics and key performance indicators.</p></div>'
  },
  { 
    value: 'users', 
    label: 'Users', 
    badge: '12',
    content: '<div class="p-4"><h3 class="font-semibold mb-2">👥 User Management</h3><p class="text-text-secondary">Manage user accounts and permissions. 12 pending approvals.</p></div>'
  },
  { 
    value: 'settings', 
    label: 'Settings', 
    content: '<div class="p-4"><h3 class="font-semibold mb-2">⚙️ System Settings</h3><p class="text-text-secondary">Configure your application preferences and system options.</p></div>'
  },
]

const sciFiTabs = [
  { 
    value: 'systems', 
    label: 'Systems', 
    content: '<div class="p-4"><h3 class="font-semibold mb-2 text-primary-600">🚀 System Status</h3><p class="text-text-secondary">Core systems operational. All primary functions online.</p><div class="mt-3 space-y-1"><p class="text-accent-success-main">✓ Life Support: Active</p><p class="text-accent-success-main">✓ Navigation: Online</p><p class="text-accent-warning-main">⚠ Backup Power: Standby</p></div></div>'
  },
  { 
    value: 'navigation', 
    label: 'Navigation', 
    badge: '3',
    content: '<div class="p-4"><h3 class="font-semibold mb-2 text-primary-600">🧭 Navigation Control</h3><p class="text-text-secondary">Stellar navigation and course plotting systems. 3 waypoints active.</p><div class="mt-3 space-y-1"><p>Current Position: Sector 7G</p><p>Destination: Alpha Centauri</p><p>ETA: 14.7 hours</p></div></div>'
  },
  { 
    value: 'comms', 
    label: 'Communications', 
    content: '<div class="p-4"><h3 class="font-semibold mb-2 text-primary-600">📡 Communications Array</h3><p class="text-text-secondary">Subspace communications and signal processing systems.</p><div class="mt-3 space-y-1"><p class="text-accent-info-main">• Long Range: Operational</p><p class="text-accent-info-main">• Emergency Beacon: Ready</p><p class="text-accent-success-main">• Quantum Encryption: Active</p></div></div>'
  },
]

const passwordError = computed(() => {
  if (formData.value.password && formData.value.password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  return ''
})
</script>
