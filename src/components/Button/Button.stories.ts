import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile button component with multiple variants, sizes, and states.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
            description: 'The visual style variant of the button',
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'The size of the button',
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the button is disabled',
        },
        rounded: {
            control: { type: 'boolean' },
            description: 'Whether the button has rounded corners',
        },
        block: {
            control: { type: 'boolean' },
            description: 'Whether the button spans the full width',
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

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
            return { args };
        },
        template: '<Button v-bind="args">Primary Button</Button>',
    }),
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args">Secondary Button</Button>',
    }),
};

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button v-bind="args">Outline Button</Button>',
    }),
};

export const AllSizes: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex flex-col space-y-4">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    `,
    }),
};

export const AllVariants: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    `,
    }),
};

export const WithIcons: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex flex-wrap gap-4">
        <Button variant="primary">
          <template #prefix>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </template>
          Add Item
        </Button>
        <Button variant="outline">
          Download
          <template #suffix>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </template>
        </Button>
      </div>
    `,
    }),
};
