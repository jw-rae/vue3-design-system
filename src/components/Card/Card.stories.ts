import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';
import Button from '../Button/Button.vue';
import Badge from '../Badge/Badge.vue';
import Input from '../Input/Input.vue';
import Checkbox from '../Checkbox/Checkbox.vue';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content in a contained layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'filled'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The padding size inside the card',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Whether the card has rounded corners',
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Whether the card has hover effects',
    },
    filledHeader: {
      control: { type: 'boolean' },
      description: 'Whether the header has a prominent filled background',
    },
    maxHeight: {
      control: { type: 'text' },
      description: 'Maximum height for card content (enables scrolling)',
    },
    scrollbarWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Width of the scrollbar when scrolling is enabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    rounded: true,
    hoverable: false,
    filledHeader: false,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" style="width: 300px;">
        <template #header>
          <h3 class="text-lg font-semibold">Card Title</h3>
        </template>
        <p class="text-text-secondary">
          This is the card content. It can contain any type of content including text, images, and other components.
        </p>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <button class="px-3 py-1 text-sm border border-border-primary rounded text-text-secondary">Cancel</button>
            <button class="px-3 py-1 text-sm bg-primary-500 text-white rounded">Save</button>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const WithoutHeaderFooter: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card style="width: 300px;">
        <p class="text-text-secondary">
          This is a simple card with just content, no header or footer.
        </p>
      </Card>
    `,
  }),
};

export const FilledHeader: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    rounded: true,
    hoverable: false,
    filledHeader: true,
  },
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args" style="width: 300px;">
        <template #header>
          <h3 class="text-lg font-semibold">Filled Header Card</h3>
        </template>
        <p class="text-text-secondary">
          This card has a prominent filled header with white text on a colored background.
        </p>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <button class="px-3 py-1 text-sm border border-border-primary rounded text-text-secondary">Cancel</button>
            <button class="px-3 py-1 text-sm bg-primary-500 text-white rounded">Save</button>
          </div>
        </template>
      </Card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { Card },
    template: `
      <div class="grid grid-cols-2 gap-4" style="width: 800px;">
        <Card variant="default">
          <template #header>Default Card</template>
          <p class="text-sm text-text-secondary">Default variant with border</p>
        </Card>
        <Card variant="outlined">
          <template #header>Outlined Card</template>
          <p class="text-sm text-text-secondary">Outlined variant with thicker border</p>
        </Card>
        <Card variant="elevated">
          <template #header>Elevated Card</template>
          <p class="text-sm text-text-secondary">Elevated variant with shadow</p>
        </Card>
        <Card variant="filled">
          <template #header>Filled Card</template>
          <p class="text-sm text-text-secondary">Filled variant with background</p>
        </Card>
        <Card variant="default" :filled-header="true">
          <template #header>Filled Header</template>
          <p class="text-sm text-text-secondary">Default variant with filled header</p>
        </Card>
        <Card variant="elevated" :filled-header="true">
          <template #header>Elevated + Filled Header</template>
          <p class="text-sm text-text-secondary">Combination of variants</p>
        </Card>
      </div>
    `,
  }),
};

export const Interactive: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <div class="space-y-4" style="width: 400px;">
        <Card hoverable>
          <template #header>
            <h3 class="text-lg font-semibold">Interactive Card</h3>
          </template>
          <p class="text-text-secondary mb-4">
            This card has hover effects. Try hovering over it!
          </p>
          <Button variant="primary" size="sm">Learn More</Button>
        </Card>
      </div>
    `,
  }),
};

