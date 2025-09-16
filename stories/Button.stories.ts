import type { Meta, StoryObj } from '@storybook/vue3'
import { Button } from '../src/components/Button'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# Button Component

A versatile button component with theme-aware accent colors for semantic variants.

## Features

- **Theme-Aware Colors**: Semantic variants (success, warning, error, info) use accent colors that adapt to the current theme
- **Multiple Variants**: Primary, secondary, outline, ghost, and semantic variants
- **Size Options**: Five size variants from extra small to extra large
- **Flexible Styling**: Support for rounded corners, block layout, and disabled states
- **Accessibility**: Proper focus states and keyboard navigation

## Accent Color Integration

Semantic button variants now use theme-aware accent colors:
- **Success buttons**: Use the theme's success accent colors
- **Warning buttons**: Use the theme's warning accent colors  
- **Error buttons**: Use the theme's error accent colors
- **Info buttons**: Use the theme's info accent colors

The primary and secondary variants continue to use the main theme colors, while semantic variants provide consistent meaning across all themes.
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'ghost', 'success', 'warning', 'error', 'info'],
            description: 'Button variant - semantic variants use theme-aware accent colors',
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Button size',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        rounded: {
            control: 'boolean',
            description: 'Whether the button has rounded corners',
        },
        block: {
            control: 'boolean',
            description: 'Whether the button takes full width',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        disabled: false,
        rounded: false,
        block: false,
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args }
        },
        template: '<Button v-bind="args">Primary Button</Button>',
    }),
}

export const SemanticVariants: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Semantic button variants using theme-aware accent colors. Switch themes to see how colors adapt.',
            },
        },
    },
    render: () => ({
        components: { Button },
        template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
        <Button variant="info">Info</Button>
      </div>
    `,
    }),
}

export const AllVariants: Story = {
    parameters: {
        docs: {
            description: {
                story: 'All button variants displayed together. Notice how semantic variants use accent colors while structural variants use theme colors.',
            },
        },
    },
    render: () => ({
        components: { Button },
        template: `
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
        <Button variant="info">Info</Button>
      </div>
    `,
    }),
}

export const Sizes: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Button size variants using the success accent color to show consistency.',
            },
        },
    },
    render: () => ({
        components: { Button },
        template: `
      <div class="flex items-center gap-3">
        <Button variant="success" size="xs">Extra Small</Button>
        <Button variant="success" size="sm">Small</Button>
        <Button variant="success" size="md">Medium</Button>
        <Button variant="success" size="lg">Large</Button>
        <Button variant="success" size="xl">Extra Large</Button>
      </div>
    `,
    }),
}

export const States: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Different button states using accent colors.',
            },
        },
    },
    render: () => ({
        components: { Button },
        template: `
      <div class="space-y-4">
        <div class="flex gap-3">
          <Button variant="error">Normal</Button>
          <Button variant="error" disabled>Disabled</Button>
        </div>
        <div class="flex gap-3">
          <Button variant="warning" rounded>Rounded</Button>
          <Button variant="info" block>Block Button</Button>
        </div>
      </div>
    `,
    }),
}
