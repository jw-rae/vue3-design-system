import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Toggle from './Toggle.vue'

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A toggle switch component for binary choices with theme support and optional sci-fi diagonal corners.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the toggle switch',
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'success', 'warning', 'error', 'info'],
            description: 'Color variant of the toggle',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the toggle is disabled',
        },
        showIcons: {
            control: { type: 'boolean' },
            description: 'Whether to show check/x icons in the thumb',
        },
        diagonal: {
            control: { type: 'boolean' },
            description: 'Enable sci-fi diagonal corners styling',
        },
        label: {
            control: { type: 'text' },
            description: 'Optional label text',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
    args: {
        modelValue: false,
        size: 'md',
        variant: 'primary',
        disabled: false,
        showIcons: false,
        diagonal: false,
    },
    render: (args) => ({
        components: { Toggle },
        setup() {
            const checked = ref(args.modelValue)
            return { args, checked }
        },
        template: `
      <Toggle 
        v-model="checked" 
        v-bind="args"
      />
    `,
    }),
}

// With Label
export const WithLabel: Story = {
    args: {
        ...Default.args,
        label: 'Enable notifications',
    },
    render: (args) => ({
        components: { Toggle },
        setup() {
            const checked = ref(args.modelValue)
            return { args, checked }
        },
        template: `
      <Toggle 
        v-model="checked" 
        v-bind="args"
      />
    `,
    }),
}

// Sizes
export const Sizes: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const smallChecked = ref(false)
            const mediumChecked = ref(true)
            const largeChecked = ref(false)
            return { smallChecked, mediumChecked, largeChecked }
        },
        template: `
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Toggle v-model="smallChecked" size="sm" label="Small" />
          <Toggle v-model="mediumChecked" size="md" label="Medium" />
          <Toggle v-model="largeChecked" size="lg" label="Large" />
        </div>
      </div>
    `,
    }),
}

// Variants
export const Variants: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const primaryChecked = ref(true)
            const successChecked = ref(true)
            const warningChecked = ref(true)
            const errorChecked = ref(true)
            const infoChecked = ref(true)
            return { primaryChecked, successChecked, warningChecked, errorChecked, infoChecked }
        },
        template: `
      <div class="space-y-4">
        <Toggle v-model="primaryChecked" variant="primary" label="Primary" />
        <Toggle v-model="successChecked" variant="success" label="Success" />
        <Toggle v-model="warningChecked" variant="warning" label="Warning" />
        <Toggle v-model="errorChecked" variant="error" label="Error" />
        <Toggle v-model="infoChecked" variant="info" label="Info" />
      </div>
    `,
    }),
}

// With Icons
export const WithIcons: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const iconChecked = ref(true)
            const iconUnchecked = ref(false)
            return { iconChecked, iconUnchecked }
        },
        template: `
      <div class="space-y-4">
        <Toggle v-model="iconChecked" show-icons label="Checked with icon" />
        <Toggle v-model="iconUnchecked" show-icons label="Unchecked with icon" />
      </div>
    `,
    }),
}

// Diagonal/Sci-Fi Style
export const DiagonalStyle: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const diagonalPrimary = ref(true)
            const diagonalSuccess = ref(false)
            const diagonalWarning = ref(true)
            const diagonalError = ref(false)
            return { diagonalPrimary, diagonalSuccess, diagonalWarning, diagonalError }
        },
        template: `
      <div class="space-y-4">
        <h3 class="text-lg font-medium mb-4">Sci-Fi Diagonal Corners</h3>
        <Toggle v-model="diagonalPrimary" diagonal variant="primary" label="Primary Diagonal" />
        <Toggle v-model="diagonalSuccess" diagonal variant="success" label="Success Diagonal" />
        <Toggle v-model="diagonalWarning" diagonal variant="warning" show-icons label="Warning with Icons" />
        <Toggle v-model="diagonalError" diagonal variant="error" show-icons label="Error with Icons" />
      </div>
    `,
    }),
}

// States
export const States: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const enabledChecked = ref(true)
            const enabledUnchecked = ref(false)
            const disabledChecked = ref(true)
            const disabledUnchecked = ref(false)
            return { enabledChecked, enabledUnchecked, disabledChecked, disabledUnchecked }
        },
        template: `
      <div class="space-y-4">
        <h3 class="text-lg font-medium mb-4">Different States</h3>
        <Toggle v-model="enabledChecked" label="Enabled - Checked" />
        <Toggle v-model="enabledUnchecked" label="Enabled - Unchecked" />
        <Toggle v-model="disabledChecked" disabled label="Disabled - Checked" />
        <Toggle v-model="disabledUnchecked" disabled label="Disabled - Unchecked" />
      </div>
    `,
    }),
}

// Interactive Example
export const Interactive: Story = {
    render: () => ({
        components: { Toggle },
        setup() {
            const notifications = ref(true)
            const darkMode = ref(false)
            const autoSave = ref(true)
            const analytics = ref(false)

            return { notifications, darkMode, autoSave, analytics }
        },
        template: `
      <div class="space-y-6 p-6 bg-surface-secondary rounded-lg">
        <h3 class="text-lg font-semibold text-text-primary">Settings</h3>
        <div class="space-y-4">
          <Toggle 
            v-model="notifications" 
            variant="primary" 
            label="Push Notifications"
          />
          <Toggle 
            v-model="darkMode" 
            variant="info" 
            show-icons
            label="Dark Mode"
          />
          <Toggle 
            v-model="autoSave" 
            variant="success" 
            label="Auto-save drafts"
          />
          <Toggle 
            v-model="analytics" 
            variant="warning" 
            diagonal
            label="Usage Analytics (Sci-Fi Style)"
          />
        </div>
        
        <div class="mt-6 p-4 bg-surface-elevated rounded border border-border-primary">
          <h4 class="font-medium text-text-primary mb-2">Current Settings:</h4>
          <ul class="text-sm text-text-secondary space-y-1">
            <li>Notifications: {{ notifications ? 'Enabled' : 'Disabled' }}</li>
            <li>Dark Mode: {{ darkMode ? 'On' : 'Off' }}</li>
            <li>Auto-save: {{ autoSave ? 'On' : 'Off' }}</li>
            <li>Analytics: {{ analytics ? 'Enabled' : 'Disabled' }}</li>
          </ul>
        </div>
      </div>
    `,
    }),
}