export const DarkModeShowcase: Story = {
  render: () => ({
    components: { Card, Button },
    template: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Light Mode -->
        <div class="p-6 bg-surface-primary rounded-lg border border-border-primary">
          <h3 class="text-lg font-semibold text-text-primary mb-4">Light Mode</h3>
          <div class="space-y-4">
            <Card variant="default">
              <template #header>
                <h4 class="font-semibold">Product Card</h4>
              </template>
              <p class="text-text-secondary text-sm">
                Beautiful cards with proper spacing and typography for light backgrounds.
              </p>
              <template #footer>
                <Button variant="primary" size="sm">View Details</Button>
              </template>
            </Card>
            
            <Card variant="elevated">
              <template #header>
                <h4 class="font-semibold">Elevated Card</h4>
              </template>
              <p class="text-text-secondary text-sm">
                Elevated cards with shadows work great in light mode.
              </p>
            </Card>
          </div>
        </div>

        <!-- Dark Mode -->
        <div class="dark">
          <div class="p-6 bg-surface-primary rounded-lg border border-border-primary">
            <h3 class="text-lg font-semibold text-text-primary mb-4">Dark Mode</h3>
            <div class="space-y-4">
              <Card variant="default">
                <template #header>
                  <h4 class="font-semibold">Product Card</h4>
                </template>
                <p class="text-text-secondary text-sm">
                  Cards automatically adapt with dark backgrounds and proper contrast ratios.
                </p>
                <template #footer>
                  <Button variant="primary" size="sm">View Details</Button>
                </template>
              </Card>
              
              <Card variant="elevated">
                <template #header>
                  <h4 class="font-semibold">Elevated Card</h4>
                </template>
                <p class="text-text-secondary text-sm">
                  Dark mode enhances shadows and maintains visual hierarchy.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

// Scrollable Content Examples
export const ScrollableContent: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    rounded: true,
    hoverable: false,
    filledHeader: false,
    maxHeight: '300px',
    scrollbarWidth: 'md',
  },
  render: (args) => ({
    components: { Card, Button, Badge, Input, Checkbox },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 400px;">
        <Card v-bind="args">
          <template #header>
            <h3 class="font-semibold text-lg">📋 Project Tasks</h3>
          </template>
          <div class="space-y-4">
            <div>
              <h4 class="font-medium text-base mb-3 text-primary-700">Current Tasks</h4>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <Checkbox />
                  <span class="text-sm">Design system components</span>
                  <Badge variant="success" size="sm">High</Badge>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox />
                  <span class="text-sm">Update documentation</span>
                  <Badge variant="warning" size="sm">Medium</Badge>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox />
                  <span class="text-sm">Code review feedback</span>
                  <Badge variant="info" size="sm">Low</Badge>
                </div>
                <div class="flex items-center gap-2">
                  <Checkbox />
                  <span class="text-sm">Testing implementation</span>
                  <Badge variant="error" size="sm">Urgent</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-medium text-base mb-3 text-primary-700">Quick Actions</h4>
              <div class="grid grid-cols-2 gap-2">
                <Button variant="ghost" size="sm">Add Task</Button>
                <Button variant="ghost" size="sm">Archive</Button>
                <Button variant="ghost" size="sm">Share</Button>
                <Button variant="ghost" size="sm">Export</Button>
              </div>
            </div>
            <div>
              <h4 class="font-medium text-base mb-3 text-primary-700">Notes</h4>
              <Input placeholder="Add a note..." />
              <div class="mt-2 text-sm text-text-tertiary">
                This card demonstrates scrollable content when maxHeight is exceeded.
              </div>
            </div>
            <div class="space-y-2">
              <div class="text-xs text-text-tertiary">Additional items...</div>
              <div class="space-y-1">
                <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-sm">Feature request #1</div>
                <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-sm">Bug report #2</div>
                <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-sm">Enhancement #3</div>
                <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-sm">Documentation update #4</div>
              </div>
            </div>
          </div>
          <template #footer>
            <div class="flex gap-2">
              <Button variant="primary" size="sm">Save Progress</Button>
              <Button variant="outline" size="sm">Cancel</Button>
            </div>
          </template>
        </Card>
      </div>
    `,
  }),
};

export const ScrollableFilledVariant: Story = {
  args: {
    variant: 'filled',
    padding: 'lg',
    rounded: true,
    hoverable: false,
    filledHeader: true,
    maxHeight: '350px',
    scrollbarWidth: 'lg',
  },
  render: (args) => ({
    components: { Card, Button, Badge, Input, Checkbox },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 450px;">
        <Card v-bind="args">
          <template #header>
            <h3 class="font-semibold text-lg">📊 Analytics Dashboard</h3>
          </template>
          <div class="space-y-6">
            <div class="text-center">
              <h4 class="font-medium text-base mb-4 text-primary-700">Key Metrics</h4>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-surface-primary dark:bg-surface-elevated p-3 rounded border border-border-primary">
                  <div class="text-2xl font-bold text-primary-600">142</div>
                  <div class="text-sm text-text-tertiary">Active Users</div>
                </div>
                <div class="bg-surface-primary dark:bg-surface-elevated p-3 rounded border border-border-primary">
                  <div class="text-2xl font-bold text-success-600">98.5%</div>
                  <div class="text-sm text-text-tertiary">Uptime</div>
                </div>
                <div class="bg-surface-primary dark:bg-surface-elevated p-3 rounded border border-border-primary">
                  <div class="text-2xl font-bold text-warning-600">23</div>
                  <div class="text-sm text-text-tertiary">Issues</div>
                </div>
                <div class="bg-surface-primary dark:bg-surface-elevated p-3 rounded border border-border-primary">
                  <div class="text-2xl font-bold text-error-600">5</div>
                  <div class="text-sm text-text-tertiary">Critical</div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h4 class="font-medium text-base mb-4 text-primary-700">Recent Activity</h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-2 bg-surface-secondary dark:bg-surface-elevated rounded">
                  <span class="text-sm">User login</span>
                  <Badge variant="success" size="sm">2m ago</Badge>
                </div>
                <div class="flex items-center justify-between p-2 bg-surface-secondary dark:bg-surface-elevated rounded">
                  <span class="text-sm">System backup</span>
                  <Badge variant="info" size="sm">1h ago</Badge>
                </div>
                <div class="flex items-center justify-between p-2 bg-surface-secondary dark:bg-surface-elevated rounded">
                  <span class="text-sm">Security scan</span>
                  <Badge variant="warning" size="sm">3h ago</Badge>
                </div>
                <div class="flex items-center justify-between p-2 bg-surface-secondary dark:bg-surface-elevated rounded">
                  <span class="text-sm">Database update</span>
                  <Badge variant="primary" size="sm">6h ago</Badge>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h4 class="font-medium text-base mb-4 text-primary-700">Quick Actions</h4>
              <div class="grid grid-cols-2 gap-2">
                <Button variant="ghost" size="sm">Refresh</Button>
                <Button variant="ghost" size="sm">Export</Button>
                <Button variant="ghost" size="sm">Settings</Button>
                <Button variant="ghost" size="sm">Help</Button>
              </div>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-between">
              <Button variant="secondary" size="sm">View Details</Button>
              <Button variant="primary" size="sm">Generate Report</Button>
            </div>
          </template>
        </Card>
      </div>
    `,
  }),
};

export const ScrollableCompact: Story = {
  args: {
    variant: 'outlined',
    padding: 'sm',
    rounded: true,
    hoverable: true,
    maxHeight: '200px',
    scrollbarWidth: 'sm',
  },
  render: (args) => ({
    components: { Card, Button, Badge, Input, Checkbox },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 320px;">
        <Card v-bind="args">
          <template #header>
            <h3 class="font-medium">Quick Settings</h3>
          </template>
          <div class="space-y-3">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-sm">Notifications</span>
                <Checkbox />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">Auto-save</span>
                <Checkbox />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">Dark mode</span>
                <Checkbox />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">Analytics</span>
                <Checkbox />
              </div>
            </div>
            <div class="border-t pt-3">
              <Input placeholder="Search settings..." />
            </div>
            <div class="grid grid-cols-3 gap-1">
              <Button variant="ghost" size="xs">Reset</Button>
              <Button variant="ghost" size="xs">Import</Button>
              <Button variant="ghost" size="xs">Export</Button>
            </div>
            <div class="text-center text-xs text-text-tertiary">
              Scroll to see more options
            </div>
            <div class="space-y-2">
              <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-xs">
                Language: English
              </div>
              <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-xs">
                Timezone: UTC-5
              </div>
              <div class="bg-surface-secondary dark:bg-surface-elevated p-2 rounded text-xs">
                Theme: Auto
              </div>
            </div>
          </div>
        </Card>
      </div>
    `,
  }),
};
