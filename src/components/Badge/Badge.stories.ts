import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for displaying status indicators, labels, and counts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'The visual style variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the badge is fully rounded (pill shape)',
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Whether to use outline style instead of filled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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
      return { args };
    },
    template: '<Badge v-bind="args">Primary</Badge>',
  }),
};

export const AllVariants: Story = {
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
};

export const AllSizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center gap-3">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
};

export const Rounded: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" rounded>Primary</Badge>
        <Badge variant="success" rounded>Success</Badge>
        <Badge variant="warning" rounded>Warning</Badge>
        <Badge variant="error" rounded>Error</Badge>
      </div>
    `,
  }),
};

export const Outline: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" outline>Primary</Badge>
        <Badge variant="success" outline>Success</Badge>
        <Badge variant="warning" outline>Warning</Badge>
        <Badge variant="error" outline>Error</Badge>
      </div>
    `,
  }),
};

export const StatusIndicators: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Order Status:</span>
          <Badge variant="success" size="sm">Delivered</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Payment:</span>
          <Badge variant="warning" size="sm">Pending</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Subscription:</span>
          <Badge variant="primary" size="sm">Active</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Account:</span>
          <Badge variant="error" size="sm">Suspended</Badge>
        </div>
      </div>
    `,
  }),
};

export const Counts: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <span>Messages</span>
          <Badge variant="error" rounded size="sm">3</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Notifications</span>
          <Badge variant="primary" rounded size="sm">12</Badge>
        </div>
        <div class="flex items-center gap-2">
          <span>Updates</span>
          <Badge variant="info" rounded size="sm">99+</Badge>
        </div>
      </div>
    `,
  }),
};

export const DarkModeShowcase: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-white rounded-lg border">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Light Mode</h3>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
            <div class="flex flex-wrap gap-2">
              <Badge variant="primary" outline>Primary</Badge>
              <Badge variant="success" outline>Success</Badge>
              <Badge variant="warning" outline>Warning</Badge>
              <Badge variant="error" outline>Error</Badge>
            </div>
            <p class="text-sm text-text-secondary">
              Badges with proper contrast for light backgrounds.
            </p>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 class="text-lg font-semibold text-white mb-4">Dark Mode</h3>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
              <div class="flex flex-wrap gap-2">
                <Badge variant="primary" outline>Primary</Badge>
                <Badge variant="success" outline>Success</Badge>
                <Badge variant="warning" outline>Warning</Badge>
                <Badge variant="error" outline>Error</Badge>
              </div>
              <p class="text-sm text-text-disabled">
                Dark mode uses opacity-based backgrounds for better visual harmony.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
