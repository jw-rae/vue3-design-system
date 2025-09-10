import type { Meta, StoryObj } from '@storybook/vue3'
import { Badge } from '../src/components/Badge'

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# Badge Component

Small status indicators with theme-aware accent colors for semantic variants.

## Features

- **Theme-Aware Colors**: Semantic variants use accent colors that adapt to the current theme
- **Multiple Variants**: Primary, secondary, and semantic variants (success, warning, error, info)
- **Size Options**: Small, medium, and large sizes
- **Style Options**: Filled or outline styles, with optional rounded corners
- **Accessibility**: Proper contrast ratios maintained across all themes

## Accent Color Integration

Semantic badge variants now use theme-aware accent colors:
- **Success badges**: Use the theme's success accent colors with appropriate opacity
- **Warning badges**: Use the theme's warning accent colors
- **Error badges**: Use the theme's error accent colors
- **Info badges**: Use the theme's info accent colors

Colors automatically adjust for both light and dark modes while maintaining semantic meaning.
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
            description: 'Badge variant - semantic variants use theme-aware accent colors',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Badge size',
        },
        rounded: {
            control: 'boolean',
            description: 'Whether the badge has rounded corners',
        },
        outline: {
            control: 'boolean',
            description: 'Whether to use outline style',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        rounded: false,
        outline: false,
    },
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args }
        },
        template: '<Badge v-bind="args">Primary</Badge>',
    }),
}

export const SemanticVariants: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Semantic badge variants using theme-aware accent colors. Switch themes to see adaptation.',
            },
        },
    },
    render: () => ({
        components: { Badge },
        template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    `,
    }),
}

export const AllVariants: Story = {
    parameters: {
        docs: {
            description: {
                story: 'All badge variants including both structural and semantic variants.',
            },
        },
    },
    render: () => ({
        components: { Badge },
        template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    `,
    }),
}

export const Sizes: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Badge size variants using accent colors.',
            },
        },
    },
    render: () => ({
        components: { Badge },
        template: `
      <div class="flex items-center gap-3">
        <Badge variant="success" size="sm">Small</Badge>
        <Badge variant="warning" size="md">Medium</Badge>
        <Badge variant="error" size="lg">Large</Badge>
      </div>
    `,
    }),
}

export const Styles: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Different badge styles using semantic accent colors.',
            },
        },
    },
    render: () => ({
        components: { Badge },
        template: `
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-medium mb-2">Filled Badges</h4>
          <div class="flex gap-2">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>
        
        <div>
          <h4 class="text-sm font-medium mb-2">Outline Badges</h4>
          <div class="flex gap-2">
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="warning" outline>Warning</Badge>
            <Badge variant="error" outline>Error</Badge>
            <Badge variant="info" outline>Info</Badge>
          </div>
        </div>
        
        <div>
          <h4 class="text-sm font-medium mb-2">Rounded Badges</h4>
          <div class="flex gap-2">
            <Badge variant="success" rounded>Success</Badge>
            <Badge variant="warning" rounded>Warning</Badge>
            <Badge variant="error" rounded>Error</Badge>
            <Badge variant="info" rounded>Info</Badge>
          </div>
        </div>
      </div>
    `,
    }),
}

export const StatusExamples: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Real-world status badge examples using semantic accent colors.',
            },
        },
    },
    render: () => ({
        components: { Badge },
        template: `
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="text-sm">Order Status:</span>
          <Badge variant="success">Delivered</Badge>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="text-sm">Payment Status:</span>
          <Badge variant="warning">Pending</Badge>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="text-sm">System Status:</span>
          <Badge variant="error" outline>Down</Badge>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="text-sm">Version:</span>
          <Badge variant="info" rounded>v2.1.0</Badge>
        </div>
      </div>
    `,
    }),
}
