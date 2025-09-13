import type { Meta, StoryObj } from '@storybook/vue3';
import IconButton from './IconButton.vue';
import {
  HeartIcon,
  StarIcon,
  ShareIcon,
  BookmarkIcon,
  PlusIcon,
  XMarkIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/vue/24/outline';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An icon-only button component that accepts either Vue components or SVG file sources. Perfect for toolbars, quick actions, and compact interfaces.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'success', 'warning', 'error', 'info'],
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
      description: 'Whether the button has fully rounded corners',
    },
    diagonal: {
      control: { type: 'boolean' },
      description: 'Whether the button has diagonal sci-fi style corners',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Accessible label for screen readers (required)',
    },
    iconSrc: {
      control: { type: 'text' },
      description: 'URL to an SVG file to use as the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    rounded: false,
    diagonal: false,
    ariaLabel: 'Heart icon',
  },
  render: (args) => ({
    components: { IconButton },
    setup() {
      return { args, HeartIcon };
    },
    template: `
      <IconButton v-bind="args" :icon="HeartIcon" />
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { IconButton },
    setup() {
      return {
        HeartIcon,
        StarIcon,
        ShareIcon,
        BookmarkIcon,
        PlusIcon,
        XMarkIcon,
        PencilIcon,
        TrashIcon
      };
    },
    template: `
      <div class="grid grid-cols-4 gap-4">
        <div class="text-center">
          <IconButton variant="primary" :icon="HeartIcon" aria-label="Like" />
          <p class="text-sm mt-2">Primary</p>
        </div>
        <div class="text-center">
          <IconButton variant="secondary" :icon="StarIcon" aria-label="Star" />
          <p class="text-sm mt-2">Secondary</p>
        </div>
        <div class="text-center">
          <IconButton variant="outline" :icon="ShareIcon" aria-label="Share" />
          <p class="text-sm mt-2">Outline</p>
        </div>
        <div class="text-center">
          <IconButton variant="ghost" :icon="BookmarkIcon" aria-label="Bookmark" />
          <p class="text-sm mt-2">Ghost</p>
        </div>
        <div class="text-center">
          <IconButton variant="success" :icon="PlusIcon" aria-label="Add" />
          <p class="text-sm mt-2">Success</p>
        </div>
        <div class="text-center">
          <IconButton variant="warning" :icon="PencilIcon" aria-label="Edit" />
          <p class="text-sm mt-2">Warning</p>
        </div>
        <div class="text-center">
          <IconButton variant="error" :icon="TrashIcon" aria-label="Delete" />
          <p class="text-sm mt-2">Error</p>
        </div>
        <div class="text-center">
          <IconButton variant="info" :icon="XMarkIcon" aria-label="Close" />
          <p class="text-sm mt-2">Info</p>
        </div>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { IconButton },
    setup() {
      return { HeartIcon };
    },
    template: `
      <div class="flex items-center gap-4">
        <div class="text-center">
          <IconButton size="xs" :icon="HeartIcon" aria-label="Extra small heart" />
          <p class="text-xs mt-2">XS</p>
        </div>
        <div class="text-center">
          <IconButton size="sm" :icon="HeartIcon" aria-label="Small heart" />
          <p class="text-xs mt-2">SM</p>
        </div>
        <div class="text-center">
          <IconButton size="md" :icon="HeartIcon" aria-label="Medium heart" />
          <p class="text-xs mt-2">MD</p>
        </div>
        <div class="text-center">
          <IconButton size="lg" :icon="HeartIcon" aria-label="Large heart" />
          <p class="text-xs mt-2">LG</p>
        </div>
        <div class="text-center">
          <IconButton size="xl" :icon="HeartIcon" aria-label="Extra large heart" />
          <p class="text-xs mt-2">XL</p>
        </div>
      </div>
    `,
  }),
};

export const Shapes: Story = {
  render: () => ({
    components: { IconButton },
    setup() {
      return { HeartIcon };
    },
    template: `
      <div class="flex items-center gap-4">
        <div class="text-center">
          <IconButton :icon="HeartIcon" aria-label="Square corners" />
          <p class="text-sm mt-2">Square</p>
        </div>
        <div class="text-center">
          <IconButton :icon="HeartIcon" rounded aria-label="Rounded corners" />
          <p class="text-sm mt-2">Rounded</p>
        </div>
        <div class="text-center">
          <IconButton :icon="HeartIcon" diagonal aria-label="Diagonal corners" />
          <p class="text-sm mt-2">Diagonal</p>
        </div>
      </div>
    `,
  }),
};

export const ToolbarExample: Story = {
  render: () => ({
    components: { IconButton },
    setup() {
      return {
        PlusIcon,
        PencilIcon,
        TrashIcon,
        ShareIcon,
        BookmarkIcon
      };
    },
    template: `
      <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
        <div class="flex items-center gap-1">
          <IconButton variant="ghost" size="sm" :icon="PlusIcon" aria-label="Add new item" />
          <IconButton variant="ghost" size="sm" :icon="PencilIcon" aria-label="Edit item" />
          <IconButton variant="ghost" size="sm" :icon="TrashIcon" aria-label="Delete item" />
          <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
          <IconButton variant="ghost" size="sm" :icon="ShareIcon" aria-label="Share item" />
          <IconButton variant="ghost" size="sm" :icon="BookmarkIcon" aria-label="Bookmark item" />
        </div>
      </div>
    `,
  }),
};

export const StateShowcase: Story = {
  render: () => ({
    components: { IconButton },
    setup() {
      return { HeartIcon };
    },
    template: `
      <div class="grid grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Light Mode</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-text-secondary mb-2">Normal</p>
              <div class="flex gap-2">
                <IconButton variant="primary" :icon="HeartIcon" aria-label="Primary like" />
                <IconButton variant="secondary" :icon="HeartIcon" aria-label="Secondary like" />
                <IconButton variant="outline" :icon="HeartIcon" aria-label="Outline like" />
              </div>
            </div>
            <div>
              <p class="text-sm text-text-secondary mb-2">Disabled</p>
              <div class="flex gap-2">
                <IconButton variant="primary" :icon="HeartIcon" disabled aria-label="Disabled primary like" />
                <IconButton variant="secondary" :icon="HeartIcon" disabled aria-label="Disabled secondary like" />
                <IconButton variant="outline" :icon="HeartIcon" disabled aria-label="Disabled outline like" />
              </div>
            </div>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-text-tertiary mb-2">Normal</p>
                <div class="flex gap-2">
                  <IconButton variant="primary" :icon="HeartIcon" aria-label="Primary like" />
                  <IconButton variant="secondary" :icon="HeartIcon" aria-label="Secondary like" />
                  <IconButton variant="outline" :icon="HeartIcon" aria-label="Outline like" />
                </div>
              </div>
              <div>
                <p class="text-sm text-text-tertiary mb-2">Disabled</p>
                <div class="flex gap-2">
                  <IconButton variant="primary" :icon="HeartIcon" disabled aria-label="Disabled primary like" />
                  <IconButton variant="secondary" :icon="HeartIcon" disabled aria-label="Disabled secondary like" />
                  <IconButton variant="outline" :icon="HeartIcon" disabled aria-label="Disabled outline like" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
