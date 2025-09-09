import type { Meta, StoryObj } from '@storybook/vue3';
import Spinner from './Spinner.vue';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A loading spinner component with multiple sizes and colors.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'The size of the spinner',
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'white', 'gray'],
            description: 'The color of the spinner',
        },
        label: {
            control: { type: 'text' },
            description: 'Optional label text',
        },
        centered: {
            control: { type: 'boolean' },
            description: 'Whether to center the spinner',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        color: 'primary',
        centered: false,
    },
};

export const WithLabel: Story = {
    args: {
        size: 'md',
        color: 'primary',
        label: 'Loading...',
        centered: false,
    },
};

export const AllSizes: Story = {
    render: () => ({
        components: { Spinner },
        template: `
      <div class="flex items-center space-x-4">
        <Spinner size="xs" label="XS" />
        <Spinner size="sm" label="SM" />
        <Spinner size="md" label="MD" />
        <Spinner size="lg" label="LG" />
        <Spinner size="xl" label="XL" />
      </div>
    `,
    }),
};

export const AllColors: Story = {
    render: () => ({
        components: { Spinner },
        template: `
      <div class="flex items-center space-x-4">
        <Spinner color="primary" label="Primary" />
        <Spinner color="secondary" label="Secondary" />
        <Spinner color="gray" label="Gray" />
      </div>
    `,
    }),
};

export const Centered: Story = {
    args: {
        size: 'lg',
        color: 'primary',
        label: 'Loading content...',
        centered: true,
    },
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => ({
        components: { Spinner },
        setup() {
            return { args };
        },
        template: `
      <div class="min-h-screen bg-gray-100 p-8">
        <Spinner v-bind="args" />
      </div>
    `,
    }),
};
