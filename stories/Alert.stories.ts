import type { Meta, StoryObj } from '@storybook/vue3'
import { Alert } from '../src/components/Alert'

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# Alert Component

Displays important messages with theme-aware accent colors. Each alert variant (success, warning, error, info) automatically adapts to the current theme while maintaining semantic meaning.

## Features

- **Theme-Aware Colors**: Uses accent colors that match the current theme
- **Multiple Variants**: Success, warning, error, and info variants
- **Dismissible**: Optional dismiss functionality
- **Accessible**: Proper ARIA attributes and keyboard navigation
- **Dark Mode**: Seamless dark mode support

## Accent Color Integration

The alert component now uses theme-aware accent colors:
- Success alerts use the theme's success accent colors
- Warning alerts use the theme's warning accent colors  
- Error alerts use the theme's error accent colors
- Info alerts use the theme's info accent colors

Switch themes to see how alert colors adapt while maintaining their semantic meaning.
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['success', 'warning', 'error', 'info'],
            description: 'Alert variant using theme-aware accent colors',
        },
        title: {
            control: 'text',
            description: 'Optional title for the alert',
        },
        dismissible: {
            control: 'boolean',
            description: 'Whether the alert can be dismissed',
        },
        showIcon: {
            control: 'boolean',
            description: 'Whether to show the variant icon',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success!',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
      <Alert v-bind="args">
        Your changes have been saved successfully. The theme-aware success colors adapt to the current theme.
      </Alert>
    `,
    }),
}

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
      <Alert v-bind="args">
        Please review your input before proceeding. Warning colors adapt to each theme's personality.
      </Alert>
    `,
    }),
}

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
      <Alert v-bind="args">
        There was an error processing your request. Error colors maintain consistency across themes.
      </Alert>
    `,
    }),
}

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        dismissible: false,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
      <Alert v-bind="args">
        This is helpful information about the current process. Info colors complement each theme.
      </Alert>
    `,
    }),
}

export const Dismissible: Story = {
    args: {
        variant: 'info',
        title: 'Dismissible Alert',
        dismissible: true,
        showIcon: true,
    },
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args }
        },
        template: `
      <Alert v-bind="args" @dismiss="console.log('Alert dismissed')">
        This alert can be dismissed. Click the X button to dismiss it.
      </Alert>
    `,
    }),
}

export const AllVariants: Story = {
    parameters: {
        docs: {
            description: {
                story: 'All alert variants displayed together. Switch themes to see how accent colors adapt.',
            },
        },
    },
    render: () => ({
        components: { Alert },
        template: `
      <div class="space-y-4 w-full max-w-2xl">
        <Alert variant="success" title="Success Alert">
          This is a success message with theme-aware colors.
        </Alert>
        <Alert variant="warning" title="Warning Alert">
          This is a warning message that adapts to the theme.
        </Alert>
        <Alert variant="error" title="Error Alert">
          This is an error message with consistent semantic meaning.
        </Alert>
        <Alert variant="info" title="Info Alert">
          This is an informational message that complements the theme.
        </Alert>
      </div>
    `,
    }),
}
