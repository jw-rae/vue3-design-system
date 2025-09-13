import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A checkbox component for multiple selections with theme support and optional sci-fi diagonal corners.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the checkbox',
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'success', 'warning', 'error', 'info'],
            description: 'Color variant of the checkbox',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the checkbox is disabled',
        },
        indeterminate: {
            control: { type: 'boolean' },
            description: 'Whether the checkbox is in indeterminate state',
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
        indeterminate: false,
        diagonal: false,
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)
            return { args, checked }
        },
        template: `
      <Checkbox 
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
        label: 'I agree to the terms and conditions',
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const checked = ref(args.modelValue)
            return { args, checked }
        },
        template: `
      <Checkbox 
        v-model="checked" 
        v-bind="args"
      />
    `,
    }),
}

// Sizes
export const Sizes: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const smallChecked = ref(true)
            const mediumChecked = ref(true)
            const largeChecked = ref(true)
            return { smallChecked, mediumChecked, largeChecked }
        },
        template: `
      <div class="space-y-4">
        <Checkbox v-model="smallChecked" size="sm" label="Small checkbox" />
        <Checkbox v-model="mediumChecked" size="md" label="Medium checkbox" />
        <Checkbox v-model="largeChecked" size="lg" label="Large checkbox" />
      </div>
    `,
    }),
}

// Variants
export const Variants: Story = {
    render: () => ({
        components: { Checkbox },
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
        <Checkbox v-model="primaryChecked" variant="primary" label="Primary checkbox" />
        <Checkbox v-model="successChecked" variant="success" label="Success checkbox" />
        <Checkbox v-model="warningChecked" variant="warning" label="Warning checkbox" />
        <Checkbox v-model="errorChecked" variant="error" label="Error checkbox" />
        <Checkbox v-model="infoChecked" variant="info" label="Info checkbox" />
      </div>
    `,
    }),
}

// States
export const States: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const unchecked = ref(false)
            const checked = ref(true)
            const indeterminate = ref(false)
            const disabledUnchecked = ref(false)
            const disabledChecked = ref(true)
            const disabledIndeterminate = ref(false)

            return {
                unchecked,
                checked,
                indeterminate,
                disabledUnchecked,
                disabledChecked,
                disabledIndeterminate
            }
        },
        template: `
      <div class="space-y-4">
        <h3 class="text-lg font-medium mb-4">Different States</h3>
        <Checkbox v-model="unchecked" label="Unchecked" />
        <Checkbox v-model="checked" label="Checked" />
        <Checkbox v-model="indeterminate" indeterminate label="Indeterminate" />
        <Checkbox v-model="disabledUnchecked" disabled label="Disabled - Unchecked" />
        <Checkbox v-model="disabledChecked" disabled label="Disabled - Checked" />
        <Checkbox v-model="disabledIndeterminate" disabled indeterminate label="Disabled - Indeterminate" />
      </div>
    `,
    }),
}

// Multi-select Example
export const MultiSelectExample: Story = {
    render: () => ({
        components: { Checkbox },
        setup() {
            const option1 = ref(false)
            const option2 = ref(true)
            const option3 = ref(false)
            const option4 = ref(true)
            const allOptions = [option1, option2, option3, option4]

            const selectedCount = computed(() =>
                allOptions.filter(option => option.value).length
            )

            const isIndeterminate = computed(() =>
                selectedCount.value > 0 && selectedCount.value < allOptions.length
            )

            const selectAll = computed({
                get: () => selectedCount.value === allOptions.length,
                set: (value: boolean) => {
                    allOptions.forEach(option => {
                        option.value = value
                    })
                }
            })

            return {
                selectAll,
                option1,
                option2,
                option3,
                option4,
                isIndeterminate,
                selectedCount
            }
        },
        template: `
            <div class="space-y-6 p-6 bg-surface-secondary rounded-lg">
                <h3 class="text-lg font-semibold text-text-primary">Email Preferences</h3>
                <Checkbox 
                    v-model="selectAll"
                    :indeterminate="isIndeterminate"
                    variant="primary"
                    label="Select All"
                    class="font-medium border-b border-border-primary pb-2"
                />
                <div class="space-y-3 ml-6">
                    <Checkbox v-model="option1" label="Newsletter updates" />
                    <Checkbox v-model="option2" label="Product announcements" />
                    <Checkbox v-model="option3" label="Security alerts" />
                    <Checkbox v-model="option4" label="Marketing emails" />
                </div>
                <div class="mt-4 p-3 bg-surface-elevated rounded border border-border-primary">
                    <p class="text-sm text-text-secondary">
                        Selected: {{ selectedCount }} of 4 options
                    </p>
                </div>
            </div>
        `,
    }),
}
