import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';
import { PlusIcon, HeartIcon, ShareIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline';

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
    diagonal: {
      control: { type: 'boolean' },
      description: 'Whether the button has diagonal sci-fi style corners',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
    },
    iconSrc: {
      control: { type: 'text' },
      description: 'URL to an SVG file to use as the icon',
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
    setup() {
      return { PlusIcon, HeartIcon, ShareIcon, ArrowRightIcon, ArrowLeftIcon };
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Icon with Text</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="primary" :icon="PlusIcon">Add Item</Button>
            <Button variant="secondary" :icon="HeartIcon">Like</Button>
            <Button variant="outline" :icon="ShareIcon">Share</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-3">Icon Position</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="primary" :icon="ArrowLeftIcon" icon-position="left">Previous</Button>
            <Button variant="primary" :icon="ArrowRightIcon" icon-position="right">Next</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-3">Different Sizes with Icons</h3>
          <div class="flex items-center gap-3">
            <Button size="sm" variant="outline" :icon="PlusIcon">Small</Button>
            <Button size="md" variant="outline" :icon="PlusIcon">Medium</Button>
            <Button size="lg" variant="outline" :icon="PlusIcon">Large</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-medium mb-3">Legacy Slot-based Icons</h3>
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
        </div>
      </div>
    `,
  }),
};

export const DarkModeShowcase: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Light Mode</h3>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
              <Button variant="danger" size="sm">Danger</Button>
            </div>
            <p class="text-sm text-gray-600">
              Buttons in light mode with proper contrast and accessibility.
            </p>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-2">
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
                <Button variant="danger" size="sm">Danger</Button>
              </div>
              <p class="text-sm text-gray-300">
                Buttons automatically adapt to dark mode with enhanced contrast.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
